import { backendApi } from '../../apis/backendApi';
import { ResetPasswordForm, ResetPasswordQuery } from '../../interfaces';

export const changePassword = async ({
  password,
  repassword,
  token,
}: ResetPasswordForm): Promise<ResetPasswordQuery> => {
  const { data } = await backendApi.post('/api/clientes/changePassword', {
    password,
    repassword,
    token,
  });
  return data;
};
