import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenue from "./components/RestaurantMenue";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Demo from "./components/Demo";
import UserContext from "./utils/UserContext";

 // not using keys (not acceptable) <<<<< using index as a keys <<<<<<<<<<<<<<< unique id (best practice)


const AppLayout = ()=>{
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: 'Rakesh Kumar'
    };
    setUserName(data.name)

  },[])
    return(
        <UserContext.Provider value = {[userName]}>
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    )

}

// Chunking
// Code Splitting
// Lazy Loading
// On Demand Loading
// Dynamic Bundling
// Dynamic Import


const Grocery = lazy(()=>import("./components/Grocery"));

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
        path: "/demo",
        element: <Demo />
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
        path: "/grocery",
        element: <Suspense><Grocery /></Suspense>,
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