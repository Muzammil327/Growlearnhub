import path from "path";
import fs from "fs";

const readJsonFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), "src", "data", "mcqs", fileName); // Adjust the path to your file location
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
};

// Dynamically load data based on slug (you can optimize to load only data1.json or data2.json based on some logic)
const data1 = readJsonFile("data1.json");
const data2 = readJsonFile("data2.json");
const data3 = readJsonFile("data3.json");

// Combine data only when needed
export const combinedData = [...data1, ...data2, ...data3];
