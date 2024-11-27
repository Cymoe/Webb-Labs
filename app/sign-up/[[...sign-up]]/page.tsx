import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
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
    </div>
  );
}
