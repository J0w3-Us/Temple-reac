import React from 'react';

export default function ComponentDetail({ item }: { item: { id: string; title: string; summary: string; content?: string } | null }) {
  if (!item) {
    return (
      <div className="text-center py-12" aria-live="polite">
        <div className="h-16 w-16 mx-auto rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
          <svg className="h-8 w-8 text-zinc-400" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5"/>
            <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-zinc-300 mb-3">Selecciona una sección</h3>
        <p className="text-zinc-500 max-w-md mx-auto">Elige un elemento del sidebar para ver su documentación técnica completa.</p>
      </div>
    );
  }

  return (
    <article id={item.id} className="animate-in fade-in duration-300" aria-live="polite">
      <header className="mb-8 pb-6 border-b border-white/10">
        <div className="flex items-start gap-4 mb-4">
          <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
            item.id === 'domain' ? 'bg-gradient-to-br from-cyan-500 to-blue-600' :
            item.id === 'application' ? 'bg-gradient-to-br from-amber-500 to-orange-600' :
            item.id === 'infrastructure' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
            'bg-gradient-to-br from-purple-500 to-indigo-600'
          }`}>
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none">
              {item.id === 'domain' && <path d="M20 7H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2zM4 9h16M4 15h16" stroke="currentColor" strokeWidth="2"/>}
              {item.id === 'application' && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>}
              {item.id === 'infrastructure' && <path d="M4 15v5h16v-5M4 10v5h16v-5M4 5v5h16V5M12 3v18" stroke="currentColor" strokeWidth="2"/>}
              {item.id === 'overview' && <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24" stroke="currentColor" strokeWidth="2"/></>}
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold text-white leading-tight">{item.title}</h2>
            <p className="mt-3 text-lg text-zinc-300 leading-relaxed">{item.summary}</p>
          </div>
        </div>
      </header>
      
      {item.content && (
        <div className="prose prose-invert prose-zinc max-w-none">
          <div className="text-zinc-200 leading-relaxed whitespace-pre-wrap text-sm font-mono bg-zinc-950/50 rounded-xl p-6 border border-white/5">
            {item.content}
          </div>
        </div>
      )}
    </article>
  );
}
