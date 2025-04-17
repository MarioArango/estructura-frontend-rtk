import { useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Space, Typography } from 'antd';
import {
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
import { Link } from 'react-router-dom';
import { RouteInventory, RouteSales } from '../../../providers/routes/mapping';

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
            key: 'sales',
            icon: <ShoppingCartOutlined />,
            label: 'Ventas',
            children: [
              {
                key: 'clients',
                icon: <TeamOutlined />,
                label: <Link to={RouteSales.CLIENTS}>Clientes</Link>,
              },
              {
                key: 'orders',
                icon: <ShoppingCartOutlined />,
                label: <Link to={RouteSales.ORDERS}>Pedidos</Link>,
              },
              {
                key: 'vouchers',
                icon: <FileTextOutlined />,
                label: <Link to={RouteSales.VOUCHERS}>Comprobantes</Link>,
              },
              {
                key: 'cash-register',
                icon: <CalculatorOutlined />,
                label: <Link to={RouteSales.CASH_REGISTER}>Apertura de Caja</Link>,
              },
              {
                key: 'accounts-receivable',
                icon: <CalculatorOutlined />,
                label: <Link to={RouteSales.ACCOUNTS_RECEIVABLE}>Cuentas por Cobrar</Link>,
              },
              {
                key: 'sales-configuration',
                icon: <SettingOutlined />,
                label: 'Configuraciones',
                children: [
                  {
                    key: 'prices-list',
                    icon: <DollarOutlined />,
                    label: <Link to={RouteSales.PRICES_LIST}>Lista de Precios</Link>,
                  },
                  {
                    key: 'sales-parameters',
                    icon: <DollarOutlined />,
                    label: <Link to={RouteSales.SALES_PARAMETERS}>Parametros de Venta</Link>,
                  },
                ],
              },
            ],
          },
          {
            key: 'inventario',
            icon: <ShopOutlined />,
            label: 'Inventario',
            children: [
              {
                key: 'warehouses',
                icon: <ShopOutlined />,
                label: <Link to={RouteInventory.WAREHOUSES}>Almacenes</Link>,
              },
              {
                key: 'products',
                icon: <TagsOutlined />,
                label: <Link to={RouteInventory.PRODUCTS}>Productos</Link>,
              },
              {
                key: 'purchases-orders',
                icon: <ShoppingOutlined />,
                label: <Link to={RouteInventory.PURCHASES_ORDERS}>Órdenes de Compra</Link>,
              },
              {
                key: 'purchases-receipt',
                icon: <InboxOutlined />,
                label: <Link to={RouteInventory.PURCHASES_RECEIPT}>Recepción de Compra</Link>,
              },
              {
                key: 'products-entry',
                icon: <InboxOutlined />,
                label: <Link to={RouteInventory.PRODUCTS_ENTRY}>Ingreso de Productos</Link>,
              },
              {
                key: 'products-output',
                icon: <ExportOutlined />,
                label: <Link to={RouteInventory.PRODUCTS_OUTPUT}>Salida de Productos</Link>,
              },
              {
                key: 'transfer-warehouse',
                icon: <SwapOutlined />,
                label: <Link to={RouteInventory.TRANSFER_WAHERHOUSE}>Transferencia entre Almacenes</Link>,
              },
              {
                key: 'suppliers',
                icon: <TeamOutlined />,
                label: <Link to={RouteInventory.PROVIDERS}>Proveedores</Link>,
              },
              {
                key: 'payable-accounts',
                icon: <FileTextOutlined />,
                label: <Link to={RouteInventory.PAYABLE_ACCOUNTS}>Cuentas por Pagar</Link>,
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
