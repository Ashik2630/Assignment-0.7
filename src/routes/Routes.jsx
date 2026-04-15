import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../components/Homepage/Homepage";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import ErrorPage from "../pages/errorPage/ErrorPage";



export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true, 
        Component: Homepage
      },
      {
        path:'/timeline',
        Component: Timeline
      },
      {
        path: '/stats',
        Component: Stats
      },
    ],
    errorElement: <ErrorPage/>
  }
])