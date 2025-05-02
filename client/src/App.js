import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Country from './pages/Country';


const router=createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "country",
    element: <Country />
  },

])
const App = () => {
        return(
                <RouterProvider router={router}></RouterProvider>
        )
}
export default App;