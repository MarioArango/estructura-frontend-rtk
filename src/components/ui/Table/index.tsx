import { Popover, Table, TableProps } from 'antd';
import { ColumnsType, RowSelectionType } from 'antd/es/table/interface';
import { ReactNode, useState } from 'react';

// Interfaz extendida simplificada
interface ITableUIProps<RecordType extends object = any> extends Omit<TableProps<RecordType>, 'rowSelection'> {
  type?: RowSelectionType;
  columns: ColumnsType<RecordType>;
  footer?: (data: readonly RecordType[]) => ReactNode;
}

const TableUI = <RecordType extends object = any>({ type = 'radio', ...tableProps }: ITableUIProps<RecordType>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Estado para controlar la visibilidad del popover
  const [popoverVisible, setPopoverVisible] = useState(false);

  // Estado para almacenar la posición del popover
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  // Estado para almacenar el registro de la fila seleccionada
  const [selectedRecord, setSelectedRecord] = useState<RecordType | null>(null);

  // Contenido del popover - puedes personalizarlo según tus necesidades
  const content = (
    <div>
      <p>Acciones disponibles para esta fila:</p>
      <ul>
        <li>
          <a onClick={() => handleAction('editar', selectedRecord)}>Editar</a>
        </li>
        <li>
          <a onClick={() => handleAction('eliminar', selectedRecord)}>Eliminar</a>
        </li>
        <li>
          <a onClick={() => handleAction('ver', selectedRecord)}>Ver detalles</a>
        </li>
      </ul>
    </div>
  );

  // Función para manejar las acciones del popover
  const handleAction = (action: string, record: RecordType | null) => {
    console.log(`Acción: ${action}`, record);
    // Aquí puedes implementar la lógica específica para cada acción
    // Por ejemplo, abrir un modal, navegar a otra página, etc.

    // Cerrar el popover después de la acción
    setPopoverVisible(false);
  };

  // Manejador simplificado para la selección de filas
  const handleRowSelection = (record: RecordType) => {
    // Usar la primera clave como identificador para la selección
    if (tableProps.rowKey) {
      // Si rowKey es una función, usarla para obtener la clave
      if (typeof tableProps.rowKey === 'function') {
        setSelectedRowKeys([tableProps.rowKey(record)]);
      }
      // Si rowKey es un string, usar la propiedad correspondiente
      else {
        setSelectedRowKeys([(record as any)[tableProps.rowKey]]);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Popover flotante que se posiciona según el estado */}
      <Popover
        content={content}
        title="Acciones"
        trigger="click"
        open={popoverVisible}
        onOpenChange={setPopoverVisible}
        overlayStyle={{
          position: 'absolute',
          left: `${popoverPosition.x}px`,
          top: `${popoverPosition.y}px`,
        }}
      >
        <div
          style={{
            position: 'fixed',
            left: popoverPosition.x,
            top: popoverPosition.y,
            width: 0,
            height: 0,
            opacity: 0,
            pointerEvents: 'none',
          }}
        />
      </Popover>

      <Table<RecordType>
        {...tableProps}
        pagination={false}
        scroll={{ y: 'calc(100vh - 160px)' }}
        rowSelection={{
          type,
          selectedRowKeys,
          onChange: newSelectedRowKeys => {
            console.log('selectedRowKeys changed: ', newSelectedRowKeys);
            setSelectedRowKeys(newSelectedRowKeys);
          },
        }}
        onRow={record => {
          return {
            onClick: () => handleRowSelection(record),
            onContextMenu: event => {
              // Prevenir el menú contextual por defecto del navegador
              event.preventDefault();

              // Actualizar la posición del popover basado en la posición del cursor
              setPopoverPosition({
                x: event.clientX,
                y: event.clientY,
              });

              // Almacenar el registro seleccionado
              setSelectedRecord(record);

              // Mostrar el popover
              setPopoverVisible(true);
            },
          };
        }}
      />
    </div>
  );
};

export default TableUI;
