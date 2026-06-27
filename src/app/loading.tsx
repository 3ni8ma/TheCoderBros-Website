// Updated: 2026-06-27 18:30:06
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
