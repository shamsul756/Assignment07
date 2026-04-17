import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom"
import { createBrowserRouter } from "react-router"
import RootLayout from './Layout/RootLayout'
import Profails from './Components/Profails'   
import TotalCard from './Pages/totalCard'
import Error from './Pages/Error'
import CardDetails from './Pages/CardDetails'
import Stats from './Pages/Stats'

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    loader: () => fetch("/data.json").then(r => r.json()),
    children: [
      {
        index: true,        
        element: <Profails />
      },
      {
        path: "/TotalCard",   
        element: <TotalCard />
      },
      {
        path: "/Stats",
        element: <Stats />
      },
      {
       
        path: "/CardDetails/:id",
        element: <CardDetails />
      },

    ],
    errorElement: <Error />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)