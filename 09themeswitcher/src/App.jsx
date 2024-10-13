import React from 'react';
import HeroTwo from './components/HeroTwo'; // Default export 
import { ThemeProvider } from './components/ThemeContext';

function App() {
  console.log('App component rendered');

  return (
    <ThemeProvider>
      <HeroTwo />
    </ThemeProvider>
  );
}

export default App;
