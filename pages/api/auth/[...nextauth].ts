import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"

import { prisma } from "../../../src/db/prisma"

export const authOptions = {
  // Configure one or more authentication providers
  PrismaAdapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: "NextAuth <noreply@example.com>",
      // ...add more providers here
    }),
  ],
}

export default NextAuth(authOptions)
