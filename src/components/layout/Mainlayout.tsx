import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
const items = [
    {
        key:'1',
        label:"DashBoard"
    },
    {
        key:'2',
        label:"Create Admin"
    },
    {
        key:'3',
        label:"ADD student"
    }
]
  
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
          <div style={{color:"white", textAlign:"center",font:"bold"}}>
            PH-University
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
              <h1>this is the main content</h1>
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
