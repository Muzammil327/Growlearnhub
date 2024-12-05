import path from "path";
import fs from "fs";

const readJsonFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), "src", "data", "mcqs", fileName);
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return [];
  }
};

const filesToLoad = [
  "data1.json", 
  "data2.json", 
  "data3.json", 
  "data4.json",
  "data5.json"
  // "data6.json", 
  // "data7.json", 
  // "data8.json"
];

const combinedData = filesToLoad.flatMap(readJsonFile);

export { combinedData };