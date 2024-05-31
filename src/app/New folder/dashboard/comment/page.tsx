"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/dashboard/form.module.css";
import { DeleteCommentForm, GetCommentForm } from "../../constant";
import axios from "axios";
import { CommentFormGet } from "@/src/types/page";

export default function Page() {
  const [fetchUser, setFetchUser] = useState([]);
  const [commentForm, setCommentForm] = useState<CommentFormGet[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(GetCommentForm);
      setCommentForm(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setError(true);
      setLoading(false);
    }
  };

  const DeleteHandle = async (id: any) => {
    try {
      await axios.delete(`${DeleteCommentForm}/${id}`);
      await fetchData();
    } catch (error) {
      console.log("Error during Book deleting", error);
    }
  };

  useEffect(() => {
    fetchData();
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
      <div className={`${styles.form}`}>
        <table className={`${styles.table}`}>
          <thead className={`${styles.thead}`}>
            {" "}
            <tr>
              <th scope="col" className={`${styles.th}`}>
                First Name
              </th>
              <th scope="col" className={`${styles.th}`}>
                Last Name
              </th>
              <th scope="col" className={`${styles.th}`}>
                Email
              </th>
              <th scope="col" className={`${styles.th}`}>
                URL
              </th>
              <th scope="col" className={`${styles.th}`}>
                Description
              </th>
              <th scope="col" className={`${styles.th}`}>
                Created Time
              </th>
              <th scope="col" className={`${styles.th}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`${styles.tbody}`}>
            {commentForm.map((data: CommentFormGet) => (
              <tr key={data._id}>
                <td scope="row" className={`${styles.td}`}>
                  {data.fname}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.lname}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.email}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.url}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.message}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  {data.createdAt}
                </td>
                <td scope="row" className={`${styles.td}`}>
                  <button
                    type="button"
                    className={`${styles.actionBTN}`}
                    onClick={() => DeleteHandle(data._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
