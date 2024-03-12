import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from './ui/ErrorPage/';

import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: < ErrorPage />,
    element: <Root />,
    children: [
      // {
      //   path: '/team/:teamName',
      //   element: <OurTeams />,
      //   loader: ourTeamLoader
      // },
    ],
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
