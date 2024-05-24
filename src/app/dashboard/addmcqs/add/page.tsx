"use client";
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { useRouter } from "next/navigation";
import { getMcqs } from "@/src/api/mcqs/page";
import { getBookAll } from "@/src/api/book/page";
import SimpleInput from "../../components/Input/simpleInput";
import styles from "@/src/app/dashboard/form.module.css";
import { WithContext as ReactTags } from "react-tag-input";
import Dropdown from "../../components/Input/dropdown";
import {
  BookTypesGet,
  Heading1TypesGet,
  Heading2TypesGet,
} from "@/src/types/page";
import axios from "axios";
import { GetHeading1, GetHeading2 } from "@/src/app/constant";
import slugify from "slugify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import katex from "katex";

export type McqsFormTypes = {
  title: string;
  description: string;
  bookId: string;
  heading1Id: string;
  heading2Id: string;
  options: string[];
  correctOption: string;
  relatedId: Tag[];
  image: File | null; // Add the image property
};
interface Tag {
  id: string;
  text: string;
}
export default function Page() {
  // const mathRef = useRef(null);

  // useEffect(() => {
  //   if (mathRef.current) {
  //     katex.render("\\frac{3x^2}{4}", mathRef.current, {
  //       throwOnError: false,
  //     });
  //   }
  // }, [mathRef]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    try {
      const mathContentElement = document.getElementById("math-content");
      if (mathContentElement) {
        katex.render(inputValue, mathContentElement, {
          throwOnError: false,
        });
      }
    } catch (error) {
      // Handle rendering errors, if any
      console.error("Error rendering formula:", error);
    }
  }, [inputValue]);

  const navigate = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [image, setImage] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [correctOption, setCorrectOption] = useState<string>("");

  const [bookId, setBookId] = useState<string>("");
  const [heading1Id, setHeading1Id] = useState<string>("");
  const [heading2Id, setHeading2Id] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [options, setOption] = useState<string[]>([]);

  const [value, setValue] = useState("");

  const handleTagsChange = (tag: string[]) => {
    setOption(tag);
  };
  const [relatedId, setRelatedId] = useState<Tag[]>([]);
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);

    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setImage(selectedFile);
    } else {
      alert("Please select an image file.");
      event.target.value = null;
    }
  };
  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
    const mappedRelatedIds: any[] = relatedId.map((data) => data.id);
    const formData = new FormData();

    formData.append("image", image); // Assuming selectedFile is your file object

    // Append other form fields
    formData.append("title", title);
    formData.append("description", description);
    formData.append("correctOption", correctOption);
    formData.append("bookId", bookId);
    formData.append("heading1Id", heading1Id);
    formData.append("heading2Id", heading2Id);

    options.forEach((option, index) => {
      formData.append(`options[${index}]`, option);
    });

    formData.append(
      "slug",
      slugify(title, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
        locale: "vi", // language code of the locale to use
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      })
    ); // Add slug
    mappedRelatedIds.forEach((id) => {
      formData.append("relatedId", id);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/post/mcqs`,
        formData, // Send FormData object instead of plain object
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for FormData
          },
        }
      );

      if (response.data.status === "400" || response.data.status === "500") {
        setError(response.data.message);
      } else {
        setError(response.data.message);

        setTitle("");
        setDescription("");

        setCorrectOption("");
        setOption([]);
        setRelatedId([]);

        setBookId("");
        setHeading1Id("");
        setHeading2Id("");

        setLoading(false);

        navigate.push("/dashboard/addmcqs");
      }
    } catch (error) {
      setLoading(false); // Set loading state to false in case of an error
      setError("Error during Category Update");
    }
  };
  // fetch Book Data
  const [booksData, setBooksData] = useState<BookTypesGet[]>([]);
  const fetchBookData = async () => {
    try {
      const data = await getBookAll();
      setBooksData(data);
    } catch (error) {
      console.log("Error during Book Getting!", error);
    }
  };

  // set Fetch Heading 1
  const [fetchHeading1, setFetchHeading1] = useState<Heading1TypesGet[]>([]);
  const fetchHeading1Data = async () => {
    try {
      const response = await axios.get(GetHeading1);
      setFetchHeading1(response.data);
    } catch (error) {
      console.log("Error during Heading 1 Getting!", error);
    }
  };

  // heading 2
  const [fetchHeading2, setFetchHeading2] = useState<Heading2TypesGet[]>([]);
  const fetchHeading2Data = async () => {
    try {
      const response = await axios.get(GetHeading2);
      setFetchHeading2(response.data);
    } catch (error) {
      console.log("Error during Heading 2 Getting!", error);
    }
  };

  // RelatedId
  const handleAddition = (tag: { id: string; text: string }) => {
    setRelatedId([...relatedId, tag]);
  };
  const handleDelete = (i: number) => {
    const updatedTags = relatedId.filter((_, index) => index !== i); // Filter out the tag at index i
    setRelatedId(updatedTags);
  };

  // suggestions
  const [suggestions, setSuggestions] = useState<Tag[]>([]);
  useEffect(() => {
    const fetchMcqsData = async () => {
      try {
        const mcqs = await getMcqs();
        const mcqTitles = mcqs.map((mcq: any) => ({
          id: mcq._id,
          text: mcq.title,
        }));
        setSuggestions(mcqTitles);
      } catch (error) {
        console.log("Error fetching MCQs:", error);
      }
    };

    fetchMcqsData();
  }, []);

  useEffect(() => {
    fetchBookData();
    fetchHeading1Data();
    fetchHeading2Data();
  }, []);

  return (
    <div className="mb-8 mt-24">
      <div>
        <h1>MathJax Formula Input</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter formula, e.g., x^2"
          className="border p-2"
        />
        <div className="mt-4">
          <p>This is your formula:</p>
          <div id="math-content"></div>
        </div>
      </div>
      <h2 className={`${styles.heading}`}>Mcqs Add Here</h2>
      <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
        {error && <span className="text-indigo-500">{error}</span>}

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Title */}
          <SimpleInput
            label="Title"
            type="text"
            htmlFor="title"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* Description */}
          <SimpleInput
            label="Description"
            type="text"
            htmlFor="Description"
            value={description}
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* book name  */}
          <Dropdown
            bookId={bookId}
            label="Book Name"
            setBookId={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBookId(e.target.value)
            }
            booksData={booksData}
          />

          {/*  Heading 1 */}
          <Dropdown
            bookId={heading1Id}
            label="Heading 1"
            setBookId={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setHeading1Id(e.target.value)
            }
            booksData={fetchHeading1.filter((data: any) => {
              return data.book._id === bookId;
            })}
          />

          {/*  Heading 2 */}
          <Dropdown
            bookId={heading2Id}
            label="Heading 2"
            setBookId={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setHeading2Id(e.target.value)
            }
            booksData={fetchHeading2.filter((data: any) => {
              return (
                data.book._id === bookId && data.heading1._id === heading1Id
              );
            })}
          />

          {/* related id  */}
          <div className="">
            <label htmlFor="Related Id" className={`${styles.label}`}>
              Related Id
            </label>
            <ReactTags
              tags={relatedId}
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              inputFieldPosition="bottom"
              autocomplete
              classNames={{
                tags: "flex flex-wrap mt-2 space-x-2",
                tagInput: "tag-input bg-blue-500",
                tag: "bg-gray-200 rounded-full px-3 py-1 mr-2 text-sm font-medium text-gray-700",
                remove: "inline-block ml-1 cursor-pointer",
                suggestions:
                  "suggestions-container p-2 bg-gray-100 border border-gray-300 rounded",
                activeSuggestion: "suggestion-active bg-blue-200",
              }}
            />
          </div>
          <div className="mt-4">
            <ReactQuill theme="snow" value={value} onChange={setValue} />{" "}
          </div>
          {/*  Tags */}
          <div>
            <label htmlFor="tags" className={`${styles.label}`}>
              Tags
            </label>
            <TagsInput
              value={options}
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
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              >
                <option value="">Select Correct Option</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="col-span-full">
              <div className="mt-2 flex w-6/12 mx-auto justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {!selectedFile && (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </>
                  )}

                  {selectedFile && (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                    />
                  )}
                </div>
              </div>
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
}
