import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">LeetAI</h1>
      <p className="max-w-xl text-zinc-600 leading-relaxed">
        A LeetCode-style practice site for AI engineering interviews — ML
        fundamentals, LLM systems, RAG, evaluation, and MLOps.
      </p>
      <Link
        href="/problems"
        className="inline-flex h-10 items-center rounded-md bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800"
      >
        Browse problems
      </Link>
    </div>
  );
}
