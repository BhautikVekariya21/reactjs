import { createContext, useState } from 'react';

export const SignUpContext = createContext();

export function SignUpProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <SignUpContext.Provider value={{ userInfo, handleChange }}>
      {children}
    </SignUpContext.Provider>
  );
}
