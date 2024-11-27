'use client'

import Link from 'next/link';
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">      
      <main className="max-w-xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-300 flex items-center gap-2">
            <span>←</span>
            <span>Back to home</span>
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-3 text-white">Get Early Access</h1>
          <p className="text-lg text-gray-400">Join the future of AI automation with Webb Labs.</p>
        </div>

        <SignUp
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-zinc-800/50 border border-zinc-700/50",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton: "bg-zinc-700/50 border border-zinc-600/50 text-white hover:bg-zinc-600/50",
              formButtonPrimary: "bg-indigo-500 hover:bg-indigo-600",
              footerAction: "text-gray-400",
              formFieldLabel: "text-gray-300",
              formFieldInput: "bg-zinc-700/50 border border-zinc-600/50 text-white",
              dividerLine: "bg-zinc-700",
              dividerText: "text-gray-400",
            },
          }}
        />
      </main>
    </div>
  );
}
