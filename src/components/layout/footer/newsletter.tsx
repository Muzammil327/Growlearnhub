"use client";
import React, { useState } from "react";
import { NewsletterData } from "@/src/types/page";
import LoaderIcon from "../../element/LoaderIcon";
import axios from "axios";
import { PostNewsletter } from "@/src/app/constant";

export default function Newsletter() {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [error, setError] = useState(false);
  const [newsletter, setNewsletter] = useState<NewsletterData>({
    email: "",
  });

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingBtn(false);

    try {
      setLoadingBtn(true);
      setError(false);
      const response = await axios.post(PostNewsletter);
      if (response.data.status === "400" || response.data.status === "500") {
        setError(response.data.message);
      } else {
        setError(response.data.message);
        setNewsletter({
          email: "",
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
    <div className="relative mt-4">
      <form
        className="my-2 flex max-w-md md:gap-x-4 gap-x-2"
        onSubmit={SubmitHandle}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          className="input"
          placeholder="Enter your email"
          value={newsletter.email}
          onChange={(e) =>
            setNewsletter({ ...newsletter, email: e.target.value })
          }
        />
        <button
          type="submit"
          className="btn"
          aria-label="Subscribe Newsletter"
          disabled={loadingBtn}
        >
          {loadingBtn ? (
            <div className="flex gap-2">
              <LoaderIcon />
              <span>Loading</span>
            </div>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      <span className="text-indigo-500">
        {" "}
        {error && <span className="text-indigo-500">{error}</span>}
      </span>
    </div>
  );
}
