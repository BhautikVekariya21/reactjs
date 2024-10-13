import React from 'react';
import { HeroContent } from './HeroContent';
import { useTheme } from './ThemeContext';

export default function HeroTwo() {
    const { themeMode } = useTheme();
  
    return (
      <div className={`${themeMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} relative w-full`}>
        <div className="mx-auto max-w-7xl lg:px-8">
          <HeroContent />
          <div className="rounded-lg bg-gray-200 p-4 mt-8">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Team working"
            />
          </div>
        </div>
      </div>
    );
  }
  