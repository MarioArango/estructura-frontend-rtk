import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import React from 'react';
import { colors } from './colors';

// Configuración de tema global inspirada en iOS/macOS
const globalTheme: ThemeConfig = {
  token: {
    // Colores principales
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.error,
    colorInfo: colors.info,
    colorTextBase: colors.gray10,

    // Fondos y bordes - más suaves, típicos de iOS
    colorBgBase: colors.gray1,
    colorBorder: colors.gray4,
    colorBorderSecondary: colors.gray3,

    // Tipografía - San Francisco (o su aproximación)
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,

    // Mayor radio de borde para un aspecto más iOS
    borderRadius: 8,
    wireframe: false, // Diseño moderno

    // Sistema de espaciado consistente
    sizeStep: 4,
    sizeUnit: 4,

    // Transiciones suaves como en iOS/macOS
    motion: true,
    motionDurationMid: '0.2s', // Transiciones más rápidas y elegantes
    motionEaseInOut: 'cubic-bezier(0.42, 0, 0.58, 1)', // Curva de aceleración tipo iOS

    // Sombras y elevaciones suaves
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    boxShadowSecondary: '0 4px 12px rgba(0, 0, 0, 0.08)',

    // Valores z-index
    zIndexBase: 1000,
    zIndexPopupBase: 1000,
  },
  components: {
    // Botones - estilo iOS con esquinas redondeadas y aspecto limpio
    Button: {
      controlHeight: 36,
      controlHeightLG: 44,
      controlHeightSM: 28,
      borderRadius: 8, // Más redondeado, estilo iOS
      fontWeight: 500,
      // Sin sombra por defecto (estilo iOS plano)
      boxShadow: 'none',
      // Padding horizontal más generoso
      paddingInline: 16,
      // Efecto hover sutil
      colorPrimaryHover: '#0071EB', // Azul ligeramente más oscuro
      // Botones fantasma más suaves
      ghostBg: 'transparent',
      // Botones de texto con transition
      contentFontSize: 15, // Texto ligeramente más grande
    },

    // Tablas - más espaciadas y limpias como macOS Finder
    Table: {
      headerBg: colors.gray2,
      headerColor: colors.gray9,
      headerFilterHoverBg: colors.gray3,
      rowHoverBg: colors.gray2,
      colorTextHeading: colors.gray11,
      fontSize: 14, // Texto más legible
      padding: 12, // Celdas más espaciadas
      paddingXS: 8,
      borderRadius: 8,
      // Bordes más sutiles
      borderColor: colors.gray3,
      // Cabecera con estilo sutil
      headerBorderRadius: 8,
      // Altura de fila más elegante
      rowHeight: 44, // Altura similar a filas de iOS
    },

    // Formularios - inspirados en formularios de macOS/iOS
    Form: {
      itemMarginBottom: 20, // Espacio generoso entre campos
      labelFontSize: 14, // Etiqueta clara
      labelHeight: 22, // Altura de etiqueta adecuada
      controlHeight: 36, // Altura cómoda para inputs
      // Estilo de etiqueta superior
      verticalLabelPadding: 0,
      // Mensajes de error sutiles
      feedbackFontSize: 13,
      // Espaciado iOS-style
      labelColor: colors.gray9, // Color menos intenso para etiquetas
    },

    // Tarjetas - sombras y bordes sutiles como macOS
    Card: {
      colorBorderSecondary: 'transparent', // Sin bordes visibles
      headerBg: 'transparent',
      paddingLG: 20, // Padding interior generoso
      actionsBg: 'transparent',
      // Sombra sutil tipo macOS
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.03)',
      fontSize: 14,
      headerFontSize: 16, // Título más grande
      // Bordes más redondeados
      borderRadius: 10, // Muy redondeado, estilo iOS
    },

    // Inputs - estilo elegante de iOS
    Input: {
      controlHeight: 36, // Altura cómoda
      controlHeightLG: 44, // Buena altura para principal
      controlHeightSM: 28, // Compacto pero usable
      activeBg: colors.gray1,
      hoverBorderColor: colors.primary,
      addonBg: colors.gray3,
      // Bordes redondeados
      borderRadius: 8, // Estilo iOS
      // Padding horizontal generoso
      paddingInline: 12,
      // Focus state más sutil
      activeBoxShadow: '0 0 0 2px rgba(0, 122, 255, 0.2)', // Resplandor azul sutil
    },
    InputNumber: {
      controlHeight: 36,
      controlHeightLG: 44,
      controlHeightSM: 28,
      borderRadius: 8,
      activeBg: colors.gray1,
      hoverBorderColor: colors.primary,
      paddingInline: 12,
      activeBoxShadow: '0 0 0 2px rgba(0, 122, 255, 0.2)',
      handlerBg: colors.gray2,
      handlerBorderColor: colors.gray4,
      fontSize: 14,
      fontWeight: 'normal',
      handlerHeight: 16,
      handlerHoverBg: colors.gray3,
    },

    // Menús - diseño limpio estilo macOS
    Menu: {
      itemHeight: 44, // Altura generosa como menús macOS
      collapsedWidth: 56,
      horizontalItemSelectedColor: colors.primary,
      itemSelectedBg: colors.gray3, // Fondo muy sutil para selección
      itemHoverBg: colors.gray2, // Hover casi imperceptible
      subMenuItemBg: 'transparent',
      // Tipografía más clara
      fontSize: 14,
      iconSize: 16,
      // Light mode macOS style
      lighterItemBg: 'transparent',
      // Padding horizontal generoso
      itemPaddingInline: 16,
    },

    // Modal - estilo macOS
    Modal: {
      titleFontSize: 18, // Título más grande
      headerBg: 'transparent', // Sin fondo de cabecera
      contentBg: colors.gray1,
      // Padding generoso
      paddingMD: 24,
      // Bordes redondeados
      borderRadius: 12, // Muy redondeado como ventanas macOS
      // Sombra definida para ventanas flotantes
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(0, 0, 0, 0.05)',
    },

    // DatePicker - similar a iOS Calendar
    DatePicker: {
      controlHeight: 36,
      cellActiveWithRangeBg: `rgba(0, 122, 255, 0.1)`,
      // Celdas de calendario bien espaciadas
      cellPaddingInline: 8,
      cellHeight: 32, // Más alto
      // Bordes redondeados
      borderRadius: 8,
      // Today con círculo de estilo iOS
      cellActiveWithRangeBg: `rgba(0, 122, 255, 0.2)`,
    },

    // Tabs - inspirados en pestañas de Safari
    Tabs: {
      cardBg: colors.gray3,
      itemHoverColor: colors.primary,
      itemActiveColor: colors.primary,
      horizontalItemGutter: 24,
      cardHeight: 36,
      // Línea activa iOS-style
      inkBarColor: colors.primary,
      inkBarHeight: 2,
      // Mejor espaciado
      horizontalMargin: '0 0 16px 0',
      // Estilo de tarjeta más redondeado
      cardBorderRadius: 8,
    },

    // Select - inspirado en selectores macOS
    Select: {
      controlHeight: 36,
      controlHeightLG: 44,
      controlHeightSM: 28,
      multipleItemBg: colors.gray3, // Fondo sutil para chips
      optionSelectedBg: colors.gray3, // Selección muy sutil
      // Bordes redondeados
      borderRadius: 8,
      // Padding generoso
      optionPadding: '10px 12px',
      // Dropdown con sombra macOS
      dropdownBoxShadow: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.03)',
    },

    // Estadísticas - visuales limpias
    Statistic: {
      contentFontSize: 28, // Más grande para destacar
      titleFontSize: 14,
      // Mejor espaciado
      contentFontWeight: 500, // Semi-bold
      // Color de título más sutil
      titleColor: colors.gray8,
    },

    // Notificaciones - inspiradas en notificaciones iOS
    Message: {
      contentPadding: '12px 16px',
      fontSize: 14,
      // Sombra estilo notificación iOS
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      // Bordes redondeados
      borderRadius: 10, // Muy redondeado
      // Colores de fondo más suaves
      colorBgInfo: 'rgba(90, 200, 250, 0.1)', // Azul muy sutil
    },

    // Segmentación - como controles segmentados de iOS
    Segmented: {
      itemHoverBg: colors.gray2, // Muy sutil
      itemSelectedBg: colors.gray1, // Blanco para seleccionado
      // Bordes muy redondeados
      borderRadius: 8,
      borderRadiusSM: 8,
      borderRadiusXS: 8,
      // Mejor contraste
      itemSelectedColor: colors.primary, // Color de texto seleccionado es primario
      // Control más compacto
      itemHeight: 32,
      itemPadding: '6px 16px',
      // Sombra interior sutil
      boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.06)',
    },

    // Componentes adicionales importantes para ERP con estilo iOS/macOS

    // Steps - como indicadores de progreso en iOS
    Steps: {
      titleLineHeight: 20,
      descriptionLineHeight: 18,
      iconSize: 28, // Icono más grande y visible
      iconFontSize: 14, // Texto más legible
      // Puntos de progreso estilo iOS
      progressDotSize: 8,
      // Colores consistentes
      colorPrimary: colors.primary,
      // Espacio entre pasos
      navigationContentMaxWidth: 120,
    },

    // Tree - como estructura Finder
    Tree: {
      titleHeight: 32, // Altura más cómoda
      nodeHoverBg: colors.gray2, // Hover muy sutil
      nodeSelectedBg: colors.gray3, // Selección muy sutil
      // Iconos más claros
      directoryNodeSelectedColor: colors.primary,
      // Padding de nodo
      nodePadding: '0 8px',
      // Indicador de selección
      nodeSelectedBg: `rgba(0, 122, 255, 0.1)`, // Azul muy sutil
    },

    // Checkbox - estilo iOS
    Checkbox: {
      controlHeight: 16, // Tamaño adecuado
      fontSize: 14, // Texto normal
      // Mejor espaciado
      marginXS: 8,
      // Bordes más redondeados
      borderRadius: 4, // Checkbox redondeado
      // Color de fondo activado
      colorPrimary: colors.primary,
    },

    // Drawer - como paneles laterales de macOS
    Drawer: {
      paddingLG: 24, // Padding generoso
      headerPadding: '16px 24px',
      // Mejor tratamiento de footer
      footerPaddingBlock: 12,
      footerPaddingInline: 24,
      // Sin borde en header
      headerBorderBottom: 0,
      // Fondo más sutil
      colorBgElevated: colors.gray1,
      // Sombra macOS
      boxShadow: '-8px 0 24px rgba(0, 0, 0, 0.08)',
    },

    // Radio - estilo iOS
    Radio: {
      buttonBg: colors.gray2,
      buttonCheckedBg: colors.primary,
      buttonColor: colors.gray9,
      buttonCheckedColor: colors.gray1,
      // Tamaño
      controlHeight: 32,
      // Bordes redondeados
      buttonBorderRadius: 8, // Muy redondeado
      // Grupo más compacto
      buttonStyle: 'solid',
    },

    // Tooltip - estilo macOS
    Tooltip: {
      colorBgDefault: 'rgba(0, 0, 0, 0.75)', // Fondo semi-transparente
      colorTextLightSolid: colors.gray1,
      // Retraso para evitar activación accidental
      mouseEnterDelay: 0.5,
      // Padding generoso
      paddingXS: 8,
      // Bordes redondeados
      borderRadius: 6,
      // Sombra sutil
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    },

    // Popover - estilo macOS
    Popover: {
      padding: 12,
      // Fondo con blur efecto
      colorBgElevated: 'rgba(255, 255, 255, 0.98)',
      // Borde sutil
      borderRadius: 12, // Muy redondeado
      // Sombra macOS
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
    },

    // Avatar - estilo SF Symbols
    Avatar: {
      borderRadius: 999, // Circular
      // Fondo de color
      colorBgContainer: colors.gray3,
      // Mejor texto
      fontSizeLG: 18,
      fontSize: 14,
      fontSizeSM: 12,
    },

    // Progress - barras de progreso estilo iOS
    Progress: {
      // Altura
      lineHeight: 8, // Más delgada
      // Bordes redondeados
      borderRadius: 4,
      // Colores
      colorText: colors.gray8, // Texto de porcentaje sutil
    },

    // Switch - estilo iOS toggle
    Switch: {
      // Tamaño
      trackHeight: 22,
      trackMinWidth: 44,
      // Colores cuando activado
      colorPrimary: colors.primary,
      // Handle
      handleSize: 18,
      // Efecto de sombra
      handleShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  },
};

// Tema oscuro mejorado al estilo macOS Mojave/Big Sur
const darkThemeOverrides: ThemeConfig = {
  token: {
    colorBgBase: colors.gray13, // Fondo muy oscuro
    colorTextBase: colors.gray3, // Texto claro

    // Ajustar bordes para modo oscuro
    colorBorder: colors.gray11,
    colorBorderSecondary: `rgba(255, 255, 255, 0.08)`, // Bordes sutiles

    // Mejores sombras para modo oscuro
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    boxShadowSecondary: '0 8px 24px rgba(0, 0, 0, 0.6)',
  },
  components: {
    // Tabla oscura - estilo Finder macOS
    Table: {
      headerBg: colors.gray12,
      headerColor: colors.gray3,
      rowHoverBg: `rgba(255, 255, 255, 0.04)`, // Hover más sutil
      // Bordes
      borderColor: colors.gray11,
      // Cabecera más prominente
      headerSplitColor: colors.gray11,
    },
    Card: {
      colorBorderSecondary: colors.gray11,
      headerBg: colors.gray12,
      // Sombras para modo oscuro
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.06)',
    },
    Menu: {
      itemSelectedBg: `rgba(0, 122, 255, 0.2)`, // Más visible en modo oscuro
      itemHoverBg: colors.gray12,
      // Selección más visible
      horizontalItemSelectedBg: `rgba(0, 122, 255, 0.2)`,
    },
    Modal: {
      headerBg: colors.gray12,
      contentBg: colors.gray13,
      maskBg: 'rgba(0, 0, 0, 0.65)', // Overlay más oscuro
      // Sombra más pronunciada
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.04)',
    },
    Input: {
      activeBg: colors.gray12,
      addonBg: colors.gray11,
      // Borde activo más visible
      activeBorderColor: colors.primary,
    },
    Select: {
      optionSelectedBg: `rgba(0, 122, 255, 0.2)`,
      selectorBg: colors.gray12,
      // Dropdown oscuro
      dropdownBg: colors.gray12,
    },
    // Notificación oscura
    Message: {
      contentBg: colors.gray12,
      // Borde sutil
      contentBorderStyle: 'solid',
      contentBorderWidth: 1,
      contentBorderColor: 'rgba(255, 255, 255, 0.08)',
    },
    // Steps oscuros
    Steps: {
      colorSplit: 'rgba(255, 255, 255, 0.08)',
      // Iconos
      colorIcon: colors.gray7,
      colorIconHover: colors.gray5,
    },
    // Tooltip oscuro
    Tooltip: {
      colorBgDefault: 'rgba(0, 0, 0, 0.85)', // Fondo más oscuro
      // Borde sutil
      colorBgDefault: 'rgba(40, 40, 40, 0.94)', // Como tooltips de macOS oscuro
    },
    // Popover oscuro
    Popover: {
      colorBgElevated: 'rgba(44, 44, 46, 0.98)', // Como menús contextuales macOS
      // Borde sutil
      popoverBg: colors.gray12,
    },
    // Switch oscuro
    Switch: {
      trackHeight: 22,
      trackMinWidth: 44,
      // Colores cuando activado
      colorPrimary: colors.primary,
      // Borde inactivo
      handleBg: colors.gray1,
    },
  },
};

// Tipo para las opciones de tema
type ThemeMode = 'light' | 'dark';

// Componente principal de diseño con opción compacta
interface DesignProps {
  children: React.ReactNode;
  themeMode?: ThemeMode;
  compact?: boolean; // Opción para modo ultra-compacto para pantallas con muchos datos
}

const Design = ({ children, themeMode = 'light', compact = false }: DesignProps) => {
  // Definir algoritmo según el modo seleccionado
  const algorithm = themeMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm;

  // Aplicar tema compacto si se especifica
  const compactTheme = compact
    ? {
        token: {
          // Reducir aún más los tamaños para UI muy densa
          fontSize: 13,
          borderRadius: 6, // Reducir bordes redondeados en modo compacto
        },
        components: {
          Form: {
            itemMarginBottom: 16, // Menos espacio entre elementos
            controlHeight: 32, // Inputs más pequeños
          },
          Table: {
            padding: 8, // Celdas más compactas
            rowHeight: 36, // Filas más compactas
          },
          // Componentes compactos adicionales
          Input: {
            controlHeight: 32, // Más pequeño
            paddingInline: 10, // Menos padding horizontal
          },
          Select: {
            controlHeight: 32, // Más pequeño
          },
          Button: {
            controlHeight: 32, // Más pequeño
            paddingInline: 12, // Menos padding
          },
          // Otros ajustes compactos
          Menu: {
            itemHeight: 36, // Menú más compacto
          },
          DatePicker: {
            controlHeight: 32,
          },
          // Ajustes específicos para ERP
          Card: {
            paddingLG: 16, // Menos padding
          },
        },
      }
    : {};

  // Fusionar configuraciones basadas en modo y ajuste compacto
  const themeConfig: ThemeConfig = {
    algorithm,
    ...globalTheme,
    ...(themeMode === 'dark' ? darkThemeOverrides : {}),
    ...(compact ? compactTheme : {}),
  };

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default Design;
