// import { useState, useEffect } from 'react';
// import { Layout, Table, Button, Space, Modal, Form, Input, Select, InputNumber, Breadcrumb, message, Card, Tabs, DatePicker, Popconfirm, Tag, Typography } from 'antd';
// import { PlusOutlined, EditOutlined, DeleteOutlined, ExportOutlined, ImportOutlined, ReloadOutlined, FilterOutlined } from '@ant-design/icons';
// import dayjs from 'dayjs';

// const { Content } = Layout;
// const { Title } = Typography;
// const { Option } = Select;
// const { TextArea } = Input;

// const InventarioPage = () => {
//   // Estados para gestión de datos
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);
//   const [form] = Form.useForm();
//   const [activeTab, setActiveTab] = useState('1');
//   const [categorias, setCategorias] = useState(['Muebles', 'Electrodomésticos', 'Menaje', 'Decoración', 'Electrónica', 'Otros']);
//   const [propiedades, setPropiedades] = useState([
//     { id: 1, nombre: 'Propiedad Playa' },
//     { id: 2, nombre: 'Apartamento Centro' },
//     { id: 3, nombre: 'Casa Rural' },
//   ]);

//   // Simular carga de datos
//   useEffect(() => {
//     fetchInventario();
//   }, []);

//   const fetchInventario = () => {
//     setLoading(true);
//     // Simulación de carga de datos desde API
//     setTimeout(() => {
//       const datosSimulados = Array.from({ length: 12 }).map((_, index) => ({
//         id: index + 1,
//         nombre: `Item ${index + 1}`,
//         categoria: categorias[Math.floor(Math.random() * categorias.length)],
//         propiedadId: Math.floor(Math.random() * 3) + 1,
//         cantidad: Math.floor(Math.random() * 10) + 1,
//         estado: ['Nuevo', 'Usado', 'Reparación'][Math.floor(Math.random() * 3)],
//         fechaAdquisicion: dayjs()
//           .subtract(Math.floor(Math.random() * 365), 'day')
//           .format('YYYY-MM-DD'),
//         precio: parseFloat((Math.random() * 500 + 50).toFixed(2)),
//         descripcion: `Descripción del item ${index + 1} para el inventario.`,
//       }));
//       setItems(datosSimulados);
//       setLoading(false);
//     }, 800);
//   };

//   // Manejo del formulario
//   const showModal = (item = null) => {
//     setEditingItem(item);
//     if (item) {
//       form.setFieldsValue({
//         ...item,
//         fechaAdquisicion: dayjs(item.fechaAdquisicion),
//       });
//     } else {
//       form.resetFields();
//     }
//     setModalVisible(true);
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//   };

//   const handleSave = async () => {
//     try {
//       const values = await form.validateFields();

//       // Formatear fecha
//       if (values.fechaAdquisicion) {
//         values.fechaAdquisicion = values.fechaAdquisicion.format('YYYY-MM-DD');
//       }

//       if (editingItem) {
//         // Actualizar item existente
//         setItems(prevItems => prevItems.map(item => (item.id === editingItem.id ? { ...item, ...values } : item)));
//         message.success('Item actualizado correctamente');
//       } else {
//         // Crear nuevo item
//         const newItem = {
//           id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
//           ...values,
//         };
//         setItems(prevItems => [...prevItems, newItem]);
//         message.success('Item añadido correctamente');
//       }

//       setModalVisible(false);
//     } catch (error) {
//       console.error('Error al validar formulario:', error);
//     }
//   };

//   const handleDelete = id => {
//     setItems(prevItems => prevItems.filter(item => item.id !== id));
//     message.success('Item eliminado correctamente');
//   };

//   // Configuración de columnas para la tabla
//   const columns = [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//       sorter: (a, b) => a.id - b.id,
//       width: 80,
//     },
//     {
//       title: 'Nombre',
//       dataIndex: 'nombre',
//       key: 'nombre',
//       sorter: (a, b) => a.nombre.localeCompare(b.nombre),
//       render: text => <a>{text}</a>,
//     },
//     {
//       title: 'Categoría',
//       dataIndex: 'categoria',
//       key: 'categoria',
//       filters: categorias.map(cat => ({ text: cat, value: cat })),
//       onFilter: (value, record) => record.categoria === value,
//       render: text => <Tag color="blue">{text}</Tag>,
//     },
//     {
//       title: 'Propiedad',
//       dataIndex: 'propiedadId',
//       key: 'propiedadId',
//       filters: propiedades.map(prop => ({ text: prop.nombre, value: prop.id })),
//       onFilter: (value, record) => record.propiedadId === value,
//       render: propId => propiedades.find(p => p.id === propId)?.nombre || 'Desconocida',
//     },
//     {
//       title: 'Cantidad',
//       dataIndex: 'cantidad',
//       key: 'cantidad',
//       sorter: (a, b) => a.cantidad - b.cantidad,
//     },
//     {
//       title: 'Estado',
//       dataIndex: 'estado',
//       key: 'estado',
//       filters: [
//         { text: 'Nuevo', value: 'Nuevo' },
//         { text: 'Usado', value: 'Usado' },
//         { text: 'Reparación', value: 'Reparación' },
//       ],
//       onFilter: (value, record) => record.estado === value,
//       render: estado => {
//         let color = 'green';
//         if (estado === 'Usado') color = 'orange';
//         if (estado === 'Reparación') color = 'red';
//         return <Tag color={color}>{estado}</Tag>;
//       },
//     },
//     {
//       title: 'Fecha Adquisición',
//       dataIndex: 'fechaAdquisicion',
//       key: 'fechaAdquisicion',
//       sorter: (a, b) => dayjs(a.fechaAdquisicion).unix() - dayjs(b.fechaAdquisicion).unix(),
//       render: text => dayjs(text).format('DD/MM/YYYY'),
//     },
//     {
//       title: 'Precio (€)',
//       dataIndex: 'precio',
//       key: 'precio',
//       sorter: (a, b) => a.precio - b.precio,
//       render: precio => precio.toFixed(2),
//     },
//     {
//       title: 'Acciones',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="small">
//           <Button type="primary" icon={<EditOutlined />} size="small" onClick={() => showModal(record)} />
//           <Popconfirm title="¿Seguro que deseas eliminar este item?" onConfirm={() => handleDelete(record.id)} okText="Sí" cancelText="No">
//             <Button type="primary" danger icon={<DeleteOutlined />} size="small" />
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   // Contenido de las pestañas
//   const tabItems = [
//     {
//       key: '1',
//       label: 'Listado de Inventario',
//       children: (
//         <Card>
//           <Space style={{ marginBottom: 16 }}>
//             <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
//               Añadir Item
//             </Button>
//             <Button icon={<ReloadOutlined />} onClick={fetchInventario}>
//               Recargar
//             </Button>
//             <Button icon={<ExportOutlined />}>Exportar</Button>
//             <Button icon={<ImportOutlined />}>Importar</Button>
//             <Button icon={<FilterOutlined />}>Filtros</Button>
//           </Space>
//           <Table
//             columns={columns}
//             dataSource={items}
//             rowKey="id"
//             loading={loading}
//             pagination={{
//               defaultPageSize: 10,
//               showSizeChanger: true,
//               pageSizeOptions: ['10', '20', '50'],
//               showTotal: total => `Total ${total} items`,
//             }}
//           />
//         </Card>
//       ),
//     },
//     {
//       key: '2',
//       label: 'Estadísticas',
//       children: (
//         <Card>
//           <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
//             <Card title="Total Items" style={{ width: 200 }}>
//               <Title level={2}>{items.length}</Title>
//             </Card>
//             <Card title="Valor Total" style={{ width: 200 }}>
//               <Title level={2}>{items.reduce((sum, item) => sum + item.precio, 0).toFixed(2)} €</Title>
//             </Card>
//             <Card title="Por Categoría" style={{ width: 200 }}>
//               <Title level={2}>
//                 {
//                   Object.keys(
//                     items.reduce((acc, item) => {
//                       acc[item.categoria] = (acc[item.categoria] || 0) + 1;
//                       return acc;
//                     }, {})
//                   ).length
//                 }
//               </Title>
//             </Card>
//           </div>
//           {/* Aquí podrían añadirse gráficos con bibliotecas como Recharts */}
//         </Card>
//       ),
//     },
//     {
//       key: '3',
//       label: 'Categorías',
//       children: (
//         <Card>
//           <Title level={4}>Gestión de Categorías</Title>
//           {/* Aquí iría la gestión de categorías */}
//         </Card>
//       ),
//     },
//   ];

//   return (
//     <Layout style={{ padding: '0 24px 24px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>Propiedades</Breadcrumb.Item>
//         <Breadcrumb.Item>Inventario</Breadcrumb.Item>
//       </Breadcrumb>
//       <Content
//         style={{
//           padding: 24,
//           margin: 0,
//           background: '#fff',
//         }}
//       >
//         <Title level={2}>Gestión de Inventario</Title>
//         <p>Gestiona el inventario de todas tus propiedades en un solo lugar.</p>

//         <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

//         <Modal
//           title={editingItem ? 'Editar Item' : 'Añadir Nuevo Item'}
//           open={modalVisible}
//           onOk={handleSave}
//           onCancel={handleCancel}
//           width={720}
//           footer={[
//             <Button key="back" onClick={handleCancel}>
//               Cancelar
//             </Button>,
//             <Button key="submit" type="primary" onClick={handleSave}>
//               Guardar
//             </Button>,
//           ]}
//         >
//           <Form form={form} layout="vertical" name="itemForm">
//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Form.Item name="nombre" label="Nombre" rules={[{ required: true, message: 'Por favor ingresa el nombre' }]} style={{ flex: 1 }}>
//                 <Input placeholder="Nombre del item" />
//               </Form.Item>

//               <Form.Item name="categoria" label="Categoría" rules={[{ required: true, message: 'Por favor selecciona una categoría' }]} style={{ flex: 1 }}>
//                 <Select placeholder="Selecciona categoría">
//                   {categorias.map(cat => (
//                     <Option key={cat} value={cat}>
//                       {cat}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Form.Item name="propiedadId" label="Propiedad" rules={[{ required: true, message: 'Por favor selecciona una propiedad' }]} style={{ flex: 1 }}>
//                 <Select placeholder="Selecciona propiedad">
//                   {propiedades.map(prop => (
//                     <Option key={prop.id} value={prop.id}>
//                       {prop.nombre}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>

//               <Form.Item name="estado" label="Estado" rules={[{ required: true, message: 'Por favor selecciona el estado' }]} style={{ flex: 1 }}>
//                 <Select placeholder="Selecciona estado">
//                   <Option value="Nuevo">Nuevo</Option>
//                   <Option value="Usado">Usado</Option>
//                   <Option value="Reparación">Reparación</Option>
//                 </Select>
//               </Form.Item>
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Form.Item name="cantidad" label="Cantidad" rules={[{ required: true, message: 'Por favor ingresa la cantidad' }]} style={{ flex: 1 }}>
//                 <InputNumber min={1} placeholder="Cantidad" style={{ width: '100%' }} />
//               </Form.Item>

//               <Form.Item name="precio" label="Precio (€)" rules={[{ required: true, message: 'Por favor ingresa el precio' }]} style={{ flex: 1 }}>
//                 <InputNumber min={0} step={0.01} precision={2} placeholder="0.00" style={{ width: '100%' }} />
//               </Form.Item>

//               <Form.Item name="fechaAdquisicion" label="Fecha de Adquisición" rules={[{ required: true, message: 'Por favor selecciona la fecha' }]} style={{ flex: 1 }}>
//                 <DatePicker style={{ width: '100%' }} />
//               </Form.Item>
//             </div>

//             <Form.Item name="descripcion" label="Descripción">
//               <TextArea rows={4} placeholder="Descripción detallada del item..." />
//             </Form.Item>
//           </Form>
//         </Modal>
//       </Content>
//     </Layout>
//   );
// };

// import React from 'react';
// import { Card, Statistic, Badge, Progress, Button, Space, Typography } from 'antd';
// import {
//   DashboardOutlined,
//   UserOutlined,
//   ShoppingCartOutlined,
//   DollarOutlined,
//   SettingOutlined,
//   FileOutlined,
//   SecurityScanOutlined,
//   CloudOutlined,
//   ApiOutlined,
// } from '@ant-design/icons';

// const { Text, Title } = Typography;

// // Estilos para las celdas de grid
// const gridStyle: React.CSSProperties = {
//   width: '25%',
//   textAlign: 'center',
// };

// const adminGridStyle: React.CSSProperties = {
//   width: '33.33%',
//   textAlign: 'center',
// };

// const DashboardExample: React.FC = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       {/* 1. Dashboard de Estadísticas */}
//       <Title level={3}>Dashboard de Estadísticas</Title>

//       <Card title="Métricas de Negocio" style={{ marginBottom: '20px' }}>
//         <Card.Grid style={gridStyle}>
//           <Statistic title="Ventas Totales" value={152420} prefix={<DollarOutlined />} precision={2} suffix="€" />
//           <Progress percent={78} size="small" status="active" />
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Statistic title="Usuarios" value={8452} prefix={<UserOutlined />} />
//           <Progress percent={65} size="small" />
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Statistic title="Pedidos" value={724} prefix={<ShoppingCartOutlined />} />
//           <Progress percent={42} size="small" status="exception" />
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Statistic title="Conversión" value={3.2} prefix={<DashboardOutlined />} suffix="%" precision={1} />
//           <Progress percent={32} size="small" />
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Title level={4}>Ventas por Región</Title>
//           <div style={{ marginBottom: '8px' }}>
//             <Text>Europa: </Text>
//             <Text strong>42%</Text>
//             <Progress percent={42} size="small" />
//           </div>
//           <div style={{ marginBottom: '8px' }}>
//             <Text>América: </Text>
//             <Text strong>35%</Text>
//             <Progress percent={35} size="small" />
//           </div>
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Title level={4}>Dispositivos</Title>
//           <div style={{ marginBottom: '8px' }}>
//             <Text>Móvil: </Text>
//             <Text strong>68%</Text>
//             <Progress percent={68} size="small" />
//           </div>
//           <div style={{ marginBottom: '8px' }}>
//             <Text>Desktop: </Text>
//             <Text strong>32%</Text>
//             <Progress percent={32} size="small" />
//           </div>
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Title level={4}>Top Productos</Title>
//           <div style={{ marginBottom: '4px' }}>
//             <Badge color="blue" text="Producto A (125)" />
//           </div>
//           <div style={{ marginBottom: '4px' }}>
//             <Badge color="green" text="Producto B (98)" />
//           </div>
//           <div style={{ marginBottom: '4px' }}>
//             <Badge color="orange" text="Producto C (76)" />
//           </div>
//         </Card.Grid>

//         <Card.Grid style={gridStyle}>
//           <Title level={4}>Nuevos Usuarios</Title>
//           <Statistic value={342} />
//           <Button type="link">Ver detalles →</Button>
//         </Card.Grid>
//       </Card>

//       {/* 7. Sistema de Administración */}
//       <Title level={3}>Sistema de Administración</Title>

//       <Card title="Panel de Control" style={{ marginBottom: '20px' }}>
//         <Card.Grid style={adminGridStyle}>
//           <UserOutlined style={{ fontSize: '36px', color: '#1890ff', marginBottom: '8px' }} />
//           <Title level={4}>Usuarios</Title>
//           <Badge count={5} style={{ backgroundColor: '#52c41a' }} />
//           <div style={{ marginTop: '8px' }}>
//             <Button>Gestionar</Button>
//           </div>
//         </Card.Grid>

//         <Card.Grid style={adminGridStyle}>
//           <FileOutlined style={{ fontSize: '36px', color: '#1890ff', marginBottom: '8px' }} />
//           <Title level={4}>Contenidos</Title>
//           <Badge count="New" style={{ backgroundColor: '#faad14' }} />
//           <div style={{ marginTop: '8px' }}>
//             <Button>Gestionar</Button>
//           </div>
//         </Card.Grid>

//         <Card.Grid style={adminGridStyle}>
//           <SettingOutlined style={{ fontSize: '36px', color: '#1890ff', marginBottom: '8px' }} />
//           <Title level={4}>Configuración</Title>
//           <div style={{ marginTop: '8px' }}>
//             <Button>Acceder</Button>
//           </div>
//         </Card.Grid>

//         <Card.Grid style={adminGridStyle}>
//           <SecurityScanOutlined style={{ fontSize: '36px', color: '#52c41a', marginBottom: '8px' }} />
//           <Title level={4}>Seguridad</Title>
//           <Text style={{ display: 'block' }}>Estado: Protegido</Text>
//           <Progress percent={100} size="small" status="success" />
//           <div style={{ marginTop: '8px' }}>
//             <Button>Revisar</Button>
//           </div>
//         </Card.Grid>

//         <Card.Grid style={adminGridStyle}>
//           <CloudOutlined style={{ fontSize: '36px', color: '#faad14', marginBottom: '8px' }} />
//           <Title level={4}>Almacenamiento</Title>
//           <Text style={{ display: 'block' }}>Uso: 76%</Text>
//           <Progress percent={76} size="small" status="active" />
//           <div style={{ marginTop: '8px' }}>
//             <Button>Optimizar</Button>
//           </div>
//         </Card.Grid>

//         <Card.Grid style={adminGridStyle}>
//           <ApiOutlined style={{ fontSize: '36px', color: '#f5222d', marginBottom: '8px' }} />
//           <Title level={4}>APIs</Title>
//           <Badge status="error" text="2 servicios inactivos" />
//           <div style={{ marginTop: '8px' }}>
//             <Space>
//               <Button type="primary" danger>
//                 Reiniciar
//               </Button>
//               <Button>Logs</Button>
//             </Space>
//           </div>
//         </Card.Grid>
//       </Card>
//     </div>
//   );
// };

// export default DashboardExample;

import React from 'react';
import { Descriptions, Badge, Card, Divider, Typography, QRCode } from 'antd';

const { Title } = Typography;

const CloudDatabaseDetails = () => {
  const databaseInfo = {
    product: 'Cloud Database',
    billingMode: 'Prepaid',
    autoRenewal: 'YES',
    orderTime: '2018-04-24 18:00:00',
    usageTime: '2019-04-24 18:00:00',
    status: 'Running',
    negotiatedAmount: '$80.00',
    discount: '$20.00',
    officialReceipts: '$60.00',
    configInfo: {
      dataType: 'MongoDB',
      version: '3.4',
      package: 'dds.mongo.mid',
      storage: '10 GB',
      replicationFactor: '3',
      region: 'East China 1',
    },
  };

  return (
    <Card style={{ maxWidth: 1000, margin: '0 auto' }}>
      <Title level={4}>User Info</Title>
      <QRCode style={{ marginBottom: 16 }} value="https://www.youtube.com/watch?v=y7fW_NUEn3c" />
      <Divider />

      <Descriptions bordered>
        <Descriptions.Item label="Product" span={1}>
          {databaseInfo.product}
        </Descriptions.Item>
        <Descriptions.Item label="Billing Mode" span={1}>
          {databaseInfo.billingMode}
        </Descriptions.Item>
        <Descriptions.Item label="Automatic Renewal" span={1}>
          {databaseInfo.autoRenewal}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Order time" span={1}>
          {databaseInfo.orderTime}
        </Descriptions.Item>
        <Descriptions.Item label="Usage Time" span={2}>
          {databaseInfo.usageTime}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text={databaseInfo.status} />
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Negotiated Amount" span={1}>
          {databaseInfo.negotiatedAmount}
        </Descriptions.Item>
        <Descriptions.Item label="Discount" span={1}>
          {databaseInfo.discount}
        </Descriptions.Item>
        <Descriptions.Item label="Official Receipts" span={1}>
          {databaseInfo.officialReceipts}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered style={{ marginTop: 16 }}>
        <Descriptions.Item label="Config Info" span={3}>
          <div>
            <p>
              <strong>Data disk type:</strong> {databaseInfo.configInfo.dataType}
            </p>
            <p>
              <strong>Database version:</strong> {databaseInfo.configInfo.version}
            </p>
            <p>
              <strong>Package:</strong> {databaseInfo.configInfo.package}
            </p>
            <p>
              <strong>Storage space:</strong> {databaseInfo.configInfo.storage}
            </p>
            <p>
              <strong>Replication factor:</strong> {databaseInfo.configInfo.replicationFactor}
            </p>
            <p>
              <strong>Region:</strong> {databaseInfo.configInfo.region}
            </p>
          </div>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default CloudDatabaseDetails;
