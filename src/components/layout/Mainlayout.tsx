import { Button, Layout } from 'antd';

import { Outlet } from 'react-router-dom';

import Sidebar from './sidebar';
import { useAppDispatch } from '../../redux/features/hook';
import { logout } from '../../redux/features/authSlice';
import { toast } from 'sonner';
 
  
const Mainlayout = () => {
  const dispatch=useAppDispatch()
  const handleToLogOut=()=>{
    const toastId=toast.loading('LogOut success')
    dispatch(logout())
    toast.success('logOut Success',{id:toastId,duration:2000})
  }
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <Layout style={{height:"100vh"}}>
       <Sidebar/>
        <Layout>
          <Header style={{ padding: 0,  }} >
            <Button onClick={handleToLogOut}>LogOut</Button>
          </Header>
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
