"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import { getSingleBook, updateBook } from "@/src/api/book/page";
import { BookTypesPost } from "@/src/types/page";
import axios from "axios";
import { GetSingleBook, UpdateBook } from "@/src/app/constant";

const KeywordUpdated = () => {
  const router = useRouter();
  const { id } = useParams();
  const [booksData, setBooksData] = useState<BookTypesPost>({
    title: "",
  });

  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(`${GetSingleBook}/${id}`);
        setBooksData(response.data);
      } catch (error) {
        console.log("error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const [loadingU, setLoadingU] = useState(false);
  const [ErrorU, setErrorU] = useState(false || "");

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoadingU(false);
      const response = await axios.put(`${UpdateBook}/${id}`);

      if (response.data.status === "400" || response.data.status === "500") {
        setErrorU(response.data.message);
        setLoadingU(false);
      } else {
        setLoadingU(true);

        setErrorU(response.data.message);
        setBooksData({
          title: "",
        });
        router.push("/dashboard/addbooks");
      }
    } catch (error) {
      setErrorU("Error during Book Updating!");
    }
  };

  if (ErrorU) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    );
  }
  if (loadingU) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    );
  }
  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Books Update Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {Error && <span className="text-indigo-500">{Error}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={booksData.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setBooksData({ ...booksData, title: e.target.value })
            }
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
};

export default KeywordUpdated;
