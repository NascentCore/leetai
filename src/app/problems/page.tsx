import Link from "next/link";
import { listProblems } from "@/lib/problems";

const difficultyColor: Record<string, string> = {
  easy: "text-emerald-700",
  medium: "text-amber-700",
  hard: "text-rose-700",
};

export default function ProblemsPage() {
  const problems = listProblems();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Problems</h1>
        <p className="mt-1 text-sm text-zinc-500">
          {problems.length} problem{problems.length === 1 ? "" : "s"}
        </p>
      </div>

      <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link
              href={`/problems/${problem.slug}`}
              className="flex items-center gap-4 px-4 py-3 hover:bg-zinc-50"
            >
              <span className="w-8 shrink-0 text-sm text-zinc-400">
                {problem.id}
              </span>
              <span className="flex-1 font-medium">{problem.title}</span>
              <span
                className={`text-sm capitalize ${difficultyColor[problem.difficulty]}`}
              >
                {problem.difficulty}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
