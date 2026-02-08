import React from 'react';

export default function Button({ children, className = '', type = 'button', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={type}
      className={
        `inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform transition-colors duration-150 ease-in-out hover:opacity-95 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500 ` +
        className
      }
    >
      {children}
    </button>
  );
}
