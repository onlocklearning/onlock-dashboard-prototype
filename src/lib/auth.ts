import NextAuth from "next-auth"
import { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would typically validate against your database
        // For now, we'll use a simple mock authentication
        if (credentials?.email === "admin@onlock.com" && credentials?.password === "password123") {
          return {
            id: "1",
            email: "admin@onlock.com",
            name: "Admin User",
            role: "admin"
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
      }
      return session
    }
  },
  session: {
    strategy: "jwt"
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig) 