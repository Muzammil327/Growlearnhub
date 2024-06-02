"use client";
import { getCommentFormAll } from "@/src/api/comment/page";
import { getNewsletterAll } from "@/src/api/newsletter/page";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [newsletter, setNewsletter] = useState([]);
  const [comment, setComment] = useState([]);

  const fetchNewsletter = async () => {
    const data = await getNewsletterAll();
    setNewsletter(data);
  };
  const fetchComment = async () => {
    const data = await getCommentFormAll();
    setComment(data);
  };

  useEffect(() => {
    fetchNewsletter();
    fetchComment();
  }, []);

  return (
    <div className="mt-16 mx-10 bg-gray-50/50">
      <div className="p-4">
        <div className="mt-12">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="p-4">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Newsletter
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {newsletter.length}
                </h4>
              </div>
            </div>

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="p-4">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Comment
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {comment.length}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
