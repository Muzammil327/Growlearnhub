import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/pg";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const classId = searchParams.get("classId");
  try {
    const result = await pool.query(
      "SELECT id, name FROM books where class_id = $1",
      [classId],
    );
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
