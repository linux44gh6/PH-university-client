import { TUserPath } from "../Types/type";

export const routeGenarator=(items:TUserPath[])=>{
    const routes = items.reduce<{ path: string; element: JSX.Element }[]>((acc: { path: any; element: any; }[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }
    
        if (item.children) {
            item.children.forEach((child) => {
                if (child.path && child.element) {
                    acc.push({
                        path: child.path,
                        element: child.element,
                    });
                }
            });
        }
    
        return acc;
    }, []);
    return routes
}