// Register.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Input, Modal, Form, Select, DatePicker, Tabs, Typography, Row, Col, Card, Divider, Badge, Tooltip, message } from 'antd';
import {
  UserAddOutlined,
  ReloadOutlined,
  ExportOutlined,
  ImportOutlined,
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
  FileTextOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

// Datos de ejemplo para clientes
const initialClients = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan.perez@email.com',
    telefono: '+34 612 345 678',
    direccion: 'Calle Principal 123, Madrid',
    tipo: 'Propietario',
    estado: 'Activo',
    propiedades: ['Propiedad Playa'],
    fechaRegistro: '15/01/2024',
    ultimoContacto: '06/03/2025',
  },
  {
    id: 2,
    nombre: 'María López',
    email: 'maria.lopez@email.com',
    telefono: '+34 623 456 789',
    direccion: 'Avenida Central 45, Barcelona',
    tipo: 'Inquilino',
    estado: 'Activo',
    propiedades: ['Apartamento Centro'],
    fechaRegistro: '05/11/2023',
    ultimoContacto: '22/02/2025',
  },
  {
    id: 3,
    nombre: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    telefono: '+34 634 567 890',
    direccion: 'Plaza Mayor 7, Sevilla',
    tipo: 'Propietario',
    estado: 'Inactivo',
    propiedades: ['Casa Rural'],
    fechaRegistro: '20/03/2024',
    ultimoContacto: '10/01/2025',
  },
  {
    id: 4,
    nombre: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    telefono: '+34 645 678 901',
    direccion: 'Calle Secundaria 56, Valencia',
    tipo: 'Inquilino',
    estado: 'Activo',
    propiedades: ['Apartamento Centro', 'Propiedad Playa'],
    fechaRegistro: '12/12/2023',
    ultimoContacto: '28/02/2025',
  },
];

// Datos de ejemplo para interacciones
const initialInteractions = [
  {
    id: 1,
    clienteId: 1,
    fecha: '06/03/2025',
    tipo: 'Llamada',
    descripcion: 'Seguimiento sobre mantenimiento pendiente en Propiedad Playa',
    realizado_por: 'Administrador',
  },
  {
    id: 2,
    clienteId: 2,
    fecha: '22/02/2025',
    tipo: 'Email',
    descripcion: 'Recordatorio de pago mensual',
    realizado_por: 'Sistema',
  },
  {
    id: 3,
    clienteId: 1,
    fecha: '15/02/2025',
    tipo: 'Reunión',
    descripcion: 'Revisión de contrato anual',
    realizado_por: 'Administrador',
  },
  {
    id: 4,
    clienteId: 3,
    fecha: '10/01/2025',
    tipo: 'Llamada',
    descripcion: 'Discusión sobre renovación de contrato',
    realizado_por: 'Administrador',
  },
];

// Datos de ejemplo para documentos
const initialDocuments = [
  {
    id: 1,
    clienteId: 1,
    nombre: 'Contrato de arrendamiento',
    tipo: 'Contrato',
    fechaCreacion: '15/01/2024',
    estado: 'Activo',
  },
  {
    id: 2,
    clienteId: 2,
    nombre: 'Documento de identidad',
    tipo: 'Identificación',
    fechaCreacion: '05/11/2023',
    estado: 'Verificado',
  },
  {
    id: 3,
    clienteId: 3,
    nombre: 'Escritura de propiedad',
    tipo: 'Legal',
    fechaCreacion: '20/03/2024',
    estado: 'Activo',
  },
];

const Register = () => {
  const [clients, setClients] = useState(initialClients);
  const [interactions, setInteractions] = useState(initialInteractions);
  const [documents, setDocuments] = useState(initialDocuments);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInteractionModalVisible, setIsInteractionModalVisible] = useState(false);
  const [isDocumentModalVisible, setIsDocumentModalVisible] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [activeTab, setActiveTab] = useState('1');
  const [searchText, setSearchText] = useState('');
  const [editingClient, setEditingClient] = useState(null);
  const [form] = Form.useForm();
  const [interactionForm] = Form.useForm();
  const [documentForm] = Form.useForm();

  useEffect(() => {
    // Aquí podrías hacer una llamada a una API para obtener los datos
    // Por ahora usamos los datos de ejemplo
  }, []);

  const showModal = (client = null) => {
    setEditingClient(client);
    setIsModalVisible(true);

    if (client) {
      form.setFieldsValue({
        ...client,
        fechaRegistro: dayjs(client.fechaRegistro, 'DD/MM/YYYY'),
      });
    } else {
      form.resetFields();
    }
  };

  const showInteractionModal = client => {
    setCurrentClient(client);
    setIsInteractionModalVisible(true);
    interactionForm.resetFields();
  };

  const showDocumentModal = client => {
    setCurrentClient(client);
    setIsDocumentModalVisible(true);
    documentForm.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsInteractionModalVisible(false);
    setIsDocumentModalVisible(false);
    form.resetFields();
    interactionForm.resetFields();
    documentForm.resetFields();
  };

  const handleClientSubmit = () => {
    form
      .validateFields()
      .then(values => {
        const formattedValues = {
          ...values,
          fechaRegistro: values.fechaRegistro.format('DD/MM/YYYY'),
          ultimoContacto: dayjs().format('DD/MM/YYYY'),
        };

        if (editingClient) {
          // Actualizar cliente existente
          setClients(clients.map(client => (client.id === editingClient.id ? { ...formattedValues, id: client.id } : client)));
          message.success('Cliente actualizado con éxito');
        } else {
          // Crear nuevo cliente
          const newClient = {
            ...formattedValues,
            id: clients.length + 1,
            ultimoContacto: '-',
          };
          setClients([...clients, newClient]);
          message.success('Cliente añadido con éxito');
        }

        setIsModalVisible(false);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleInteractionSubmit = () => {
    interactionForm
      .validateFields()
      .then(values => {
        const formattedValues = {
          ...values,
          fecha: values.fecha.format('DD/MM/YYYY'),
          clienteId: currentClient.id,
          id: interactions.length + 1,
        };

        setInteractions([...interactions, formattedValues]);

        // Actualizar último contacto del cliente
        setClients(clients.map(client => (client.id === currentClient.id ? { ...client, ultimoContacto: formattedValues.fecha } : client)));

        setIsInteractionModalVisible(false);
        interactionForm.resetFields();
        message.success('Interacción registrada con éxito');
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleDocumentSubmit = () => {
    documentForm
      .validateFields()
      .then(values => {
        const formattedValues = {
          ...values,
          fechaCreacion: values.fechaCreacion.format('DD/MM/YYYY'),
          clienteId: currentClient.id,
          id: documents.length + 1,
        };

        setDocuments([...documents, formattedValues]);
        setIsDocumentModalVisible(false);
        documentForm.resetFields();
        message.success('Documento añadido con éxito');
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const deleteClient = id => {
    Modal.confirm({
      title: '¿Estás seguro de que quieres eliminar este cliente?',
      content: 'Esta acción no se puede deshacer.',
      okText: 'Sí',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setClients(clients.filter(client => client.id !== id));
        message.success('Cliente eliminado con éxito');
      },
    });
  };

  const filteredClients = clients.filter(
    client =>
      client.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      client.email.toLowerCase().includes(searchText.toLowerCase()) ||
      client.telefono.includes(searchText) ||
      client.tipo.toLowerCase().includes(searchText.toLowerCase())
  );

  const clientColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      sorter: (a, b) => a.nombre.localeCompare(b.nombre),
      render: (text, record) => (
        <span>
          <UserOutlined style={{ marginRight: 8 }} />
          {text}
        </span>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: email => (
        <a href={`mailto:${email}`}>
          <MailOutlined style={{ marginRight: 5 }} />
          {email}
        </a>
      ),
    },
    {
      title: 'Teléfono',
      dataIndex: 'telefono',
      key: 'telefono',
      render: phone => (
        <span>
          <PhoneOutlined style={{ marginRight: 5 }} />
          {phone}
        </span>
      ),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      filters: [
        { text: 'Propietario', value: 'Propietario' },
        { text: 'Inquilino', value: 'Inquilino' },
      ],
      onFilter: (value, record) => record.tipo === value,
      render: tipo => <Tag color={tipo === 'Propietario' ? 'blue' : 'green'}>{tipo}</Tag>,
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      filters: [
        { text: 'Activo', value: 'Activo' },
        { text: 'Inactivo', value: 'Inactivo' },
      ],
      onFilter: (value, record) => record.estado === value,
      render: estado => <Tag color={estado === 'Activo' ? 'success' : 'default'}>{estado}</Tag>,
    },
    {
      title: 'Propiedades',
      dataIndex: 'propiedades',
      key: 'propiedades',
      render: propiedades => (
        <>
          {propiedades.map(propiedad => (
            <Tag color="purple" key={propiedad}>
              <HomeOutlined style={{ marginRight: 5 }} />
              {propiedad}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Fecha de Registro',
      dataIndex: 'fechaRegistro',
      key: 'fechaRegistro',
      sorter: (a, b) => dayjs(a.fechaRegistro, 'DD/MM/YYYY') - dayjs(b.fechaRegistro, 'DD/MM/YYYY'),
    },
    {
      title: 'Último Contacto',
      dataIndex: 'ultimoContacto',
      key: 'ultimoContacto',
      sorter: (a, b) => {
        if (a.ultimoContacto === '-') return 1;
        if (b.ultimoContacto === '-') return -1;
        return dayjs(a.ultimoContacto, 'DD/MM/YYYY') - dayjs(b.ultimoContacto, 'DD/MM/YYYY');
      },
      render: (date, record) => {
        if (date === '-') return <span>-</span>;

        const today = dayjs();
        const lastContact = dayjs(date, 'DD/MM/YYYY');
        const diff = today.diff(lastContact, 'days');

        return (
          <Tooltip title={`Hace ${diff} días`}>
            <span style={{ color: diff > 30 ? '#ff4d4f' : 'inherit' }}>{date}</span>
          </Tooltip>
        );
      },
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" icon={<EditOutlined />} size="small" onClick={() => showModal(record)} />
          <Button icon={<TeamOutlined />} size="small" onClick={() => showInteractionModal(record)} title="Registrar interacción" />
          <Button icon={<FileTextOutlined />} size="small" onClick={() => showDocumentModal(record)} title="Añadir documento" />
          <Button type="primary" danger icon={<DeleteOutlined />} size="small" onClick={() => deleteClient(record.id)} />
        </Space>
      ),
    },
  ];

  const interactionColumns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      sorter: (a, b) => dayjs(a.fecha, 'DD/MM/YYYY') - dayjs(b.fecha, 'DD/MM/YYYY'),
    },
    {
      title: 'Cliente',
      key: 'cliente',
      render: (_, record) => {
        const client = clients.find(c => c.id === record.clienteId);
        return client ? client.nombre : '';
      },
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      filters: [
        { text: 'Llamada', value: 'Llamada' },
        { text: 'Email', value: 'Email' },
        { text: 'Reunión', value: 'Reunión' },
      ],
      onFilter: (value, record) => record.tipo === value,
      render: tipo => {
        let color = 'default';
        let icon = null;

        switch (tipo) {
          case 'Llamada':
            color = 'blue';
            icon = <PhoneOutlined />;
            break;
          case 'Email':
            color = 'green';
            icon = <MailOutlined />;
            break;
          case 'Reunión':
            color = 'purple';
            icon = <TeamOutlined />;
            break;
          default:
            break;
        }

        return (
          <Tag color={color} icon={icon}>
            {tipo}
          </Tag>
        );
      },
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
      title: 'Realizado por',
      dataIndex: 'realizado_por',
      key: 'realizado_por',
    },
  ];

  const documentColumns = [
    {
      title: 'Cliente',
      key: 'cliente',
      render: (_, record) => {
        const client = clients.find(c => c.id === record.clienteId);
        return client ? client.nombre : '';
      },
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      filters: [
        { text: 'Contrato', value: 'Contrato' },
        { text: 'Identificación', value: 'Identificación' },
        { text: 'Legal', value: 'Legal' },
      ],
      onFilter: (value, record) => record.tipo === value,
      render: tipo => {
        let color;
        switch (tipo) {
          case 'Contrato':
            color = 'blue';
            break;
          case 'Identificación':
            color = 'green';
            break;
          case 'Legal':
            color = 'orange';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color}>{tipo}</Tag>;
      },
    },
    {
      title: 'Fecha de Creación',
      dataIndex: 'fechaCreacion',
      key: 'fechaCreacion',
      sorter: (a, b) => dayjs(a.fechaCreacion, 'DD/MM/YYYY') - dayjs(b.fechaCreacion, 'DD/MM/YYYY'),
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      filters: [
        { text: 'Activo', value: 'Activo' },
        { text: 'Archivado', value: 'Archivado' },
        { text: 'Verificado', value: 'Verificado' },
      ],
      onFilter: (value, record) => record.estado === value,
      render: estado => {
        let color;
        switch (estado) {
          case 'Activo':
            color = 'success';
            break;
          case 'Archivado':
            color = 'default';
            break;
          case 'Verificado':
            color = 'processing';
            break;
          default:
            color = 'default';
        }
        return <Badge status={color} text={estado} />;
      },
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">
            Ver
          </Button>
          <Button type="link" size="small">
            Descargar
          </Button>
        </Space>
      ),
    },
  ];

  const clientStats = {
    total: clients.length,
    active: clients.filter(c => c.estado === 'Activo').length,
    inactive: clients.filter(c => c.estado === 'Inactivo').length,
    owners: clients.filter(c => c.tipo === 'Propietario').length,
    tenants: clients.filter(c => c.tipo === 'Inquilino').length,
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <Title level={2}>Gestión de Clientes</Title>
        <Text>Administra la información de tus clientes, propietarios e inquilinos.</Text>
      </div>

      <Tabs defaultActiveKey="1" onChange={setActiveTab}>
        <TabPane tab="Listado de Clientes" key="1">
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
            <Space>
              <Button type="primary" icon={<UserAddOutlined />} onClick={() => showModal()}>
                Añadir Cliente
              </Button>
              <Button icon={<ReloadOutlined />}>Recargar</Button>
              <Button icon={<ExportOutlined />}>Exportar</Button>
              <Button icon={<ImportOutlined />}>Importar</Button>
              <Button icon={<FilterOutlined />}>Filtros</Button>
            </Space>
            <Input placeholder="Buscar clientes..." value={searchText} onChange={e => setSearchText(e.target.value)} style={{ width: 250 }} prefix={<SearchOutlined />} />
          </div>

          <Row gutter={16} style={{ marginBottom: 16 }}>
            <Col span={4}>
              <Card>
                <Statistic title="Total Clientes" value={clientStats.total} prefix={<UserOutlined />} />
              </Card>
            </Col>
            <Col span={5}>
              <Card>
                <Statistic title="Clientes Activos" value={clientStats.active} valueStyle={{ color: '#3f8600' }} />
              </Card>
            </Col>
            <Col span={5}>
              <Card>
                <Statistic title="Clientes Inactivos" value={clientStats.inactive} valueStyle={{ color: '#cf1322' }} />
              </Card>
            </Col>
            <Col span={5}>
              <Card>
                <Statistic title="Propietarios" value={clientStats.owners} valueStyle={{ color: '#1890ff' }} />
              </Card>
            </Col>
            <Col span={5}>
              <Card>
                <Statistic title="Inquilinos" value={clientStats.tenants} valueStyle={{ color: '#722ed1' }} />
              </Card>
            </Col>
          </Row>

          <Table columns={clientColumns} dataSource={filteredClients} rowKey="id" pagination={{ pageSize: 10 }} />
        </TabPane>
        <TabPane tab="Interacciones" key="2">
          <Table columns={interactionColumns} dataSource={interactions} rowKey="id" pagination={{ pageSize: 10 }} />
        </TabPane>
        <TabPane tab="Documentos" key="3">
          <Table columns={documentColumns} dataSource={documents} rowKey="id" pagination={{ pageSize: 10 }} />
        </TabPane>
        <TabPane tab="Estadísticas" key="4">
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <Title level={3}>Estadísticas de Clientes</Title>
            <Text>Esta sección mostrará gráficas y estadísticas de los clientes</Text>
          </div>
        </TabPane>
      </Tabs>

      {/* Modal para añadir/editar cliente */}
      <Modal title={editingClient ? 'Editar Cliente' : 'Añadir Nuevo Cliente'} visible={isModalVisible} onCancel={handleCancel} onOk={handleClientSubmit} width={800}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            estado: 'Activo',
            tipo: 'Inquilino',
            propiedades: [],
            fechaRegistro: dayjs(),
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="nombre" label="Nombre completo" rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}>
                <Input prefix={<UserOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Por favor ingresa el email' },
                  { type: 'email', message: 'Email inválido' },
                ]}
              >
                <Input prefix={<MailOutlined />} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="telefono" label="Teléfono" rules={[{ required: true, message: 'Por favor ingresa el teléfono' }]}>
                <Input prefix={<PhoneOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tipo" label="Tipo de cliente" rules={[{ required: true }]}>
                <Select>
                  <Option value="Propietario">Propietario</Option>
                  <Option value="Inquilino">Inquilino</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="direccion" label="Dirección">
            <Input prefix={<HomeOutlined />} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="propiedades" label="Propiedades asociadas">
                <Select mode="multiple">
                  <Option value="Propiedad Playa">Propiedad Playa</Option>
                  <Option value="Apartamento Centro">Apartamento Centro</Option>
                  <Option value="Casa Rural">Casa Rural</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="fechaRegistro" label="Fecha de registro" rules={[{ required: true }]}>
                <DatePicker locale={locale} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="estado" label="Estado" rules={[{ required: true }]}>
                <Select>
                  <Option value="Activo">Activo</Option>
                  <Option value="Inactivo">Inactivo</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>

      {/* Modal para añadir interacción */}
      <Modal title={`Nueva Interacción - ${currentClient?.nombre || ''}`} visible={isInteractionModalVisible} onCancel={handleCancel} onOk={handleInteractionSubmit}>
        <Form
          form={interactionForm}
          layout="vertical"
          initialValues={{
            fecha: dayjs(),
            tipo: 'Llamada',
            realizado_por: 'Administrador',
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="fecha" label="Fecha" rules={[{ required: true }]}>
                <DatePicker locale={locale} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tipo" label="Tipo de interacción" rules={[{ required: true }]}>
                <Select>
                  <Option value="Llamada">Llamada</Option>
                  <Option value="Email">Email</Option>
                  <Option value="Reunión">Reunión</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="descripcion" label="Descripción" rules={[{ required: true, message: 'Por favor ingresa una descripción' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item name="realizado_por" label="Realizado por" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal para añadir documento */}
      <Modal title={`Nuevo Documento - ${currentClient?.nombre || ''}`} visible={isDocumentModalVisible} onCancel={handleCancel} onOk={handleDocumentSubmit}>
        <Form
          form={documentForm}
          layout="vertical"
          initialValues={{
            fechaCreacion: dayjs(),
            tipo: 'Contrato',
            estado: 'Activo',
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="nombre" label="Nombre del documento" rules={[{ required: true, message: 'Por favor ingresa el nombre del documento' }]}>
                <Input prefix={<FileTextOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tipo" label="Tipo de documento" rules={[{ required: true }]}>
                <Select>
                  <Option value="Contrato">Contrato</Option>
                  <Option value="Identificación">Identificación</Option>
                  <Option value="Legal">Legal</Option>
                  <Option value="Factura">Factura</Option>
                  <Option value="Otro">Otro</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="fechaCreacion" label="Fecha de creación" rules={[{ required: true }]}>
                <DatePicker locale={locale} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="estado" label="Estado" rules={[{ required: true }]}>
                <Select>
                  <Option value="Activo">Activo</Option>
                  <Option value="Archivado">Archivado</Option>
                  <Option value="Verificado">Verificado</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="descripcion" label="Descripción">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item name="archivo" label="Archivo">
            <Input type="file" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

// Componente Statistic para las tarjetas de estadísticas
const Statistic = ({ title, value, prefix, valueStyle }) => {
  return (
    <div>
      <div style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)' }}>{title}</div>
      <div style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.85)', ...valueStyle }}>
        {prefix && <span style={{ marginRight: '5px' }}>{prefix}</span>}
        {value}
      </div>
    </div>
  );
};

export default Register;
