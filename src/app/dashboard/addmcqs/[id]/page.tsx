"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import axios from "axios";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { BookTypesGet, Heading1TypesGet, Heading2TypesGet } from "@/src/types/page";

interface FormData {
  title: string;
  bookId: string;
  heading1Id: string;
  heading2Id: string;
  options: string[];
  correctOption: string;
}

const KeywordUpdated = () => {
  const router = useRouter();
  const { id } = useParams();

  const [data, setData] = useState<FormData>({
    title: "",
    bookId: "",
    heading1Id: "",
    heading2Id: "",
    options: [],
    correctOption: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [UError, setUError] = useState(false);

  const handleTagsChange = (tags: string[]) => {
    setData({ ...data, options: tags }); // Update options field in data state
  };

  const fetchUser1Filter = data.bookId;
  const fetchUser2Filter = data.heading1Id;

  const [fetchUser1, setFetchUser1] = useState([]);
  const [fetchUser2, setFetchUser2] = useState([]);
  const [fetchUser3, setFetchUser3] = useState([]);

  // Function to fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/smcqs/${id}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error:", error);
        setError(true);
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData1 = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/book`
      );
      setFetchUser1(response.data);
    } catch (error) {
      console.log("Error during Book Getting!", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/heading1`
      );
      setFetchUser2(response.data);
    } catch (error) {
      console.log("Error during Heading 1 Getting!", error);
    }
  };

  const fetchData3 = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/heading2`
      );
      setFetchUser3(response.data);
    } catch (error) {
      console.log("Error during Heading 2 Getting!", error);
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update/mcqs/${id}`,
        data
      );

      if (response.data === "400" && response.data === "500") {
        setUError(response.data.message);
      } else {
        setUError(response.data.message);
        setData({
          title: "",
          bookId: "",
          heading1Id: "",
          heading2Id: "",
          options: [],
          correctOption: "",
        });
        router.push("/dashboard/addmcqs");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="mb-8 mt-24">
      <h2 className={`${styles.heading}`}>Mcqs Add Here</h2>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {UError && <span className="text-indigo-500">{UError}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={data.title}
            placeholder="Enter Title"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          {/*  Book Name */}
          <div className="">
            <label htmlFor="Book Name" className={`${styles.label}`}>
              Book Name
            </label>
            <div className="mt-2.5">
              <select
                id="Book Name"
                name="Book Name"
                className={`${styles.select}`}
                value={data.bookId}
                onChange={(e) => setData({ ...data, bookId: e.target.value })}
              >
                <option value="">Select Correct Option</option>
                {fetchUser1.map((data: BookTypesGet) => (
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
                id="Heading 1"
                name="Heading 1"
                className={`${styles.select}`}
                value={data.heading1Id}
                onChange={(e) =>
                  setData({ ...data, heading1Id: e.target.value })
                }
              >
                <option value="">Select Heading 1</option>
                {fetchUser2
                  .filter((data: Heading1TypesGet) => {
                    return data.bookId === fetchUser1Filter;
                  })
                  .map((data: any) => {
                    return (
                      <option key={data._id} value={data._id}>
                        {data.title}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          {/*  Heading 2 */}
          <div className="">
            <label htmlFor=" Heading 2" className={`${styles.label}`}>
              Heading 2
            </label>
            <div className="mt-2.5">
              <select
                id="Heading 2"
                name="Heading 2"
                className={`${styles.select}`}
                value={data.heading2Id}
                onChange={(e) =>
                  setData({ ...data, heading2Id: e.target.value })
                }
              >
                <option value="">Select Heading 2</option>
                {fetchUser3
                  .filter((data: Heading2TypesGet) => {
                    return (
                      data.bookId === fetchUser1Filter &&
                      data.heading1Id === fetchUser2Filter
                    );
                  })
                  .map((data: Heading2TypesGet) => {
                    return (
                      <option key={data._id} value={data._id}>
                        {data.title}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          {/*  Tags */}
          <div>
            <label htmlFor="tags" className={`${styles.label}`}>
              Tags
            </label>
            <TagsInput
              value={data.options}
              onChange={handleTagsChange}
              inputProps={{ id: "tags" }}
            />
          </div>

          {/*  Option Correct */}
          <div className="">
            <label htmlFor=" Option Correct" className={`${styles.label}`}>
              Option Correct
            </label>
            <div className="mt-2.5">
              <select
                id="Option Correct"
                name="Option Correct"
                className={`${styles.select}`}
                value={data.correctOption}
                onChange={(e) =>
                  setData({ ...data, correctOption: e.target.value })
                }
              >
                <option value="">Select Correct Option</option>
                {data.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className={`${styles.submitBTN}`}>
            {loading ? "Submit" : "Loading ..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default KeywordUpdated;
