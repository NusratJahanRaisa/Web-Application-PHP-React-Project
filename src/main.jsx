import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Pages/Home';
import AddCoffee from './Components/Pages/AddCoffee';
import UpdateCoffee from './Components/Pages/UpdateCoffee';
import AboutUs from './Components/Pages/AboutUs';
import Menu from './Components/Pages/Menu';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost/coffee-api/getCoffees.php'),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
        loader: ()=>fetch('http://localhost/coffee-api/getCoffees.php'),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost/coffee-api/getCoffees.php?id=${params.id}`)
      },
      
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
