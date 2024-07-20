import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: 'About',
        element: <About />,
        exact: true, // Set exact to true for the About page
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
        exact: true, // Set exact to true for the Portfolio page
      },
      {
        path: 'Contact',
        element: <Contact />,
        exact: true, // Set exact to true for the Contact page
      },
      {
        path: 'Resume',
        element: <Resume />,
        exact: true, // Set exact to true for the Resume page
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);