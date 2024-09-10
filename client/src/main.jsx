// Import React Router
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import css
import 'bootstrap/dist/css/bootstrap.min.css'

// Import pages the router will use to conditionally show the appropriate views
import App from './App';
import Home from './pages/home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import UserItems from './pages/UserItems';
import Era70s from './pages/Era70s';
import Era80s from './pages/Era80s';
import Era90s from './pages/Era90s';
import Era00s from './pages/Era00s';

// Defining the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/cart',
        element: <UserItems />
      },
      {
        path: '/era-70',
        element: <Era70s />
      },
      {
        path: '/era-80',
        element: <Era80s />
      },
      {
        path: '/era-90',
        element: <Era90s />
      },
      {
        path: '/era-00',
        element: <Era00s />
      }
    ]
  }
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
// routes to connect UserItems.jsx to cart button