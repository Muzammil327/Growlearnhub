"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { useToast } from "@/src/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Processing } from "@/components/elements/Icon";
import { z } from "zod";

type FormData = {
  email: string;
};

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required") // Ensure the email field is not empty
    .email("Invalid email format"), // Ensure the email is in a valid format
});

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newsletterSchema),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    toast({
      description: "Getting your email.",
    });
    console.log(data);
    try {
      toast({
        title: "Success",
        description: "You have successfully subscribed!",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error(error);
      // Handle error if something goes wrong
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive", // You can change this depending on your design
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-1 w-full">
      <div className="flex w-full items-center">
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          className="bg-input_light_to_dark placeholder:text-input_dark_to_light h-12 w-full flex-grow rounded-md rounded-l-md rounded-r-none border border-input px-4 text-base outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />

        <Button
          type="submit"
          className="h-12 rounded-l-none rounded-r-md"
          disabled={loading}
        >
          {loading ? <Processing /> : "Subscribe"}
        </Button>
      </div>
      {errors.email && (
        <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
      )}
    </form>
  );
}
