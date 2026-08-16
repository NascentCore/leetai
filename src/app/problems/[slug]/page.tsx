import Link from "next/link";
import { notFound } from "next/navigation";
import { getProblemBySlug, listProblems } from "@/lib/problems";

export function generateStaticParams() {
  return listProblems().map((p) => ({ slug: p.slug }));
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);

  if (!problem) {
    notFound();
  }

  const starter = problem.starterCode[0];

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/problems"
          className="text-sm text-zinc-500 hover:text-zinc-800"
        >
          ← Problems
        </Link>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          {problem.id}. {problem.title}
        </h1>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-500">
          <span className="capitalize">{problem.difficulty}</span>
          <span>·</span>
          <span>{problem.category}</span>
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-100 px-2 py-0.5 text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="space-y-2">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-400">
          Description
        </h2>
        <pre className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-white p-4 font-sans text-sm leading-relaxed text-zinc-800">
          {problem.description}
        </pre>
      </section>

      {starter && (
        <section className="space-y-2">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-400">
            Starter ({starter.language})
          </h2>
          <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-900 p-4 font-mono text-sm text-zinc-100">
            {starter.code}
          </pre>
        </section>
      )}
    </div>
  );
}
