# OnLock Learning Dashboard

A modern learning dashboard built with Next.js, TypeScript, and Tailwind CSS. Features authentication, lesson filtering, and a beautiful user interface.

## Features

- 🔐 **Authentication** - Secure login/signup with NextAuth.js
- 📚 **Lesson Management** - Browse and filter lessons by mode and subject
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed
- 🔥 **Streak Tracking** - Gamified learning experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd onlock-dashboard-prototype
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following content:
```bash
# NextAuth.js Secret
# Generate a new secret with: openssl rand -base64 32
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Demo Credentials

For testing purposes, you can use these demo credentials:
- **Email**: admin@onlock.com
- **Password**: password123

## Authentication Setup

This project uses NextAuth.js for authentication. The current setup includes:

- **Credentials Provider** - Email/password authentication
- **Protected Routes** - Dashboard and lesson pages require authentication
- **User Menu** - Display user info and sign-out functionality
- **Middleware** - Automatic route protection

### Adding More Authentication Providers

To add additional providers (Google, GitHub, etc.), modify `src/lib/auth.ts`:

```typescript
import GoogleProvider from "next-auth/providers/google"

export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ... existing providers
  ],
  // ... rest of config
}
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/auth/          # Authentication API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard page
│   └── lesson/            # Lesson pages
├── components/            # Reusable components
├── data/                  # Mock data and types
└── lib/                   # Utility functions and configs
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **NextAuth.js** - Authentication for Next.js
- **React 19** - Latest React features

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
