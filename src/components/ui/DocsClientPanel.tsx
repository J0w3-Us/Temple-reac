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
    <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
      <aside className="lg:col-span-3">
        <div className="rounded-md bg-white/3 p-4">
          <SearchBar value={search} onChange={setSearch} />
          <div className="mt-4">
            <ComponentList
              items={filteredItems}
              onSelect={(id) => setSelected(docsItems.find((d) => d.id === id) || null)}
            />
          </div>
        </div>
      </aside>

      <main className="lg:col-span-9">
        <ComponentDetail item={selected} />
        {selected && <CodeSnippet code={selected.content || ''} />}
      </main>
    </section>
  );
}
