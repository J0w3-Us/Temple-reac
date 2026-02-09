"use client";
import React from 'react';
import SearchBar from './SearchBar';
import ComponentList from './ComponentList';
import ComponentDetail from './ComponentDetail';
import CodeSnippet from './CodeSnippet';
import { docsItems } from '../../lib/docsData';

export default function DocsClientPanel() {
  const [search, setSearch] = React.useState('');
  const [selected, setSelected] = React.useState<any | null>(docsItems[0] || null);

  const filteredItems = React.useMemo(() => {
    if (!search) return docsItems;
    return docsItems.filter((d) => (d.title + d.summary + (d.content || '')).toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="relative">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-900/95 backdrop-blur-xl border-r border-white/10 z-30 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.05 9 11 5.16-1.95 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-white">Canvas Docs</h1>
              <p className="text-xs text-zinc-400">Especificación</p>
            </div>
          </div>

          <div className="mb-4">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <nav className="space-y-1">
            <ComponentList
              items={filteredItems}
              selectedId={selected?.id}
              onSelect={(id) => {
                setSelected(docsItems.find((d) => d.id === id) || null);
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 px-6 py-8">
          {/* Detail Section */}
          {selected ? (
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 shadow-xl">
                <ComponentDetail item={selected} />
              </div>
              
              <div className="rounded-2xl bg-zinc-950/50 backdrop-blur border border-white/5 p-5">
                <CodeSnippet code={selected.content || ''} />
              </div>
            </div>
          ) : (
            <div className="py-12">
              <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.05 9 11 5.16-1.95 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Selecciona una sección</h3>
              <p className="text-zinc-400 text-sm max-w-md">
                Usa el sidebar de la izquierda para navegar entre las diferentes secciones de la documentación.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
