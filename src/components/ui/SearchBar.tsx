import React from 'react';

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar documentación, componentes y casos de uso..."
        className="w-full rounded-md border border-transparent bg-black/10 px-4 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-600"
        aria-label="Buscar documentación"
      />
    </div>
  );
}
