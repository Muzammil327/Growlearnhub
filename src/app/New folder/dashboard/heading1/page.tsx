"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/dashboard/form.module.css";
import { Heading1TypesGet } from "@/src/types/page";
import axios from "axios";
import { DeleteHeading1, GetHeading1 } from "../../constant";
import TableLayout from "@/src/app/dashboard/components/TableLayout";

export default function Page() {
  const [heading1Data, setHeading1Data] = useState<Heading1TypesGet[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchHeading1Data = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(GetHeading1);
      setHeading1Data(response.data);
    } catch (error) {
      console.log("error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const DeleteHandle = async (id: string) => {
    try {
      await axios.delete(`${DeleteHeading1}/${id}`);
      await fetchHeading1Data();
    } catch (error) {
      console.log("Error during Heading 1 Deleting!", error);
    }
  };

  useEffect(() => {
    fetchHeading1Data();
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
        title="Add Heading 1"
        titleLink={`/dashboard/heading1/add`}
        c1="Title"
        c2="Book Name"
        ca="Action"
        data={heading1Data}
        DeleteHandle={DeleteHandle}
        updateLink={`/dashboard/heading1`}
      />
    </>
  );
}
