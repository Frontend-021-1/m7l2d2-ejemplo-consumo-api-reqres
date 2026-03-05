import axios from 'axios';

const apiReqRes = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
});

// INTERCEPTORES DE PETICIÓN
apiReqRes.interceptors.response.use(
  (response) => {
    console.log('Respuesta recibida exitosamente');
    console.log('Respuesta desde interceptor', response);
    return response;
  },
  (error) => {
    if (error.response) {
      // Hay conexión, pero algo falló con los datos del servidor
      console.error(`Error del servidor ${error.response.status}`);

      switch (error.response.status) {
        case 401:
          console.warn('Sesión expirada o no autorizada');
          break;
        case 403:
          console.warn('Acceso al contenido no autorizado');
          break;
        case 404:
          console.warn('El recurso solicitado no fue encontrado');
          break;
        case 500:
          console.error('Error en el servidor. Inténtelo más tarde');
          break;
      }
    } else if (error.request) {
      console.error('Error de red: No se pudo conectar con el servidor');
    } else {
      console.log('Error inesperado', error.message);
    }

    return Promise.reject(error);
  },
);

export default apiReqRes;
