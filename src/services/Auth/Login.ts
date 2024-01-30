import { backendApi } from '../../apis/backendApi';
import { LoginForm, LoginQuery } from '../../interfaces';

export const loginUser = async ({
  correo,
  clave,
}: LoginForm): Promise<LoginQuery> => {
  const { data } = await backendApi.post('/api/clientes/login', {
    correo,
    clave,
  });
  return data;
};
