import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostCard {
  id: string;
  date: string;
  title: string;
  slug: String;
  image: string;
}

const PostMetadata = (): PostCard[] => {
  const baseFolder = "src/app/definitions";

  // Recursive function to get all Markdown files in a directory and its subdirectories
  const getAllMarkdownFiles = (dir: string): string[] => {
    const files = fs.readdirSync(dir);
    const markdownFiles = files.flatMap((file) => {
      const filePath = path.join(dir, file);
      return fs.statSync(filePath).isDirectory()
        ? getAllMarkdownFiles(filePath) // Recursively get files in subdirectories
        : filePath.endsWith(".md")
        ? [filePath]
        : [];
    });
    return markdownFiles;
  };

  // Get all Markdown files within the base folder and its subdirectories
  const allMarkdownPosts = getAllMarkdownFiles(baseFolder);

  // Get gray-matter data from each file.
  const posts = allMarkdownPosts.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id: matterResult.data.id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      para: matterResult.data.para,
      slug: path.basename(filePath, ".md"),
      image: matterResult.data.image,
      keyword: matterResult.data.keyword,
    };
  });

  return posts;
};

export default PostMetadata;
