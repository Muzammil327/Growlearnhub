"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import styles from "@/src/app/dashboard/form.module.css";
import {
  BookTypesGet,
  Heading1TypesGet,
  Heading2TypesPost,
} from "@/src/types/page";
import Dropdown from "../../components/Input/dropdown";
import axios from "axios";
import { GetBook, GetHeading1, PostHeading2 } from "@/src/app/constant";

export default function Page() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [heading2Data, setHeading2Data] = useState<Heading2TypesPost>({
    title: "",
    bookId: "",
    heading1Id: "",
  });

  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    try {
      setLoading(false);
      const response = await axios.post(PostHeading2, heading2Data);
      setLoading(false);

      if (response.data.status === "400" || response.data.status === "500") {
        setError(response.data.message);
        setLoading(false);
      } else {
        setLoading(true);
        setError(response.data.message);
        setHeading2Data({
          title: "",
          bookId: "",
          heading1Id: "",
        });
        navigate.push("/dashboard/heading2");
        setLoading(false);
      }
    } catch (error) {
      setError("Error during Heading 2 Posting!");
    }
  };

  const fetchUser1Filter = heading2Data.bookId;

  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);
  const [heading1Data, setHeading1Data] = useState<Heading1TypesGet[]>([]);
  // Function to fetch data from the server
  const fetchHeading1Data = async () => {
    try {
      const response = await axios.get(GetHeading1);
      setHeading1Data(response.data);
    } catch (error) {
      console.log("Error during Heading 1 Getting!", error);
    }
  };
  const Heading1Filter = heading1Data.filter((data: any) => {
    return data.book._id === fetchUser1Filter;
  });
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
    fetchHeading1Data();
  }, []);

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Heading 2 Add Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={heading2Data.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setHeading2Data({ ...heading2Data, title: e.target.value })
            }
          />

          {/*  Book Name */}
          <Dropdown
            bookId={heading2Data.bookId}
            label="Book Name"
            setBookId={(e: any) =>
              setHeading2Data({ ...heading2Data, bookId: e.target.value })
            }
            booksData={booksData}
          />

          {/*  Heading 1 */}
          <Dropdown
            bookId={heading2Data.heading1Id}
            label="Heading 1"
            setBookId={(e: any) =>
              setHeading2Data({ ...heading2Data, heading1Id: e.target.value })
            }
            booksData={Heading1Filter}
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
