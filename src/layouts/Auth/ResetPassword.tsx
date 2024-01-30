//Importaciones de react
import { MouseEvent, useState } from 'react';
//Importaciones de react hook form
import { useForm } from 'react-hook-form';
//Importaciones de interfaces
import { ResetPasswordForm, ResetPasswordQuery } from '../../interfaces';
//Importaciones de zod
import { zodResolver } from '@hookform/resolvers/zod';
//Importaciones de validaciones
import { resetPasswordSchema } from '../../validations';
//Importaciones de fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
//Importaciones de componentes
import { Loader } from '../../components';
//Importaciones de react router dom
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
//Importaciones de servicios
import { changePassword } from '../../services';
//Importaciones de utils
import { errorManager } from '../../utils/axios/errors-manager';
import { SnackbarUtilities } from '../../utils/snackbar/snackbar-manager';
// Importaciones de estilos
import '../../styles/Auth/ResetPassword.css';

const ResetPassword = () => {
  //Variables reactivas
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // react router dom
  const navigate = useNavigate();
  const { token } = useParams();
  //reack hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });

  // Funcion para enviar el correo de recuperacion de contraseña
  const onSubmit = (data: ResetPasswordForm) => {
    setIsLoading(true);
    const dataChangePassword: ResetPasswordForm = {
      ...data,
      token: token,
    };
    changePassword(dataChangePassword)
      .then((data) =>
        dataChangePasswordManager({ data, setIsLoading, navigate }),
      )
      .catch((error) => errorManager({ error, setIsLoading }));
  };

  // Accion del boton login
  const handleLoginClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/auth/login');
  };
  return (
    <>
      <form className="form-resetpassword" onSubmit={handleSubmit(onSubmit)}>
        {/* Input de clave */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.password ? '' : 'mb-4'}`}>
            <input
              id="password"
              type="password"
              placeholder="New Password"
              className={`inputs-resetpassword pr-10 ${
                errors.password ? 'border-red-500' : 'border-black'
              }`}
              {...register('password')}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <FontAwesomeIcon
                className="h-[24px] w-[24px] rounded-full p-0  text-black"
                icon={faKey}
              />
            </div>
          </div>
          <p
            className={`text-center text-[2vh] font-bold text-red-500 ${
              errors.password ? 'mb-4' : ''
            }`}
          >
            {errors.password?.message}
          </p>
        </div>
        {/* Input de confirmacion de clave */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.repassword ? '' : 'mb-4'}`}>
            <input
              id="repassword"
              type="password"
              placeholder="Confirm New Password"
              className={`inputs-resetpassword pr-10 ${
                errors.repassword ? 'border-red-500' : 'border-black'
              }`}
              {...register('repassword')}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <FontAwesomeIcon
                className="h-[24px] w-[24px] rounded-full p-0  text-black"
                icon={faKey}
              />
            </div>
          </div>
          <p
            className={`text-center text-[2vh] font-bold text-red-500 ${
              errors.repassword ? 'mb-4' : ''
            }`}
          >
            {errors.repassword?.message}
          </p>
        </div>
        {/* Boton para cambiar clave */}
        <button
          type="submit"
          className="mb-4 h-[50px] w-full rounded-3xl bg-black"
        >
          <h1 className="text-center text-lg font-bold text-white">SEND</h1>
        </button>
        {/* boton return login */}
        <button
          onClick={handleLoginClick}
          className={`${isLoading ? 'hidden' : ''}`}
        >
          <h1 className="font-bold text-[#999999]">LOGIN</h1>
        </button>
        <Loader isLoading={isLoading} />
      </form>
    </>
  );
};

export default ResetPassword;

interface IdataChangePasswordManager {
  data: ResetPasswordQuery;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
}

const dataChangePasswordManager = ({
  data,
  setIsLoading,
  navigate,
}: IdataChangePasswordManager) => {
  setIsLoading(false);
  SnackbarUtilities.success(data.data.msg);
  navigate('/auth/login');
};
