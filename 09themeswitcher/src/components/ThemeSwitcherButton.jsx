import React from 'react';
import { useTheme } from './ThemeContext';

export function ThemeSwitcherButton() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        console.log('ThemeSwitcherButton clicked');
        toggleTheme();
      }}
      className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Switch Theme
    </button>
  );
}
