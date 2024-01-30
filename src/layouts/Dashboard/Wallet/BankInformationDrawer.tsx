// importaciones de react
import React, { useState } from 'react';
//Importacion de iconos de fontawesome
import {
  faArrowLeft,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importaciones de react hook form
import { useForm } from 'react-hook-form';
// importaciones de interfaces
import { BankInformationDrawerProps, IBankInformationForm } from '../../../interfaces';
// importaciones de libreria zod
import { zodResolver } from '@hookform/resolvers/zod';
// importaciones de validaciones
import { bankInformationSchema } from '../../../validations';
// importaciones de componentes
import Switch from '../../../components/Switch';


const BankInformationDrawer:React.FC<BankInformationDrawerProps> = ({navigate}) => {
  //Variables reacticas
  const [checkingSwitchState, setCheckingSwitchState] =
    useState<boolean>(false);
  const [savingSwitchState, setSavingSwitchState] = useState<boolean>(false);

  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBankInformationForm>({
    resolver: zodResolver(bankInformationSchema),
  });

  //handlers
  const onSubmit = (data: IBankInformationForm) => {
    console.log(data);
  };

  const checkingSwitchClick = () => {
    if (savingSwitchState === true) {
      setSavingSwitchState(false);
      setCheckingSwitchState(true);
    } else if (checkingSwitchState) {
      setCheckingSwitchState(false);
    } else {
      setCheckingSwitchState(true);
    }
  };
  const savingSwitchClick = () => {
    if (checkingSwitchState) {
      setCheckingSwitchState(false);
      setSavingSwitchState(true);
    } else if (savingSwitchState) {
      setSavingSwitchState(false);
    } else {
      setSavingSwitchState(true);
    }
  };
  return (
    <>
      <div className="flex h-screen flex-grow flex-col">
        <header className="flex h-[9%] flex-col justify-center border-b-2 border-b-primary-yellow bg-[#3B4048]">
          <div className="flex pl-2 pt-2">
            <button onClick={()=>navigate('/app/wallet')} className=" flex w-[20%] items-center justify-start">
              <FontAwesomeIcon
                className="h-[25px] w-[25px] text-primary-gray-light"
                icon={faArrowLeft}
              />
            </button>
            <div className="flex flex-grow items-center justify-center">
              <h1 className="text-center text-[3vh] font-semibold text-white">
                Bank Information
              </h1>
              <div className="w-[20%]" />
            </div>
          </div>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex h-[91%]  flex-col"
        >
          <section className="flex flex-grow flex-col p-4">
            <div className=" flex flex-grow flex-col gap-1">
              {/* Account holder name */}
              <label className="text-[2vh] text-white">
                Account holder name
              </label>
              <input
                type="text"
                className={` focus:shadow-outline w-full appearance-none rounded-full  border-[1px] px-4 py-1  text-[2.7vh] text-black placeholder-slate-500 placeholder:text-[2vh] focus:outline-none ${
                  errors.accountHolderName
                    ? 'border-b-red-500'
                    : 'border-principal-gray'
                }`}
                placeholder="Jeff Bezos"
                id="accountHolderName"
                {...register('accountHolderName')}
              />
              <p
                className={`text-center text-[2vh] font-bold text-red-500 ${
                  errors.accountHolderName ? 'mb-4' : ''
                }`}
              >
                {errors.accountHolderName?.message}
              </p>
              {/* Account type */}
              <label className="text-[2vh] text-white">Account type</label>
              <div className="flex gap-2">
                <Switch
                  name="switchTypeOfBank"
                  state={checkingSwitchState}
                  switchClick={checkingSwitchClick}
                  value=""
                />
                <h1 className="text-[2vh] text-white">Checking</h1>
              </div>
              <div className="flex gap-2">
                <Switch
                  name="switchTypeOfBank"
                  state={savingSwitchState}
                  switchClick={savingSwitchClick}
                  value=""
                />
                <h1 className="text-[2vh] text-white">Saving</h1>
              </div>
              {/* Routing number */}
              <label className="text-[2vh] text-white">Routing number</label>
              <input
                type="password"
                className={` focus:shadow-outline w-full appearance-none rounded-full  border-2 px-4 py-1  text-[2.7vh] text-black placeholder-slate-500 placeholder:text-[2vh] focus:outline-none ${
                  errors.routingNumber
                    ? 'border-red-500'
                    : 'border-principal-gray'
                }`}
                placeholder="************"
                id="routingNumber"
                {...register('routingNumber')}
              />
              <p
                className={`text-center text-[2vh] font-bold text-red-500 ${
                  errors.routingNumber ? 'mb-4' : ''
                }`}
              >
                {errors.routingNumber?.message}
              </p>
              {/* Acount number */}
              <label className="text-[2vh] text-white">Acount number</label>
              <input
                type="password"
                className={` focus:shadow-outline w-full appearance-none rounded-full  border-2 px-4 py-1  text-[2.7vh] text-black placeholder-slate-500 placeholder:text-[2vh] focus:outline-none ${
                  errors.routingNumber
                    ? 'border-red-500'
                    : 'border-principal-gray'
                }`}
                placeholder="************"
                id="accountNumber1"
                {...register('accountNumber1')}
              />
              <p
                className={`text-center text-[2vh] font-bold text-red-500 ${
                  errors.accountNumber1 ? 'mb-4' : ''
                }`}
              >
                {errors.accountNumber1?.message}
              </p>
              {/* Acount number 2*/}
              <label className="text-[2vh] text-white">Acount number</label>
              <input
                type="password"
                className={` focus:shadow-outline w-full appearance-none rounded-full  border-2 px-4 py-1  text-[2.7vh] text-black placeholder-slate-500 placeholder:text-[2vh] focus:outline-none ${
                  errors.accountNumber2
                    ? 'border-red-500'
                    : 'border-principal-gray'
                }`}
                placeholder="************"
                id="accountNumber2"
                {...register('accountNumber2')}
              />
              <p
                className={`text-center text-[2vh] font-bold text-red-500 ${
                  errors.accountNumber2 ? 'mb-4' : ''
                }`}
              >
                {errors.accountNumber2?.message}
              </p>
              {/* MESSAGE */}
              <div className="my-2 flex w-full justify-center">
                <div className="flex">
                  <FontAwesomeIcon
                    style={{
                      color: '#E6822D',
                      width: '1.3vh',
                      height: '1.3vh',
                    }}
                    icon={faCircleQuestion}
                  />
                </div>
                <p className="text-center text-[1.3vh] text-white">
                  This will be the bank account where{' '}
                  <span className="text-principal-dark font-bold">
                    Blockhunt
                  </span>{' '}
                  will transfer your monthly referrals earnings
                </p>
              </div>
            </div>
            {/* SUBMIT */}
            <button
              type="submit"
              className="text-primary-yellow border-primary-yellow rounded-full border-2 py-2 font-bold"
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default BankInformationDrawer;
