// src/components/SignUpForm.jsx
import React, { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { SignUpContext } from './SignUpContext';
import InputField from './InputField'; 

export function SignUpForm() {
  const { userInfo, handleChange } = useContext(SignUpContext);

  return (
    <div>
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
      <p className="mt-2 text-base text-gray-600">
        Already have an account?{' '}
        <a
          href="#"
          title="Sign In"
          className="font-medium text-black transition-all duration-200 hover:underline"
        >
          Sign In
        </a>
      </p>
      <form className="mt-8">
        <div className="space-y-5">
          <InputField
            label="Full Name"
            id="name"
            type="text"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <InputField
            label="Email address"
            id="email"
            type="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputField
            label="Password"
            id="password"
            type="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Create Account <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
