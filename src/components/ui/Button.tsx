import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'outline';
};

export default function Button({ children, className = '', type = 'button', variant = 'default', ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-transform transition-colors duration-150 ease-in-out';
  const variants: Record<string, string> = {
    default: 'bg-black text-white hover:opacity-95 active:scale-95 focus-visible:ring-zinc-500',
    ghost: 'bg-transparent text-white hover:bg-white/5 active:scale-95 focus-visible:ring-zinc-500',
    outline: 'bg-transparent border border-white/10 text-white hover:border-white/20 active:scale-95 focus-visible:ring-zinc-500',
  };

  return (
    <button
      {...props}
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
