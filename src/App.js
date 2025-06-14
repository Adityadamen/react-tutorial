import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy , Suspense } from "react";
import Api from "./components/Api";
//import Grocery from "./components/Grocery";

// Chunking
// code splitting
// Dynamic Loading
//lazy loading
// on demand loading

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>loading ...</h1>}>
                    <Grocery/>
                    </Suspense>
            },
            {
                path:"/restaurants/:resID",
                element:<RestaurantMenu/>
            },
            {
                path: "/api1",
                element: <Api apiUrl="http://localhost:8000/api/stocks/data" />,
              },
              {
                path: "/api2",
                element: <Api apiUrl="http://localhost:8000/api/stocks/data2" />,
              },
              {
                path: "/api3",
                element: <Api apiUrl="http://localhost:8000/api/stocks/data3" />,
              },
              {
                path: "/api4",
                element: <Api apiUrl="http://localhost:8000/api/stocks/data4" />,
              },
              {
                path: "/api5",
                element: <Api apiUrl="http://localhost:8000/api/stocks/data5" />,
              },
            

        ],
        errorElement:<Error/>
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
