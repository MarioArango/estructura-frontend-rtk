import { useState, useEffect } from 'react';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import { Layout } from 'antd';

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si estamos en un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout style={{ overflowY: 'hidden' }}>
      <AppSider collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 260,
          transition: 'margin-left 0.2s',
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: '#F2F2F7',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '8px',
            background: '#fff',
            borderRadius: '12px',
            minHeight: '280px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
            flexGrow: 0,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
