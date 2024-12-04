import { useMutation } from "@tanstack/react-query";
import { postData } from "../lib/axios";
import { Question } from "../types/question";

export const useCreateQuestion = () => {
  return useMutation<Question, Error, Question>({
      mutationFn: (newItem: Question) => postData<Question, Question>("question/", newItem),
  });
};