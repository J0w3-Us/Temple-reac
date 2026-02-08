import React from 'react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav className="sticky top-6 space-y-3" role="navigation" aria-label="Navegación de especificación">
              <div className="rounded-md bg-white/3 p-4">
                <h4 className="font-semibold">Especificación</h4>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li><a href="#docs">Overview</a></li>
                  <li><a href="#docs">Domain</a></li>
                  <li><a href="#docs">Application</a></li>
                  <li><a href="#docs">Infrastructure</a></li>
                  <li><a href="#docs">Components</a></li>
                </ul>
              </div>
            </nav>
          </aside>

          <main className="lg:col-span-9">
            <div className="space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
