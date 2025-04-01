// import { Layout, ConfigProvider, theme } from 'antd';
// import { useState, useEffect } from 'react';
// import AppSider from './AppSider';
// import AppHeader from './AppHeader';

// const { Content } = Layout;

// const AppLayout = ({ children }: { children: JSX.Element }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detectar si estamos en un dispositivo móvil
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth < 768) {
//         setCollapsed(true);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const siderWidth = collapsed ? 80 : 260;

//   return (
//     <ConfigProvider
//       theme={{
//         algorithm: theme.defaultAlgorithm,
//         token: {
//           colorPrimary: '#1890ff',
//           borderRadius: 4,
//         },
//         components: {
//           Layout: {
//             bodyBg: '#f5f7fa',
//             headerBg: '#ffffff',
//             headerPadding: '0 24px',
//           },
//         },
//       }}
//     >
//       <Layout style={{ minHeight: '100vh' }}>
//         <AppSider collapsed={collapsed} onCollapse={setCollapsed} />
//         <Layout
//           style={{
//             marginLeft: isMobile ? 0 : siderWidth,
//             transition: 'margin-left 0.2s',
//             minHeight: '100vh',
//           }}
//         >
//           <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
//           <Content
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               background: '#fff',
//               borderRadius: '8px',
//               minHeight: 280,
//               overflow: 'auto',
//               boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
//             }}
//           >
//             {children}
//           </Content>
//           <Layout.Footer style={{ textAlign: 'center', padding: '16px', backgroundColor: 'transparent' }}>Sistema de Gestión © {new Date().getFullYear()}</Layout.Footer>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   );
// };

// export default AppLayout;

import { Layout, ConfigProvider, theme } from 'antd';
import { useState, useEffect } from 'react';
import AppSider from './AppSider';
import AppHeader from './AppHeader';

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
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#3f87ff',
          borderRadius: 4,
          colorBgContainer: '#fff',
        },
        components: {
          Layout: {
            bodyBg: '#f5f7fa',
            headerBg: '#ffffff',
            headerPadding: '0 24px',
          },
          Menu: {
            itemSelectedBg: '#ebf3ff',
            itemSelectedColor: '#3f87ff',
          },
        },
      }}
    >
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
              margin: '8px 8px 16px 0px',
              padding: 24,
              background: '#fff',
              borderRadius: '8px',
              minHeight: 280,
              overflow: 'auto',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
