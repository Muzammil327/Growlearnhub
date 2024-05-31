"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/dashboard/form.module.css";
import { McqsTypes, PaginationTypes } from "@/src/types/page";
import axios from "axios";
import { DeleteMcqs, GetMcqs } from "../../constant";

export default function Page() {
  const [fetchUser, setFetchUser] = useState<McqsTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [pagination, setPagination] = useState<PaginationTypes>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
  });

  // Function to fetch data from the server
  const fetchData = async (page: number, limit: number) => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(
        `${GetMcqs}?page=${page}&limit=${limit}`
      );
      setPagination(response.data.pagination);
      setFetchUser(response.data.data);
    } catch (error) {
      console.log("error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const DeleteHandle = async (id: string) => {
    try {
      await axios.delete(`${DeleteMcqs}/${id}`);

      fetchData(1, 10);
    } catch (error) {
      console.log("Error during Category Update", error);
    }
  };

  useEffect(() => {
    fetchData(1, 10);
  }, []);
  const handlePaginationClick = (page: number) => fetchData(page, 10);

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
      <div className={`${styles.form}`}>
        <Link
          href={`/dashboard/addmcqs/add`}
          className={`${styles.formaboveBTN}`}
        >
          Add Mcqs
        </Link>
        <table className={`${styles.table}`}>
          <thead className={`${styles.thead}`}>
            <tr>
              <th scope="col" className={`${styles.th}`}>
                Title
              </th>
              <th scope="col" className={`${styles.th}`}>
                Book Name
              </th>
              <th scope="col" className={`${styles.th}`}>
                Heading 1
              </th>
              <th scope="col" className={`${styles.th}`}>
                Heading 2
              </th>
              <th scope="col" className={`${styles.th}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`${styles.tbody}`}>
            {fetchUser.map((data: any) => (
              <tr key={data._id}>
                <td scope="row" className={`${styles.td}`}>
                  <Link href={`/mcqs/${data.slug}`}>{data.title}</Link>
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.book.title}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.heading1.title}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.heading2.title}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  <button
                    type="button"
                    className={`${styles.actionBTN}`}
                    onClick={() => DeleteHandle(data._id)}
                  >
                    Delete
                  </button>
                  <Link
                    href={`/dashboard/addmcqs/${data._id}`}
                    className={`${styles.actionBTN}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      <div className="flex gap-1">
        {pagination.totalPages > 0 &&
          Array.from({ length: pagination.totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index + 1)}
              className={`h-8 w-8 rounded-md text-white flex items-center justify-center ${
                pagination.currentPage === index + 1
                  ? "bg-blue-400"
                  : "bg-red-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </>
  );
}
