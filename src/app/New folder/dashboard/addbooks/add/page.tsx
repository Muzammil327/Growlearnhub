"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import { BookTypesPost } from "@/src/types/page";
import { PostBook } from "@/src/app/constant";
import axios from "axios";

export default function Page() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [booksData, setBooksData] = useState<BookTypesPost>({
    title: "",
  });
  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(false);
      const response = await axios.post(PostBook, booksData);

      if (response.data.status === "400" || response.data.status === "500") {
        setError(response.data.message);
        setLoading(false);
      } else {
        setLoading(true);
        setError(response.data.message);
        setBooksData({
          title: "",
        });

        navigate.push("/dashboard/addbooks");
        setLoading(false);
      }
    } catch (error) {
      setError("Error during Book Posting!");
    }
  };

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Books Add Here</h2>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <div className="sm:col-span-2">
            <SimpleInput
              label="Title"
              type="text"
              htmlFor="title"
              value={booksData.title}
              placeholder="Enter Title"
              onChange={(e) =>
                setBooksData({ ...booksData, title: e.target.value })
              }
            />{" "}
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loading ? "Loading ..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
