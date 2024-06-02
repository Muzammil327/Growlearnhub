"use client";
import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { useRouter } from "next/navigation";
import { getMcqs } from "@/src/api/mcqs/page";
import { getBookAll } from "@/src/api/book/page";
import SimpleInput from "../../components/Input/simpleInput";
import styles from "@/src/app/dashboard/form.module.css";
import Dropdown from "../../components/Input/dropdown";
import { BookTypesGet, Heading1TypesGet } from "@/src/types/page";
import axios from "axios";
import { GetHeading1 } from "@/src/app/constant";
import slugify from "slugify";
import Select from "react-select";

interface Tag {
  id: string;
  text: string;
}
interface DropdownIprops {
  _id: string;
  title: string;
  book: {
    _id: string;
    title: string;
  };
}
export default function Page() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [correctOption, setCorrectOption] = useState<string>("");

  const [bookId, setBookId] = useState<string>("");
  const [options, setOption] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const handleTagsChange = (tag: string[]) => {
    setOption(tag);
  };
  const [relatedId, setRelatedId] = useState<Tag[]>([]);
  const handleSelectChange = (selectedOptions: any) => {
    setRelatedId(selectedOptions);
  };
  // submit data
  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
    const mappedRelatedIds: any[] = relatedId.map((data: any) => data.value);

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/post/mcqs`,
        {
          title,
          description,
          correctOption,
          bookId,
          options,
          keywords,
          relatedId: mappedRelatedIds,
          slug: slugify(title, {
            replacement: "-", // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true, // convert to lower case, defaults to `false`
            strict: false, // strip special characters except replacement, defaults to `false`
            locale: "vi", // language code of the locale to use
            trim: true, // trim leading and trailing replacement chars, defaults to `true`
          }),
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
  const heading1Filter = fetchHeading1.filter(
    (data: any) => data.book._id === bookId
  );
  const fetchHeading1Data = async () => {
    try {
      const response = await axios.get(GetHeading1);
      setFetchHeading1(response.data);
    } catch (error) {
      console.log("Error during Heading 1 Getting!", error);
    }
  };

  // suggestions
  useEffect(() => {
    const fetchMcqsData = async () => {
      try {
        const mcqs = await getMcqs();
        setData(mcqs);
      } catch (error) {
        console.log("Error fetching MCQs:", error);
      }
    };

    fetchMcqsData();
  }, []);

  useEffect(() => {
    fetchBookData();
    fetchHeading1Data();
  }, []);

  return (
    <div className="mb-8 mt-24">
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

          <MultiSelectComponent
            options={heading1Filter}
            selectedOptions={keywords}
            setSelectedOptions={(selectedOptions: any) =>
              setKeywords(selectedOptions)
            }
          />
          {/*  Options */}
          <div>
            <label htmlFor="tags" className={`${styles.label}`}>
              Options
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

          {/* related id  */}
          {/* <div className="">
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
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="productId"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Related Product
            </label>
            <Select
              isMulti
              options={
                data.map(({ _id, title }: any) => ({
                  value: _id,
                  label: title,
                })) as any[]
              }
              onChange={handleSelectChange}
              value={relatedId}
            />
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

const MultiSelectComponent = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: any) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((item: any) => item !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        Select Tags
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg grid grid-cols-2">
          {options.map((option: DropdownIprops) => (
            <div key={option._id} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option._id)}
                onChange={() => handleSelect(option._id)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-gray-700">
                <option>{option.title}</option>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
