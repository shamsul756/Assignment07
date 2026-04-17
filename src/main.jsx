
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from './Layout/RootLayout';
import Navbar from './Pages/Navbar';
import FriendCard from './Pages/FriendCard';
import Footer from './Pages/Footer';
import Error from './Pages/Error';
import TotalCard from './Pages/totalCard';
import Profails from './Components/Profails';



const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/Navbar",
        element: <Navbar />,
       loader: () => fetch("/data.json").then(r => r.json()),
      },
      {
        path: "/FriendCard",
        element: <FriendCard />
      },
      {
        path: "/Footer",
        element: <Footer />
      },
      {
        path: "/TotalCard",
        element: <TotalCard/>
      },
      {
        path: "/Profails",
        element: <Profails/>
      }
    ],
    errorElement: <Error/>
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
