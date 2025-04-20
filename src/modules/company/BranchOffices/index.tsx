import { ColumnsType } from 'antd/es/table';
import TableUI from '../../../components/ui/Table';

// Define la interfaz para el tipo de datos
interface DataType {
  name: string;
  age: number;
  address: string;
}

const BranchOffices = () => {
  // Crear datos de muestra
  const dataSource: DataType[] = Array.from({ length: 46 }).map((_, i) => ({
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }));

  // Definir las columnas
  const columns: ColumnsType<DataType> = [
    {
      key: 'name',
      title: 'Nombre',
      dataIndex: 'name',
      render: (_, row) => {
        return <>{row.address}</>;
      },
    },
    {
      key: 'age',
      title: 'Edad',
      dataIndex: 'age',
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  return <TableUI columns={columns} rowKey={record => record.name} dataSource={dataSource} />;
};

export default BranchOffices;
