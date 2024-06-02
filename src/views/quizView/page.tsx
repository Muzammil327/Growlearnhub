"use client";
import React, { useState, useEffect } from "react";
import { convertToLowercaseWithHyphen } from "@/src/views/function/convertToLowercaseWithHyphen";
import Loading from "@/src/components/element/Loading";
import { BookTypesGet } from "@/src/types/page";
import axios from "axios";
import { GetBook } from "@/src/util/constant";
import Card3 from "@/src/components/card2/card3";

export default function QuizView() {
  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();
  }, []);
  if (error) {
    return <h1>Error ...</h1>;
  }
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
        {loading ? (
          <>
            <Loading />
            <Loading />
            <Loading />
          </>
        ) : (
          <>
            {booksData.map((data: BookTypesGet) => (
              <Card3
                key={data._id}
                title={data.title}
                link={`${
                  process.env.NEXT_PUBLIC_FRONTEND_URL
                }/quiz/subject-wise/${convertToLowercaseWithHyphen(data.title)}`}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
