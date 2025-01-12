import { NavLink } from "react-router-dom";
import AdminCreateStudent from "../pages/admin/adminCreateStudent";
import AdminDashboard from "../pages/admin/adminDashboard";
import CreateAdmin from "../pages/admin/createAdmin";
import CreateFaculty from "../pages/admin/createFaculty";
import { ReactNode } from "react";

type AdminRoute = {
    name: string;
    path?: string;
    element?: JSX.Element;
    children?: AdminRoute[];
};

type TSidebarsItem={
    key:string,
    label:ReactNode,
    children?:TSidebarsItem[]
}

export const adminPath: AdminRoute[] = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <AdminCreateStudent />
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            }
        ]
    }
];

// export const adminRoutes = adminPath.reduce<{ path: string; element: JSX.Element }[]>((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }

//     if (item.children) {
//         item.children.forEach((child) => {
//             if (child.path && child.element) {
//                 acc.push({
//                     path: child.path,
//                     element: child.element,
//                 });
//             }
//         });
//     }

//     return acc;
// }, []); 
// 
// // Initialize with an empty array and explicitly type the accumulator
export const adminSidebar = adminPath.reduce((acc:TSidebarsItem[], item) => {
    if (item.path && item.name) {
        acc.push({
            key:item.name,
            label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }

    if (item.children) {
       acc.push({
        key:item.name,
        label:item.name,
        children:item.children.map(child=>({
            key:child.name,
            label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
       })
    }

    return acc;
}, []); // Initialize with an empty array and explicitly type the accumulator
