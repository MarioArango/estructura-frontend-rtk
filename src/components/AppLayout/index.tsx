import { useState, useEffect } from 'react';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import { Layout } from 'antd';

const { Content } = Layout;

const AppLayout = ({ children }: { children: JSX.Element }) => {
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

  const siderWidth = collapsed ? 80 : 260;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout
        style={{
          marginLeft: isMobile ? 0 : siderWidth,
          transition: 'margin-left 0.2s',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '12px 14px 16px 12px',
            padding: 12,
            background: '#fff',
            borderRadius: '12px',
            minHeight: 280,
            maxHeight: 'calc(100vh - 80px)',
            overflow: 'auto',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
