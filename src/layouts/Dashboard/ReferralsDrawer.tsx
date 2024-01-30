import { faArrowLeft, faExclamation, faQrcode, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Modal } from '@mui/material';
import React, { useState } from 'react'
import { ReferralsDrawerProps } from '../../interfaces';
import Section1 from './Refers/sections/Section1';
import { Divider } from '../../components';
import Section2 from './Refers/sections/Section2';
import Invitees from './Refers/invitees/Invitees';
import Referrals from './Refers/referrals/Referrals';

const ReferralsDrawer:React.FC<ReferralsDrawerProps> = ({navigate}) => {
      const [openModalQr, setOpenModalQr] = useState<boolean>(false);
      const [openInvitees, setOpenInvitees] = useState<boolean>(false);
      const [openReferrals, setOpenReferrals] = useState<boolean>(false);
      //-----------------------------------------------------------
      const handleCloseModals = () => {
        setOpenModalQr(false);
        setOpenInvitees(false);
        setOpenReferrals(false);
      };
  return (
    <>
      <div className="flex h-screen w-full flex-col">
        {/* HEADER */}
        <header className="border-b-primary-yellow flex h-[9%] flex-col justify-center border-b-2 bg-[#3B4048]">
          {/* BOTON ATRAS */}
          <div className="flex h-full justify-between px-3">
            <button onClick={() => navigate('/app/dashboard')} className="">
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
            <div className="flex h-full items-center justify-center">
              <h1 className="text-center text-[3vh] font-semibold text-white">
                Referral program
              </h1>
            </div>
            {/* CODIGO QR */}
            <div className="flex items-center justify-end pr-2">
              <button
                onClick={() => setOpenModalQr(true)}
              >
                <FontAwesomeIcon
                  style={{
                    color: '#BBBBBB',
                    width: '4vh',
                    height: '4vh',
                  }}
                  icon={faQrcode}
                />
              </button>
            </div>
          </div>
          {/* TEXTO Y BUTON DE QR */}
        </header>
        {/* MAIN */}
        <section className="flex w-full flex-col flex-grow items-center justify-start">
          {/* Section 1 */}
          <Section1
            setOpenReferrals={setOpenReferrals}
            setOpenInvitees={setOpenInvitees}
          />
          <div className="w-full px-8">
            <Divider color="primary-gray" size={1} />
          </div>
          {/* Section 2 */}
          <Section2 />
        </section>
        {/* FOOTER */}
        <footer className="flex w-full flex-grow flex-col items-center justify-center px-2">
          <button
            className="text-primary-yellow border-primary-yellow w-[90%] rounded-full border-2 px-8 py-2 text-[2.5vh] font-bold"
          >
            Invite
          </button>
        </footer>
      </div>
      {/* MODAL DE QR */}
      <Modal
        style={{ backdropFilter: 'blur(5px)  brightness(0.5)' }}
        open={openModalQr}
        onClose={handleCloseModals}
      >
        <div className="absolute left-[50%] top-[50%] flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-20 rounded-2xl bg-transparent">
          <header className="flex items-center justify-center gap-4 rounded-xl bg-[#1d1f23] p-2 opacity-90 ">
            <div className="bg-primary-yellow flex items-center justify-center rounded-full p-2">
              <FontAwesomeIcon
                style={{
                  color: '#222529',
                  width: '5vh',
                  height: '5vh',
                  padding: 1,
                  borderRadius: '50%',
                }}
                icon={faExclamation}
              />
            </div>
            <h1 className="text-justify text-[2vh] font-bold text-white">
              Ask your referrals to scan this bar code before sign up and that
              way you'll able to see them on your dashboard as your referred
            </h1>
            <div className="flex flex-grow flex-col items-start justify-center">
              <button onClick={() => setOpenModalQr(false)} className="">
                <FontAwesomeIcon
                  style={{
                    color: '#BBBBBB',
                    width: '25px',
                    height: '25px',
                  }}
                  icon={faXmark}
                />
              </button>
            </div>
          </header>
          <main className="flex h-[80vw] w-[80vw] flex-col items-center justify-center rounded-full bg-white">
            <img
              src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1694897522/BlockHunt/QR%20REFERIDOS/unnamed_tcs7ec.webp"
              alt="qr"
              className="h-[70vw] w-[70vw]"
            />
          </main>
        </div>
      </Modal>
      {/* SWIPEABLEDRAWER DE INVITEES */}
      <Drawer
        anchor="right"
        open={openInvitees}
        onClose={handleCloseModals}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Invitees setOpenInvitees={setOpenInvitees} />
      </Drawer>
      {/* SWIPEABLEDRAWER DE REFERRALS*/}
      <Drawer
        anchor="right"
        open={openReferrals}
        onClose={handleCloseModals}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Referrals setOpenReferrals={setOpenReferrals} />
      </Drawer>
    </>
  );
}

export default ReferralsDrawer