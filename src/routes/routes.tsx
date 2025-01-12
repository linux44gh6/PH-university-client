import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import { routeGenarator } from "../utils/routeGenarator";
import { adminPath } from "./admin.route";

const router=createBrowserRouter([
    {
        path:'/admin',
        element:<App/>,
        children:routeGenarator(adminPath)
    },
    {
        path:'/faculty',
        element:<App/>,
        children:routeGenarator(adminPath)
    },
    {
        path:'/student',
        element:<App/>,
        children:routeGenarator(adminPath)
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