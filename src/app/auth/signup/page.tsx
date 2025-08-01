'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to signin page after a short delay
    const timer = setTimeout(() => {
      router.push('/auth/signin?message=Please use Google OAuth to sign in')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Account Creation
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We use Google OAuth for authentication
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="rounded-md bg-blue-50 p-4">
            <div className="text-sm text-blue-700">
              <p>To create an account, please use Google OAuth.</p>
              <p className="mt-2">You'll be redirected to the sign-in page automatically.</p>
            </div>
          </div>

          <div>
            <Link 
              href="/auth/signin" 
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Or click here to go to sign-in page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 