"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/dashboard/form.module.css";
import { Heading2TypesGet } from "@/src/types/page";
import axios from "axios";
import { DeleteHeading2, GetHeading2 } from "../../constant";
import TableLayout from "@/src/app/dashboard/components/TableLayout";

export default function Page() {
  const [heading2Data, setHeading2Data] = useState<Heading2TypesGet[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchHeading1Data = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(GetHeading2);
      setHeading2Data(response.data);
    } catch (error) {
      console.log("error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const DeleteHandle = async (id: string) => {
    try {
      await axios.delete(`${DeleteHeading2}/${id}`);
      await fetchHeading1Data();
    } catch (error) {
      console.log("Error during Heading 2 Deleting!", error);
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
        title="Add Heading 2"
        titleLink={`/dashboard/heading2/add`}
        c1="Title"
        c2="Book Name"
        c3="Heading 1"
        ca="Action"
        data={heading2Data}
        DeleteHandle={DeleteHandle}
        updateLink={`/dashboard/heading2`}
      />
    </>
  );
}
