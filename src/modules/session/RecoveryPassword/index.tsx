import { useState } from 'react';
import { Form, Input, Button, Card, Typography, Alert, message } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const PasswordRecoveryForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      messageApi.success('Se ha enviado un enlace a su correo electrónico');
      form.resetFields();
    }, 1500);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      {contextHolder}
      <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <div className="mb-4">
          <Button type="link" icon={<ArrowLeftOutlined />} className="text-gray-500 hover:text-blue-500 p-0" onClick={() => window.history.back()}>
            Volver al login
          </Button>
        </div>

        <div className="text-center mb-6">
          <Title level={3} className="font-bold">
            Recuperar Contraseña
          </Title>
        </div>

        <Alert
          message="Recuperación de contraseña"
          description="Ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña."
          type="info"
          showIcon
          className="mb-6"
        />

        <Form form={form} name="password_recovery" onFinish={onFinish} layout="vertical" className="px-2">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Por favor ingrese su correo electrónico' },
              { type: 'email', message: 'Por favor ingrese un correo electrónico válido' },
            ]}
          >
            <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Correo electrónico" size="large" className="py-2" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading} className="h-10 bg-blue-500 hover:bg-blue-600">
              Enviar Enlace
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <Paragraph className="text-gray-500 text-sm">
              Recibirá un correo electrónico con instrucciones para restablecer su contraseña. Si no recibe el correo en unos minutos, revise su carpeta de spam.
            </Paragraph>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default PasswordRecoveryForm;
