import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Homepage from './components/Homepage/Homepage'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Homepage,
    children: [
      {
        path:'/'
        
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
