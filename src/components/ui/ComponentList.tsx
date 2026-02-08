import React from 'react';

export default function ComponentList({
  items,
  onSelect,
}: {
  items: Array<{ id: string; title: string; summary: string }>;
  onSelect: (id: string) => void;
}) {
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  function onKeyDown(e: React.KeyboardEvent, index: number, id: string) {
    if (e.key === 'Enter') {
      onSelect(id);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === null ? 0 : Math.min(items.length - 1, prev + 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === null ? items.length - 1 : Math.max(0, prev - 1)));
    }
  }

  React.useEffect(() => {
    if (focusedIndex !== null) {
      const el = document.querySelector(`#doc-item-${focusedIndex}`) as HTMLElement | null;
      el?.focus();
    }
  }, [focusedIndex]);

  return (
    <ul className="space-y-2" role="list">
      {items.map((it, idx) => (
        <li key={it.id}>
          <button
            id={`doc-item-${idx}`}
            onClick={() => onSelect(it.id)}
            onKeyDown={(e) => onKeyDown(e, idx, it.id)}
            className="w-full text-left rounded-md p-3 hover:bg-white/3 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="mt-1 text-sm text-zinc-400">{it.summary}</div>
              </div>
              <div className="text-sm text-zinc-500">›</div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
