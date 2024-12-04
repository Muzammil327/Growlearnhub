"use client";

import * as React from "react";
import { Button } from "@/src/components/ui/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/ui/input-otp";
import DarkLightModeButton from "@/src/components/elements/DarkLightModeButton";
import { Processing } from "@/src/components/elements/Icon";
import { useRouter } from "next/navigation"; // Import useRouter
import { postData } from "@/src/lib/axios";
import { ApiResponse } from "@/src/types/ApiResponse";
import { useToast } from "@/src/hooks/use-toast";

export function OTPForm() {
  const [value, setValue] = React.useState("");

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter(); // Initialize the router
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use postData to call the API for OTP verification
      const response = await postData<ApiResponse<any>, { otp: string }>(
        "auth/verify-otp/",
        { otp: value },
      );

      // Handle response from the server
      if (response.statusbar === 200) {
        // Handle successful registration
        toast({
          title: response.message,
        });
        // Redirect or show success message
        router.push("/login");
      } else {
        toast({
          title: response.error,
        });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md space-y-8 rounded-lg border bg-card p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-extrabold">OTP Verification</h2>
          <DarkLightModeButton />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-6"
        >
          <div className="space-y-2">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Processing /> : "Verify OTP"}
          </Button>
        </form>
      </div>
    </div>
  );
}
