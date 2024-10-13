import React from 'react';
import { Icon } from './Icon';
import { ThemeSwitcherButton } from './ThemeSwitcherButton';
import { useTheme } from './ThemeContext';

export function HeroContent() {
  const { themeMode } = useTheme();
  console.log(`HeroContent rendered with themeMode: ${themeMode}`);

  return (
    <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center">
          <Icon />
          <span className="ml-4 text-2xl font-bold">DevUI</span>
        </div>
        <ThemeSwitcherButton />
      </div>
      <div className={`${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2`}>
        <p className="text-xs font-medium md:text-sm">
          Lorem ipsum dolor sit amet consectetur.
          <span className="ml-2 cursor-pointer font-bold">Read More &rarr;</span>
        </p>
      </div>
      <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
        People who really care about your business
      </h1>
      <p className="mt-8 max-w-3xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo
        possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur ea?
      </p>
      <div className="mt-8">
        <button
          type="button"
          className={`rounded-md px-3 py-2.5 text-sm font-semibold shadow-sm ${themeMode === 'dark' ? 'bg-white text-black hover:bg-gray-300' : 'bg-black text-white hover:bg-black/80'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
