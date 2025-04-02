export const validateRUC = (_: any, value: string) => {
  if (!value) {
    return Promise.reject('El RUC es obligatorio');
  }
  if (!/^\d{11}$/.test(value)) {
    return Promise.reject('El RUC debe tener 11 dígitos numéricos');
  }
  return Promise.resolve();
};

// Validación personalizada para DNI peruano (8 dígitos)
export const validateDNI = (_: any, value?: string) => {
  if (!value) {
    return Promise.resolve();
  }
  if (!/^\d{8}$/.test(value)) {
    return Promise.reject('El DNI debe tener 8 dígitos numéricos');
  }
  return Promise.resolve();
};
