import React from 'react';
import SidebarCard from './SidebarCard';

export default function ComponentList({
  items,
  selectedId,
  onSelect,
}: {
  items: any[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-1" role="navigation" aria-label="Navegación de especificación">
      {items.map((it) => (
        <SidebarCard
          key={it.id}
          id={it.id}
          title={it.title}
          summary={it.summary}
          isSelected={selectedId === it.id}
          onClick={(id) => {
            onSelect(id);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          onHover={(id) => {
            // dispatch hover event via DOM CustomEvent for sidebar preview
            const event = new CustomEvent('sidebar-hover', { detail: { id } });
            window.dispatchEvent(event);
          }}
          onLeave={() => {
            const event = new CustomEvent('sidebar-hover', { detail: { id: null } });
            window.dispatchEvent(event);
          }}
        />
      ))}
    </div>
  );
}