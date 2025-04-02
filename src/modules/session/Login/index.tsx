import { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Divider, message } from 'antd';
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    if (!values.notRobot) {
      messageApi.error('Por favor complete la verificación de robot');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      messageApi.success('Login exitoso');
    }, 1500);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      {contextHolder}
      <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <div className="text-center mb-6">
          <Title level={3} className="font-bold">
            Iniciar Sesión
          </Title>
        </div>

        <Form
          form={form}
          name="login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          className="px-2"
        >
          <Form.Item name="username" rules={[{ required: true, message: 'Por favor ingrese su usuario' }]}>
            <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Usuario" size="large" className="py-2" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}>
            <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Contraseña" size="large" className="py-2" />
          </Form.Item>

          <Form.Item className="mb-4">
            <Card size="small" className="bg-gray-50 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <SafetyCertificateOutlined className="text-gray-500 mr-2" />
                  <Text className="text-sm font-medium">Verificación de seguridad</Text>
                </div>
                <Button type="link" size="small" className="text-blue-500 p-0">
                  Refrescar
                </Button>
              </div>
              <Form.Item name="notRobot" valuePropName="checked" noStyle>
                <Checkbox>No soy un robot</Checkbox>
              </Form.Item>
            </Card>
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Recordarme</Checkbox>
            </Form.Item>
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              ¿Olvidó su contraseña?
            </a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading} className="h-10 bg-blue-500 hover:bg-blue-600">
              Iniciar Sesión
            </Button>
          </Form.Item>

          <Divider plain className="text-gray-400 text-sm">
            o
          </Divider>

          <div className="flex justify-center space-x-4">
            <Button className="flex items-center border border-gray-200 hover:border-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#EA4335" className="mr-2">
                <path d="M12.5 10v4h6a5 5 0 0 1-6 3.5 6 6 0 1 1 0-12 6 6 0 0 1 4 1.5l3-2.5a10 10 0 1 0-7 17 10 10 0 0 0 10-11v-1h-10z" />
              </svg>
              Google
            </Button>
            <Button className="flex items-center border border-gray-200 hover:border-gray-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" className="mr-2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>

          <div className="text-center mt-6">
            <Text className="text-gray-500">
              ¿No tiene una cuenta?{' '}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Regístrese
              </a>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
