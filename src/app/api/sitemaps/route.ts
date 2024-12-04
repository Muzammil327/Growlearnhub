import { NextResponse } from "next/server";
import pool from "@/src/lib/pg";
import path from 'path';
import fs from 'fs';

const readJsonFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'mcqs', fileName); // Adjust the path to your file location
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

export async function GET() {
  try {
    const result = await pool.query("SELECT slug FROM questions");

    // Dynamically load data based on slug (you can optimize to load only data1.json or data2.json based on some logic)
    const data1 = readJsonFile('data1.json');
    const data2 = readJsonFile('data2.json');
    const data3 = readJsonFile('data3.json');

    // Combine data only when needed
    const combinedData = [...data1, ...data2, ...data3];

    const slug1 = combinedData.map(item => item.slug);
    // const slug2 = result.rows.map(item => item.slug);

    const combinedAllSlug = [
      ...slug1,
      // ...slug2
    ]

    const uniqueSlugs = [...new Set(combinedAllSlug)];

    const duplicateSlugs = combinedAllSlug.filter((slug) => {
      return combinedAllSlug.indexOf(slug) !== combinedAllSlug.lastIndexOf(slug);
    });
    
    const uniqueSlugsOnly = combinedAllSlug.filter((slug) => {
      return combinedAllSlug.indexOf(slug) === combinedAllSlug.lastIndexOf(slug);
    });

    return NextResponse.json(uniqueSlugsOnly, { status: 200 });
    // return NextResponse.json(duplicateSlugs, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
