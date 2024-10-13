import React from 'react';
import { SignUpOne } from './components/SignUpOne';
import { SignUpProvider } from './components/SignUpContext';

function App() {
  return (
    <SignUpProvider>
      <SignUpOne />
    </SignUpProvider>
  );
}

export default App;
