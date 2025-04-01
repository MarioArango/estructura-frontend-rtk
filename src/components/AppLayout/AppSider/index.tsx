import { Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  HomeOutlined,
  CalendarOutlined,
  SettingOutlined,
  MessageOutlined,
  DollarOutlined,
  ShoppingOutlined,
  BarChartOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider width={250} theme="light" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <Typography.Title level={4} style={{ margin: '12px 0' }}>
          {collapsed ? 'PMS' : 'Sistema PMS/CRM'}
        </Typography.Title>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={collapsed ? [] : ['sub2', 'sub3', 'sub4']}
        style={{ borderRight: 0 }}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: 'sub2',
            icon: <HomeOutlined />,
            label: 'Propiedades',
            children: [
              {
                key: '2-1',
                label: 'Inventario',
              },
              {
                key: '2-2',
                label: 'Gestión',
              },
              {
                key: '2-3',
                label: 'Multimedia',
              },
              {
                key: '2-4',
                label: 'Disponibilidad',
              },
              {
                key: '2-5',
                label: 'Tarifas y Precios',
              },
              {
                key: '2-6',
                label: 'Mantenimiento',
              },
            ],
          },
          {
            key: 'sub3',
            icon: <TeamOutlined />,
            label: 'Clientes',
            children: [
              {
                key: '3-1',
                label: 'Base de Datos',
              },
              {
                key: '3-2',
                label: 'Gestión de Relaciones',
              },
              {
                key: '3-3',
                label: 'Análisis de Clientes',
              },
              {
                key: '3-4',
                label: 'Fidelización',
              },
              {
                key: '3-5',
                label: 'Comunicación',
              },
            ],
          },
          {
            key: 'sub4',
            icon: <CalendarOutlined />,
            label: 'Reservas',
            children: [
              {
                key: '4-1',
                label: 'Gestión de Reservas',
              },
              {
                key: '4-2',
                label: 'Calendario',
              },
              {
                key: '4-3',
                label: 'Check-in/Check-out',
              },
              {
                key: '4-4',
                label: 'Pagos y Depósitos',
              },
              {
                key: '4-5',
                label: 'Extras y Servicios',
              },
              {
                key: '4-6',
                label: 'Políticas',
              },
            ],
          },
          {
            key: 'sub5',
            icon: <MessageOutlined />,
            label: 'Mensajes',
            children: [
              {
                key: '5-1',
                label: 'Bandeja de Entrada',
              },
              {
                key: '5-2',
                label: 'Plantillas',
              },
              {
                key: '5-3',
                label: 'Comunicación Masiva',
              },
              {
                key: '5-4',
                label: 'Comunicación Interna',
              },
              {
                key: '5-5',
                label: 'Histórico',
              },
            ],
          },
          {
            key: 'sub6',
            icon: <DollarOutlined />,
            label: 'Finanzas',
            children: [
              {
                key: '6-1',
                label: 'Control de Ingresos',
              },
              {
                key: '6-2',
                label: 'Facturación',
              },
              {
                key: '6-3',
                label: 'Gastos',
              },
              {
                key: '6-4',
                label: 'Informes Financieros',
              },
              {
                key: '6-5',
                label: 'Impuestos',
              },
            ],
          },
          {
            key: 'sub7',
            icon: <ShoppingOutlined />,
            label: 'Marketing y Ventas',
            children: [
              {
                key: '7-1',
                label: 'Gestión de Canales',
              },
              {
                key: '7-2',
                label: 'Campañas',
              },
              {
                key: '7-3',
                label: 'Sitio Web',
              },
              {
                key: '7-4',
                label: 'Promociones',
              },
              {
                key: '7-5',
                label: 'Análisis de Ventas',
              },
            ],
          },
          {
            key: 'sub8',
            icon: <BarChartOutlined />,
            label: 'Informes y Analítica',
            children: [
              {
                key: '8-1',
                label: 'Informes Estándar',
              },
              {
                key: '8-2',
                label: 'Informes Personalizados',
              },
              {
                key: '8-3',
                label: 'Análisis Predictivo',
              },
              {
                key: '8-4',
                label: 'Dashboards Personalizados',
              },
              {
                key: '8-5',
                label: 'Benchmarking',
              },
            ],
          },
          {
            key: 'sub9',
            icon: <UserOutlined />,
            label: 'Recursos Humanos',
            children: [
              {
                key: '9-1',
                label: 'Gestión de Personal',
              },
              {
                key: '9-2',
                label: 'Asignación de Tareas',
              },
              {
                key: '9-3',
                label: 'Rendimiento',
              },
              {
                key: '9-4',
                label: 'Formación',
              },
              {
                key: '9-5',
                label: 'Comunicación Interna',
              },
            ],
          },
          {
            key: 'sub10',
            icon: <SettingOutlined />,
            label: 'Configuración',
            children: [
              {
                key: '10-1',
                label: 'Configuración General',
              },
              {
                key: '10-2',
                label: 'Personalización',
              },
              {
                key: '10-3',
                label: 'Integraciones',
              },
              {
                key: '10-4',
                label: 'Seguridad',
              },
              {
                key: '10-5',
                label: 'Mantenimiento',
              },
            ],
          },
          {
            key: 'sub11',
            icon: <QuestionCircleOutlined />,
            label: 'Ayuda y Soporte',
            children: [
              {
                key: '11-1',
                label: 'Base de Conocimientos',
              },
              {
                key: '11-2',
                label: 'Soporte Técnico',
              },
              {
                key: '11-3',
                label: 'Actualizaciones',
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};

export default AppSider;
