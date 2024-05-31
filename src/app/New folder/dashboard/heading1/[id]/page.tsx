"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import { getBookAll } from "@/src/api/book/page";
import { getSingleHeading1, updateHeading1 } from "@/src/api/heading1/page";
import { BookTypesGet, Heading1TypesPost } from "@/src/types/page";

const KeywordUpdated = () => {
  const router = useRouter();
  const { id } = useParams();

  const [fetchHeading1, setFetchHeading1] = useState<Heading1TypesPost>({
    title: "",
    bookId: "",
  });

  const [loadingData, setLoadingData] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [fError, setFError] = useState(false);
  const [UError, setUError] = useState(false);

  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);

  const fetchBookData = async () => {
    try {
      const data = await getBookAll();
      setBooksData(data);
    } catch (error) {
      console.log("Error during Book Getting!", error);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFError(false);
        setLoadingData(true);
        const data = await getSingleHeading1(id.toString());
        setFetchHeading1(data);
        setLoadingData(false);
      } catch (error) {
        console.log("error:", error);
        setFError(true);
        setLoadingData(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoadingBtn(false);
      const data = await updateHeading1(fetchHeading1, id.toString());
      setLoadingBtn(false);

      if (data.status === "400" || data.status === "500") {
        setUError(data.message);
        setLoadingBtn(false);
      } else {
        setLoadingBtn(true);

        setUError(data.message);
        setFetchHeading1({
          title: "",
          bookId: "",
        });
        router.push("/dashboard/heading1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (fError) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    );
  }
  if (loadingData) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Heading 1 Update Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {UError && <span className="text-indigo-500">{UError}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={fetchHeading1.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setFetchHeading1({ ...fetchHeading1, title: e.target.value })
            }
          />

          {/*  Option Correct */}
          <div className="">
            <label htmlFor=" Book Name" className={`${styles.label}`}>
              Book Name
            </label>
            <div className="mt-2.5">
              <select
                id="Book Name"
                name="Book Name"
                className={`${styles.select}`}
                value={fetchHeading1.bookId}
                onChange={(e) =>
                  setFetchHeading1({ ...fetchHeading1, bookId: e.target.value })
                }
              >
                <option value="">Select Book Name</option>
                {booksData.map((data: BookTypesGet) => (
                  <option key={data._id} value={data._id}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loadingBtn ? "Loading ..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default KeywordUpdated;
