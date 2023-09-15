import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenue from "./components/RestaurantMenue";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

 // not using keys (not acceptable) <<<<< using index as a keys <<<<<<<<<<<<<<< unique id (best practice)


const AppLayout = ()=>{
    return(
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
    )

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenue />
      }
    ],
    errorElement: <Error />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);