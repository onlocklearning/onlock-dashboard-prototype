# Google OAuth Setup Guide

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Supabase Configuration (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Database Configuration (if using Prisma)
DATABASE_URL=your-database-connection-string
```

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create a new OAuth 2.0 Client ID
5. Set the authorized redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env.local` file

## Database Integration

If you're using Prisma, you'll need to:

1. Install Prisma: `npm install prisma @prisma/client`
2. Initialize Prisma: `npx prisma init`
3. Add the User model to your `schema.prisma`:

```prisma
model User {
  id          String   @id @default(cuid())
  email       String   @unique
  name        String?
  image       String?
  provider    String
  providerId  String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  lastLoginAt DateTime?
  
  @@map("users")
}
```

4. Run migrations: `npx prisma migrate dev`

If you're using Supabase, you'll need to:

1. Install Supabase client: `npm install @supabase/supabase-js`
2. Set up your Supabase project and get the URL and service role key
3. Add the environment variables to your `.env.local` file

## Features

- ✅ Google OAuth authentication
- ✅ User creation/update in database
- ✅ JWT session management
- ✅ Protected routes with middleware
- ✅ Clean sign-in UI with Google button
- ✅ Automatic redirect from signup to signin

## Usage

1. Users visit `/auth/signin`
2. Click "Sign in with Google"
3. Complete Google OAuth flow
4. User is created/updated in your database
5. Redirected to `/dashboard`

The authentication is now fully configured for Google OAuth only! 