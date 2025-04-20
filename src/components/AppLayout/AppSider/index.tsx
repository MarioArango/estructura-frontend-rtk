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
import {
  RouteCompany,
  RouteConfiguration,
  RouteCrm,
  RouteDashboard,
  RouteInventory,
  RouteMaintenance,
  RouteSales,
} from '../../../providers/routes/mapping';

const { Sider } = Layout;

interface AppSiderProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const AppSider: React.FC<AppSiderProps> = ({ collapsed, onCollapse }) => {
  const [openKeys, setOpenKeys] = useState<string[]>(['sales']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['dashboard']);
  const [lastOpenKey, setLastOpenKey] = useState<string>('sales');

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
    // Los módulos principales deben coincidir con las keys de los items del menú
    const rootKeys = ['sales', 'inventory', 'maintenance', 'crm', 'reports', 'configuration', 'company'];

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
      collapsedWidth={60}
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
        inlineCollapsed={collapsed}
        items={[
          {
            key: 'dashboard',
            icon: <DashboardOutlined />,
            label: <Link to={RouteDashboard.DASHBOARD}>Dashboard</Link>,
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
            key: 'inventory', // Mantener coherencia con el listado de rootKeys
            icon: <ShopOutlined />,
            label: 'Inventario',
            children: [
              // ... resto del código de los submenús
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
            key: 'maintenance', // Mantener coherencia con el listado de rootKeys
            icon: <TeamOutlined />,
            label: 'Mantenimiento',
            children: [
              {
                key: 'job-order',
                icon: <MessageOutlined />,
                label: <Link to={RouteMaintenance.JOB_ORDERS}>Orden de Trabajo</Link>,
              },
              {
                key: 'job-panel',
                icon: <LineChartOutlined />,
                label: <Link to={RouteMaintenance.JOB_PANEL}>Panel de Trabajo</Link>,
              },
              {
                key: 'technical-management',
                icon: <FundOutlined />,
                label: <Link to={RouteMaintenance.TECHNICAL_MANAGEMENT}>Gestión de Tecnicos</Link>,
              },
            ],
          },
          {
            key: 'crm', // Mantener coherencia con el listado de rootKeys
            icon: <TeamOutlined />,
            label: 'CRM',
            children: [
              {
                key: 'opportunity-tracking',
                icon: <MessageOutlined />,
                label: <Link to={RouteCrm.OPPORTUNITY_TRACKING}>Seguimiento de Oportunidades</Link>,
              },
              {
                key: 'channel',
                icon: <LineChartOutlined />,
                label: <Link to={RouteCrm.OMNICHANNEL}>Omnicanal</Link>,
              },
              {
                key: 'promotions',
                icon: <FundOutlined />,
                label: <Link to={RouteCrm.PROMOTIONS}>Promociones</Link>,
              },
            ],
          },
          {
            key: 'reports', // Mantener coherencia con el listado de rootKeys
            icon: <BarChartOutlined />,
            label: 'Reportes',
            children: [
              {
                key: 'sales-report',
                icon: <LineChartOutlined />,
                label: 'Ventas',
              },
              {
                key: 'inventory-report',
                icon: <PieChartOutlined />,
                label: 'Inventarios',
              },
              {
                key: 'maintenance-report',
                icon: <PieChartOutlined />,
                label: 'Matenimiento',
              },
              {
                key: 'crm-report',
                icon: <PieChartOutlined />,
                label: 'CRM',
              },
            ],
          },
          {
            key: 'configuration', // Mantener coherencia con el listado de rootKeys
            icon: <SettingOutlined />,
            label: 'Configuración',
            children: [
              {
                key: 'general-masters',
                icon: <DatabaseOutlined />,
                label: <Link to={RouteConfiguration.GENERAL_MASTERS}>Maestros Generales</Link>,
              },
              {
                key: 'variables-integration',
                icon: <BarsOutlined />,
                label: <Link to={RouteConfiguration.GENERAL_MASTERS}>Variables Integración</Link>,
              },
              {
                key: 'loggin-activities',
                icon: <HistoryOutlined />,
                label: <Link to={RouteConfiguration.LOGGIN_ACTIVITIES}>Loggin Actividades</Link>,
              },
            ],
          },
          {
            key: 'company', // Mantener coherencia con el listado de rootKeys
            icon: <BankOutlined />,
            label: 'Empresa',
            children: [
              {
                key: 'company-info',
                icon: <BranchesOutlined />,
                label: <Link to={RouteCompany.COMPANY}>Empresa</Link>,
              },
              {
                key: 'branch-offices',
                icon: <BranchesOutlined />,
                label: <Link to={RouteCompany.BRANCH_OFFICES}>Sucursales</Link>,
              },
              {
                key: 'users',
                icon: <UserOutlined />,
                label: <Link to={RouteCompany.USERS}>Usuarios</Link>,
              },
              {
                key: 'roles',
                icon: <UserSwitchOutlined />,
                label: <Link to={RouteCompany.ROLES}>Roles</Link>,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default AppSider;
