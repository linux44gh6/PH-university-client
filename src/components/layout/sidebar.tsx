import Sider from "antd/es/layout/Sider";
import { adminPath } from "../../routes/admin.route";

import {  Menu } from 'antd';
import { facultyPaths } from "../../routes/faculty.route";
import { studentPaths } from "../../routes/student.route";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { TSidebarItem } from "../../Types/type";
import { sidebarItemsGenerator } from "../../utils/sidebarItemGenarator";
import { userCurrentUser } from "../../redux/features/authSlice";
import { useAppSelector } from "../../redux/features/hook";
const userRole={
    Admin:"admin",
    Faculty:"faculty",
    Student:"student"
}
let sidebarItem: TSidebarItem[] | ItemType<MenuItemType>[] | undefined
const Sidebar = () => {
    const user=useAppSelector(userCurrentUser)
    switch (user.role) {
        case userRole.Admin:
         sidebarItem=sidebarItemsGenerator(adminPath,userRole.Admin)
            break;
        case userRole.Faculty:
           sidebarItem= sidebarItemsGenerator(facultyPaths,userRole.Faculty)
            break;
        case userRole.Student:
           sidebarItem=sidebarItemsGenerator(studentPaths,userRole.Student)
            break;
    
        default:
            break;
    }
    return (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{color:"white",font:"bold",display:"flex",justifyContent:'center',alignItems:"center",height:"4rem"}}>
            PH-University
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItem} />
        </Sider>
    );
}

export default Sidebar;
