import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import pool from "@/src/lib/pg"; // Assuming pool is your PostgreSQL connection
import bcryptjs from "bcryptjs"; // Using bcryptjs instead of bcrypt

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials: any): Promise<any> {
        try {
          const { email, password } = credentials;

          if (!email || !password) {
            throw new Error("Invalid email or password.");
          }

          // Step 1: Fetch user details by email
          const query = `SELECT id, username, email, password, role, email_verified FROM users WHERE email = $1`;
          const result = await pool.query(query, [email]);

          if (result.rows.length === 0) {
            throw new Error("User not found.");
          }

          const user = result.rows[0];
          // Step 2: Check if the email is verified
          if (!user.email_verified) {
            throw new Error(
              "Email not verified. Please verify your email before proceeding.",
            );
          }

          // Step 3: Validate password
          const passwordMatch = await bcryptjs.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error("Invalid password.");
          }

          // Return user data
          return {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            emailVerified: user.email_verified,
          };
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, session, account, trigger }) {
      if (
        trigger === "update" &&
        session?.phone &&
        session?.address &&
        session?.city &&
        session?.zipCode &&
        session?.country &&
        session?.role &&
        session?.username
      ) {
        token.username = session.username;
        token.role = session.role;
        token.phone = session.phone;
        token.country = session.country;
        token.city = session.city;
        token.zipCode = session.zipCode;
        token.address = session.address;
      }
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.role = user.role;
      }
      token.exp = Math.floor(Date.now() / 1000) + 1800;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.username = token.username as string;
      session.user.email = token.email as string;
      session.user.role = token.role as string;

      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes
  },
  secret: process.env.JWT_SECRET,
});
