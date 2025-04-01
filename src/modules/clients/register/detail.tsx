// ClientDetail.jsx
import React, { useState, useEffect } from 'react';
import {
  Card,
  Descriptions,
  Tabs,
  Table,
  Tag,
  Button,
  Timeline,
  Typography,
  Row,
  Col,
  Statistic,
  List,
  Avatar,
  Space,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Divider,
} from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  FileTextOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const ClientDetail = ({ client, onBack, onUpdate }) => {
  const [interactionsData, setInteractionsData] = useState([]);
  const [documentsData, setDocumentsData] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [isInteractionModalVisible, setIsInteractionModalVisible] = useState(false);
  const [isDocumentModalVisible, setIsDocumentModalVisible] = useState(false);
  const [interactionForm] = Form.useForm();
  const [documentForm] = Form.useForm();

  useEffect(() => {
    // En una aplicación real, aquí se cargarían los datos relacionados al cliente
    // desde una API basados en el client.id

    // Datos de ejemplo para interacciones
    setInteractionsData([
      {
        id: 1,
        fecha: '06/03/2025',
        tipo: 'Llamada',
        descripcion: 'Seguimiento sobre mantenimiento pendiente en Propiedad Playa',
        realizado_por: 'Administrador',
      },
      {
        id: 2,
        fecha: '15/02/2025',
        tipo: 'Email',
        descripcion: 'Envío de factura mensual de alquiler',
        realizado_por: 'Sistema',
      },
      {
        id: 3,
        fecha: '10/01/2025',
        tipo: 'Reunión',
        descripcion: 'Revisión de contrato anual y renovación',
        realizado_por: 'Administrador',
      },
    ]);

    // Datos de ejemplo para documentos
    setDocumentsData([
      {
        id: 1,
        nombre: 'Contrato de arrendamiento',
        tipo: 'Contrato',
        fechaCreacion: '15/01/2024',
        estado: 'Activo',
      },
      {
        id: 2,
        nombre: 'Documento de identidad',
        tipo: 'Identificación',
        fechaCreacion: '15/01/2024',
        estado: 'Verificado',
      },
    ]);

    // Datos de ejemplo para propiedades
    setPropertiesData(
      (client?.propiedades || []).map((nombre, idx) => ({
        id: idx + 1,
        nombre,
        tipo: idx % 2 === 0 ? 'Apartamento' : 'Casa',
        ubicacion: idx % 2 === 0 ? 'Centro' : 'Playa',
        estado: 'Activo',
      }))
    );
  }, [client]);

  if (!client) {
    return <div>Cargando información del cliente...</div>;
  }

  const showInteractionModal = () => {
    setIsInteractionModalVisible(true);
    interactionForm.resetFields();
  };

  const showDocumentModal = () => {
    setIsDocumentModalVisible(true);
    documentForm.resetFields();
  };

  const handleCancel = () => {
    setIsInteractionModalVisible(false);
    setIsDocumentModalVisible(false);
  };

  const handleInteractionSubmit = () => {
    interactionForm
      .validateFields()
      .then(values => {
        const newInteraction = {
          id: interactionsData.length + 1,
          fecha: values.fecha.format('DD/MM/YYYY'),
          tipo: values.tipo,
          descripcion: values.descripcion,
          realizado_por: values.realizado_por,
        };

        setInteractionsData([newInteraction, ...interactionsData]);
        setIsInteractionModalVisible(false);
        interactionForm.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleDocumentSubmit = () => {
    documentForm
      .validateFields()
      .then(values => {
        const newDocument = {
          id: documentsData.length + 1,
          nombre: values.nombre,
          tipo: values.tipo,
          fechaCreacion: values.fechaCreacion.format('DD/MM/YYYY'),
          estado: values.estado,
        };

        setDocumentsData([newDocument, ...documentsData]);
        setIsDocumentModalVisible(false);
        documentForm.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const interactionColumns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      sorter: (a, b) => dayjs(a.fecha, 'DD/MM/YYYY') - dayjs(b.fecha, 'DD/MM/YYYY'),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
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
    {
      title: 'Acciones',
      key: 'acciones',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">
            Editar
          </Button>
          <Button type="link" danger size="small">
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  const documentColumns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
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
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
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
        return <Tag color={color}>{estado}</Tag>;
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
          <Button type="link" danger size="small">
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  const propertyColumns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      render: tipo => <Tag color="blue">{tipo}</Tag>,
    },
    {
      title: 'Ubicación',
      dataIndex: 'ubicacion',
      key: 'ubicacion',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      render: estado => <Tag color="green">{estado}</Tag>,
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">
            Ver Detalles
          </Button>
        </Space>
      ),
    },
  ];

  // Construir el timeline de actividad reciente
  const activityTimeline = [...interactionsData].sort((a, b) => dayjs(b.fecha, 'DD/MM/YYYY') - dayjs(a.fecha, 'DD/MM/YYYY')).slice(0, 5);

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Button type="primary" onClick={onBack} style={{ marginRight: 10 }}>
          Volver a la lista
        </Button>
        <Button type="default" icon={<EditOutlined />} onClick={() => onUpdate(client)}>
          Editar Cliente
        </Button>
      </div>

      <Row gutter={24}>
        <Col span={16}>
          <Card>
            <Descriptions
              title={
                <Space>
                  <UserOutlined style={{ fontSize: '24px' }} />
                  <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{client.nombre}</span>
                  <Tag color={client.tipo === 'Propietario' ? 'blue' : 'green'}>{client.tipo}</Tag>
                  <Tag color={client.estado === 'Activo' ? 'success' : 'default'}>{client.estado}</Tag>
                </Space>
              }
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
            >
              <Descriptions.Item label="Email" span={2}>
                <MailOutlined style={{ marginRight: 8 }} />
                <a href={`mailto:${client.email}`}>{client.email}</a>
              </Descriptions.Item>
              <Descriptions.Item label="Teléfono" span={2}>
                <PhoneOutlined style={{ marginRight: 8 }} />
                {client.telefono}
              </Descriptions.Item>
              <Descriptions.Item label="Dirección" span={3}>
                <EnvironmentOutlined style={{ marginRight: 8 }} />
                {client.direccion}
              </Descriptions.Item>
              <Descriptions.Item label="Fecha de Registro">
                <CalendarOutlined style={{ marginRight: 8 }} />
                {client.fechaRegistro}
              </Descriptions.Item>
              <Descriptions.Item label="Último Contacto">
                <CalendarOutlined style={{ marginRight: 8 }} />
                {client.ultimoContacto !== '-' ? client.ultimoContacto : 'No registrado'}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Tabs defaultActiveKey="1" style={{ marginTop: 20 }}>
            <TabPane tab="Propiedades" key="1">
              <Table columns={propertyColumns} dataSource={propertiesData} rowKey="id" pagination={false} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  Interacciones
                  <Button type="primary" size="small" icon={<PlusOutlined />} style={{ marginLeft: 10 }} onClick={showInteractionModal}>
                    Nueva
                  </Button>
                </span>
              }
              key="2"
            >
              <Table columns={interactionColumns} dataSource={interactionsData} rowKey="id" pagination={{ pageSize: 5 }} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  Documentos
                  <Button type="primary" size="small" icon={<PlusOutlined />} style={{ marginLeft: 10 }} onClick={showDocumentModal}>
                    Nuevo
                  </Button>
                </span>
              }
              key="3"
            >
              <Table columns={documentColumns} dataSource={documentsData} rowKey="id" pagination={{ pageSize: 5 }} />
            </TabPane>
            <TabPane tab="Comunicaciones" key="4">
              <Card title="Historial de Comunicaciones">
                <Empty description="No hay comunicaciones registradas" />
              </Card>
            </TabPane>
            <TabPane tab="Notas" key="5">
              <Card title="Notas del Cliente">
                <Input.TextArea rows={6} placeholder="Añadir notas sobre el cliente..." style={{ marginBottom: 10 }} />
                <Button type="primary">Guardar Notas</Button>
              </Card>
            </TabPane>
          </Tabs>
        </Col>

        <Col span={8}>
          <Card title="Actividad Reciente">
            <Timeline style={{ marginTop: 20 }}>
              {activityTimeline.map(activity => (
                <Timeline.Item key={activity.id}>
                  <p>
                    {activity.fecha} - {activity.tipo}
                  </p>
                  <p>{activity.descripcion}</p>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>

          <Card title="Estadísticas" style={{ marginTop: 20 }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic title="Propiedades" value={propertiesData.length} prefix={<HomeOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Interacciones" value={interactionsData.length} prefix={<TeamOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Documentos" value={documentsData.length} prefix={<FileTextOutlined />} />
              </Col>
              <Col span={12}>
                <Statistic title="Días como cliente" value={dayjs().diff(dayjs(client.fechaRegistro, 'DD/MM/YYYY'), 'days')} prefix={<CalendarOutlined />} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Modal para añadir interacción */}
      <Modal title="Nueva Interacción" visible={isInteractionModalVisible} onCancel={handleCancel} onOk={handleInteractionSubmit}>
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
      <Modal title="Nuevo Documento" visible={isDocumentModalVisible} onCancel={handleCancel} onOk={handleDocumentSubmit}>
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

// Componente Empty para usar en caso de no tener datos
const Empty = ({ description }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ fontSize: '72px', color: '#ccc' }}>
        <FileTextOutlined />
      </div>
      <Typography.Text type="secondary">{description}</Typography.Text>
    </div>
  );
};

// Componente Statistic para las tarjetas de estadísticas
const Statistic = ({ title, value, prefix }) => {
  return (
    <div>
      <div style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)' }}>{title}</div>
      <div style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.85)' }}>
        {prefix && <span style={{ marginRight: '5px' }}>{prefix}</span>}
        {value}
      </div>
    </div>
  );
};

export default ClientDetail;
