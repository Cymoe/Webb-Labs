'use client'

import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";

export default function Page() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setIsRedirecting(true);
      router.push('/dashboard');
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded || isRedirecting) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <SignIn
        signUpUrl="/sign-up"
        afterSignInUrl="/dashboard"
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
    </div>
  );
}
