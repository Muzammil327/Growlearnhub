import { NextResponse } from "next/server";
import pool from "@/src/lib/pg";

export async function GET() {
  try {
    const result = await pool.query("SELECT id, name FROM classes");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
