"use client";
import React, { useState, useEffect } from "react";
import Card2 from "@/src/components/card2/page";
import { convertToLowercaseWithHyphen } from "@/src/views/function/convertToLowercaseWithHyphen";
import Loading from "@/src/components/element/Loading";
import Form from "@/src/components/element/form/page";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import { BookTypesGet } from "@/src/types/page";
import axios from "axios";
import { GetBook } from "@/src/app/constant";

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
      <SubHeader title="Quiz Book" />

      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
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
                      <Card2
                        key={data._id}
                        title={data.title}
                        link={`${
                          process.env.NEXT_PUBLIC_FRONTEND_URL
                        }/quiz/${convertToLowercaseWithHyphen(data.title)}`}
                      />
                    ))}
                  </>
                )}
              </div>
              <Form url={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/quiz`} />
            </div>
            <div className="col-span-2">
              <Sidebar
                title="Quiz Book"
                // videoId="Ko6uaohTe20"
                url={`https://growlearnhub.com/mcqs/`}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
