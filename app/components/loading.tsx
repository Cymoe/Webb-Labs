export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-indigo-400/50 animate-spin-reverse"></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-indigo-300/30 animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
