import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './routes/layout.jsx';
import ErrorPage from './ui/ErrorPage/';
import Quiz, { loader as QuizLoader } from './routes/quiz.jsx';
import Timer from './routes/timer.jsx';
import Home from './routes/home.jsx';
import Soin from './routes/soin.jsx';
import Caries from './routes/caries.jsx';
import Recettes from './routes/recette.jsx';
import Aliment_a_eviter from './routes/aliment.jsx';
import Acceuil from './routes/Accueil.jsx';
import './index.css';
import Dents from './ui/Dents/Dents.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    errorElement: < ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Acceuil />,
      },
      {
        path: '/Quiz',
        element: <Quiz />,
        loader: QuizLoader
      },
      {
        path: '/Timer',
        element: <Timer />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/soin_des_dents',
        element: <Soin />,
      },
      {
        path: '/recette_du_jour',
        element: <Recettes />,
      },
      {
        path: '/dent_de_lait',
        element: <Dents />,
      },
      {
        path: '/caries',
        element: <Caries />,
      },
      {
        path: '/aliment_a_eviter',
        element: <Aliment_a_eviter />,
      },
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
