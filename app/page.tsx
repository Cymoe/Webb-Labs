'use client'

import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

export default function Home() {
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
    <div className="min-h-screen bg-zinc-900 text-gray-100">      
      <main className="max-w-xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col items-start">
            <div className="w-full flex justify-between items-start mb-8">
              <div className="relative w-36 h-36 rounded-lg overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Webb Labs Hero"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                <div className="absolute inset-0 bg-zinc-900/40" />
                <div className="absolute inset-0 border border-zinc-800 rounded-lg" />
              </div>
              <SignInButton mode="modal">
                <button className="text-indigo-400 hover:text-indigo-300 text-sm font-bold py-1 px-3 hover:border-indigo-700/50 transition-colors">
                  Login
                </button>
              </SignInButton>
            </div>

            <h1 className="text-2xl font-bold mb-2 text-white">Webb Labs</h1>
            <p className="text-sm text-gray-400 mb-4">We create and deploy AI Agents for organizations.</p>
            
            <div className="prose mb-6">
              <p className="text-sm text-gray-300">
                We develop sophisticated AI agents that transform how organizations operate. Our agents are designed to integrate seamlessly with your existing workflows, automating complex tasks and delivering measurable business value through intelligent automation.
              </p>
            </div>

            <Link 
              href="/sign-up"
              className="bg-indigo-600/20 hover:bg-indigo-600/30 text-white font-bold text-sm py-2 px-4 rounded-md border border-indigo-500/30 transition-colors"
            >
              Sign up for early access →
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-white">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-gray-200">How effective are Webb Labs AI Agents?</h3>
              <p className="text-sm text-gray-400">Our agents achieve ~3% improvement in operational efficiency and contribute to 10-20% productivity gains.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-200">What kind of organizations can benefit?</h3>
              <p className="text-sm text-gray-400">Organizations with complex workflows and repetitive tasks see the most impact.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-200">How can we measure results?</h3>
              <p className="text-sm text-gray-400">We provide comprehensive analytics and performance metrics for each deployed agent.</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-200">How does pricing work?</h3>
              <p className="text-sm text-gray-400">We offer flexible subscription models based on usage and deployment scope.</p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-white">Examples</h2>
          <div className="bg-zinc-800 p-5 rounded-lg border border-zinc-700">
            <h3 className="font-semibold mb-2 text-sm text-gray-200">Case Study #1: Enterprise Workflow Automation</h3>
            <p className="text-sm text-gray-400">Automated complex business processes resulting in 40% reduction in manual tasks.</p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Who are we?</h2>
          <p className="text-sm text-gray-400">
            Webb Labs is led by industry experts in AI and automation, dedicated to transforming how organizations work through intelligent agent technology.
          </p>
        </div>
      </main>
    </div>
  );
}