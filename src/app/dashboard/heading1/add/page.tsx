"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import { BookTypesGet, Heading1TypesPost } from "@/src/types/page";
import { GetBook, PostHeading1 } from "@/src/app/constant";
import axios from "axios";
import Dropdown from "../../components/Input/dropdown";

export default function Page() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [heading1Data, setHeading1Data] = useState<Heading1TypesPost>({
    title: "",
    bookId: "",
  });

  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(false);
      const response = await axios.post(PostHeading1, heading1Data);

      if (response.data.status === "400" || response.data.status === "500") {
        setError(response.data.message);
        setLoading(false);
      } else {
        setLoading(true);
        setError(response.data.message);
        setHeading1Data({
          title: "",
          bookId: "",
        });
        navigate.push("/dashboard/heading1");
        setLoading(false);
      }
    } catch (error) {
      setError("Error during Heading 1 Posting!");
    }
  };

  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);

  const fetchBookData = async () => {
    try {
      const response = await axios.get(GetBook);
      setBooksData(response.data);
    } catch (error) {
      console.log("Error during Book Getting!", error);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Heading 1 Add Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={heading1Data.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setHeading1Data({ ...heading1Data, title: e.target.value })
            }
          />
          <Dropdown
            bookId={heading1Data.bookId}
            label="Book Name"
            setBookId={(e: any) =>
              setHeading1Data({ ...heading1Data, bookId: e.target.value })
            }
            booksData={booksData}
          />
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
