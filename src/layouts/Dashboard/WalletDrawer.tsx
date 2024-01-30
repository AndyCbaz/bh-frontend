import {
  faArrowLeft,
  faCreditCard,
  faGreaterThan,
  faMoneyBills,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IConfirmPasswordDrawerProps, IWalletDrawerProps } from '../../interfaces';
import { SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import ConfirmPasswordDrawer from './ConfirmPasswordDrawer';



const WalletDrawer:React.FC<IWalletDrawerProps> = ({ navigate })  => {
  //Variables reacticas
  const [stateDrawers, setStateDrawers] =
    useState<IConfirmPasswordDrawerProps>({
      confirmPasswordDrawerOpen: false,
      accessGaranted: false,
    });

    // Callbacks
    const drawers = {
      onCloseConfirmPassword: () => {
        setStateDrawers((prevState) => ({...prevState, confirmPasswordDrawerOpen: false}));
      }
    }
    const buttons = {
      onClickPaymentButton: () => {
        setStateDrawers((prevState) => ({...prevState, confirmPasswordDrawerOpen: true}));
      }
    }

  return (
    <>
      <div className="flex h-screen flex-grow flex-col">
        <header className="flex h-[9%] flex-col justify-center border-b-2 border-b-primary-yellow bg-primary-gray">
          <div className="flex">
            <button
              onClick={() => navigate('/app/dashboard')}
              className="flex w-[30%] items-center justify-start pl-2"
            >
              <FontAwesomeIcon
                className="h-[25px] w-[25px] text-primary-gray-light"
                icon={faArrowLeft}
              />
            </button>
            <div className="flex flex-grow items-center justify-center">
              <h1 className="text-center text-[3vh] font-semibold text-white">
                Wallet
              </h1>
            </div>
            <div className="w-[30%]" />
          </div>
        </header>
        <section className="flex flex-grow flex-col p-2">
          {/* balance */}
          <section className="rounded-2xl bg-primary-gray p-2">
            <header className="flex gap-1">
              <div className="flex gap-2 px-2">
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  className="h-3.5 w-3.5 rounded-full bg-primary-yellow p-1 text-black"
                />
                <h1 className="text-[2vh] font-semibold text-white">Balance</h1>
              </div>
            </header>
            <main className="flex flex-col items-center justify-center gap-2">
              {/* date */}
              <h1 className="font-semibold text-white">August, 2023</h1>
              {/* button price*/}
              <button
                onClick={() => navigate('/app/earnings')}
                className="rounded-full border-2 border-primary-orange bg-primary-gray-dark px-4"
              >
                <h1 className="text-[4vh] font-bold text-white">$720</h1>
              </button>
              {/* text */}
              <div className="rounded-full bg-primary-orange px-1">
                <h1 className="text-[1.5vh] text-white">Current balance</h1>
              </div>
            </main>
            <footer className="flex h-[8vh] w-full items-end justify-center">
              <h1 className="text-center text-[2vh] text-white">
                Payout schedule to be transferred by August 31
              </h1>
            </footer>
          </section>
          {/* payment method */}
          <button
            onClick={buttons.onClickPaymentButton}
            className="my-2 flex items-center gap-2 p-2"
          >
            <FontAwesomeIcon
              className="h-[4vh] w-[4vh] text-primary-gray-light"
              icon={faCreditCard}
            />
            <div className="flex w-full flex-col items-start justify-center">
              <h1 className="text-[2vh] font-bold text-white">
                Payment Method
              </h1>
              <p className="text-[2vh] font-thin text-white">
                Add Bank account
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                className="h-[2.5vh] w-[2.5vh] text-primary-gray-light"
                icon={faGreaterThan}
              />
            </div>
          </button>
        </section>
        <footer className="flex h-[12%] flex-col items-center justify-start px-2">
          <button className="w-full rounded-full border-2 border-primary-yellow py-2">
            <h1 className="font-bold text-primary-yellow">
              Deposits and charges
            </h1>
          </button>
        </footer>
      </div>
      {/* Drawer de confirm password */}
      <SwipeableDrawer
        anchor="bottom"
        open={stateDrawers.confirmPasswordDrawerOpen}
        onClose={drawers.onCloseConfirmPassword}
        onOpen={() =>
          setStateDrawers((prevState) => ({
            ...prevState,
            confirmPassword: true,
          }))
        }
        PaperProps={{
          sx: {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            backgroundColor: '#F4D64C',
          },
        }}
      >
        <ConfirmPasswordDrawer />
      </SwipeableDrawer>
    </>
  );
};

export default WalletDrawer;
