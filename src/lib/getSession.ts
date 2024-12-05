import { auth } from "@/auth";
import { cache } from "react";

export const getSession = cache(async () => {
  const session = await auth();

  // Ensure the session and user object exist before destructuring
  const userRole = session?.user?.role as string;
  const userId: number = session?.user?.id ? Number(session.user.id) : -1; // Ensuring userId is always a number
  const userEmail = session?.user?.email as string;
  const userUsername = session?.user?.username as string;

  // Return the desired data
  return {
    userRole,
    userId,
    userEmail,
    userUsername,
    session,
  };
});

