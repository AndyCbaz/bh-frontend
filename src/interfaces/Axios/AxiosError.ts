import { AxiosError, AxiosResponse } from 'axios';

interface CustomData {
  errors: { msg: string }[];
  // Agrega aquí tus propiedades personalizadas
  customProperty?: string;
}

interface CustomAxiosResponse extends AxiosResponse {
  data: CustomData;
}

export interface CustomAxiosError extends AxiosError {
  response?: CustomAxiosResponse;
}
