import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import { routeGenarator } from "../utils/routeGenarator";
import { adminPath } from "./admin.route";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/admin',
        element:<App/>,
        children:routeGenarator(adminPath)
    },
    {
        path:'/faculty',
        element:<App/>,
        children:routeGenarator(facultyPaths)
    },
    {
        path:'/student',
        element:<App/>,
        children:routeGenarator(studentPaths)
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