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
      }
    ]
  }
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
// routes to connect UserItems.jsx to cart button