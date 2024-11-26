"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Plus, Minus, X } from "@/components/elements/Icon";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import Editor from "@/components/ui/rich-text/editor";
import { useGetClasses } from "@/src/hooks/use-class";
import { IpropsBook } from "@/src/types/book";
import { useGetBooks } from "@/src/hooks/use-book";
import { IpropsClass } from "@/src/types/class";
import { useGetChapter } from "@/src/hooks/use-chapter";
import { IpropsChapter } from "@/src/types/chapter";
import { useGetHeadings } from "@/src/hooks/use-heading";
import { IpropsSubHeading } from "@/src/types/subheading";
import { IpropsHeading } from "@/src/types/heading";
import { useGetSubHeadings } from "@/src/hooks/use-subheading";
import { InputTags } from "./TagField";
import { postData } from "@/src/lib/axios";
import { ApiResponse } from "@/src/types/ApiResponse";
import { useToast } from "@/src/hooks/use-toast";

const questionSchema = z.object({
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

const formSchema = z.object({
  book: z.string().min(1, "Book selection is required"),
  class: z.string().optional(),
  chapter: z.string().min(1, "Chapter selection is required"),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  creationType: z.enum(["creation", "testing"]),
  questions: z.array(questionSchema),
});

type FormValues = z.infer<typeof formSchema>;

export default function DashboardQuestionAddPage({
  userId
}: {
  userId: number
}) {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false); // Tracks the button state

  const handleButtonClick = () => {
    if (currentStep < 3) {
      // Disable the button when clicked
      setIsButtonDisabled(true);

      // Simulate saving data or processing, then enable the button
      setTimeout(() => {
        setCurrentStep(currentStep + 1); // Move to the next step
        setIsButtonDisabled(false); // Re-enable the button for the next step
      }, 500); // Adjust delay as needed (e.g., for API calls)
    }
  };

  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      book: "",
      class: "",
      chapter: "",
      heading: "",
      subheading: "",
      creationType: "creation",
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const selectedClass = form.watch("class");
  const classId = selectedClass ? parseInt(selectedClass, 10) : 0;

  const selectedBook = form.watch("book");
  const bookId = selectedBook ? parseInt(selectedBook, 10) : 0;

  const selectedHeading = form.watch("heading");
  const headingId = selectedHeading ? parseInt(selectedHeading, 10) : 0;

  const {
    data: classes,
    error: classError,
    isLoading: classLoading,
  } = useGetClasses();
  const {
    data: books,
    error: bookError,
    isLoading: bookLoading,
  } = useGetBooks(classId);
  const {
    data: chapters,
    error: chapterError,
    isLoading: chapterLoading,
  } = useGetChapter(bookId);
  const {
    data: headings,
    error: headingsError,
    isLoading: headingsLoading,
  } = useGetHeadings(bookId);
  const {
    data: subheadings,
    error: subheadingsError,
    isLoading: subheadingsLoading,
  } = useGetSubHeadings(headingId);


  const { reset, formState: { errors } } = form;


  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    // Prepare data for the API
    const data = {
      userId: userId,
      book: values.book,
      classes: values.class,
      chapter: values.chapter,
      heading: values.heading,
      subheading: values.subheading,
      creationType: values.creationType,
      questions: values.questions,
    };

    try {
      const response = await postData<ApiResponse<any>, typeof data>(
        "question",
        data,
      );
      if (response.statusbar === 200) {
        toast({
          title: response.message,
        });
        reset();
      } else {
        toast({
          title: response.error,
        });
      }
    } catch (error) {
      console.error("An error occurred during add question:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addQuestion = () => {
    append({
      name: "",
      type: "multipleChoice",
      options: ["", "", "", ""],
      correctOptions: [],
      explanation: "",
      difficulty: "medium",
      time: 60,
      score: 1,
      tags: [],
    });
  };

  const addOption = (questionIndex: number) => {
    const currentOptions = form.getValues(`questions.${questionIndex}.options`);
    if (currentOptions.length < 6) {
      form.setValue(`questions.${questionIndex}.options`, [
        ...currentOptions,
        "",
      ]);
    }
  };

  const removeOption = (questionIndex: number) => {
    const currentOptions = form.getValues(`questions.${questionIndex}.options`);
    if (currentOptions.length > 2) {
      form.setValue(
        `questions.${questionIndex}.options`,
        currentOptions.slice(0, -1),
      );
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create New Question</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {["Basic Info", "Questions", "Review"].map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium",
                        currentStep > index + 1
                          ? "bg-destructive text-destructive-foreground"
                          : currentStep === index + 1
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-muted text-muted-foreground",
                      )}
                    >
                      {index + 1}
                    </div>
                    <span className="mt-2 text-sm font-medium">{step}</span>
                  </div>
                  {index < 2 && (
                    <div
                      className={cn(
                        "mx-4 h-1 flex-1",
                        currentStep > index + 1 ? "bg-destructive" : "bg-muted",
                      )}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  {/* ------------------ Class Add Here ------------------ */}
                  <FormField
                    control={form.control}
                    name="class"
                    disabled={classLoading}
                    render={({ field }) => (
                      <FormItem>
                        {classLoading ? (
                          <FormLabel>Loading...</FormLabel>
                        ) : classError ? (
                          <FormLabel>
                            {`Error: ${classError.message}`}
                          </FormLabel>
                        ) : (
                          <FormLabel>Choose Class</FormLabel>
                        )}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {classes &&
                              classes.map((data: IpropsClass) => (
                                <SelectItem
                                  key={data.id}
                                  value={data.id.toString()}
                                >
                                  {data.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ------------------ Book Add Here ------------------ */}
                  <FormField
                    control={form.control}
                    name="book"
                    disabled={bookLoading}
                    render={({ field }) => (
                      <FormItem>
                        {bookLoading ? (
                          <FormLabel>Loading...</FormLabel>
                        ) : bookError ? (
                          <FormLabel>{`Error: ${bookError.message}`}</FormLabel>
                        ) : (
                          <FormLabel>Choose Book</FormLabel>
                        )}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a book" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {books &&
                              books.map((data: IpropsBook) => (
                                <SelectItem
                                  key={data.id}
                                  value={data.id.toString()}
                                >
                                  {data.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ------------------ Chapter Add Here ------------------ */}
                  <FormField
                    control={form.control}
                    name="chapter"
                    disabled={chapterLoading}
                    render={({ field }) => (
                      <FormItem>
                        {chapterLoading ? (
                          <FormLabel>Loading...</FormLabel>
                        ) : chapterError ? (
                          <FormLabel>
                            {`Error: ${chapterError.message}`}
                          </FormLabel>
                        ) : (
                          <FormLabel>Choose Chapter</FormLabel>
                        )}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a chapter" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {chapters &&
                              chapters.map((data: IpropsChapter) => (
                                <SelectItem
                                  key={data.id}
                                  value={data.id.toString()}
                                >
                                  {data.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ------------------ Heading Add Here ------------------ */}
                  <FormField
                    control={form.control}
                    name="heading"
                    disabled={headingsLoading}
                    render={({ field }) => (
                      <FormItem>
                        {headingsLoading ? (
                          <FormLabel>Loading...</FormLabel>
                        ) : headingsError ? (
                          <FormLabel>
                            {`Error: ${headingsError.message}`}
                          </FormLabel>
                        ) : (
                          <FormLabel>Choose Heading</FormLabel>
                        )}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a heading" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {headings &&
                              headings.map((data: IpropsHeading) => (
                                <SelectItem
                                  key={data.id}
                                  value={data.id.toString()}
                                >
                                  {data.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ------------------ Sub Heading Add Here ------------------ */}
                  <FormField
                    control={form.control}
                    name="subheading"
                    disabled={subheadingsLoading}
                    render={({ field }) => (
                      <FormItem>
                        {subheadingsLoading ? (
                          <FormLabel>Loading...</FormLabel>
                        ) : subheadingsError ? (
                          <FormLabel>
                            {`Error: ${subheadingsError.message}`}
                          </FormLabel>
                        ) : (
                          <FormLabel>Choose Sub Heading</FormLabel>
                        )}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a sub heading" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subheadings &&
                              subheadings.map((data: IpropsSubHeading) => (
                                <SelectItem
                                  key={data.id}
                                  value={data.id.toString()}
                                >
                                  {data.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="creationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Question creation or testing student
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select creation type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="creation">
                              Question Creation
                            </SelectItem>
                            {/* <SelectItem value="testing">
                              Testing Student
                            </SelectItem> */}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  {fields.map((field, index) => (
                    <Card key={field.id}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-base font-semibold">
                          Question {index + 1}
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => remove(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name={`questions.${index}.name`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Question Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`questions.${index}.type`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Quiz Type</FormLabel>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    if (value === "trueFalse") {
                                      form.setValue(
                                        `questions.${index}.options`,
                                        ["True", "False"],
                                      );
                                    } else {
                                      form.setValue(
                                        `questions.${index}.options`,
                                        ["", "", "", ""],
                                      );
                                    }
                                  }}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select quiz type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="multipleChoice">
                                      Multiple Choice
                                    </SelectItem>
                                    <SelectItem value="trueFalse">
                                      True/False
                                    </SelectItem>
                                    <SelectItem value="fillInTheBlank">
                                      Fill in the Blank
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {form.watch(`questions.${index}.type`) ===
                            "trueFalse" ? (
                            <>
                              {["True", "False"].map((option, optionIndex) => (
                                <FormField
                                  key={optionIndex}
                                  control={form.control}
                                  name={`questions.${index}.options.${optionIndex}`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>{option}</FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          value={option}
                                          disabled
                                        />
                                      </FormControl>
                                    </FormItem>
                                  )}
                                />
                              ))}
                              <FormField
                                control={form.control}
                                name={`questions.${index}.correctOptions`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Correct Answer</FormLabel>
                                    <FormControl>
                                      <div className="flex space-x-4">
                                        {["True", "False"].map(
                                          (option, optionIndex) => (
                                            <div
                                              key={optionIndex}
                                              className="flex items-center space-x-2"
                                            >
                                              <Switch
                                                checked={field.value.includes(
                                                  optionIndex,
                                                )}
                                                onCheckedChange={(checked) => {
                                                  const newValue = checked
                                                    ? [optionIndex]
                                                    : [];
                                                  field.onChange(newValue);
                                                }}
                                              />
                                              <span>{option}</span>
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </>
                          ) : (
                            <>
                              {form
                                .watch(`questions.${index}.options`)
                                .map((_, optionIndex) => (
                                  <FormField
                                    key={optionIndex}
                                    control={form.control}
                                    name={`questions.${index}.options.${optionIndex}`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>
                                          Option {optionIndex + 1}
                                        </FormLabel>
                                        <FormControl>
                                          <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                ))}
                              <div className="flex justify-between">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => addOption(index)}
                                  disabled={
                                    form.watch(`questions.${index}.options`)
                                      .length >= 6
                                  }
                                >
                                  <Plus className="mr-2 h-4 w-4" />
                                  Add Option
                                </Button>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeOption(index)}
                                  disabled={
                                    form.watch(`questions.${index}.options`)
                                      .length <= 2
                                  }
                                >
                                  <Minus className="mr-2 h-4 w-4" />
                                  Remove Option
                                </Button>
                              </div>
                              <FormField
                                control={form.control}
                                name={`questions.${index}.correctOptions`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Correct Answer(s)</FormLabel>
                                    <FormControl>
                                      <div className="flex flex-wrap gap-4">
                                        {form
                                          .watch(`questions.${index}.options`)
                                          .map((_, optionIndex) => (
                                            <div
                                              key={optionIndex}
                                              className="flex items-center space-x-2"
                                            >
                                              <Switch
                                                checked={field.value.includes(
                                                  optionIndex,
                                                )}
                                                onCheckedChange={(checked) => {
                                                  const newValue = checked
                                                    ? [
                                                      ...field.value,
                                                      optionIndex,
                                                    ]
                                                    : field.value.filter(
                                                      (v) =>
                                                        v !== optionIndex,
                                                    );
                                                  field.onChange(newValue);
                                                }}
                                              />
                                              <span>
                                                Option {optionIndex + 1}
                                              </span>
                                            </div>
                                          ))}
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </>
                          )}

                          <FormField
                            control={form.control}
                            name={`questions.${index}.explanation`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Explanation</FormLabel>
                                <FormControl>
                                  <Editor
                                    content={field.value}
                                    onChange={field.onChange}
                                    placeholder="Write your explanation here..."
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`questions.${index}.difficulty`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Difficulty</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select difficulty" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="easy">Easy</SelectItem>
                                    <SelectItem value="medium">
                                      Medium
                                    </SelectItem>
                                    <SelectItem value="hard">Hard</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`questions.${index}.time`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Time (seconds)</FormLabel>
                                <FormControl>
                                  <Slider
                                    min={1}
                                    max={300}
                                    step={1}
                                    value={[field.value]}
                                    onValueChange={(value) =>
                                      field.onChange(value[0])
                                    }
                                  />
                                </FormControl>
                                <FormDescription>
                                  {field.value} seconds
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`questions.${index}.score`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Score</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    {...field}
                                    onChange={(e) =>
                                      field.onChange(parseInt(e.target.value))
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`questions.${index}.tags`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Add Data Point(s)</FormLabel>
                                <FormControl>
                                  <InputTags
                                    {...field} // This will pass value and onChange to the InputTags component
                                    onChange={(value) => {
                                      // Ensure the value passed to onChange is an array of strings
                                      field.onChange(value); // Update the form state with the new tags
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />


                          {form.watch("creationType") === "testing" && (
                            <FormField
                              control={form.control}
                              name={`questions.${index}.passMark`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Pass Mark</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(parseInt(e.target.value))
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button type="button" onClick={addQuestion}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Question
                  </Button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  {fields.map((field, index) => (
                    <Card key={field.id}>
                      <CardHeader>
                        <CardTitle>
                          {form.watch(`questions.${index}.name`)}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Type: {form.watch(`questions.${index}.type`)}</p>
                        <p>
                          Difficulty:{" "}
                          {form.watch(`questions.${index}.difficulty`)}
                        </p>
                        <p>
                          Time: {form.watch(`questions.${index}.time`)} seconds
                        </p>
                        <p>Score: {form.watch(`questions.${index}.score`)}</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">Edit</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit Question</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <FormField
                                control={form.control}
                                name={`questions.${index}.name`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Question Name</FormLabel>
                                    <FormControl>
                                      <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`questions.${index}.type`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Quiz Type</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select quiz type" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="multipleChoice">
                                          Multiple Choice
                                        </SelectItem>
                                        <SelectItem value="trueFalse">
                                          True/False
                                        </SelectItem>
                                        <SelectItem value="fillInTheBlank">
                                          Fill in the Blank
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              {/* Add other fields here */}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  type={currentStep === 3 ? "submit" : "button"}
                  onClick={currentStep === 3 ? undefined : handleButtonClick} // Only handle click if not on the last step
                  disabled={isSubmitting && isButtonDisabled} // Disable the button dynamically
                >
                  {currentStep === 3 ? "Create Quiz" : "Next"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

