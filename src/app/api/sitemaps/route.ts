import { NextResponse } from "next/server";
import pool from "@/src/lib/pg";

import { combinedData } from "@/src/lib/readJsonFile";

export async function GET() {
  try {
    const result = await pool.query("SELECT slug FROM questions");

    const slug1 = combinedData.map((item) => item.slug);
    // const slug2 = result.rows.map(item => item.slug);

    const combinedAllSlug = [
      ...slug1,
      // ...slug2
    ];

    const uniqueSlugs = [...new Set(combinedAllSlug)];

    const duplicateSlugs = combinedAllSlug.filter((slug) => {
      return (
        combinedAllSlug.indexOf(slug) !== combinedAllSlug.lastIndexOf(slug)
      );
    });

    const uniqueSlugsOnly = combinedAllSlug.filter((slug) => {
      return (
        combinedAllSlug.indexOf(slug) === combinedAllSlug.lastIndexOf(slug)
      );
    });

    return NextResponse.json(uniqueSlugsOnly, { status: 200 });
    // return NextResponse.json(duplicateSlugs, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
