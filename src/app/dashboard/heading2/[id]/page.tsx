"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import { getBookAll } from "@/src/api/book/page";
import { getHeading1All } from "@/src/api/heading1/page";
import { getSingleHeading2, updateHeading2 } from "@/src/api/heading2/page";
import { BookTypesGet, Heading1TypesGet, Heading2TypesGet, Heading2TypesPost } from "@/src/types/page";

const KeywordUpdated = () => {
  const router = useRouter();
  const { id } = useParams();

  const [fetchHeading2, setFetchHeading2] = useState<Heading2TypesPost>({
    title: "",
    bookId: "",
    heading1Id: "",
  });

  const [loadingData, setLoadingData] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [fError, setFError] = useState(false);
  const [UError, setUError] = useState(false);

  const fetchUser1Filter = fetchHeading2.bookId;
  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);
  const [heading1Data, setHeading1Data] = useState<Heading1TypesGet[]>([]);
  // Function to fetch data from the server

  const fetchHeading1Data = async () => {
    try {
      const data = await getHeading1All();
      setHeading1Data(data);
    } catch (error) {
      console.log("Error during Book Getting!", error);
    }
  };
  const fetchBookData = async () => {
    try {
      const data = await getBookAll();
      setBooksData(data);
    } catch (error) {
      console.log("Error during Book Getting!", error);
    }
  };
  useEffect(() => {
    fetchBookData();
    fetchHeading1Data();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFError(false);
        setLoadingData(true);
        const data = await getSingleHeading2(id.toString());
        setFetchHeading2(data);
        setLoadingData(false);
      } catch (error) {
        console.log("error:", error);
        setFError(true);
        setLoadingData(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoadingBtn(false);
      const data = await updateHeading2(fetchHeading2, id.toString());
      setLoadingBtn(false);

      if (data.status === "400" || data.status === "500") {
        setUError(data.message);
        setLoadingBtn(false);
      } else {
        setLoadingBtn(true);

        setUError(data.message);
        setFetchHeading2({
          title: "",
          bookId: "",
          heading1Id: "",
        });
        router.push("/dashboard/heading2");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (fError) {
    return (
      <div className={`${styles.form}`}>
        <h1>Error ...</h1>
      </div>
    );
  }
  if (loadingData) {
    return (
      <div className={`${styles.form}`}>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Heading 2 Update Here</h2>

      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {UError && <span className="text-indigo-500">{UError}</span>}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={fetchHeading2.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setFetchHeading2({ ...fetchHeading2, title: e.target.value })
            }
          />

          {/*  Book Name */}
          <div className="">
            <label htmlFor="  Book Name" className={`${styles.label}`}>
              Book Name
            </label>
            <div className="mt-2.5">
              <select
                id=" Book Name"
                name=" Book Name"
                className={`${styles.select}`}
                value={fetchHeading2.bookId}
                onChange={(e) =>
                  setFetchHeading2({ ...fetchHeading2, bookId: e.target.value })
                }
              >
                <option value="">Select Book Name</option>
                {booksData.map((data: BookTypesGet) => (
                  <option key={data._id} value={data._id}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*  Heading 1 */}
          <div className="">
            <label htmlFor=" Heading 1" className={`${styles.label}`}>
              Heading 1
            </label>
            <div className="mt-2.5">
              <select
                id="Heading1"
                name="Heading1"
                className={`${styles.select}`}
                value={fetchHeading2.heading1Id}
                onChange={(e) =>
                  setFetchHeading2({
                    ...fetchHeading2,
                    heading1Id: e.target.value,
                  })
                }
              >
                <option value="">Select Heading 1</option>
                {heading1Data
                  .filter((data: Heading1TypesGet) => {
                    return data.bookId === fetchUser1Filter;
                  })
                  .map((data: Heading1TypesGet) => {
                    return (
                      <option key={data._id} value={data._id}>
                        {data.title}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loadingBtn ? "Loading ..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default KeywordUpdated;
