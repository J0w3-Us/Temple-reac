import React from 'react';

export default function Illustration({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="0" y="0" width="800" height="600" rx="24" fill="#0f1724" />
      <g transform="translate(60,60)">
        <rect width="360" height="240" rx="12" fill="#0b1220" />
        <rect x="16" y="16" width="328" height="40" rx="8" fill="#09101a" />
        <rect x="16" y="72" width="300" height="16" rx="6" fill="#0f1724" />
        <rect x="16" y="96" width="260" height="16" rx="6" fill="#0f1724" />
        <rect x="16" y="120" width="200" height="16" rx="6" fill="#0f1724" />
      </g>

      <g transform="translate(420,40)">
        <circle cx="120" cy="120" r="120" fill="#071026" />
        <path d="M40 160c40-60 160-60 200 0" stroke="#0ea5a4" strokeWidth="6" strokeLinecap="round" />
        <rect x="18" y="18" width="204" height="40" rx="10" fill="#071026" opacity="0.5" />
      </g>
    </svg>
  );
}
