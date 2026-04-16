
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from './Layout/RootLayout';
import Navbar from './Pages/Navbar';
import FriendCard from './Pages/FriendCard';
import Footer from './Pages/Footer';



const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/Navbar",
        element: <Navbar />
      },
      {
        path: "/FriendCard",
        element: <FriendCard />
      },
      {
        path: "/Footer",
        element: <Footer />
      }
    ],
    errorElement: <h2>this page is not found try letter plz</h2>
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
