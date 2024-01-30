import { backendApi } from '../../apis/backendApi';
import { SingupQuery, SingupForm } from '../../interfaces';

export const signupUser = async ({
  nombre,
  alias,
  mail,
  password,
  repassword,
}: SingupForm): Promise<SingupQuery> => {
  const { data } = await backendApi.post('/api/clientes/register', {
    nombre,
    alias,
    mail,
    password,
    repassword,
  });
  return data;
};
