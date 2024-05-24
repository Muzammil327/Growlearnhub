"use client";
import React, { useState, useEffect } from "react";
import Card2 from "@/src/components/card2/page";
import Loading from "@/src/components/element/Loading";
import { convertToLowercaseWithHyphen } from "@/src/views/function/convertToLowercaseWithHyphen";
import { convertToUppercaseWithSpace } from "@/src/views/function/convertToUppercaseWithSpace";
import Form from "@/src/components/element/form/page";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import { Heading2TypesGet, IpropsHeading1 } from "@/src/types/page";
import { GetHeading2 } from "@/src/app/constant";
import axios from "axios";

export default function Heading1View({ bookName, heading1 }: IpropsHeading1) {
  const [fetchdata, setFetchData] = useState<Heading2TypesGet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(GetHeading2);
      setFetchData(response.data);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = fetchdata.filter((item: any) => {
    return (
      convertToLowercaseWithHyphen(item.book.title) ===
        convertToLowercaseWithHyphen(bookName) &&
      convertToLowercaseWithHyphen(item.heading1.title) ===
        convertToLowercaseWithHyphen(heading1)
    );
  });

  if (error) {
    return <h1>Error ...</h1>;
  }

  return (
    <>
      <SubHeader
        title={`${convertToUppercaseWithSpace(
          bookName
        )} ${convertToUppercaseWithSpace(heading1)} Quiz`}
      />

      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
                <>
                  {loading ? (
                    <>
                      <Loading />
                      <Loading />
                      <Loading />
                    </>
                  ) : (
                    <>
                      {filteredData.map((data: Heading2TypesGet) => (
                        <Card2
                          key={data._id}
                          title={data.title}
                          link={`${
                            process.env.NEXT_PUBLIC_FRONTEND_URL
                          }/quiz/${bookName}/${heading1}/${convertToLowercaseWithHyphen(
                            data.title
                          )}`}
                        />
                      ))}
                    </>
                  )}
                </>
              </div>
              <Form
                url={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/quiz/${bookName}/${heading1}`}
              />
            </div>
            <div className="col-span-2">
              <Sidebar
                title={`${convertToUppercaseWithSpace(
                  bookName
                )} ${convertToUppercaseWithSpace(heading1)} Quiz`}
                // videoId="Ko6uaohTe20"
                url={`https://growlearnhub.com/mcqs/${bookName}/${heading1}`}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
