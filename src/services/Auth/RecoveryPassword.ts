import { backendApi } from '../../apis/backendApi';
import { ForgotPasswordForm, ForgotPasswordQuery } from '../../interfaces';


export const recoveryPassword = async ({
  mail,
}: ForgotPasswordForm): Promise<ForgotPasswordQuery> => {
  const { data } = await backendApi.post('/api/clientes/recoveryPassword', {
    mail
  });
  return data;
};
