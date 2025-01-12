import { Layout, Menu, MenuProps, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import { Outlet } from 'react-router-dom';
import { adminPath, adminSidebar } from '../../routes/admin.route';
import { sidebarItemGenaraton } from '../../utils/sidebarItemGenarator';
import Sidebar from './sidebar';
 
  
const Mainlayout = () => {
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <Layout style={{height:"100vh"}}>
       <Sidebar/>
        <Layout>
          <Header style={{ padding: 0,  }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
             
              }}
            >
              <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
}

export default Mainlayout;
