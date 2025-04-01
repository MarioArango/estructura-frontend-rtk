import { Layout } from 'antd';
import AppSider from './AppSider';
import AppHeader from './AppHeader';

const { Content } = Layout;

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout>
        <AppHeader />
        <Content style={{ margin: '24px', background: '#fff', padding: 24 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
