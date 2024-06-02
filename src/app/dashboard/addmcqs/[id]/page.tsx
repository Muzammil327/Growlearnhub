"use client";
// import React, { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import styles from "@/src/app/dashboard/form.module.css";
// import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
// import axios from "axios";
// import TagsInput from "react-tagsinput";
// import "react-tagsinput/react-tagsinput.css";
// import { WithContext as ReactTags } from "react-tag-input";
// import Dropdown from "../../components/Input/dropdown";
// import { getMcqs } from "@/src/api/mcqs/page";
// import slugify from "slugify";
// import { MultiSelect } from "react-multi-select-component";
// import Select from "react-select";

// interface Tag {
//   id: string;
//   text: string;
// }

// export const KeywordUpdated = () => {
//   const router = useRouter();
//   const { id } = useParams();
//   const [data, setData] = useState([]);
//   const navigate = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const [title, setTitle] = useState<string>("");
//   const [description, setDescription] = useState<string>("");
//   const [options, setOptions] = useState<string[]>([]);
//   const [correctOption, setCorrectOption] = useState<string>("");
//   const [bookId, setBookId] = useState<string>("");
//   const [keywords, setKeywords] = useState<string[]>([]);

//   const [relatedId, setRelatedId] = useState<Tag[]>([]);
//   console.log(relatedId);
//   const handleSelectChange = (selectedOptions: any) => {
//     setRelatedId(selectedOptions);
//   };
//   const [UError, setUError] = useState(false);

//   const handleTagsChange = (tags: string[]) => {
//     setOptions(tags);
//   };

//   const [fetchUser1, setFetchUser1] = useState([]);
//   const [fetchUser2, setFetchUser2] = useState([]);
//   const heading1Filter = fetchUser2.filter(
//     (data: any) => data.book._id === bookId
//   );
//   // Function to fetch data from the server
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setError(false);
//         setLoading(true);

//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/smcqs/${id}`
//         );
//         const data = response.data[0];
//         setTitle(data.title);
//         setDescription(data.description);
//         setCorrectOption(data.correctOption);
//         setOptions(data.options);
//         setBookId(data.bookId);
//         setKeywords(data.keywords);
//         const transformedRelatedId = data.relatedId.map(
//           ({ _id, title }: any) => ({
//             value: _id,
//             label: title,
//           })
//         );
//         setRelatedId(transformedRelatedId);
//         setLoading(false);
//       } catch (error) {
//         console.log("error:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };
//     if (id) {
//       fetchData();
//     }
//   }, [id]);

//   const fetchData1 = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/book`
//       );
//       setFetchUser1(response.data);
//     } catch (error) {
//       console.log("Error during Book Getting!", error);
//     }
//   };

//   const fetchData2 = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/heading1`
//       );
//       setFetchUser2(response.data);
//     } catch (error) {
//       console.log("Error during Heading 1 Getting!", error);
//     }
//   };

//   useEffect(() => {
//     fetchData1();
//     fetchData2();
//   }, []);

//   const SubmitHandle = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const mappedRelatedIds: any[] = relatedId.map((data: any) => data.value);

//     try {
//       const response = await axios.put(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update/mcqs/${id}`,
//         {
//           title,
//           description,
//           correctOption,
//           bookId,
//           options,
//           keywords,
//           relatedId: mappedRelatedIds,
//           slug: slugify(title, {
//             replacement: "-", // replace spaces with replacement character, defaults to `-`
//             remove: undefined, // remove characters that match regex, defaults to `undefined`
//             lower: true, // convert to lower case, defaults to `false`
//             strict: false, // strip special characters except replacement, defaults to `false`
//             locale: "vi", // language code of the locale to use
//             trim: true, // trim leading and trailing replacement chars, defaults to `true`
//           }),
//         }
//       );

//       if (response.data === "400" && response.data === "500") {
//         setUError(response.data.message);
//       } else {
//         setUError(response.data.message);
//         router.push("/dashboard/addmcqs");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // suggestions
//   useEffect(() => {
//     const fetchMcqsData = async () => {
//       try {
//         const mcqs = await getMcqs();
//         setRelatedId(mcqs);
//       } catch (error) {
//         console.log("Error fetching MCQs:", error);
//       }
//     };

//     fetchMcqsData();
//   }, []);
//   if (error) {
//     return (
//       <div className={`${styles.form}`}>
//         <h1>Error ...</h1>
//       </div>
//     );
//   }
//   if (loading) {
//     return (
//       <div className={`${styles.form}`}>
//         <h1>Loading ...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-8 mt-24">
//       <h2 className={`${styles.heading}`}>Mcqs Add Here</h2>
//       <form onSubmit={SubmitHandle} className="mt-16 mx-8 sm:mt-20">
//         {error && <span className="text-indigo-500">{error}</span>}

//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           {/* Title */}
//           <SimpleInput
//             label="Title"
//             type="text"
//             htmlFor="title"
//             value={title}
//             placeholder="Enter Title"
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           {/* Description */}
//           <SimpleInput
//             label="Description"
//             type="text"
//             htmlFor="Description"
//             value={description}
//             placeholder="Enter Description"
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           {/* book name  */}
//           <Dropdown
//             bookId={bookId}
//             label="Book Name"
//             setBookId={(e: React.ChangeEvent<HTMLSelectElement>) =>
//               setBookId(e.target.value)
//             }
//             booksData={fetchUser1}
//           />

//           <MultiSelectComponent
//             options={heading1Filter}
//             selectedOptions={keywords}
//             setSelectedOptions={(selectedOptions: any) =>
//               setKeywords(selectedOptions)
//             }
//           />
//           {/*  Options */}
//           <div>
//             <label htmlFor="tags" className={`${styles.label}`}>
//               Options
//             </label>
//             <TagsInput
//               value={options}
//               onChange={handleTagsChange}
//               inputProps={{ id: "tags" }}
//             />
//           </div>

//           {/*  Option Correct */}
//           <div className="">
//             <label htmlFor=" Option Correct" className={`${styles.label}`}>
//               Option Correct
//             </label>
//             <div className="mt-2.5">
//               <select
//                 id="Option Correct"
//                 name="Option Correct"
//                 className={`${styles.select}`}
//                 value={correctOption}
//                 onChange={(e) => setCorrectOption(e.target.value)}
//               >
//                 <option value="">Select Correct Option</option>
//                 {options.map((option, index) => (
//                   <option key={index} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* related id  */}
//           <div className="mb-6">
//             <label
//               htmlFor="productId"
//               className="block text-base font-medium text-gray-700 mb-2"
//             >
//               Related Product
//             </label>
//             <Select
//               isMulti
//               options={relatedId}
//               onChange={handleSelectChange}
//               value={relatedId}
//             />
//           </div>
//         </div>
//         <div className="mt-10">
//           <button type="submit" className={`${styles.submitBTN}`}>
//             {loading ? "Loading ..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const MultiSelectComponent = ({
//   options,
//   selectedOptions,
//   setSelectedOptions,
// }: any) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleSelect = (option: any) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(
//         selectedOptions.filter((item: any) => item !== option)
//       );
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         onClick={toggleDropdown}
//         className="bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       >
//         Select Tags
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg grid grid-cols-2">
//           {options.map((option: DropdownIprops) => (
//             <div key={option._id} className="flex items-center p-2">
//               <input
//                 type="checkbox"
//                 checked={selectedOptions.includes(option._id)}
//                 onChange={() => handleSelect(option._id)}
//                 className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
//               />
//               <label className="ml-2 text-gray-700">
//                 <option>{option.title}</option>
//               </label>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default KeywordUpdated;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styles from "@/src/app/dashboard/form.module.css";
import SimpleInput from "@/src/app/dashboard/components/Input/simpleInput";
import axios from "axios";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Dropdown from "../../components/Input/dropdown";
import { getMcqs } from "@/src/api/mcqs/page";
import slugify from "slugify";
import Select from "react-select";
import MultiSelectComponent from "../MultiSelectComponent";

interface DropdownIprops {
  _id: string;
  title: string;
  book: {
    _id: string;
    title: string;
  };
}

export default function Page() {
  const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [correctOption, setCorrectOption] = useState<string>("");
  const [bookId, setBookId] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);

  const [relatedId, setRelatedId] = useState([]); // This will hold the options for the Select component

  useEffect(() => {
    const fetchMcqsData = async () => {
      try {
        const mcqs = await getMcqs();
        setData(mcqs); // Setting only the options to the relatedId state
      } catch (error) {
        console.log("Error fetching MCQs:", error);
      }
    };

    fetchMcqsData();
  }, []);

  // Handle select change function
  const handleSelectChange = (selectedOptions: any) => {
    setRelatedId(selectedOptions);
  };

  const [UError, setUError] = useState(false);

  const handleTagsChange = (tags: string[]) => {
    setOptions(tags);
  };

  const [fetchUser1, setFetchUser1] = useState([]);
  const [fetchUser2, setFetchUser2] = useState([]);
  const heading1Filter = fetchUser2.filter(
    (data: any) => data.book._id === bookId
  );
  // Function to fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/smcqs/${id}`
        );
        const data = response.data[0];
        setTitle(data.title);
        setDescription(data.description);
        setCorrectOption(data.correctOption);
        setOptions(data.options);
        setBookId(data.bookId);
        setKeywords(data.keywords);
        const transformedRelatedId = data.relatedId.map(
          ({ _id, title }: any) => ({
            value: _id,
            label: title,
          })
        );
        setRelatedId(transformedRelatedId);
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

  useEffect(() => {
    fetchData1();
    fetchData2();
  }, []);

  const SubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    const mappedRelatedIds: any[] = relatedId.map((data: any) => data.value);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update/mcqs/${id}`,
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

      if (response.data === "400" && response.data === "500") {
        setUError(response.data.message);
      } else {
        setUError(response.data.message);
        router.push("/dashboard/addmcqs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // suggestions

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
            booksData={fetchUser1}
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
            {loading ? "Loading ..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
