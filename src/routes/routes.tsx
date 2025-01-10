import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import { adminRoutes } from "./admin.route";

const router=createBrowserRouter([
    {
        path:'/admin',
        element:<App/>,
        children:adminRoutes
    },
    {
        path:'/faculty',
        element:<App/>,
        children:adminRoutes
    },
    {
        path:'/student',
        element:<App/>,
        children:adminRoutes
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:"/register",
        element:<SignUp/>
    }
])
export default router