import { backendApi } from '../../apis/backendApi';
import { VerifyEmailQuery, VerifyEmailForm } from '../../interfaces';

export const verifyEmail = async ({
  seed,
  token,
}: VerifyEmailForm): Promise<VerifyEmailQuery> => {
  const { data } = await backendApi.post('/api/clientes/confirmRegister', {
    seed,
    token,
  });
  return data;
};
