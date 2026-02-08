import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      role="group"
      tabIndex={0}
      className={`rounded-lg border border-transparent bg-white/5 p-6 shadow-sm transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-zinc-600 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-white">{children}</h3>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-zinc-400">{children}</p>;
}
