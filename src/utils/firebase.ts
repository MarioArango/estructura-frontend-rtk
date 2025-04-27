// utils/cleanUndefined.ts
export const cleanUndefined = <T>(obj: T): T => {
  // Si no es un objeto o es null, retornarlo tal cual
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Si es un array, limpiar cada elemento
  if (Array.isArray(obj)) {
    return obj.filter(item => item !== undefined).map(item => cleanUndefined(item)) as unknown as T;
  }

  // Si es un objeto, limpiar recursivamente
  const cleanedObj: any = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      if (value !== null && typeof value === 'object') {
        // Si es un objeto o array, limpiarlo recursivamente
        const cleanedValue = cleanUndefined(value);

        // Solo agregar si el objeto/array resultante no está vacío
        if (Array.isArray(cleanedValue) && cleanedValue.length > 0) {
          cleanedObj[key] = cleanedValue;
        } else if (typeof cleanedValue === 'object' && Object.keys(cleanedValue).length > 0) {
          cleanedObj[key] = cleanedValue;
        } else if (!Array.isArray(cleanedValue) && typeof cleanedValue !== 'object') {
          cleanedObj[key] = cleanedValue;
        }
      } else {
        // Si es un valor primitivo, agregarlo directamente
        cleanedObj[key] = value;
      }
    }
  }

  return cleanedObj as T;
};

// utils/firebaseErrorHandler.ts
import { FirebaseError } from 'firebase/app';

export interface FormattedError {
  code?: string;
  message: string;
  name?: string;
  userMessage: string;
}

export const handleFirebaseError = (error: unknown): FormattedError => {
  console.error('Firebase Error:', error);

  if (error instanceof FirebaseError) {
    let userMessage = 'Ha ocurrido un error. Por favor, intenta nuevamente.';

    switch (error.code) {
      // Errores de autenticación
      case 'auth/user-not-found':
        userMessage = 'Usuario no encontrado.';
        break;
      case 'auth/wrong-password':
        userMessage = 'Contraseña incorrecta.';
        break;
      case 'auth/email-already-in-use':
        userMessage = 'El correo electrónico ya está en uso.';
        break;
      case 'auth/weak-password':
        userMessage = 'La contraseña es muy débil.';
        break;
      case 'auth/invalid-email':
        userMessage = 'El correo electrónico no es válido.';
        break;

      // Errores de Firestore
      case 'permission-denied':
        userMessage = 'No tienes permisos para realizar esta acción.';
        break;
      case 'unavailable':
        userMessage = 'El servicio no está disponible. Por favor, intenta más tarde.';
        break;
      case 'invalid-argument':
        userMessage = 'Los datos proporcionados no son válidos.';
        break;
      case 'failed-precondition':
        userMessage = 'No se cumplen las condiciones necesarias para esta operación.';
        break;
      case 'already-exists':
        userMessage = 'Este registro ya existe.';
        break;
      case 'not-found':
        userMessage = 'El registro no fue encontrado.';
        break;
      case 'unauthenticated':
        userMessage = 'Debes iniciar sesión para realizar esta acción.';
        break;
      case 'resource-exhausted':
        userMessage = 'Se ha excedido el límite de solicitudes. Intenta más tarde.';
        break;
      case 'cancelled':
        userMessage = 'La operación fue cancelada.';
        break;
      case 'deadline-exceeded':
        userMessage = 'La operación tardó demasiado tiempo. Intenta nuevamente.';
        break;
      case 'data-loss':
        userMessage = 'Se ha producido una pérdida de datos.';
        break;
      case 'internal':
        userMessage = 'Error interno del servidor.';
        break;
      case 'aborted':
        userMessage = 'La operación fue abortada.';
        break;
      case 'out-of-range':
        userMessage = 'Operación fuera de rango válido.';
        break;
      case 'unimplemented':
        userMessage = 'Operación no implementada.';
        break;
      case 'unknown':
        userMessage = 'Error desconocido.';
        break;

      // Default para cualquier otro código no manejado
      default:
        userMessage = `Error: ${error.code}. Por favor, contacta al soporte.`;
        break;
    }

    return {
      code: error.code,
      message: error.message,
      name: error.name,
      userMessage,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      userMessage: 'Ha ocurrido un error inesperado.',
    };
  }

  return {
    message: String(error),
    userMessage: 'Ha ocurrido un error desconocido.',
  };
};
