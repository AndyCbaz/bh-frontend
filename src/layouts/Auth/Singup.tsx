// Importaciones de react
import { Dispatch, MouseEvent, useState } from 'react';
// Importaciones de react hook form
import { useForm } from 'react-hook-form';
// Importaciones de zod
import { zodResolver } from '@hookform/resolvers/zod';
// Importaciones de interfaces
import { SingupForm } from '../../interfaces/Auth/SingupForm';
import { SingupQuery } from '../../interfaces';
// Importaciones de validaciones
import { singupSchema } from '../../validations';
// Importaciones de fontawesome (iconos)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
// Importacion de react router dom
import { useNavigate } from 'react-router-dom';
// Importacion de servicios
import { signupUser } from '../../services/Auth/Signup';
// Importacion de utils
import { errorManager } from '../../utils/axios/errors-manager';
import { SnackbarUtilities } from '../../utils/snackbar/snackbar-manager';
// Importacion de componentes
import { Loader } from '../../components';
// Importacion de estilos
import '../../styles/Auth/Singup.css';

const Singup = () => {
  // Variables reactivas
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //reack hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingupForm>({
    resolver: zodResolver(singupSchema),
  });

  // react router dom
  const navigate = useNavigate();

  // Accion del boton Singup
  const onSubmit = (data: SingupForm) => {
    setIsLoading(true);
    signupUser(data)
      .then((data) => dataSingupManager({ data, setIsLoading }))
      .catch((error) => errorManager({ error, setIsLoading }));
  };

  // Accion del boton login
  const handleLoginClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/auth/login');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-singup">
        {/* Input de nombre */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.nombre ? '' : 'mb-4'}`}>
            <input
              id="nombre"
              type="text"
              placeholder="Full name"
              className={`inputs-singup ${
                errors.nombre ? 'border-red-500' : 'border-black'
              }`}
              {...register('nombre')}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <FontAwesomeIcon
                className="h-[24px] w-[24px] rounded-full p-0  text-black"
                icon={faUser}
              />
            </div>
          </div>
          <p
            className={`text-center text-[2vh] font-bold text-red-500 ${
              errors.nombre ? 'mb-4' : ''
            }`}
          >
            {errors.nombre?.message}
          </p>
        </div>
        {/* Input de correo */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.mail ? '' : 'mb-4'}`}>
            <input
              id="correo"
              type="email"
              placeholder="Blockhunt@gmail.com"
              className={`inputs-singup ${
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
        {/* Input de password */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.password ? '' : 'mb-4'}`}>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`inputs-singup pr-10 ${
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
        {/* Input de repassword */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.repassword ? '' : 'mb-4'}`}>
            <input
              id="repassword"
              type="password"
              placeholder="Confirm Password"
              className={`inputs-singup pr-10 ${
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
        {/* Input de alias - username */}
        <div className="form-control flex w-full flex-col">
          <div className={`relative w-full ${errors.nombre ? '' : 'mb-4'}`}>
            <input
              id="alias"
              type="text"
              placeholder="Username"
              className={`inputs-singup ${
                errors.alias ? 'border-red-500' : 'border-black'
              }`}
              {...register('alias')}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <FontAwesomeIcon
                className="h-[24px] w-[24px] rounded-full p-0  text-black"
                icon={faUser}
              />
            </div>
          </div>
          <p
            className={`text-center text-[2vh] font-bold text-red-500 ${
              errors.alias ? 'mb-4' : ''
            }`}
          >
            {errors.alias?.message}
          </p>
        </div>
        {/* Boton de singup*/}
        <button
          type="submit"
          disabled={isLoading}
          className={`mb-4 h-[50px] w-full rounded-3xl bg-black ${
            isLoading ? 'hidden' : ''
          }`}
        >
          <h1 className="text-center text-lg font-bold text-white">SING UP</h1>
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

export default Singup;

// Funciones
interface DataSingupManagerProps {
  data: SingupQuery;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}
const dataSingupManager = ({ data, setIsLoading }: DataSingupManagerProps) => {
  setIsLoading(false);
  SnackbarUtilities.success(data.data.msg);
};
