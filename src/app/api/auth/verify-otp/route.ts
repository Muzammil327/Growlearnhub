import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/pg";

export async function POST(req: NextRequest) {
  try {
    const { otp } = await req.json(); // Expecting email to be part of the request body

    if (!otp) {
      return NextResponse.json({
        statusbar: 400,
        error: "OTP is required.",
      });
    }

    // Step 1: Check if OTP exists in the database and is valid
    const query = `
      SELECT * FROM otp_tokens
      WHERE otp_token = $1 AND used = false AND expires_at > NOW()
      LIMIT 1
    `;

    const result = await pool.query(query, [otp]);

    if (result.rows.length === 0) {
      return NextResponse.json({
        statusbar: 400,
        error: "Invalid or expired OTP.",
      });
    }

    // Step 2: Mark the OTP as used
    const otpToken = result.rows[0];
    await pool.query(
      `
        UPDATE otp_tokens SET used = true WHERE id = $1
      `,
      [otpToken.id],
    );

    // Step 3: Update the user's email_verified to true using the user_id from otpToken
    // Assuming otp_tokens table has a reference to the user_id
    const updateUserQuery = `
      UPDATE users
      SET email_verified = true
      WHERE id = $1
    `;
    await pool.query(updateUserQuery, [otpToken.user_id]); // Use user_id from otpToken

    return NextResponse.json({
      statusbar: 200,
      message: "OTP verified successfully. Account is now activated.",
    });
  } catch (error) {
    console.error("Error during OTP verification:", error);
    return NextResponse.json({
      statusbar: 500,
      error: "Error verifying OTP.",
    });
  }
}
