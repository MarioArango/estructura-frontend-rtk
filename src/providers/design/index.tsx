import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';

// Paleta de colores para un PMS y CRM profesional
const colors = {
  primary: '#1890ff', // Azul principal para elementos primarios
  success: '#52c41a', // Verde para estados exitosos
  warning: '#faad14', // Amarillo para advertencias
  error: '#f5222d', // Rojo para errores
  info: '#1890ff', // Azul para información

  // Colores secundarios
  secondary: '#722ed1', // Púrpura para acciones secundarias
  tertiary: '#13c2c2', // Aguamarina para acentos

  // Paleta de grises (para modo claro y oscuro)
  gray1: '#ffffff',
  gray2: '#fafafa',
  gray3: '#f5f5f5',
  gray4: '#f0f0f0',
  gray5: '#d9d9d9',
  gray6: '#bfbfbf',
  gray7: '#8c8c8c',
  gray8: '#595959',
  gray9: '#434343',
  gray10: '#262626',
  gray11: '#1f1f1f',
  gray12: '#141414',
  gray13: '#000000',
};

// Configuración de tema global
const globalTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.error,
    colorInfo: colors.info,

    // Tipografía
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,

    // Bordes y sombras
    borderRadius: 4,
    wireframe: false, // Diseño más moderno

    // Espaciado
    sizeStep: 4,
    sizeUnit: 4,

    // Transiciones
    motion: true,
    zIndexBase: 1000,
    zIndexPopupBase: 1000,
  },
  components: {
    // Botones (importantes para CRM/PMS)
    Button: {
      controlHeight: 36,
      controlHeightLG: 44,
      controlHeightSM: 28,
      borderRadius: 4,
      fontWeight: 500,
    },

    // Tablas (críticas para mostrar datos de clientes/propiedades)
    Table: {
      headerBg: colors.gray3,
      headerColor: colors.gray9,
      headerFilterHoverBg: colors.gray4,
      rowHoverBg: colors.gray2,
      colorTextHeading: colors.gray10,
    },

    // Formularios (usados frecuentemente en sistemas CRM/PMS)
    Form: {
      itemMarginBottom: 20,
      labelFontSize: 14,
      controlHeight: 36,
    },

    // Tarjetas (para dashboard y visualización de propiedades)
    Card: {
      colorBorderSecondary: colors.gray4,
      headerBg: 'transparent',
      paddingLG: 24,
      actionsBg: 'transparent',
    },

    // Inputs (esenciales para interacción con el usuario)
    Input: {
      controlHeight: 36,
      controlHeightLG: 44,
      controlHeightSM: 28,
      activeBg: colors.gray1,
      hoverBorderColor: colors.primary,
      addonBg: colors.gray3,
    },

    // Menús (navegación en PMS/CRM)
    Menu: {
      itemHeight: 48,
      collapsedWidth: 64,
      horizontalItemSelectedColor: colors.primary,
      itemSelectedBg: `${colors.primary}10`, // Transparencia 10%
      itemHoverBg: colors.gray3,
      subMenuItemBg: 'transparent',
    },

    // Modal (para operaciones importantes)
    Modal: {
      titleFontSize: 18,
      headerBg: colors.gray2,
      contentBg: colors.gray1,
    },

    // DatePicker (para reservas en PMS y seguimiento en CRM)
    DatePicker: {
      controlHeight: 36,
      cellActiveWithRangeBg: `${colors.primary}20`, // Transparencia 20%
    },

    // Tabs (para secciones en perfiles de clientes/propiedades)
    Tabs: {
      cardBg: colors.gray3,
      itemHoverColor: colors.primary,
      itemActiveColor: colors.primary,
      horizontalItemGutter: 24,
      cardHeight: 40,
    },

    // Select (para filtros y selecciones)
    Select: {
      controlHeight: 36,
      controlHeightLG: 44,
      controlHeightSM: 28,
      multipleItemBg: `${colors.primary}10`, // Transparencia 10%
      optionSelectedBg: `${colors.primary}10`, // Transparencia 10%
    },

    // Estadísticas (para dashboards)
    Statistic: {
      contentFontSize: 24,
      titleFontSize: 14,
    },

    // Notificaciones (importantes para alertas del sistema)
    Message: {
      contentPadding: '12px 16px',
    },

    // Segmentación y filtros
    Segmented: {
      itemHoverBg: `${colors.primary}10`, // Transparencia 10%
      itemSelectedBg: colors.primary,
    },
  },
};

// Configuración para el tema oscuro con sobrescrituras
const darkThemeOverrides: ThemeConfig = {
  token: {
    colorBgBase: colors.gray12,
    colorTextBase: colors.gray3,
  },
  components: {
    Table: {
      headerBg: colors.gray11,
      headerColor: colors.gray3,
      rowHoverBg: colors.gray10,
    },
    Card: {
      colorBorderSecondary: colors.gray10,
    },
    Menu: {
      itemSelectedBg: `${colors.primary}30`, // Mayor transparencia en modo oscuro
      itemHoverBg: colors.gray10,
    },
    Modal: {
      headerBg: colors.gray11,
      contentBg: colors.gray12,
    },
  },
};

// Tipo para las opciones de tema
type ThemeMode = 'light' | 'dark';

// Componente principal de diseño
interface DesignProps {
  children: React.ReactNode;
  themeMode?: ThemeMode;
}

const Design = ({ children, themeMode = 'light' }: DesignProps) => {
  // Definir el algoritmo según el modo seleccionado
  const algorithm = themeMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;

  // Fusionar las configuraciones según el modo
  const themeConfig: ThemeConfig = {
    algorithm,
    ...globalTheme,
    ...(themeMode === 'dark' ? darkThemeOverrides : {}),
  };

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default Design;
