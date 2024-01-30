//Importaciones de react
import { MouseEvent, useState } from 'react';
//Importaciones de fontawesome (iconos)
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importacion de react hook form
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// Importacion de interfaces
import { ForgotPasswordForm, ForgotPasswordQuery } from '../../interfaces';
// Importacion de validaciones
import { forgotPasswordSchema } from '../../validations';
// Importacion de react router dom
import { NavigateFunction, useNavigate } from 'react-router-dom';
// Importacion de servicios
import { recoveryPassword } from '../../services';
// Importacion de utils
import { errorManager } from '../../utils/axios/errors-manager';
import { SnackbarUtilities } from '../../utils/snackbar/snackbar-manager';
// Importacion de componentes
import { Loader } from '../../components';
// Importacion de estilos
import '../../styles/Auth/ForgotPassword.css';

const ForgotPassword = () => {
  //variables reactivas
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // react router dom
  const navigate = useNavigate();
  //reack hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // Funcion para enviar el correo de recuperacion de contraseña
  const onSubmit = (data: ForgotPasswordForm) => {
    setIsLoading(true);
    recoveryPassword(data)
      .then((data) => dataForgotPasswordManager({ setIsLoading, data, navigate }))
      .catch((error) => errorManager({ error, setIsLoading }));
  };

  // Accion del boton login
  const handleLoginClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/auth/login');
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-forgotpassword">
        <h1 className="mb-4 text-[4vh] font-semibold text-primary-orange">
          Recovery Password
        </h1>
        <p className="mb-4 text-[5vw]">Enter your Account Email</p>
        {/* Input de correo */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.mail ? '' : 'mb-4'}`}>
            <input
              id="mail"
              type="email"
              placeholder="Blockhunt@gmail.com"
              className={`inputs-forgotpassword ${
                errors.mail ? 'border-red-500' : 'border-black'
              }`}
              {...register('mail')}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <FontAwesomeIcon
                className="h-[24px] w-[24px] rounded-full p-0  text-black"
                icon={faEnvelope}
              />
            </div>
          </div>
          <p
            className={`text-center text-[2vh] font-bold text-red-500 ${
              errors.mail ? 'mb-4' : ''
            }`}
          >
            {errors.mail?.message}
          </p>
        </div>
        {/* Boton de enviar solicitud para cambiar clave */}
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

export default ForgotPassword;

interface IdataForgotPasswordManager {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  data: ForgotPasswordQuery;
  navigate: NavigateFunction;
}

const dataForgotPasswordManager = ({
  setIsLoading,
  data,
  navigate
}: IdataForgotPasswordManager) => {
  setIsLoading(false);
  SnackbarUtilities.success(data.data.msg);
  navigate('/auth/login');
  
};
