import type { Problem } from "./types";

/**
 * Seed problem catalog. Add real AI-engineering interview problems here.
 * Keep content static for now; a database / CMS can replace this later.
 */
export const problems: Problem[] = [
  {
    id: "1",
    slug: "cosine-similarity",
    title: "Cosine Similarity",
    difficulty: "easy",
    category: "ml-fundamentals",
    tags: ["vectors", "embeddings", "similarity"],
    summary: "Implement cosine similarity between two embedding vectors.",
    description: `## Problem

Given two non-zero vectors \`a\` and \`b\` of equal length, return their cosine similarity:

\`\`\`
cos(θ) = (a · b) / (||a|| * ||b||)
\`\`\`

## Constraints

- Vectors contain floating-point numbers
- Lengths are equal and at least 1
- Return a float in \`[-1, 1]\`

## Example

\`\`\`
Input:  a = [1, 0], b = [0, 1]
Output: 0.0
\`\`\`
`,
    starterCode: [
      {
        language: "python",
        code: `from typing import Sequence

def cosine_similarity(a: Sequence[float], b: Sequence[float]) -> float:
    """Return cosine similarity between vectors a and b."""
    # TODO: implement
    raise NotImplementedError
`,
      },
    ],
  },
];

export function getProblemBySlug(slug: string): Problem | undefined {
  return problems.find((p) => p.slug === slug);
}

export function listProblems(): Problem[] {
  return problems;
}
