"use client";
// import { getCommentFormAll } from "@/src/api/comment/page";
// import { getNewsletterAll } from "@/src/api/newsletter/page";
// import React, { useEffect, useState } from "react";

// export default function Page() {
//   const [newsletter, setNewsletter] = useState([]);
//   const [comment, setComment] = useState([]);

//   const fetchNewsletter = async () => {
//     const data = await getNewsletterAll();
//     setNewsletter(data);
//   };
//   const fetchComment = async () => {
//     const data = await getCommentFormAll();
//     setComment(data);
//   };

//   useEffect(() => {
//     fetchNewsletter();
//     fetchComment();
//   }, []);

//   return (
//     <div className="mt-16 mx-10 bg-gray-50/50">
//       <div className="p-4">
//         <div className="mt-12">
//           <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
//             <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//               <div className="p-4">
//                 <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                   Newsletter
//                 </p>
//                 <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                   {newsletter.length}
//                 </h4>
//               </div>
//             </div>

//             <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//               <div className="p-4">
//                 <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                   Comment
//                 </p>
//                 <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                   {comment.length}
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function Home() {
  const [content, setContent] = useState("");
console.log(content)
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };
 

  return (
    <main>
           {" "}
      <div className="h-screen w-screen flex items-center flex-col">
               {" "}
        <div className="m-10  flex flex-col items-center">
                   
          <span className="text-2xl text-center">
                              Quill Rich Text Editor        {" "}
          </span>
                  <div className="text-center">Author : Soubhagyajit Borah</div>
                 {" "}
          <div className="text-center">
            visit{" "}
            <a
              href="https://www.sjbtechcenter.online/"
              target="_blank"
              className="text-blue-500"
            >
              www.sjbtechcenter.online
            </a>{" "}
            for more information
          </div>
                 {" "}
        </div>
               {" "}
        <form className="h-full w-[90vw]">
                   {" "}
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-10 bg-white"
          />
                 {" "}
        </form>
             {" "}
      </div>
         {" "}
    </main>
  );
}
