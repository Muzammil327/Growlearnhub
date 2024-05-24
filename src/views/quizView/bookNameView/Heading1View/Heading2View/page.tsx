"use client";
import React, { useState, useEffect, useCallback } from "react";
import { convertToUppercaseWithSpace } from "@/src/views/function/convertToUppercaseWithSpace";
import Form from "@/src/components/element/form/page";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import { IpropsHeading2, McqsTypes, PaginationTypes } from "@/src/types/page";
import { getMcqsAll } from "@/src/api/mcqs/page";
import Loading2 from "@/src/components/element/Loading2";
import { convertToLowercaseWithHyphen } from "@/src/views/function/convertToLowercaseWithHyphen";
import Link from "next/link";
import styles from "./quizShow.module.css";
import axios from "axios";
import { GetMcqsUser } from "@/src/app/constant";

export default function IdView({
  bookName,
  heading1,
  heading2,
}: IpropsHeading2) {
  const capitalizedHeading1 = convertToUppercaseWithSpace(heading1);
  const capitalizedHeading2Params = convertToUppercaseWithSpace(heading2);
  const [fetchUser, setFetchUser] = useState<McqsTypes[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null;
  }>({});

  const [pagination, setPagination] = useState<PaginationTypes>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
  });

  const fetchData = useCallback(
    async (page: number, limit: number) => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          `${GetMcqsUser}?page=${page}&limit=${limit}`
        );
        setPagination(response.data.pagination);
        setFetchUser(response.data.data);
        setLoading(false);

        const filteredData = response.data.data.filter((item: any) => {
          return (
            convertToLowercaseWithHyphen(item.book.title) ===
              convertToLowercaseWithHyphen(bookName) &&
            convertToLowercaseWithHyphen(item.heading1.title) ===
              convertToLowercaseWithHyphen(heading1) &&
            convertToLowercaseWithHyphen(item.heading2.title) ===
              convertToLowercaseWithHyphen(heading2)
          );
        });

        setFetchUser(filteredData);

        setPagination({
          totalItems: filteredData.length,
          totalPages: Math.ceil(filteredData.length / limit),
          currentPage: 1,
        });
      } catch (error) {
        console.log("error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [bookName, heading1, heading2]
  );

  useEffect(() => {
    fetchData(1, 10);
  }, [fetchData]);

  const handlePaginationClick = (page: number) => {
    fetchData(page, 10);
  };

  const handleOptionClick = (
    option: string,
    correctOption: string,
    questionId: string
  ) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: option === correctOption ? option : "False",
    }));
  };

  if (error) {
    return <h1>Error ...</h1>;
  }

  return (
    <>
      <SubHeader
        title={
          capitalizedHeading1 + " " + capitalizedHeading2Params + " " + "Quiz"
        }
      />

      <section>
        <Container>
          <div className="grid md:grid-cols-9 md:gap-4">
            <div className="col-span-7">
              {loading ? (
                <>
                  <Loading2 />
                  <Loading2 />
                  <Loading2 />
                </>
              ) : (
                <>
                  <>
                    {fetchUser.map((data: McqsTypes) => {
                      return (
                        <div className={styles.quiz} key={data._id}>
                          <div className="question">
                            <Link
                              href={`/mcqs/${data.slug}`}
                              className={`${styles.link} capitalize`}
                            >
                              {data.title}.
                            </Link>
                          </div>
                          <div className="">
                            <ul>
                              {data.options.map(
                                (option: any, index: number) => {
                                  return (
                                    <li
                                      key={index}
                                      onClick={() =>
                                        handleOptionClick(
                                          option,
                                          data.correctOption,
                                          data._id
                                        )
                                      }
                                      className={`cursor-pointer md:text-base text-sm ${styles.optionli}`}
                                    >
                                      <button
                                        className="border-none outline-none"
                                        aria-label="Options"
                                      >
                                        Option {index + 1}: {option}
                                      </button>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                            <div className="">
                              {selectedOptions[data._id] ? (
                                <div className="flex gap-5 items-center justify-between">
                                  <button
                                    className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-green-50 text-green-900 md:px-6 px-4 md:py-3 py-2 text-sm font-medium tracking-wide border-green-100 transition duration-300 hover:bg-green-100 focus:bg-green-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-100 disabled:shadow-none"
                                    aria-label="Correct || False"
                                  >
                                    {selectedOptions[data._id] ===
                                    data.correctOption
                                      ? "Correct"
                                      : "False"}
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                </>
              )}
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
              <Form
                url={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/quiz/${bookName}/${heading1}/${heading2}`}
              />
            </div>
            <div className="col-span-2">
              <Sidebar
                title={
                  capitalizedHeading1 +
                  " " +
                  capitalizedHeading2Params +
                  " " +
                  "Quiz"
                }
                // videoId="Ko6uaohTe20"
                url={`https://growlearnhub.com/mcqs/${bookName}/${heading1}/${heading2}`}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
