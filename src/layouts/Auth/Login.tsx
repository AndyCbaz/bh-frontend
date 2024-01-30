// Importaciones de react
import { MouseEvent, useState } from 'react';
// Importacion de react hook form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// Importacion de interfaces
import { LoginForm, LoginQuery } from '../../interfaces';
// Importacion de validaciones
import { loginSchema } from '../../validations';
// importaciones de fontawesome (iconos)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
// Importacion de servicios
import { loginUser } from '../../services';
// Importacion de utils
import { errorManager } from '../../utils/axios/errors-manager';
import { SnackbarUtilities } from '../../utils/snackbar/snackbar-manager';
// Importacion de react router dom
import { NavigateFunction, useNavigate } from 'react-router-dom';
//Importacion de componentes
import { Loader } from '../../components';
// Importacion de estilos
import '../../styles/Auth/Login.css';

const Login = () => {
  // Variables reactivas
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // react router dom
  const navigate = useNavigate();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  // Accion del boton login
  const onSubmit = (data: LoginForm) => {
    setIsLoading(true);
    loginUser(data)
      .then((data) => dataLoginManager({ data, navigate, setIsLoading }))
      .catch((error) => errorManager({ error, setIsLoading }));
  };

  // Accion del boton singup
  const handleSingUpClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/auth/singup');
  };
  // Accion del boton forgot password
  const handleForgotPasswordClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/auth/forgot-password');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        {/* input email */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.correo ? '' : 'mb-4'}`}>
            <input
              id="correo"
              type="email"
              placeholder="Blockhunt@gmail.com"
              className={`inputs-login ${
                errors.correo ? 'border-red-500' : 'border-black'
              }`}
              {...register('correo')}
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
              errors.correo ? 'mb-4' : ''
            }`}
          >
            {errors.correo?.message}
          </p>
        </div>
        {/* input clave */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.clave ? '' : 'mb-4'}`}>
            <input
              id="clave"
              type="password"
              placeholder="Password"
              className={`inputs-login pr-10 ${
                errors.clave ? 'border-red-500' : 'border-black'
              }`}
              {...register('clave')}
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
              errors.clave ? 'mb-4' : ''
            }`}
          >
            {errors.clave?.message}
          </p>
        </div>
        {/* boton login */}
        <button
          type="submit"
          disabled={isLoading}
          className={`mb-4 h-[50px] w-full rounded-3xl bg-black ${
            isLoading ? 'hidden' : ''
          }`}
        >
          <h1 className="text-center text-lg font-bold text-white">LOG IN</h1>
        </button>
        {/* boton forgot password */}
        <button
          onClick={handleForgotPasswordClick}
          className={`my-2 ${isLoading ? 'hidden' : ''}`}
        >
          <h1 className="font-bold text-[#999999]">FORGOT PASSWORD?</h1>
        </button>
        {/* boton sing up */}
        <button
          onClick={handleSingUpClick}
          className={`${isLoading ? 'hidden' : ''}`}
        >
          <h1 className="font-bold text-[#999999]">SING UP</h1>
        </button>
        <Loader isLoading={isLoading} />
      </form>
    </>
  );
};

export default Login;

// Funciones
interface dataLoginManagerProps {
  data: LoginQuery;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
}
const dataLoginManager = ({ data, navigate, setIsLoading }: dataLoginManagerProps) => {
  localStorage.setItem('token', data.data.msg.tokenAcess);
  setIsLoading(false);
  SnackbarUtilities.success('Login success');
  navigate('/app/dashboard');
};
