import { useState } from 'react';
import { Form, Input, InputNumber, Upload, Button, Row, Col, message, Typography } from 'antd';
import { UploadOutlined, SaveOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload';
import { IEmpresaFormState, IEmpresaFormValues } from './types';
import { validateDNI, validateRUC } from '../../../../../helpers/validates';

const { Item } = Form;

const FormCompany = (): JSX.Element => {
  const [state, setState] = useState<IEmpresaFormState>({
    fileList: [],
  });

  const [form] = Form.useForm<IEmpresaFormValues>();

  // Manejo de cambio de logo
  const handleLogoChange = ({ fileList }: { fileList: any[] }) => {
    setState({ ...state, fileList });
  };

  // Función para guardar el formulario
  const handleSubmit = (values: IEmpresaFormValues) => {
    // Aquí se implementaría la lógica para guardar en la base de datos
    console.log('Valores del formulario:', values);
    message.success('Información de empresa guardada correctamente');
  };

  const uploadProps = {
    beforeUpload: (file: RcFile) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Solo puede subir archivos de imagen');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('La imagen debe ser menor a 2MB');
      }
      return isImage && isLt2M ? false : Upload.LIST_IGNORE;
    },
    fileList: state.fileList,
    onChange: handleLogoChange,
    listType: 'picture' as const,
    maxCount: 1,
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{ IGV: 18 }} className="mt-2">
      <Row gutter={16}>
        <Col span={24} className="mb-2">
          <Typography.Text type="secondary">Identificación Básica</Typography.Text>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Item name="RazonSocial" label="Razón Social" rules={[{ required: true, message: 'La razón social es obligatoria' }]}>
            <Input placeholder="Ingrese la razón social" maxLength={150} />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Item name="NombreComercial" label="Nombre Comercial">
            <Input placeholder="Ingrese el nombre comercial" maxLength={100} />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <Item name="RUC" label="RUC" rules={[{ required: true, validator: validateRUC }]}>
            <Input placeholder="Ingrese el RUC (11 dígitos)" maxLength={11} />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Item name="Direccion" label="Dirección">
            <Input placeholder="Ingrese la dirección" maxLength={200} />
          </Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={8}>
          <Item name="Ubigeo" label="Ubigeo">
            <Input placeholder="Seleccione el Ubigeo" maxLength={10} />
          </Item>
        </Col>

        <Col span={24} className="mb-2">
          <Typography.Text type="secondary">Contácto</Typography.Text>
        </Col>
        <Col xs={24} sm={12} md={6} lg={8}>
          <Item name="CorreoElectronico" label="Correo Electrónico" rules={[{ type: 'email', message: 'El correo electrónico no es válido' }]}>
            <Input placeholder="Correo electrónico" maxLength={100} />
          </Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={8}>
          <Item name="TelefonoPrincipal" label="Teléfono Principal">
            <Input placeholder="Teléfono principal" maxLength={20} />
          </Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={8}>
          <Item name="TelefonoSecundario" label="Teléfono Secundario">
            <Input placeholder="Teléfono secundario" maxLength={20} />
          </Item>
        </Col>

        <Col span={24} className="mb-2">
          <Typography.Text type="secondary">Representante Legal</Typography.Text>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Item name="RepresentanteLegal" label="Nombre">
            <Input placeholder="Nombre completo del representante" maxLength={150} />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Item name="DniRepresentante" label="DNI" rules={[{ validator: validateDNI }]}>
            <Input placeholder="DNI (8 dígitos)" maxLength={8} />
          </Item>
        </Col>

        <Col span={24} className="mb-2">
          <Typography.Text type="secondary">Configuración Adicional</Typography.Text>
        </Col>
        <Col xs={24} sm={12} md={6} lg={4}>
          <Item name="Local" label="Local del País">
            <Input placeholder="Código de local" maxLength={5} />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={4}>
          <Item name="IGV" label="IGV (%)">
            <InputNumber min={0} max={100} step={0.1} precision={2} style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col xs={24} sm={24} md={8} lg={4}>
          <Item name="IntentosSesion" label="Intentos de Sesión">
            <InputNumber min={1} style={{ width: '100%' }} />
          </Item>
        </Col>
        <Col xs={24} sm={12} md={6} lg={12}>
          <Item name="SitioWeb" label="Sitio Web">
            <Input placeholder="Sitio web" maxLength={255} />
          </Item>
        </Col>

        <Col span={24} className="mt-4">
          <Item>
            <div className="flex justify-end">
              <Button type="default" className="mr-2" onClick={() => form.resetFields()}>
                Cancelar
              </Button>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Guardar
              </Button>
            </div>
          </Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormCompany;
