import { Avatar, Badge, Button, Dropdown, Input, Layout, Space } from 'antd';
import { UserOutlined, BellOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input prefix={<SearchOutlined />} placeholder="Buscar..." style={{ width: 250, marginRight: 24 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Badge count={5} style={{ marginRight: 24 }}>
          <Button type="text" icon={<BellOutlined />} />
        </Badge>
        <Dropdown menu={{ items: [] }} trigger={['click']}>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <span>Administrador</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
