"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../quizShow.module.css";
import { IpropsFinal, McqsTypes } from "@/src/types/page";
import Loading4 from "@/src/components/element/Loading4";
import { GetMcqsUserSlug } from "@/src/app/constant";
import Link from "next/link";
import Image from "next/image";

export default function FetchFinalView({ final }: IpropsFinal) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fetchData, setFetchData] = useState<McqsTypes>();

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(`${GetMcqsUserSlug}/${final}`);
        setFetchData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [final]);

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
      {loading ? (
        <Loading4 />
      ) : (
        <>
          {fetchData && (
            <div className={styles.quiz}>
              <div className="img">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/${fetchData.image}`}
                  alt={fetchData.title}
                  title={fetchData.title}
                  height={1280}
                  className="h-auto w-full"
                  width={720}
                  priority
                />
              </div>
              <div className="question mt-2">
                <h2 className={`${styles.span1} capitalize`}>
                  <strong>{fetchData.title}.</strong>{" "}
                </h2>
              </div>
              <div className="option">
                <ul>
                  {fetchData.options &&
                    fetchData.options.map((option: any, index: any) => {
                      return (
                        <li
                          key={index}
                          onClick={() =>
                            handleOptionClick(
                              option,
                              fetchData.correctOption,
                              fetchData._id
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
                    })}
                </ul>
                <div className="mb-4">
                  {selectedOptions[fetchData._id] ? (
                    <div className="flex gap-5 items-center justify-between">
                      <button
                        className="flex items-center justify-center gap-2 whitespace-nowrap rounded bg-green-50 text-green-900 px-6 py-3 text-sm font-medium tracking-wide border-green-100 transition duration-300 hover:bg-green-100 focus:bg-green-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-100 disabled:shadow-none"
                        aria-label="Correct || False"
                      >
                        {selectedOptions[fetchData._id] ===
                        fetchData.correctOption
                          ? "Correct"
                          : "False"}
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="bg-slate-200 py-4 px-2 rounded-md text-base">
                  <span className="text-base font-semibold">
                    The Correct Option is:
                  </span>{" "}
                  <strong> {fetchData.correctOption}</strong>.
                  <p className="mt-4">{fetchData.description}</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mt-6 py-3">Similar Mcqs</h3>
              {fetchData.relatedId.map((data: any) => (
                <div key={data._id} className="my-3">
                  <Link
                    href={`/mcqs/${data.slug}`}
                    className="text-base font-medium py-3 px-3 bg-slate-200 w-full block rounded-md"
                  >
                    {data.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
