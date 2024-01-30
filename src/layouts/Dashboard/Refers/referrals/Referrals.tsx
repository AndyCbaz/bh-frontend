//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faMagnifyingGlass,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE FRAMER MOTION
import { motion } from 'framer-motion';
//IMPORTACIOENS DE CUSTOM COMPONENTS

//IMPORTACIONES DE CONSTANTES

//IMPORTACIONES DE MUI
import { Drawer, SwipeableDrawer } from '@mui/material';
//IMPORTACIONES DE REACT
import { useState } from 'react';
import Details from './details/Details';
import Filters from './filters/Filters';
import { Avatar, Divider } from '../../../../components';
import { itemsListReferrals } from '../../../../constants/apiResponses/Referrals';

type ReferralsProps = {
  setOpenReferrals: React.Dispatch<React.SetStateAction<boolean>>;
};
function Referrals({ setOpenReferrals: setOpenInvitees }: ReferralsProps) {
  const [openDetailReferrals, setOpenDetailReferrals] =
    useState<boolean>(false);
  const [openFiltersReferrals, setOpenFiltersReferrals] =
    useState<boolean>(false);
  //-----------------------------------------------------------
  const handleCloseModals = () => {
    setOpenDetailReferrals(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpenFiltersReferrals(open);
    };
  return (
    <>
      <div className="flex h-screen w-full flex-col overflow-hidden">
        {/* HEADER */}

        <header className="flex h-[9%] flex-col justify-center border-b-2 border-b-primary-yellow bg-[#3B4048]">
          {/* BOTON ATRAS */}
          <div className="flex pl-2 pt-2">
            <button
              onClick={() => setOpenInvitees(false)}
              className="flex w-[30%] items-center justify-start"
            >
              <FontAwesomeIcon
                style={{
                  color: '#BBBBBB',
                  width: '25px',
                  height: '25px',
                }}
                icon={faArrowLeft}
              />
            </button>
            {/* TITULO */}
            <div className="flex flex-grow items-center justify-center">
              <h1 className="text-center text-[5vw] font-semibold leading-3 text-white">
                Referrals
              </h1>
            </div>
            {/* CODIGO QR */}
            <div className="flex w-[30%] items-center justify-end pr-4">
              <motion.button
                onClick={() => setOpenFiltersReferrals(true)}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon
                  style={{
                    color: '#BBBBBB',
                    width: '4vh',
                    height: '4vh',
                  }}
                  icon={faSliders}
                />
              </motion.button>
            </div>
          </div>
        </header>
        {/* MAIN */}
        <main className="flex max-h-[91%] flex-grow flex-col items-center ">
          {/* BARRA DE BUSQUEDA */}
          <section className="w-full px-4 py-2 ">
            <div className="flex w-full items-center rounded-full bg-white p-1">
              {/* icono */}
              <div className="flex items-center rounded-full bg-[#BBBBBB]">
                <FontAwesomeIcon
                  style={{
                    color: 'white',
                    width: '4vh',
                    height: '4vh',
                    padding: '1vh',
                  }}
                  icon={faMagnifyingGlass}
                />
              </div>
              {/* input */}
              <input
                type="text"
                placeholder="Search"
                name="search-invitees"
                className="focus:shadow-outline h-[50px] w-full appearance-none rounded-r-full px-4  text-[2.7vh] leading-tight  text-black placeholder-slate-500 shadow placeholder:text-[2vh] focus:outline-none"
              />
            </div>
          </section>
          <div className="my-2 w-full px-4">
            <Divider color="primary-gray" size={1} />
          </div>
          {/* LISTA DE INVITADOS */}
          <section className="flex w-full flex-grow flex-col gap-4 overflow-y-auto  px-4">
            {/* titulo */}
            <h1 className="text-[2.5vh] font-bold text-white">All referrals</h1>
            {/* Lista de invitados */}

            {itemsListReferrals.map((item, index) => (
              <div key={index} className="flex items-center ">
                {/* foto */}
                <div className="rounded-full border-2">
                  <Avatar
                    weight="w-[6vh]"
                    height="w-[6vh]"
                    src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688495085/BlockHunt/Drawer/Users/fotod_p7huhe.jpg"
                  />
                </div>
                {/* email */}
                <div className="flex flex-col items-start justify-center px-2">
                  <h1 className="text-[3.5vw] font-bold leading-3 text-white">
                    {item.name}
                  </h1>
                  <span className="text-[3.5vw] font-thin leading-3 text-primary-gray-light">
                    @{item.userName}
                  </span>
                </div>
                {/* boton */}
                <div className="flex flex-grow justify-end">
                  <motion.button
                    onClick={() => setOpenDetailReferrals(true)}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full border-2 border-primary-orange px-6 py-1
                           text-[3vw] text-white font-bold
                      `}
                  >
                    <h1>{item.state}</h1>
                  </motion.button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      {/* DRAWER DE DETAILS OF INVITED */}
      <Drawer
        anchor="right"
        open={openDetailReferrals}
        onClose={handleCloseModals}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Details setOpenReferralsDetails={setOpenDetailReferrals} />
      </Drawer>
      {/* DRAWER DE FILTER */}
      <SwipeableDrawer
        anchor="bottom"
        open={openFiltersReferrals}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            backgroundColor: '#F4D64C',
          },
        }}
      >
        <Filters setOpenFilters={setOpenFiltersReferrals} />
      </SwipeableDrawer>
    </>
  );
}
export default Referrals;
