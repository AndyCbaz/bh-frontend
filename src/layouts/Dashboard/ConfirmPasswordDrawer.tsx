import React from 'react';
// Importaciones de zod
import { zodResolver } from '@hookform/resolvers/zod';
// Importaciones de react hook form
import { useForm } from 'react-hook-form';
// Importaciones de validaciones
import { confirmPasswordSchema } from '../../validations';
// Importaciones de interfaces
import { ConfirmPasswordForm } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

const ConfirmPasswordDrawer:React.FC = () => {
  // hooks
  const navigate = useNavigate();
  const form = useForm<ConfirmPasswordForm>({
    resolver: zodResolver(confirmPasswordSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  //Handlers
  const onSubmit = (data: ConfirmPasswordForm) => {
    console.log(data);
    //Aqui tiene que ir la validacion de clave por backend
    navigate('/app/bank-information')
    
  };
  return (
    <>
      <div className="px-4">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <header className="flex h-[5%] w-full flex-col items-center ">
            <div className="bg-primary-gray border-primary-gray my-2 h-[1px] w-[100px] rounded-full border-2"></div>
          </header>
          <main className="mb-2 flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center">
            <h1 className="text-[2.5vh] font-semibold">
              Confirm your password
            </h1>
            <p className="text-primary-gray-lighter text-[1.5vh]">
              To keep your account safe, enter your password to make changes.
            </p>
            <input
              className={` focus:shadow-outline h-[50px] w-full  appearance-none border-b-[1px] px-4  text-[2.7vh] leading-10 text-black placeholder-slate-500 focus:outline-none ${
                errors.password ? 'border-b-red-500' : 'border-b-black'
              }`}
              type="password"
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            <div className="mt-4 flex gap-4">
              <button
                type="reset"
                className="custom-shadow bg-primary-yellow rounded-full px-3 py-1 font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="custom-shadow text-primary-yellow rounded-full bg-black px-3 py-1 font-bold"
              >
                Continue
              </button>
            </div>
          </main>
        </form>
      </div>
    </>
  );
};

export default ConfirmPasswordDrawer;
