import React from 'react';

export default function ComponentDetail({ item }: { item: { id: string; title: string; summary: string; content?: string } | null }) {
  if (!item) {
    return (
      <div className="rounded-md border border-transparent bg-black/5 p-6 text-zinc-400" aria-live="polite">Selecciona un componente para ver detalles</div>
    );
  }

  return (
    <article className="rounded-md border border-transparent bg-black/5 p-6" aria-live="polite">
      <h3 className="text-2xl font-semibold">{item.title}</h3>
      <p className="mt-2 text-zinc-300">{item.summary}</p>
      {item.content && (
        <div className="mt-4 text-sm text-zinc-200 whitespace-pre-wrap">{item.content}</div>
      )}
    </article>
  );
}
