export type Difficulty = "easy" | "medium" | "hard";

export type ProblemCategory =
  | "ml-fundamentals"
  | "deep-learning"
  | "llm-systems"
  | "rag"
  | "evaluation"
  | "mlops"
  | "coding";

export interface ProblemStarter {
  language: string;
  code: string;
}

export interface Problem {
  id: string;
  slug: string;
  title: string;
  difficulty: Difficulty;
  category: ProblemCategory;
  tags: string[];
  /** Short one-line summary shown in the problem list. */
  summary: string;
  /** Markdown body for the problem statement. */
  description: string;
  starterCode: ProblemStarter[];
  /** Placeholder for future judge / test cases. */
  testCases?: unknown[];
}
