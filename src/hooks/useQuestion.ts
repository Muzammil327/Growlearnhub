'use client'
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getData,
  postData,
  putData,
  deleteData,
  getPaginatedData,
} from "../lib/axios";
import { FetchQuestions, Question } from "../types/question";

interface QuizOption {
  text: string;
  isCorrect: boolean;
}

interface Quiz {
  id: number;
  name: string;
  explanation: string; // May contain HTML
  tags: string; // JSON string
  createdAt: string; // ISO date
  options: QuizOption[];
}

// GET single question by slug
export const useGetItemBySlug = (slug: string) => {
  return useQuery<Quiz, Error>({
    queryKey: ["question", slug], // Include slug in queryKey for caching
    queryFn: () => getData<Quiz>(`question/slug?slug=${slug}`),
    enabled: !!slug, // Prevent query from running without a slug
  });
};

// GET single question by id
export const useGetItem = (itemId: number) => {
  return useQuery<Question, Error>({
    queryKey: ["question"],
    queryFn: () => getData<Question>(`question/${itemId}`),
  });
};

// GET all questions
export const useGetItems = () => {
  return useQuery<Question[], Error>({
    queryKey: ["questions"],
    queryFn: () => getData<Question[]>("question"),
  });
};

// Updated getData function to handle pagination
export const usePaginationGetItems = (page: number, pageSize: number) => {
  return useQuery<FetchQuestions, Error>({
    queryKey: ["question", page, pageSize], // Key to cache and manage the query
    queryFn: () => getPaginatedData<FetchQuestions>("question", page, pageSize), // Fetch data
    // keepPreviousData: true,   // Uncomment if you want to preserve previous data on page change
  });
};

// POST request
export const useCreateItem = () => {
  return useMutation<Question, Error, Question>({
    mutationFn: (newItem: Question) =>
      postData<Question, Question>("question", newItem),
  });
};

// PUT request
export const useUpdateItem = (itemId: number) => {
  return useMutation<Question, Error, Question>({
    mutationFn: (updatedItem: Question) =>
      putData<Question, Question>(`question/${itemId}`, updatedItem),
  });
};

// DELETE request
export const useDeleteItem = (itemId: number) => {
  return useMutation<Question, Error, void>({
    mutationFn: () => deleteData<Question>(`question?id=${itemId}`),
  });
};
