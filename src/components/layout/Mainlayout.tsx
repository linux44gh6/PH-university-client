import { Layout, Menu, MenuProps, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import { Outlet } from 'react-router-dom';
import { adminSidebar } from '../../routes/admin.route';
 
  
const Mainlayout = () => {
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <Layout style={{height:"100vh"}}>
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebar} />
        </Sider>
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
