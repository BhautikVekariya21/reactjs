// src/components/SignUpOne.jsx
import React from 'react';
import { SignUpForm } from './SignUpForm';
import { SignUpOptions } from './SignUpOptions';
import { SignUpImage } from './SignUpImage';

export function SignUpOne() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <SignUpForm />
            <SignUpOptions />
          </div>
        </div>
        <SignUpImage />
      </div>
    </section>
  );
}
