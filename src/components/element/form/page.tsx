"use client";
import { useState } from "react";
import style from "./form.module.css";
import { postCommentForm } from "@/src/api/comment/page";
import LoaderIcon from "../LoaderIcon";

export default function Form(props: { url: string }) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [error, setError] = useState(false);
  const [commentForm, setCommentForm] = useState({
    fname: "",
    lname: "",
    email: "",
    url: props.url,
    message: "",
  });

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingBtn(false);
    try {
      setLoadingBtn(true);
      setError(false);
      const data = await postCommentForm(commentForm);

      if (data.status === "400" || data.status === "500") {
        setError(data.message);
      } else {
        setError(data.message);
        setCommentForm({
          fname: "",
          lname: "",
          email: "",
          url: props.url,
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoadingBtn(false);
    }
  };
  return (
    <div className="my-20 relative">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h3 className=" font-bold tracking-tight text-gray-900 lg:text-4xl md:text-3xl text-2xl">
          Comment Here
        </h3>
        <p className="mt-2 md:text-lg sm:text-base text-sm md:leading-8 leading-7 text-gray-600">
          Any Correctness in website. plz comment below.
        </p>
      </div>

      <form className="mt-16 sm:mt-20" onSubmit={SubmitHandle}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-2">
          <div>
            <label htmlFor="first-name" className={style.label}>
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className={style.input}
                placeholder="Enter First Name"
                value={commentForm.fname}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, fname: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className={style.label}>
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className={style.input}
                placeholder="Enter Last Name"
                value={commentForm.lname}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, lname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                className={style.input}
                placeholder="Enter Email"
                value={commentForm.email}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="url" className={style.label}>
              Url
            </label>
            <div className="mt-2.5">
              <input
                type="url"
                disabled
                className={style.input}
                value={props.url}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, url: e.target.value })
                }
              />

            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={style.label}>
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                rows={4}
                placeholder="Enter your Message"
                maxLength={1000}
                className={style.input}
                value={commentForm.message}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, message: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        {error && <span className="text-indigo-500">{error}</span>}

        <button
          type="submit"
          className="btn !w-full !block mt-3"
          aria-label="Subscribe Newsletter"
        >
          {loadingBtn ? (
            <div className="flex gap-2 justify-center items-center text-center mx-auto">
              <LoaderIcon />
              <span>Loading</span>
            </div>
          ) : (
            "Submit Here"
          )}
        </button>
      </form>
    </div>
  );
}
