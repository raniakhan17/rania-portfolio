'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  function toggleTheme() {
    setIsDark((current) => {
      const nextTheme = !current;
      document.documentElement.classList.toggle('dark', nextTheme);
      window.localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
      return nextTheme;
    });
  }

  return (
    <button
      className="theme-toggle theme-icon-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      <span className="theme-sun" aria-hidden="true">☀</span>
      <span className="theme-moon" aria-hidden="true">☾</span>
    </button>
  );
}
