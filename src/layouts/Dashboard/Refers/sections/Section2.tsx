//IMPORTACIONES DE FONTAWESOME
import {
  faQuestion,
  faUserPlus,
  faPhone,
  faEnvelope,
  faComment,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE REACT
import { useState } from 'react';
//IMPORTACIONES DE FRAMER MOTION
import { motion } from 'framer-motion';
//IMPORTACIONES DE CUSTOM COMPONENTES

//IMPORTACIONES DE MODAL
import { Modal } from '@mui/material';
import { ButtonsGroup, Divider } from '../../../../components';

//CONSTANTES
const items = [
  { title: 'Phone number', icon: faPhone, iconEnable: true },
  { title: 'Email', icon: faEnvelope, iconEnable: true },
];

function Section2() {
  const [openModalInfo, setOpenModalInfo] = useState<boolean>(false);
  const [buttonSelected, setButtonSelected] = useState<number>(0);
  const [phoneSelected, setPhoneSelected] = useState<string>('whatsapp');
  //---------------------------------------------------------
  const handleChangePhoneSelected = (phone: string) => {
    setPhoneSelected(phone);
  };
  const handleCloseModals = () => {
    setOpenModalInfo(false);
  };
  return (
    <>
      <div className="w-full px-8 py-2">
        <h1 className="text-start text-[4vw] text-white">
          Who do you want to refer?
        </h1>
      </div>
      {/* Section reer a friend */}
      <section className="w-full p-2">
        <div className="flex w-full flex-col rounded-2xl bg-[#3b4047] p-2 ">
          {/* encabezado */}
          <header className="flex gap-4">
            {/* icono */}
            <FontAwesomeIcon
              style={{
                color: '#F4D64C',
                width: '4vw',
                height: '4vw',
                border: '2px solid #F4D64C',
                borderRadius: '50%',
                padding: '1vw',
              }}
              icon={faUserPlus}
            />
            {/* texto */}
            <div className="flex flex-col">
              <h1 className="text-[2.5vh] font-bold text-white">
                Refer a friend
              </h1>
              <button
                onClick={() => setOpenModalInfo(true)}
                className="flex items-center gap-1"
              >
                <FontAwesomeIcon
                  style={{
                    color: '#474947',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#E6822D',
                    borderRadius: '50%',
                    padding: 1,
                  }}
                  icon={faQuestion}
                />
                <h1 className="text-primary-orange text-[1.5vh] font-semibold">
                  Learn More
                </h1>
              </button>
            </div>
          </header>
          {/* MAIN */}
          <main className="flex h-[35vh] flex-col justify-start p-4">
            {/* BUTTON GROUP */}
            <div className="flex w-full">
              <ButtonsGroup
                buttonSelected={buttonSelected}
                items={items}
                setButtonSelected={setButtonSelected}
                textSizes="text-[2vh]"
              />
            </div>
            {/* CHILDREN */}
            <div className="flex flex-grow flex-col justify-center">
              {buttonSelected === 0 ? (
                <>
                  {/* CHILDREN 1 Phone number*/}
                  {/* botones */}
                  <div className="flex justify-center gap-4 py-4">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleChangePhoneSelected('whatsapp')}
                      className={`flex flex-col items-center justify-center border-2 ${
                        phoneSelected === 'whatsapp'
                          ? 'border-[#f26f1d]'
                          : 'border-[#757575]'
                      }  min-w-[12vh] rounded-full py-2`}
                    >
                      <FontAwesomeIcon
                        style={{
                          color:
                            phoneSelected === 'whatsapp' ? 'white' : '#757575',
                          width: '3vh',
                          height: '3vh',
                        }}
                        icon={faWhatsapp}
                      />
                      <h1
                        className={`${
                          phoneSelected === 'whatsapp'
                            ? 'text-white'
                            : 'text-[#757575]'
                        } text-[1.5vh] font-semibold`}
                      >
                        Whatsapp
                      </h1>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleChangePhoneSelected('text')}
                      className={`flex flex-col items-center justify-center border-2 ${
                        phoneSelected === 'text'
                          ? 'border-[#f26f1d]'
                          : 'border-[#757575]'
                      }  min-w-[12vh] rounded-full py-2`}
                    >
                      <FontAwesomeIcon
                        style={{
                          color: phoneSelected === 'text' ? 'white' : '#757575',
                          width: '3vh',
                          height: '3vh',
                        }}
                        icon={faComment}
                      />
                      <h1
                        className={`${
                          phoneSelected === 'text'
                            ? 'text-white'
                            : 'text-[#757575]'
                        } text-[1.5vh] font-semibold`}
                      >
                        Text
                      </h1>
                    </motion.button>
                  </div>
                  {/* inputs */}
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      style={{
                        color: '#3b4047',
                        width: '3vh',
                        height: '3vh',
                        border: '2px solid #3b4047',
                        borderRadius: '50%',
                        backgroundColor: '#757575',
                        padding: '1vh',
                      }}
                      icon={faPhone}
                    />
                    <div className="flex flex-grow items-center rounded-xl bg-white px-2">
                      <h1 className="text-[2.5vh] font-bold">+1</h1>
                      <input
                        type="number"
                        name="input-whatsapp-refer"
                        placeholder="Phone number"
                        className="focus:shadow-outline h-[50px] w-full appearance-none rounded-r-xl px-4  text-[2.7vh] leading-tight  text-black placeholder-slate-500 shadow placeholder:text-[2vh] focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* CHILDREN 2 Email*/}
                  {/* inputs */}
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon
                      style={{
                        color: '#3b4047',
                        width: '3vh',
                        height: '3vh',
                        border: '2px solid #3b4047',
                        borderRadius: '50%',
                        backgroundColor: '#757575',
                        padding: '1vh',
                      }}
                      icon={faEnvelope}
                    />
                    <div className="flex flex-grow items-center rounded-xl bg-white px-2">
                      <input
                        type="email"
                        name="input-whatsapp-refer"
                        placeholder="Email"
                        className="focus:shadow-outline h-[50px] w-full appearance-none rounded-r-xl px-4  text-[2.7vh] leading-tight  text-black placeholder-slate-500 shadow placeholder:text-[2vh] focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </main>
          <footer className="flex items-center justify-center gap-1">
            <FontAwesomeIcon
              style={{
                color: '#757575',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                padding: 4,
              }}
              icon={faTriangleExclamation}
            />
            <p className="text-xs text-[#757575]">Tap input to edit</p>
          </footer>
        </div>
      </section>
      {/* Modal de informacion */}
      <Modal open={openModalInfo} onClose={handleCloseModals}>
        <div className="absolute left-[50%] top-[50%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white ">
          <header className="bg-primary-gray-light border-b-primary-yellow flex justify-center gap-2 rounded-t-2xl border-b-2 py-2">
            <FontAwesomeIcon
              style={{
                color: 'black',
                width: '20px',
                height: '20px',
                backgroundColor: '#F4D64C',
                borderRadius: '50%',
                padding: 4,
                border: '2px solid black',
              }}
              icon={faUserPlus}
            />
            <h1 className="text-[2.5vh] font-bold">Referral program</h1>
          </header>
          <main className="flex flex-col">
            <p className="px-6 py-2 text-center text-[2vh]">
              Through our Referral program you'll be able to refer as many
              friends as you want to be enrolled into{' '}
              <span className="font-bold">Blockhunt</span>, and you'll earn
              either a free week or a $60 monthly payment depending of your plan
              and the plan chosen by your referral. In the case that you are
              enrolled into the <span className="font-bold">Expert Hunter</span>{' '}
              plan and your referral has enrolled in the same plan as well,
              you'll earn a $60 monthly payment for each of them which will be
              deposited into your bank account by the end of every month. That
              way you'll have created a new monthly Income source that could be
              as big as you want, so the only thing you need to do is to refer
              more and more friends, that's it.
            </p>
            <h1 className="text-center text-[3vh] font-bold">Let's Hunt</h1>

            <div className="flex w-full flex-col p-4">
              <Divider color="primary-gray-light" size={1} />
            </div>
          </main>
          <footer className="mb-4 flex justify-center">
            <button
              onClick={() => setOpenModalInfo(false)}
              className="custom-shadow bg-primary-yellow rounded-full px-4 py-2"
            >
              <h1 className="text-[2vh] font-bold">GOT IT</h1>
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Section2;
