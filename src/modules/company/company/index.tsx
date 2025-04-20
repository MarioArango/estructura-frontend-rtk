import { Col, Form, Input, InputNumber, Row, Select, Upload, Typography } from 'antd';
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
} from '@ant-design/icons';
import { requiredField } from '../../../helpers/form';
import CardUI from '../../../components/ui/CardUI';
import { colors } from '../../../providers/design/colors';
import ButtonUI from '../../../components/ui/ButtonUI';
import { Hotkeys } from '../../../mapping/hoykeys';
import { useRef } from 'react';
import { TButtonRef, TInputNumberRef, TInputRef, TSelectRef } from '../../../mapping/referencesAnt';

const { Item } = Form;
const { Title } = Typography;
const { Dragger } = Upload;

const Company = () => {
  const refSocialReason = useRef<TInputRef>(null);
  const refComercialName = useRef<TInputRef>(null);
  const refRuc = useRef<TInputRef>(null);
  const refAddress = useRef<TInputRef>(null);
  const refUbigeo = useRef<TSelectRef>(null);
  const refLegalRepresentative = useRef<TInputRef>(null);
  const refDNI = useRef<TInputRef>(null);
  const refIGV = useRef<TInputNumberRef>(null);
  const refMainPhone = useRef<TInputRef>(null);
  const refSecondaryPhone = useRef<TInputRef>(null);
  const refEmail = useRef<TInputRef>(null);
  const refWebSite = useRef<TInputRef>(null);
  const refMaxSessionAttempts = useRef<TInputNumberRef>(null);
  const refButtonSubmit = useRef<TButtonRef>(null);

  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleFinish = () => {
    validateFields().then(() => {});
  };

  // Lista simulada de ubigeos para el Select
  const ubigeoOptions = [
    { value: '150101', label: 'Lima - Lima - Lima' },
    { value: '150102', label: 'Lima - Lima - Ancón' },
    { value: '150103', label: 'Lima - Lima - Ate' },
    { value: '150104', label: 'Lima - Lima - Barranco' },
    { value: '150105', label: 'Lima - Lima - Breña' },
  ];

  const MainInfoTab = () => (
    <Form
      form={form}
      layout="horizontal"
      labelCol={{ xs: 24, sm: 8, md: 6, lg: 6 }}
      wrapperCol={{ xs: 24, sm: 16, md: 16, lg: 16 }}
      colon={false}
      initialValues={{ igv: 18 }}
      onFinish={handleFinish}
    >
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Title level={3}>Empresa</Title>
          <Item label="Razón Social" name="socialReason" rules={requiredField}>
            <Input
              ref={refSocialReason}
              prefix={<BankOutlined />}
              maxLength={150}
              showCount
              placeholder="Ingrese la razón social"
              onPressEnter={e => {
                e.preventDefault();
                refComercialName?.current?.focus();
              }}
            />
          </Item>
          <Item label="Nombre Comercial" name="comercialName" rules={requiredField}>
            <Input
              ref={refComercialName}
              prefix={<ShopOutlined />}
              maxLength={100}
              showCount
              placeholder="Ingrese el nombre comercial"
              onPressEnter={e => {
                e.preventDefault();
                refAddress?.current?.focus();
              }}
            />
          </Item>
          <Item label="RUC" name="ruc" rules={requiredField}>
            <Input ref={refRuc} prefix={<IdcardOutlined />} maxLength={11} showCount placeholder="Ej. 20123456789" />
          </Item>
          <Item label="Dirección" name="address">
            <Input
              ref={refAddress}
              prefix={<HomeOutlined />}
              maxLength={200}
              showCount
              placeholder="Ingrese la dirección fiscal"
              onPressEnter={e => {
                e.preventDefault();
                refUbigeo?.current?.focus();
              }}
            />
          </Item>
          <Item label="Ubigeo" name="ubigeo">
            <Select
              ref={refUbigeo}
              allowClear
              showSearch
              options={ubigeoOptions}
              placeholder="Seleccione"
              optionFilterProp="label"
              onSelect={() => {
                refLegalRepresentative?.current?.focus();
              }}
            />
          </Item>
          <Title level={3}>Representante</Title>
          <Item label="Nombre completo" name="legalRepresentative">
            <Input
              ref={refLegalRepresentative}
              prefix={<UserOutlined />}
              maxLength={150}
              showCount
              placeholder="Ingrese el nombre del representante"
              onPressEnter={e => {
                e.preventDefault();
                refDNI?.current?.focus();
              }}
            />
          </Item>
          <Item label="DNI" name="dniLegalRepresentative">
            <Input
              ref={refDNI}
              prefix={<IdcardOutlined />}
              maxLength={8}
              showCount
              placeholder="Ej. 12345678"
              onPressEnter={e => {
                e.preventDefault();
                refIGV?.current?.focus();
              }}
            />
          </Item>
          <Title level={3}>Impuesto General</Title>
          <Item label="IGV (%)" name="igv">
            <InputNumber
              ref={refIGV}
              min={1}
              max={100}
              style={{ width: '100%' }}
              placeholder="Ej. 18"
              addonAfter="%"
              onPressEnter={e => {
                e.preventDefault();
                refMainPhone?.current?.focus();
              }}
            />
          </Item>
        </Col>
        <Col xs={24} lg={12}>
          <Title level={3}>Contácto</Title>
          <Item label="Teléfono Principal" name="mainPhone">
            <Input
              ref={refMainPhone}
              prefix={<PhoneOutlined />}
              maxLength={20}
              showCount
              placeholder="Ej. 987 456 789"
              onPressEnter={e => {
                e.preventDefault();
                refSecondaryPhone?.current?.focus();
              }}
            />
          </Item>
          <Item label="Teléfono Secundario" name="secondaryPhone">
            <Input
              ref={refSecondaryPhone}
              prefix={<PhoneOutlined />}
              maxLength={20}
              showCount
              placeholder="Ej. 987 654 321"
              onPressEnter={e => {
                e.preventDefault();
                refEmail?.current?.focus();
              }}
            />
          </Item>
          <Item label="Correo Electrónico" name="email">
            <Input
              ref={refEmail}
              prefix={<MailOutlined />}
              type="email"
              maxLength={100}
              showCount
              placeholder="empresa@ejemplo.com"
              onPressEnter={e => {
                e.preventDefault();
                refWebSite?.current?.focus();
              }}
            />
          </Item>
          <Item label="Sitio Web" name="webSite">
            <Input
              ref={refWebSite}
              prefix={<GlobalOutlined />}
              maxLength={255}
              showCount
              placeholder="https://www.ejemplo.com"
              onPressEnter={e => {
                e.preventDefault();
                refMaxSessionAttempts?.current?.focus();
              }}
            />
          </Item>
          <Title level={3}>Seguridad del sistema</Title>
          <Item label="Intentos sesión" name="maxSessionAttempts">
            <InputNumber
              ref={refMaxSessionAttempts}
              prefix={<LockOutlined />}
              min={1}
              max={10}
              style={{ width: '100%' }}
              placeholder="Ej. 3"
              onPressEnter={e => {
                e.preventDefault();
                refButtonSubmit.current?.click();
              }}
            />
          </Item>
        </Col>
      </Row>
    </Form>
  );

  const LogoTab = () => (
    <Row justify="center">
      <Col xs={24} md={16} lg={12}>
        <Dragger name="logo" accept=".jpg,.jpeg,.png" maxCount={1} style={{ padding: '30px' }}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined style={{ fontSize: '36px', color: '#1890ff' }} />
          </p>
          <p className="ant-upload-text">Haga clic o arrastre para subir el logo</p>
          <p className="ant-upload-hint">Tamaño recomendado: 512x512px</p>
        </Dragger>
      </Col>
    </Row>
  );

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
      key: '2',
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
          ref={refButtonSubmit}
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
