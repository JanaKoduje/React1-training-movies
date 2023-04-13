import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Movies } from './components/Movies';
import { Movie } from './components/Movies/Movie';
import { Articles } from './components/Articles';
import { Home } from './components/Home';
import { Reviews } from './components/Reviews';
import { Menu } from './components/Menu';


import './style.css';



const App = () => {
  return (
    <>
      <div className="container">
        <header></header>
        <main>
          <Menu />
          <Outlet />
        </main>
        <footer>
          <p>Czechitas, Digitální akademie: Web</p>
        </footer>
      </div>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/articles',
        element: <Articles />
      },

      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: "/movies",
            element: <Navigate to="/movies/3" replace={true} />
          },
          {
            path: "/movies/:movieId",
            element: <Movie />
          }
        ]
      }
    ]
  }
]
)

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);


