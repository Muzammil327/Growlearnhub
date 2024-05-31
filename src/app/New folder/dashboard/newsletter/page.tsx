"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/dashboard/form.module.css";
import { DeleteNewsletter, GetNewsletter } from "../../constant";
import axios from "axios";
import { NewsletterGet } from "@/src/types/page";

export default function Page() {
  const [newsletter, setNewsletter] = useState<NewsletterGet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(GetNewsletter);
      setNewsletter(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Newsletter data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const DeleteHandle = async (id: any) => {
    try {
      await axios.delete(`${DeleteNewsletter}/${id}`);
      await fetchData();
    } catch (error) {
      console.log("Error during newsletter deleting", error);
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
            <tr>
              <th scope="col" className={`${styles.th}`}>
                Email
              </th>
              <th scope="col" className={`${styles.th}`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`${styles.tbody}`}>
            {newsletter.map((data: NewsletterGet) => (
              <tr key={data._id}>
                <td scope="row" className={`${styles.td}`}>
                  {data.email}
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
