// import { Avatar, Dropdown, Layout, Menu, Space, Typography } from 'antd';
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   BranchesOutlined,
//   SettingOutlined,
//   ShopOutlined,
//   ShoppingOutlined,
//   DatabaseOutlined,
//   BankOutlined,
//   UserOutlined,
//   BarsOutlined,
//   TagsOutlined,
//   ShoppingCartOutlined,
//   InboxOutlined,
//   ExportOutlined,
//   UserSwitchOutlined,
//   FileTextOutlined,
//   DollarOutlined,
//   CalculatorOutlined,
//   BarChartOutlined,
//   PieChartOutlined,
//   LineChartOutlined,
//   SwapOutlined,
//   MessageOutlined,
//   FundOutlined,
//   HistoryOutlined,
//   DownOutlined,
//   CaretDownOutlined,
// } from '@ant-design/icons';
// import { useState } from 'react';

// const { Sider } = Layout;

// const AppSider = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const userItems = [
//     {
//       key: '1',
//       label: 'Mi Perfil',
//     },
//     {
//       key: '2',
//       label: 'Preferencias',
//     },
//     {
//       key: '3',
//       label: 'Cerrar Sesión',
//     },
//   ];
//   return (
//     <Sider
//       width={260}
//       theme="light"
//       collapsible
//       collapsed={collapsed}
//       onCollapse={setCollapsed}
//       style={{
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
//         height: '100vh',
//         position: 'fixed',
//         left: 0,
//         top: 0,
//         bottom: 0,
//       }}
//     >
//       <div
//         style={{
//           padding: '20px 16px',
//           borderBottom: '1px solid #f0f0f0',
//           marginBottom: '8px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: collapsed ? 'center' : 'space-between',
//         }}
//       >
//         {collapsed ? (
//           <Avatar size={40} icon={<UserOutlined />} style={{ backgroundColor: '#1890ff' }} />
//         ) : (
//           <Dropdown menu={{ items: userItems }} trigger={['click']}>
//             <Space style={{ cursor: 'pointer' }}>
//               <Avatar size={40} icon={<UserOutlined />} style={{ backgroundColor: '#1890ff' }} />
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                 <Typography.Text strong>Administrador</Typography.Text>
//                 <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
//                   admin@empresa.com
//                 </Typography.Text>
//               </div>
//               <CaretDownOutlined style={{ color: '#bfbfbf', fontSize: '12px' }} />
//             </Space>
//           </Dropdown>
//         )}
//       </div>
//       <Menu
//         mode="inline"
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={collapsed ? [] : ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6']}
//         style={{ borderRight: 0 }}
//         items={[
//           {
//             key: '1',
//             icon: <DashboardOutlined />,
//             label: 'Dashboard',
//           },
//           {
//             key: 'sub1',
//             icon: <ShoppingCartOutlined />,
//             label: 'Ventas',
//             children: [
//               {
//                 key: '1-1',
//                 icon: <TeamOutlined />,
//                 label: 'Clientes',
//               },
//               {
//                 key: '1-2',
//                 icon: <ShoppingCartOutlined />,
//                 label: 'Pedidos',
//               },
//               {
//                 key: '1-3',
//                 icon: <FileTextOutlined />,
//                 label: 'Comprobantes',
//               },
//               {
//                 key: '1-4',
//                 icon: <CalculatorOutlined />,
//                 label: 'Apertura de Caja',
//               },
//               {
//                 key: '1-5',
//                 icon: <SettingOutlined />,
//                 label: 'Configuraciones',
//                 children: [
//                   {
//                     key: '1-5-1',
//                     icon: <DollarOutlined />,
//                     label: 'Lista de Precios',
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             key: 'sub2',
//             icon: <ShopOutlined />,
//             label: 'Inventario',
//             children: [
//               {
//                 key: '2-1',
//                 icon: <ShopOutlined />,
//                 label: 'Almacenes',
//               },
//               {
//                 key: '2-2',
//                 icon: <TagsOutlined />,
//                 label: 'Productos',
//               },
//               {
//                 key: '2-3',
//                 icon: <ShoppingOutlined />,
//                 label: 'Ordenes de Compra',
//               },
//               {
//                 key: '2-4',
//                 icon: <InboxOutlined />,
//                 label: 'Recepción de Compra',
//               },
//               {
//                 key: '2-5',
//                 icon: <InboxOutlined />,
//                 label: 'Ingreso de Productos',
//               },
//               {
//                 key: '2-6',
//                 icon: <ExportOutlined />,
//                 label: 'Salida de Productos',
//               },
//               {
//                 key: '2-7',
//                 icon: <SwapOutlined />,
//                 label: 'Transferencia entre Almacenes',
//               },
//               {
//                 key: '2-8',
//                 icon: <TeamOutlined />,
//                 label: 'Proveedores',
//               },
//               {
//                 key: '2-9',
//                 icon: <FileTextOutlined />,
//                 label: 'Cuentas por Pagar',
//               },
//             ],
//           },
//           {
//             key: 'sub3',
//             icon: <TeamOutlined />,
//             label: 'CRM',
//             children: [
//               {
//                 key: '3-1',
//                 icon: <LineChartOutlined />,
//                 label: 'Seguimiento de Oportunidades',
//               },
//               {
//                 key: '3-2',
//                 icon: <MessageOutlined />,
//                 label: 'WhatsApp',
//               },
//               {
//                 key: '3-3',
//                 icon: <FundOutlined />,
//                 label: 'Campañas Comerciales',
//               },
//             ],
//           },
//           {
//             key: 'sub4',
//             icon: <BarChartOutlined />,
//             label: 'Reportes',
//             children: [
//               {
//                 key: '4-1',
//                 icon: <LineChartOutlined />,
//                 label: 'Ventas',
//               },
//               {
//                 key: '4-2',
//                 icon: <PieChartOutlined />,
//                 label: 'Inventarios',
//               },
//             ],
//           },
//           {
//             key: 'sub5',
//             icon: <SettingOutlined />,
//             label: 'Configuración',
//             children: [
//               {
//                 key: '5-1',
//                 icon: <DatabaseOutlined />,
//                 label: 'Maestros Generales',
//               },
//               {
//                 key: '5-2',
//                 icon: <BarsOutlined />,
//                 label: 'Variables Integración',
//               },
//               {
//                 key: '5-3',
//                 icon: <HistoryOutlined />,
//                 label: 'Log de Actividades',
//               },
//             ],
//           },
//           {
//             key: 'sub6',
//             icon: <BankOutlined />,
//             label: 'Empresa',
//             children: [
//               {
//                 key: '6-1',
//                 icon: <BranchesOutlined />,
//                 label: 'Sucursales',
//               },
//               {
//                 key: '6-2',
//                 icon: <UserOutlined />,
//                 label: 'Usuarios',
//               },
//               {
//                 key: '6-3',
//                 icon: <UserSwitchOutlined />,
//                 label: 'Roles',
//               },
//             ],
//           },
//         ]}
//       />
//     </Sider>
//   );
// };

// export default AppSider;

import { Layout, Menu, Avatar, Space, Typography, Divider } from 'antd';
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  TeamOutlined,
  BarChartOutlined,
  SettingOutlined,
  BankOutlined,
  FileTextOutlined,
  CalculatorOutlined,
  UserOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  DashboardOutlined,
  DollarOutlined,
  TagsOutlined,
  ShoppingOutlined,
  InboxOutlined,
  ExportOutlined,
  SwapOutlined,
  LineChartOutlined,
  MessageOutlined,
  FundOutlined,
  PieChartOutlined,
  DatabaseOutlined,
  BarsOutlined,
  HistoryOutlined,
  BranchesOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { Sider } = Layout;

interface AppSiderProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const AppSider: React.FC<AppSiderProps> = ({ collapsed, onCollapse }) => {
  const [openKeys, setOpenKeys] = useState<string[]>(['ventas']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['dashboard']);
  const [lastOpenKey, setLastOpenKey] = useState<string>('ventas');

  // Reset openKeys when sidebar collapses
  useEffect(() => {
    if (collapsed) {
      setOpenKeys([]);
    } else if (lastOpenKey) {
      // When expanding, restore the last open key
      setOpenKeys([lastOpenKey]);
    }
  }, [collapsed, lastOpenKey]);

  const onOpenChange = (keys: string[]) => {
    console.log(keys);
    // Solo estamos interesados en los módulos principales (ventas, inventario, crm, etc.)
    const rootKeys = ['ventas', 'inventario', 'crm', 'reportes', 'configuracion', 'empresa'];

    // Filtrar las keys para que solo tengamos las keys de nivel raíz
    const rootKeysOpened = keys.filter(key => rootKeys.includes(key));

    // Si no hay keys de nivel raíz abiertas, simplemente cerrar todo
    if (rootKeysOpened.length === 0) {
      setOpenKeys([]);
      return;
    }

    // Obtener la última key de nivel raíz
    const latestRootKey = rootKeysOpened[rootKeysOpened.length - 1];

    // Mantener cualquier key de nivel secundario que pudiera estar en el array de keys
    const childKeys = keys.filter(key => !rootKeys.includes(key));

    // Actualizar las openKeys solo con la última key raíz y todas las keys de hijos
    setOpenKeys([latestRootKey, ...childKeys]);

    // Actualizar lastOpenKey para el módulo principal
    if (latestRootKey) {
      setLastOpenKey(latestRootKey);
    }
  };

  return (
    <Sider
      width={260}
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 2,
        overflow: 'auto',
        backgroundColor: '#fff',
      }}
      trigger={null}
    >
      {!collapsed && (
        <div
          style={{
            padding: '16px',
            borderBottom: '1px solid #f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Space>
            <Avatar size={40} style={{ backgroundColor: '#3f87ff' }}>
              <UserOutlined />
            </Avatar>
            <div>
              <Typography.Text strong style={{ display: 'block' }}>
                Administrador
              </Typography.Text>
              <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                admin@empresa.com
              </Typography.Text>
            </div>
          </Space>
          <CaretDownOutlined style={{ color: '#bfbfbf' }} />
        </div>
      )}

      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        onSelect={({ selectedKeys: keys }) => setSelectedKeys(keys as string[])}
        style={{ borderRight: 0 }}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: 'sub1',
            icon: <ShoppingCartOutlined />,
            label: 'Ventas',
            children: [
              {
                key: '1-1',
                icon: <TeamOutlined />,
                label: 'Clientes',
              },
              {
                key: '1-2',
                icon: <ShoppingCartOutlined />,
                label: 'Pedidos',
              },
              {
                key: '1-3',
                icon: <FileTextOutlined />,
                label: 'Comprobantes',
              },
              {
                key: '1-4',
                icon: <CalculatorOutlined />,
                label: 'Apertura de Caja',
              },
              {
                key: '1-5',
                icon: <SettingOutlined />,
                label: 'Configuraciones',
                children: [
                  {
                    key: '1-5-1',
                    icon: <DollarOutlined />,
                    label: 'Lista de Precios',
                  },
                ],
              },
            ],
          },
          {
            key: 'sub2',
            icon: <ShopOutlined />,
            label: 'Inventario',
            children: [
              {
                key: '2-1',
                icon: <ShopOutlined />,
                label: 'Almacenes',
              },
              {
                key: '2-2',
                icon: <TagsOutlined />,
                label: 'Productos',
              },
              {
                key: '2-3',
                icon: <ShoppingOutlined />,
                label: 'Ordenes de Compra',
              },
              {
                key: '2-4',
                icon: <InboxOutlined />,
                label: 'Recepción de Compra',
              },
              {
                key: '2-5',
                icon: <InboxOutlined />,
                label: 'Ingreso de Productos',
              },
              {
                key: '2-6',
                icon: <ExportOutlined />,
                label: 'Salida de Productos',
              },
              {
                key: '2-7',
                icon: <SwapOutlined />,
                label: 'Transferencia entre Almacenes',
              },
              {
                key: '2-8',
                icon: <TeamOutlined />,
                label: 'Proveedores',
              },
              {
                key: '2-9',
                icon: <FileTextOutlined />,
                label: 'Cuentas por Pagar',
              },
            ],
          },
          {
            key: 'sub3',
            icon: <TeamOutlined />,
            label: 'CRM',
            children: [
              {
                key: '3-1',
                icon: <LineChartOutlined />,
                label: 'Seguimiento de Oportunidades',
              },
              {
                key: '3-2',
                icon: <MessageOutlined />,
                label: 'WhatsApp',
              },
              {
                key: '3-3',
                icon: <FundOutlined />,
                label: 'Campañas Comerciales',
              },
            ],
          },
          {
            key: 'sub4',
            icon: <BarChartOutlined />,
            label: 'Reportes',
            children: [
              {
                key: '4-1',
                icon: <LineChartOutlined />,
                label: 'Ventas',
              },
              {
                key: '4-2',
                icon: <PieChartOutlined />,
                label: 'Inventarios',
              },
            ],
          },
          {
            key: 'sub5',
            icon: <SettingOutlined />,
            label: 'Configuración',
            children: [
              {
                key: '5-1',
                icon: <DatabaseOutlined />,
                label: 'Maestros Generales',
              },
              {
                key: '5-2',
                icon: <BarsOutlined />,
                label: 'Variables Integración',
              },
              {
                key: '5-3',
                icon: <HistoryOutlined />,
                label: 'Log de Actividades',
              },
            ],
          },
          {
            key: 'sub6',
            icon: <BankOutlined />,
            label: 'Empresa',
            children: [
              {
                key: '6-1',
                icon: <BranchesOutlined />,
                label: 'Sucursales',
              },
              {
                key: '6-2',
                icon: <UserOutlined />,
                label: 'Usuarios',
              },
              {
                key: '6-3',
                icon: <UserSwitchOutlined />,
                label: 'Roles',
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default AppSider;
