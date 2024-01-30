// Importaciones de react
import { useEffect, useState } from 'react';
// Importaciones de react router dom
import { useNavigate, useParams } from 'react-router-dom';
// Importaciones de componentes
import { Loader } from '../../components';
// Importaciones de servicios
import { verifyEmail } from '../../services';
// Importaciones de interfaces
import { VerifyEmailForm } from '../../interfaces';
// Importaciones de utilidades
import { SnackbarUtilities } from '../../utils/snackbar/snackbar-manager';
import { errorManager } from '../../utils/axios/errors-manager';
// Importaciones de configuraciones
import { SEED } from '../../config/config';

const EmailConfirmation = () => {
  //Variables reactivas
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErrorPresent, setIsErrorPresent] = useState<boolean>(false);
  //react router dom
  const navigate = useNavigate();
  const { token } = useParams();
  const seed = SEED;
  const data: VerifyEmailForm = { seed, token };

  //Verificar el usuario
  useEffect(() => {
    verifyUserEmail({ setIsLoading, data, setIsErrorPresent });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Seccion del loader */}
      <section className={`${isLoading ? '' : 'hidden'}`}>
        <Loader />
      </section>
      {/* Seccion del mensaje */}
      <section
        className={`flex flex-col items-center gap-4${
          isLoading ? 'hidden' : ''
        }`}
      >
        {isErrorPresent ? (
          // Mensaje de error
          <>
            <h1 className="text-principal-dark text-center text-3xl font-bold ">
              Error al verificar el usuario
            </h1>
            <button
              onClick={() => navigate('/auth/login')}
              className="mt-2 rounded-full bg-black px-8 py-2"
            >
              <h1 className="text-2xl font-bold text-white">Login</h1>
            </button>
          </>
        ) : (
          // Mensaje de exito
          <>
            <h1 className="text-principal-dark text-center text-2xl font-bold ">
              Your email address has been successfully verified
            </h1>
            <h1 className="text-principal-dark text-center text-2xl font-bold">
              Please login to use blockhunt
            </h1>
            <button
              onClick={() => navigate('/auth/login')}
              className="mt-2 rounded-full bg-black px-8 py-2"
            >
              <h1 className="text-2xl font-bold text-white">Login</h1>
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default EmailConfirmation;

//Funciones
interface IVerifyUserEmail {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  data: VerifyEmailForm;
  setIsErrorPresent: React.Dispatch<React.SetStateAction<boolean>>;
}
const verifyUserEmail = ({
  setIsLoading,
  data,
  setIsErrorPresent,
}: IVerifyUserEmail) => {
  setIsLoading(true);
  verifyEmail(data)
    .then((response) => {
      setIsLoading(false);
      setIsErrorPresent(false);
      SnackbarUtilities.success(response.data.msg.status);
    })
    .catch((error) => {
      errorManager({ error, setIsLoading });
      setIsErrorPresent(true);
    });
};
