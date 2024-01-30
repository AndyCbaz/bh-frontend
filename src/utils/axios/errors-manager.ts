import { Dispatch } from 'react';
import { CustomAxiosError } from '../../interfaces/Axios/AxiosError';
import { SnackbarUtilities } from '../snackbar/snackbar-manager';

interface ErrorManagerProps {
  error: CustomAxiosError;
  setIsLoading?: Dispatch<React.SetStateAction<boolean>>;
}
export const errorManager = (
  { error, setIsLoading }: ErrorManagerProps,
) => {
  if (error.response?.status === 404) {
    //Este error ocurre cuando no hay respuesta del servidor
    setIsLoading && setIsLoading(false);
    SnackbarUtilities.error('Error de conexión, intenta más tarde');
    return Promise.reject(error);
  } else if (error.response?.status === 401) {
    // Este error ocurre cuando no existe la api
    setIsLoading && setIsLoading(false);
    SnackbarUtilities.error('API no encontrada');
    return Promise.reject(error);
  } else if (error.response?.status === 400) {
    //ESte error ocurre al haber una respuesta erronea de la api
    setIsLoading && setIsLoading(false);
    SnackbarUtilities.error(error.response.data.errors[0].msg);
    return Promise.reject(error);
  }
};
