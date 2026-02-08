import React from 'react';

export default function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-4 overflow-auto rounded-md bg-black/10 p-4 text-sm text-zinc-50" role="region" aria-label="Snippet de código">
      <code>{code}</code>
    </pre>
  );
}
