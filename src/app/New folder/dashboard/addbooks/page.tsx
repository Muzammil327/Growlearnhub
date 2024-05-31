"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/dashboard/form.module.css";
import { BookTypesGet } from "@/src/types/page";
import axios from "axios";
import { DeleteBook, GetBook } from "@/src/app/constant";
import TableLayout from "@/src/app/dashboard/components/TableLayout";

export default function Page() {
  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBookData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(GetBook);
      setBooksData(response.data);
    } catch (error) {
      console.error("Error fetching book data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const DeleteHandle = async (id: string) => {
    try {
      await axios.delete(`${DeleteBook}/${id}`);
      await fetchBookData();
    } catch (error) {
      console.log("Error during Book deleting", error);
    }
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  if (error) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <>
      <TableLayout
        title="Add Books"
        titleLink={`/dashboard/addbooks/add`}
        c1="Title"
        ca="Action"
        data={booksData}
        DeleteHandle={DeleteHandle}
        updateLink={`/dashboard/addbooks`}
      />
    </>
  );
}
