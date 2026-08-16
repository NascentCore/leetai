# LeetAI

LeetCode-style practice platform for **AI engineering** interview prep — ML fundamentals, deep learning, LLM systems, RAG, evaluation, and MLOps.

## Status

Minimal scaffold. Problem catalog is static TypeScript data; no online judge yet.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

```
src/
  app/                  # routes: /, /problems, /problems/[slug]
  lib/problems/         # Problem type + static catalog
```

Add problems in `src/lib/problems/data.ts`.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Local development server |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |
