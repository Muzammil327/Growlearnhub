"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Container from "@/src/components/element/container";
import Loading from "@/src/components/element/Loading";
import axios from "axios";
import { PaginationTypes } from "@/src/types/page";
import Loading2 from "../element/Loading2";
import Loading3 from "../element/Loading3";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState<PaginationTypes>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
  });

  const handleSearch = useCallback(
    async (page = 1) => {
      try {
        setError(false);
        setLoading(true);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get/search?title=${query}&page=${page}`
        );
        setResults(response.data.data);
        // Calculate total pages based on query result count
        const totalCount = response.data.pagination.totalItems;

        const totalPages = Math.ceil(totalCount / 10);

        setPagination({
          totalItems: totalCount,
          totalPages: totalPages,
          currentPage: page,
        });
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError(true);
      return;
    }
    await handleSearch();
  };

  const handlePaginationClick = (page: number) => {
    handleSearch(page);
  };

  return (
    <Container>
      <div className="h-[400px] w-full flex items-center flex-col justify-center">
        <h1 className="py-16 text-4xl font-semibold">
          Hey! Here You can Type your Query.
        </h1>
        {error && <p className="text-red-500">Please enter a query</p>}
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-center"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 flex items-center justify-center w-8/12 pl-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
          />
          <button
            type="submit"
            className="bg-indigo-500 py-3 px-8 text-white"
            aria-label="Search"
          >
            Search
          </button>
        </form>
      </div>
      {loading ? (
        <div className="py-4 my-4 gap-y-5">
          <Loading3 />
          <Loading3 />
          <Loading3 />
          <Loading3 />
          <Loading3 />
        </div>
      ) : (
        <>
          <div className="mb-20">
            <ul>
              {results.map((result: any) => (
                <li
                  key={result._id}
                  className="bg-slate-200 py-4 w-full mb-2 rounded-md pl-5"
                >
                  <Link href={`/mcqs/${result.slug}`}>{result.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {pagination.totalPages > 1 && (
            <div className="flex gap-1">
              {Array.from({ length: pagination.totalPages }, (_, index) => (
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
          )}
        </>
      )}
    </Container>
  );
}
