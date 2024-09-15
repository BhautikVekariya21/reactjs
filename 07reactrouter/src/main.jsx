import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';

import Contact from './Contact/Contact';
import Home from './Home/Home';
import About from './About/About';
import Root from './Root/Root';
import User from './User/User';
import Github, { githubInfoLoader } from './Github/Github';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route path='github' element={<Github />} loader={githubInfoLoader} />
      </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
