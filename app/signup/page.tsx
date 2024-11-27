'use client'

export default function SignUp() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">      
      <main className="max-w-xl mx-auto px-4 py-16">
        <div className="mb-8">
          <a href="/" className="text-sm text-gray-400 hover:text-gray-300 flex items-center gap-2">
            <span>←</span>
            <span>Back to home</span>
          </a>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-3 text-white">Get Early Access</h1>
          <p className="text-lg text-gray-400">Join the future of AI automation with Webb Labs.</p>
        </div>

        <div className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-1">
                Use Case
              </label>
              <textarea
                id="useCase"
                rows={3}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 px-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your AI agent needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 text-sm font-medium py-2 px-4 rounded-md border border-indigo-500/30 transition-colors"
            >
              Request Access
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
