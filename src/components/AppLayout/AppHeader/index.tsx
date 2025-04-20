import { Layout, Button, Input, Badge, Dropdown, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import { ItemType } from 'antd/es/menu/interface';
import { useHotkeys } from 'react-hotkeys-hook';
import { Hotkeys } from '../../../helpers/hoykeys';

const { Header } = Layout;
const { Search } = Input;

interface AppHeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ collapsed, setCollapsed }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const refButtonCollapse = useRef<HTMLButtonElement>(null);

  const notificationItems: ItemType[] = [
    {
      key: '1',
      label: (
        <div>
          <Typography.Text strong>Nueva venta registrada</Typography.Text>
          <div>Se ha registrado la venta #1254 por S/. 450.00</div>
          <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
            hace 5 minutos
          </Typography.Text>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div>
          <Typography.Text strong>Stock bajo</Typography.Text>
          <div>El producto "Laptop HP" tiene stock bajo</div>
          <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
            hace 2 horas
          </Typography.Text>
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <Typography.Link style={{ display: 'block', textAlign: 'center' }}>
          Ver todas las notificaciones
        </Typography.Link>
      ),
    },
  ];

  useHotkeys(
    Hotkeys.TOGGLE_SIDEBAR,
    event => {
      event.preventDefault();
      refButtonCollapse.current?.click();
    },
    {},
    [collapsed]
  );

  return (
    <Header
      style={{
        backgroundColor: '#fff',
        padding: '0 24px 0 8px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '98.8%',
        borderRadius: '12px',
        display: 'flex',
        marginLeft: '8px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '48px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          ref={refButtonCollapse}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: '16px', marginRight: 12 }}
          size="large"
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {searchVisible ? (
          <Search placeholder="Buscar..." style={{ width: 250 }} onBlur={() => setSearchVisible(false)} autoFocus />
        ) : (
          <Button
            type="text"
            icon={<SearchOutlined />}
            onClick={() => setSearchVisible(true)}
            style={{ fontSize: '16px' }}
            size="large"
          />
        )}

        <Dropdown
          menu={{ items: notificationItems }}
          trigger={['click']}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Badge count={2} size="small">
            <Button type="text" icon={<BellOutlined />} style={{ fontSize: '16px' }} size="small" />
          </Badge>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
