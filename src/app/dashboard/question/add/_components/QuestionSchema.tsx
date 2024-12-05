import { z } from "zod";

export const questionSchema = z.object({
  name: z.string().min(1, "Question name is required"),
  type: z.enum(["multipleChoice", "trueFalse", "fillInTheBlank"]),
  options: z.array(z.string()).min(2, "At least two options are required"),
  correctOptions: z
    .array(z.number())
    .min(1, "At least one correct option is required"),
  explanation: z.string().min(1, "Explanation is required"),
  difficulty: z.enum(["easy", "medium", "hard"]),
  time: z.number().min(1, "Time must be at least 1 second"),
  score: z.number().min(1, "Score must be at least 1"),
  passMark: z.number().optional(),
  tags: z.array(z.string()),
});

export const formSchema = z.object({
  book: z.string().min(1, "Book selection is required"),
  class: z.string().min(1, "Class selection is required"),
  chapter: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  creationType: z.enum(["creation", "testing"]),
  questions: z.array(questionSchema),
});

export type QuestionFormValues = z.infer<typeof formSchema>;
