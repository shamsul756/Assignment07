import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom"
import { createBrowserRouter } from "react-router"
import RootLayout from './Layout/RootLayout'
import Profails from './Components/Profails'   // 👈 home page = 5 cards
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
        index: true,          // 👈 "/" → shows Profails (5 cards)
        element: <Profails />
      },
      {
        path: "TotalCard",    // 👈 "/TotalCard" → shows all cards
        element: <TotalCard />
      },
      {
        path: "/Stats",
        element: <Stats />
      },
      {
        // REMOVED the "/" here to make it a proper child path
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