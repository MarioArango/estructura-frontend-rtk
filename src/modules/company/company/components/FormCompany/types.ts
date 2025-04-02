// Interfaz para los valores del formulario
export interface IEmpresaFormValues {
  RazonSocial: string;
  NombreComercial?: string;
  RUC: string;
  Direccion?: string;
  Codigo_postal?: string;
  Local?: string;
  LogoUrl?: string;
  TelefonoPrincipal?: string;
  TelefonoSecundario?: string;
  CorreoElectronico?: string;
  SitioWeb?: string;
  RepresentanteLegal?: string;
  DniRepresentante?: string;
  IntentosSesion?: number;
  IGV: number;
}

// Interfaz para el estado del componente
export interface IEmpresaFormState {
  fileList: any[];
}
