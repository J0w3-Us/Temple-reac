
import React from 'react'

type Props = {
  id: string
  title: string
  summary?: string
  isSelected?: boolean
  onClick?: (id: string) => void
  onHover?: (id: string) => void
  onLeave?: () => void
}

export default function SidebarCard({ id, title, summary, isSelected, onClick, onHover, onLeave }: Props) {
  return (
    <div className={`group relative block w-full rounded-lg p-3 transition-all duration-200 transform-gpu ${
      isSelected ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/10 border border-blue-400/20 shadow' : 'hover:bg-white/6 hover:scale-[1.01]'
    }`}>
      {isSelected && <div className="absolute left-0 top-1.5 bottom-1.5 w-1.5 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r" />}
      <button
        aria-pressed={isSelected}
        onClick={() => onClick?.(id)}
        onMouseEnter={() => onHover?.(id)}
        onFocus={() => onHover?.(id)}
        onMouseLeave={() => onLeave?.()}
        onBlur={() => onLeave?.()}
        className="relative flex w-full items-start gap-3 text-left focus:outline-none"
      >
        <div className="flex-shrink-0 mt-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400/90">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className={`font-medium text-sm ${isSelected ? 'text-blue-100' : 'text-zinc-200 group-hover:text-white'}`}>
            {title}
          </div>
          {summary && (
            <div className={`mt-1 text-xs leading-snug ${isSelected ? 'text-blue-200/80' : 'text-zinc-400 group-hover:text-zinc-300'} line-clamp-2`}>
              {summary}
            </div>
          )}
        </div>
        <div className="ml-2 mt-1 text-zinc-500 group-hover:text-zinc-300">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  )
}
