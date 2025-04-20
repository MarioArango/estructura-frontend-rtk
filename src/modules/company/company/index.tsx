import {
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
  Button,
  Card,
  Typography,
  Divider,
  Space,
  Tabs,
} from 'antd';
import {
  BankOutlined,
  ShopOutlined,
  IdcardOutlined,
  HomeOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  LockOutlined,
  UploadOutlined,
  SaveOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { requiredField } from '../../../helpers/form';
import CardUI from '../../../components/ui/CardUI';
import { colors } from '../../../providers/design/colors';
import ButtonUI from '../../../components/ui/ButtonUI';
import { Hotkeys } from '../../../helpers/hoykeys';

const { Item } = Form;
const { Title } = Typography;
const { Dragger } = Upload;

const Company = () => {
  const [mainForm] = Form.useForm();
  const [representativeForm] = Form.useForm();
  const [contactForm] = Form.useForm();
  const [securityForm] = Form.useForm();
  const [logoForm] = Form.useForm();

  const onFinish = () => {
    // Recopilar datos de todos los formularios
    Promise.all([
      mainForm.validateFields(),
      representativeForm.validateFields(),
      contactForm.validateFields(),
      securityForm.validateFields(),
      logoForm.validateFields(),
    ])
      .then(([mainData, representativeData, contactData, securityData, logoData]) => {
        // Combinar los datos de todos los formularios
        const combinedData = {
          ...mainData,
          ...representativeData,
          ...contactData,
          ...securityData,
          ...logoData,
        };
        console.log('Success:', combinedData);
      })
      .catch(error => {
        console.log('Validation failed:', error);
      });
  };

  // Lista simulada de ubigeos para el Select
  const ubigeoOptions = [
    { value: '150101', label: 'Lima - Lima - Lima' },
    { value: '150102', label: 'Lima - Lima - Ancón' },
    { value: '150103', label: 'Lima - Lima - Ate' },
    { value: '150104', label: 'Lima - Lima - Barranco' },
    { value: '150105', label: 'Lima - Lima - Breña' },
  ];

  // Tab de Datos Principales
  const MainInfoTab = () => (
    <Form
      form={mainForm}
      layout="horizontal"
      labelCol={{ xs: 24, sm: 8, md: 6, lg: 6 }}
      wrapperCol={{ xs: 24, sm: 16, md: 16, lg: 16 }}
      colon={false}
      initialValues={{ igv: 18 }}
    >
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Title level={3}>Empresa</Title>
          <Item label="Razón Social" name="socialReason" rules={requiredField}>
            <Input prefix={<BankOutlined />} maxLength={150} showCount placeholder="Ingrese la razón social" />
          </Item>
          <Item label="Nombre Comercial" name="comercialName" rules={requiredField}>
            <Input prefix={<ShopOutlined />} maxLength={100} showCount placeholder="Ingrese el nombre comercial" />
          </Item>
          <Item label="RUC" name="ruc" rules={requiredField}>
            <Input prefix={<IdcardOutlined />} maxLength={11} showCount placeholder="Ej. 20123456789" />
          </Item>
          <Item label="Dirección" name="address">
            <Input prefix={<HomeOutlined />} maxLength={200} showCount placeholder="Ingrese la dirección fiscal" />
          </Item>
          <Item label="Ubigeo" name="ubigeo">
            <Select allowClear showSearch options={ubigeoOptions} placeholder="Seleccione" optionFilterProp="label" />
          </Item>
          <Title level={3}>Representante</Title>
          <Item label="Nombre completo" name="legalRepresentative">
            <Input
              prefix={<UserOutlined />}
              maxLength={150}
              showCount
              placeholder="Ingrese el nombre del representante"
            />
          </Item>
          <Item label="DNI" name="dniLegalRepresentative">
            <Input prefix={<IdcardOutlined />} maxLength={8} showCount placeholder="Ej. 12345678" />
          </Item>
          <Title level={3}>Impuesto General</Title>
          <Item label="IGV (%)" name="igv">
            <InputNumber min={1} max={100} style={{ width: '100%' }} placeholder="Ej. 18" addonAfter="%" />
          </Item>
        </Col>
        <Col xs={24} lg={12}>
          <Title level={3}>Contácto</Title>
          <Item label="Teléfono Principal" name="mainPhone">
            <Input prefix={<PhoneOutlined />} maxLength={20} showCount placeholder="Ej. 987 456 789" />
          </Item>
          <Item label="Teléfono Secundario" name="secondaryPhone">
            <Input prefix={<PhoneOutlined />} maxLength={20} showCount placeholder="Ej. 987 654 321" />
          </Item>
          <Item label="Correo Electrónico" name="email">
            <Input prefix={<MailOutlined />} type="email" maxLength={100} showCount placeholder="empresa@ejemplo.com" />
          </Item>
          <Item label="Sitio Web" name="webSite">
            <Input prefix={<GlobalOutlined />} maxLength={255} showCount placeholder="https://www.ejemplo.com" />
          </Item>
          <Title level={3}>Seguridad del sistema</Title>
          <Item label="Intentos sesión" name="maxSessionAttempts">
            <InputNumber prefix={<LockOutlined />} min={1} max={10} style={{ width: '100%' }} placeholder="Ej. 3" />
          </Item>
        </Col>
      </Row>
    </Form>
  );

  // Tab de Logo Corporativo
  const LogoTab = () => (
    <Form form={logoForm} layout="vertical" className="tab-form">
      <Row justify="center">
        <Col xs={24} md={16} lg={12}>
          <Item label="Logo de la empresa" name="logoURL">
            <Dragger name="logo" accept=".jpg,.jpeg,.png" maxCount={1} style={{ padding: '30px' }}>
              <p className="ant-upload-drag-icon">
                <UploadOutlined style={{ fontSize: '36px', color: '#1890ff' }} />
              </p>
              <p className="ant-upload-text">Haga clic o arrastre para subir el logo</p>
              <p className="ant-upload-hint">Tamaño recomendado: 512x512px</p>
            </Dragger>
          </Item>
        </Col>
      </Row>
    </Form>
  );

  // Definición de los tabs
  const items = [
    {
      key: '1',
      label: (
        <span>
          <BankOutlined style={{ marginRight: '8px' }} />
          Datos Principales
        </span>
      ),
      children: <MainInfoTab />,
    },
    {
      key: '4',
      label: (
        <span>
          <UploadOutlined style={{ marginRight: '8px' }} />
          Logo Corporativo
        </span>
      ),
      children: <LogoTab />,
    },
  ];

  return (
    <CardUI
      title="Datos de la Empresa"
      icon={<BankOutlined style={{ fontSize: '24px', color: colors.primary }} />}
      tabItems={items}
      actions={[
        <ButtonUI
          text="Guardar"
          type="primary"
          hotkey={Hotkeys.SAVE}
          icon={<SaveOutlined />}
          onClick={() => {
            console.log('guardando...');
          }}
        />,
      ]}
    ></CardUI>
  );
};

export default Company;
