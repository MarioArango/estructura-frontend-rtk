import { useState } from 'react';
import { Tabs, Form, Upload, message } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { IEmpresaFormState, IEmpresaFormValues } from './components/FormCompany/types';
import FormCompany from './components/FormCompany';

const { TabPane } = Tabs;

const Company = (): JSX.Element => {
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
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="EMPRESA" key="1">
        <FormCompany />
      </TabPane>

      <TabPane tab="Otra Sección" key="2">
        <div className="py-2">
          <p className="text-gray-600">Esta sección está reservada para funcionalidad adicional.</p>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default Company;
