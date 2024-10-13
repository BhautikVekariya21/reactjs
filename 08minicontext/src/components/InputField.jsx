
import React from 'react';

function InputField({ label, id, type, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="text-base font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputField;
