import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import bcryptjs from "bcryptjs";
import pool from "@/src/lib/pg";
import { sendActivationEmail } from "@/src/lib/email";

// Generate OTP (6-digit numeric OTP)
function generateOtpToken(length: number = 6): string {
  return crypto.randomInt(100000, 999999).toString(); // Ensures it's a 6-digit OTP
}

// Function to insert OTP token into the database
async function insertOtpToken(userId: number, otpToken: string) {
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
  const query = `
    INSERT INTO otp_tokens (user_id, otp_token, expires_at)
    VALUES ($1, $2, $3) RETURNING id, otp_token, expires_at
  `;
  const result = await pool.query(query, [userId, otpToken, expiresAt]);
  return result.rows[0];
}

async function checkIfUserExists(email: string, username: string) {
  const query = `
    SELECT id, email, username FROM users WHERE email = $1 OR username = $2
  `;
  const result = await pool.query(query, [email, username]);
  return result.rows[0]; // Returns the user if exists
}

async function insertUser(username: string, email: string, password: string) {
  const query = `
    INSERT INTO users (username, email, password, role, created_at)
    VALUES ($1, $2, $3, 'user', NOW()) RETURNING id, username, email, created_at
  `;
  const result = await pool.query(query, [username, email, password]);
  return result.rows[0];
}

export async function POST(req: NextRequest) {
  try {
    const { email, password, username } = await req.json();
    console.log("Request received:", { email, username });

    if (!username || !email || !password) {
      return NextResponse.json({
        statusbar: 400,
        error: "Username, email, and password are required.",
      });
    }
console.log("1")
// Check if the email or username already exists
const existingUserPromise = checkIfUserExists(email, username);

const salt = await bcryptjs.genSalt(10);

    const hashedPasswordPromise = await bcryptjs.hash(password, salt);

    const [existingUser, hashedPassword] = await Promise.all([
      existingUserPromise,
      hashedPasswordPromise,
    ]);
    
    console.log("2")
    // If user exists, generate and send OTP
    if (existingUser) {
      const otpToken = generateOtpToken();
      const otpPromise = insertOtpToken(existingUser.id, otpToken);
      const emailPromise = sendActivationEmail(
        existingUser.email,
        otpToken,
        existingUser.username,
      );
      console.log("3")
      
      await Promise.all([otpPromise, emailPromise]);
      return NextResponse.json({
        statusbar: 200,
        message: "User already exists. OTP has been sent to your email.",
        data: existingUser,
      });
    }
    console.log("4")
    
    // Insert the new user into the database
    const newUser = await insertUser(username, email, hashedPassword);
    
    // Generate and send OTP
    const otpToken = generateOtpToken();
    console.log("4")
    const otpPromise = insertOtpToken(newUser.id, otpToken);
    const emailPromise = sendActivationEmail(email, otpToken, username);
    console.log("5")
    
    await Promise.all([otpPromise, emailPromise]);
    console.log("6")

    return NextResponse.json({
      statusbar: 200,
      message:
        "User registered successfully. Please check your email for the OTP.",
      data: newUser,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({
      statusbar: 400,
      error: "Error registering user.",
    });
  }
}
