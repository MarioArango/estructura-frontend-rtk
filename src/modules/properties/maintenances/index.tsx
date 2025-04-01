import React, { useState, useEffect } from 'react';
import {
  Layout,
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Tag,
  Badge,
  Breadcrumb,
  Tabs,
  Card,
  Typography,
  Tooltip,
  Popconfirm,
  Timeline,
  Row,
  Col,
  Progress,
  Avatar,
} from 'antd';
import {
  PlusOutlined,
  ReloadOutlined,
  ExportOutlined,
  ImportOutlined,
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  ToolOutlined,
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const Maintenance = () => {
  // Estados
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHistorialVisible, setModalHistorialVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [currentTaskHistory, setCurrentTaskHistory] = useState(null);
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');

  // Datos simulados para selección
  const propiedades = [
    { id: 1, nombre: 'Apartamento Centro' },
    { id: 2, nombre: 'Casa Rural' },
    { id: 3, nombre: 'Propiedad Playa' },
  ];

  const itemsInventario = [
    { id: 1, nombre: 'Item 1', categoria: 'Menaje' },
    { id: 2, nombre: 'Item 2', categoria: 'Electrodomésticos' },
    { id: 3, nombre: 'Item 3', categoria: 'Muebles' },
    { id: 4, nombre: 'Item 4', categoria: 'Menaje' },
  ];

  const tecnicos = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María López' },
    { id: 3, nombre: 'Carlos Rodríguez' },
  ];

  // Simulación de carga de datos
  useEffect(() => {
    fetchTareas();
  }, []);

  const fetchTareas = () => {
    setLoading(true);
    setTimeout(() => {
      const tareasMock = Array.from({ length: 10 }).map((_, index) => {
        const fechaCreacion = dayjs().subtract(Math.floor(Math.random() * 30), 'day');
        const fechaProgramada = dayjs(fechaCreacion).add(Math.floor(Math.random() * 14) + 1, 'day');
        const estados = ['pendiente', 'en_progreso', 'completada', 'cancelada'];
        const prioridades = ['baja', 'media', 'alta', 'urgente'];
        const estado = estados[Math.floor(Math.random() * estados.length)];
        const historial = [];

        // Generar historial según el estado
        historial.push({
          id: 1,
          fecha: fechaCreacion.format('YYYY-MM-DD HH:mm'),
          estado: 'pendiente',
          comentario: 'Tarea creada',
          usuario: 'admin',
        });

        if (estado !== 'pendiente') {
          historial.push({
            id: 2,
            fecha: dayjs(fechaCreacion)
              .add(Math.floor(Math.random() * 3) + 1, 'day')
              .format('YYYY-MM-DD HH:mm'),
            estado: 'en_progreso',
            comentario: 'Trabajo iniciado',
            usuario: tecnicos[Math.floor(Math.random() * tecnicos.length)].nombre,
          });
        }

        if (estado === 'completada' || estado === 'cancelada') {
          historial.push({
            id: 3,
            fecha: dayjs(fechaProgramada)
              .subtract(Math.floor(Math.random() * 2), 'day')
              .format('YYYY-MM-DD HH:mm'),
            estado: estado,
            comentario: estado === 'completada' ? 'Trabajo finalizado correctamente' : 'Tarea cancelada',
            usuario: tecnicos[Math.floor(Math.random() * tecnicos.length)].nombre,
          });
        }

        return {
          id: index + 1,
          titulo: `Tarea de mantenimiento ${index + 1}`,
          descripcion: `Descripción detallada de la tarea de mantenimiento número ${index + 1}`,
          propiedadId: propiedades[Math.floor(Math.random() * propiedades.length)].id,
          itemId: itemsInventario[Math.floor(Math.random() * itemsInventario.length)].id,
          tecnicoId: tecnicos[Math.floor(Math.random() * tecnicos.length)].id,
          estado: estado,
          prioridad: prioridades[Math.floor(Math.random() * prioridades.length)],
          fechaCreacion: fechaCreacion.format('YYYY-MM-DD'),
          fechaProgramada: fechaProgramada.format('YYYY-MM-DD'),
          fechaFinalizacion:
            estado === 'completada'
              ? dayjs(fechaProgramada)
                  .subtract(Math.floor(Math.random() * 2), 'day')
                  .format('YYYY-MM-DD')
              : null,
          coste: estado === 'completada' ? Math.floor(Math.random() * 500) + 50 : null,
          historial: historial,
        };
      });

      setTareas(tareasMock);
      setLoading(false);
    }, 800);
  };

  // Manejo del formulario
  const showModal = (task = null) => {
    setEditingTask(task);
    if (task) {
      form.setFieldsValue({
        ...task,
        fechaProgramada: dayjs(task.fechaProgramada),
        fechaFinalizacion: task.fechaFinalizacion ? dayjs(task.fechaFinalizacion) : null,
      });
    } else {
      form.resetFields();
      form.setFieldsValue({
        estado: 'pendiente',
        prioridad: 'media',
        fechaCreacion: dayjs().format('YYYY-MM-DD'),
      });
    }
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      // Formatear fechas
      if (values.fechaProgramada) {
        values.fechaProgramada = values.fechaProgramada.format('YYYY-MM-DD');
      }
      if (values.fechaFinalizacion) {
        values.fechaFinalizacion = values.fechaFinalizacion.format('YYYY-MM-DD');
      }

      // Generar entrada de historial
      const historialEntry = {
        id: Math.floor(Math.random() * 1000),
        fecha: dayjs().format('YYYY-MM-DD HH:mm'),
        estado: values.estado,
        comentario: editingTask ? 'Tarea actualizada' : 'Tarea creada',
        usuario: 'admin',
      };

      if (editingTask) {
        // Actualizar tarea existente
        setTareas(prevTareas =>
          prevTareas.map(task => {
            if (task.id === editingTask.id) {
              return {
                ...task,
                ...values,
                historial: [...task.historial, historialEntry],
              };
            }
            return task;
          })
        );
      } else {
        // Crear nueva tarea
        const newTask = {
          id: tareas.length > 0 ? Math.max(...tareas.map(task => task.id)) + 1 : 1,
          fechaCreacion: dayjs().format('YYYY-MM-DD'),
          ...values,
          historial: [historialEntry],
        };
        setTareas(prevTareas => [...prevTareas, newTask]);
      }

      setModalVisible(false);
    } catch (error) {
      console.error('Error al validar formulario:', error);
    }
  };

  const handleDelete = id => {
    setTareas(prevTareas => prevTareas.filter(task => task.id !== id));
  };

  const showHistorialModal = task => {
    setCurrentTaskHistory(task);
    setModalHistorialVisible(true);
  };

  // Configuración de columnas para la tabla
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      width: 60,
    },
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
      sorter: (a, b) => a.titulo.localeCompare(b.titulo),
      render: text => <a>{text}</a>,
    },
    {
      title: 'Propiedad',
      dataIndex: 'propiedadId',
      key: 'propiedadId',
      filters: propiedades.map(prop => ({ text: prop.nombre, value: prop.id })),
      onFilter: (value, record) => record.propiedadId === value,
      render: propId => propiedades.find(p => p.id === propId)?.nombre,
    },
    {
      title: 'Item',
      dataIndex: 'itemId',
      key: 'itemId',
      filters: itemsInventario.map(item => ({ text: item.nombre, value: item.id })),
      onFilter: (value, record) => record.itemId === value,
      render: itemId => itemsInventario.find(i => i.id === itemId)?.nombre,
    },
    {
      title: 'Técnico',
      dataIndex: 'tecnicoId',
      key: 'tecnicoId',
      filters: tecnicos.map(tec => ({ text: tec.nombre, value: tec.id })),
      onFilter: (value, record) => record.tecnicoId === value,
      render: tecId => tecnicos.find(t => t.id === tecId)?.nombre,
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      filters: [
        { text: 'Pendiente', value: 'pendiente' },
        { text: 'En Progreso', value: 'en_progreso' },
        { text: 'Completada', value: 'completada' },
        { text: 'Cancelada', value: 'cancelada' },
      ],
      onFilter: (value, record) => record.estado === value,
      render: estado => {
        let color = 'blue';
        let text = 'Pendiente';
        let icon = <ClockCircleOutlined />;

        if (estado === 'en_progreso') {
          color = 'orange';
          text = 'En Progreso';
          icon = <ToolOutlined />;
        } else if (estado === 'completada') {
          color = 'green';
          text = 'Completada';
          icon = <CheckCircleOutlined />;
        } else if (estado === 'cancelada') {
          color = 'red';
          text = 'Cancelada';
          icon = <ExclamationCircleOutlined />;
        }

        return (
          <Badge status={color === 'blue' ? 'processing' : color === 'orange' ? 'warning' : color === 'green' ? 'success' : 'error'}>
            <Tag color={color} icon={icon}>
              {text}
            </Tag>
          </Badge>
        );
      },
    },
    {
      title: 'Prioridad',
      dataIndex: 'prioridad',
      key: 'prioridad',
      filters: [
        { text: 'Baja', value: 'baja' },
        { text: 'Media', value: 'media' },
        { text: 'Alta', value: 'alta' },
        { text: 'Urgente', value: 'urgente' },
      ],
      onFilter: (value, record) => record.prioridad === value,
      render: prioridad => {
        let color = 'green';
        let text = 'Baja';

        if (prioridad === 'media') {
          color = 'blue';
          text = 'Media';
        } else if (prioridad === 'alta') {
          color = 'orange';
          text = 'Alta';
        } else if (prioridad === 'urgente') {
          color = 'red';
          text = 'Urgente';
        }

        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'Fecha Programada',
      dataIndex: 'fechaProgramada',
      key: 'fechaProgramada',
      sorter: (a, b) => dayjs(a.fechaProgramada).unix() - dayjs(b.fechaProgramada).unix(),
      render: fecha => dayjs(fecha).format('DD/MM/YYYY'),
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Editar">
            <Button type="primary" icon={<EditOutlined />} size="small" onClick={() => showModal(record)} />
          </Tooltip>
          <Tooltip title="Ver historial">
            <Button icon={<CalendarOutlined />} size="small" onClick={() => showHistorialModal(record)} />
          </Tooltip>
          <Popconfirm title="¿Seguro que deseas eliminar esta tarea?" onConfirm={() => handleDelete(record.id)} okText="Sí" cancelText="No">
            <Tooltip title="Eliminar">
              <Button type="primary" danger icon={<DeleteOutlined />} size="small" />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Contenido de las pestañas
  const tabItems = [
    {
      key: '1',
      label: 'Listado de Tareas',
      children: (
        <Card>
          <Space style={{ marginBottom: 16 }}>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
              Añadir Tarea
            </Button>
            <Button icon={<ReloadOutlined />} onClick={fetchTareas}>
              Recargar
            </Button>
            <Button icon={<ExportOutlined />}>Exportar</Button>
            <Button icon={<ImportOutlined />}>Importar</Button>
            <Button icon={<FilterOutlined />}>Filtros</Button>
          </Space>
          <Table
            columns={columns}
            dataSource={tareas}
            rowKey="id"
            loading={loading}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '50'],
              showTotal: total => `Total ${total} tareas`,
            }}
          />
        </Card>
      ),
    },
    {
      key: '2',
      label: 'Calendario',
      children: (
        <Card title="Calendario de Mantenimiento">
          <Paragraph>Aquí se mostraría un calendario con todas las tareas programadas</Paragraph>
        </Card>
      ),
    },
    {
      key: '3',
      label: 'Estadísticas',
      children: (
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card title="Total Tareas">
                <Title level={2}>{tareas.length}</Title>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Pendientes">
                <Title level={2}>{tareas.filter(t => t.estado === 'pendiente').length}</Title>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="En Progreso">
                <Title level={2}>{tareas.filter(t => t.estado === 'en_progreso').length}</Title>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Completadas">
                <Title level={2}>{tareas.filter(t => t.estado === 'completada').length}</Title>
              </Card>
            </Col>
          </Row>

          <Card title="Distribución por Estado" style={{ marginTop: 16 }}>
            <Row gutter={[16, 16]} align="middle">
              <Col span={12}>
                {['pendiente', 'en_progreso', 'completada', 'cancelada'].map(estado => {
                  const count = tareas.filter(t => t.estado === estado).length;
                  const percentage = tareas.length > 0 ? Math.round((count / tareas.length) * 100) : 0;
                  let color = 'blue';
                  let text = 'Pendiente';

                  if (estado === 'en_progreso') {
                    color = 'orange';
                    text = 'En Progreso';
                  } else if (estado === 'completada') {
                    color = 'green';
                    text = 'Completada';
                  } else if (estado === 'cancelada') {
                    color = 'red';
                    text = 'Cancelada';
                  }

                  return (
                    <div key={estado} style={{ marginBottom: 10 }}>
                      <Text>{text}: </Text>
                      <Progress percent={percentage} strokeColor={color} />
                    </div>
                  );
                })}
              </Col>
              <Col span={12}>
                <Card title="Distribución por Propiedad">
                  {propiedades.map(propiedad => {
                    const count = tareas.filter(t => t.propiedadId === propiedad.id).length;
                    const percentage = tareas.length > 0 ? Math.round((count / tareas.length) * 100) : 0;

                    return (
                      <div key={propiedad.id} style={{ marginBottom: 10 }}>
                        <Text>{propiedad.nombre}: </Text>
                        <Progress percent={percentage} strokeColor="#1890ff" />
                      </div>
                    );
                  })}
                </Card>
              </Col>
            </Row>
          </Card>

          <Card title="Análisis de Costes" style={{ marginTop: 16 }}>
            <Paragraph>Coste Total de Mantenimientos: {tareas.reduce((sum, task) => sum + (task.coste || 0), 0).toFixed(2)} €</Paragraph>
          </Card>
        </Card>
      ),
    },
  ];

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Mantenimiento</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          background: '#fff',
        }}
      >
        <Title level={2}>Gestión de Mantenimiento</Title>
        <Paragraph>Administra y programa tareas de mantenimiento para tus propiedades y equipamiento.</Paragraph>

        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

        {/* Modal para crear/editar tareas */}
        <Modal
          title={editingTask ? 'Editar Tarea' : 'Añadir Nueva Tarea'}
          open={modalVisible}
          onOk={handleSave}
          onCancel={handleCancel}
          width={720}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleSave}>
              Guardar
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical" name="taskForm">
            <div style={{ display: 'flex', gap: '16px' }}>
              <Form.Item name="titulo" label="Título" rules={[{ required: true, message: 'Por favor ingresa un título' }]} style={{ flex: 1 }}>
                <Input placeholder="Título de la tarea" />
              </Form.Item>

              <Form.Item name="propiedadId" label="Propiedad" rules={[{ required: true, message: 'Por favor selecciona una propiedad' }]} style={{ flex: 1 }}>
                <Select placeholder="Selecciona propiedad">
                  {propiedades.map(prop => (
                    <Option key={prop.id} value={prop.id}>
                      {prop.nombre}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Form.Item name="itemId" label="Item" rules={[{ required: true, message: 'Por favor selecciona un item' }]} style={{ flex: 1 }}>
                <Select placeholder="Selecciona item">
                  {itemsInventario.map(item => (
                    <Option key={item.id} value={item.id}>
                      {item.nombre} ({item.categoria})
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="tecnicoId" label="Técnico Asignado" rules={[{ required: true, message: 'Por favor selecciona un técnico' }]} style={{ flex: 1 }}>
                <Select placeholder="Selecciona técnico">
                  {tecnicos.map(tec => (
                    <Option key={tec.id} value={tec.id}>
                      {tec.nombre}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Form.Item name="estado" label="Estado" rules={[{ required: true, message: 'Por favor selecciona el estado' }]} style={{ flex: 1 }}>
                <Select placeholder="Selecciona estado">
                  <Option value="pendiente">Pendiente</Option>
                  <Option value="en_progreso">En Progreso</Option>
                  <Option value="completada">Completada</Option>
                  <Option value="cancelada">Cancelada</Option>
                </Select>
              </Form.Item>

              <Form.Item name="prioridad" label="Prioridad" rules={[{ required: true, message: 'Por favor selecciona la prioridad' }]} style={{ flex: 1 }}>
                <Select placeholder="Selecciona prioridad">
                  <Option value="baja">Baja</Option>
                  <Option value="media">Media</Option>
                  <Option value="alta">Alta</Option>
                  <Option value="urgente">Urgente</Option>
                </Select>
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Form.Item name="fechaProgramada" label="Fecha Programada" rules={[{ required: true, message: 'Por favor selecciona la fecha programada' }]} style={{ flex: 1 }}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="fechaFinalizacion" label="Fecha Finalización" style={{ flex: 1 }}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="coste" label="Coste (€)" style={{ flex: 1 }}>
                <Input type="number" min={0} step={0.01} placeholder="0.00" />
              </Form.Item>
            </div>

            <Form.Item name="descripcion" label="Descripción" rules={[{ required: true, message: 'Por favor ingresa una descripción' }]}>
              <TextArea rows={4} placeholder="Descripción detallada de la tarea de mantenimiento..." />
            </Form.Item>
          </Form>
        </Modal>

        {/* Modal para ver historial */}
        <Modal
          title={`Historial - ${currentTaskHistory?.titulo || ''}`}
          open={modalHistorialVisible}
          onCancel={() => setModalHistorialVisible(false)}
          footer={[
            <Button key="close" onClick={() => setModalHistorialVisible(false)}>
              Cerrar
            </Button>,
          ]}
          width={600}
        >
          {currentTaskHistory && (
            <div>
              <div style={{ marginBottom: 16 }}>
                <div>
                  <strong>ID:</strong> {currentTaskHistory.id}
                </div>
                <div>
                  <strong>Propiedad:</strong> {propiedades.find(p => p.id === currentTaskHistory.propiedadId)?.nombre}
                </div>
                <div>
                  <strong>Item:</strong> {itemsInventario.find(i => i.id === currentTaskHistory.itemId)?.nombre}
                </div>
                <div>
                  <strong>Técnico:</strong> {tecnicos.find(t => t.id === currentTaskHistory.tecnicoId)?.nombre}
                </div>
                <div>
                  <strong>Fecha Creación:</strong> {dayjs(currentTaskHistory.fechaCreacion).format('DD/MM/YYYY')}
                </div>
                <div>
                  <strong>Fecha Programada:</strong> {dayjs(currentTaskHistory.fechaProgramada).format('DD/MM/YYYY')}
                </div>
                {currentTaskHistory.fechaFinalizacion && (
                  <div>
                    <strong>Fecha Finalización:</strong> {dayjs(currentTaskHistory.fechaFinalizacion).format('DD/MM/YYYY')}
                  </div>
                )}
              </div>

              <Title level={5}>Historial de Cambios</Title>
              <Timeline mode="left">
                {currentTaskHistory.historial.map(entry => {
                  let color = 'blue';
                  if (entry.estado === 'en_progreso') color = 'orange';
                  else if (entry.estado === 'completada') color = 'green';
                  else if (entry.estado === 'cancelada') color = 'red';

                  return (
                    <Timeline.Item key={entry.id} color={color} label={dayjs(entry.fecha).format('DD/MM/YYYY HH:mm')}>
                      <p>
                        <strong>{entry.comentario}</strong>
                      </p>
                      <p>
                        Estado:{' '}
                        {entry.estado === 'pendiente' ? 'Pendiente' : entry.estado === 'en_progreso' ? 'En Progreso' : entry.estado === 'completada' ? 'Completada' : 'Cancelada'}
                      </p>
                      <p>Usuario: {entry.usuario}</p>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          )}
        </Modal>
      </Content>
    </Layout>
  );
};

export default Maintenance;
