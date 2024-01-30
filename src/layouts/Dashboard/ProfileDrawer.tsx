//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faBuildingColumns,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE FRAMEMOTION
import { motion } from 'framer-motion';

//IMPORTACIONES DE REACT
import { useState } from 'react';
//IMPORTACIONES DE CONSTANTES

//IMPORTACIONES DE COMPONENTES


//IMPORTACIONES DE MUI
import { Drawer } from '@mui/material';
import ProfileAvatar from '../../components/Profile/ProfileAvatar';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { ButtonsGroup, CardBlocks } from '../../components';
import MyLocationCarrousel from './Settings/Page2/MyLocationCarrousel';
import { dataHomeList } from '../../constants/apiResponses/Profile';
import Plans from './Plans';
import { NavigateFunction } from 'react-router-dom';
//IMPORTACIONES DE CUSTOM COMPONENTS

//CONSTANTES
const items = [
  { title: 'My location', iconEnable: false, variable: '6' },
  { title: 'My hunted blocks', iconEnable: false, variable: '32' },
];

interface ProfileProps  {
 navigate:NavigateFunction
};
const Profile:React.FC<ProfileProps> = ({navigate}) =>  {
  const [buttonSelected, setButtonSelected] = useState<number>(0);
  const [openPlanDrawer, setOpenPlans] = useState<boolean>(false);
  const [bgHeader, setBgHeader] = useState<string>('');
  //-----------------------------------------------------
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

      setOpenPlans(open);
    };

  return (
    <>
      <div className="flex h-screen w-full flex-col">
        {/* HEADER */}
        <header
          style={{
            borderRadius: '0% 0% 100% 100% / 0% 0% 60% 60%',
          }}
          className={`bg-primary-yellow relative flex h-[20%] flex-col  items-center justify-start bg-cover pb-2`}
        >
          <div className="z-10 flex w-full pl-2 pt-2">
            {/* BOTON ATRAS */}
            <button
              onClick={() => navigate('/app/dashboard')}
              className="flex w-[30%] items-center justify-start"
            >
              <FontAwesomeIcon
                style={{
                  color: 'black',
                  width: '3vh',
                  height: '3vh',
                }}
                icon={faArrowLeft}
              />
            </button>
            {/* TITULO Y DESCRIPCION */}
            <div className="flex w-[100%] flex-col items-center justify-center gap-4">
              {/* TITULO */}
              <h1 className="text-center text-[3vh] font-bold leading-3 text-black">
                User Profile
              </h1>
            </div>
            <div className="w-[30%]" />
          </div>

          <div className="absolute -bottom-[5vw] left-2 z-10">
            <ProfileAvatar />
          </div>
          <div className="absolute left-[50%] top-[50%] z-10 -translate-x-1/2 -translate-y-1/2">
            <ProfileHeader img={bgHeader} setImg={setBgHeader} />
          </div>
          <img
            src={bgHeader}
            className={`absolute left-0 top-0 h-full w-full ${
              bgHeader !== '' ? '' : 'hidden'
            } `}
            style={{ borderRadius: '0% 0% 100% 100% / 0% 0% 60% 60%' }}
            alt=""
          />
        </header>
        <main className="flex h-[80%] flex-col">
          {/* Nombre usuario y boton de plan y buttonsGroup */}
          <section className="flex min-h-[31%] w-full flex-col items-center justify-center gap-2">
            {/* nombres */}
            <div className="flex flex-col items-center text-[3vh] text-white">
              <div className="flex items-center gap-2">
                <h1 className="font-bold leading-4">Andrés Bonilla</h1>
                <button>
                  <div>
                    <FontAwesomeIcon
                      style={{
                        color: '#BBBBBB',
                        width: '2.5vh',
                        height: '2.5vh',
                      }}
                      icon={faPenToSquare}
                    />
                  </div>
                </button>
              </div>
              <h2 className="text-[2.5vh] leading-6">@anseboro</h2>
            </div>
            {/* boton de plan */}
            <motion.button
              onClick={() => setOpenPlans(true)}
              whileTap={{ scale: 0.95 }}
              className="border-primary-orange rounded-full border-2 px-4 py-1"
            >
              <h1 className="text-[2.5vh] font-bold text-white ">My plan</h1>
            </motion.button>
            {/* button group */}
            <div className="w-full px-8">
              <ButtonsGroup
                buttonSelected={buttonSelected}
                setButtonSelected={setButtonSelected}
                items={items}
                vertical={true}
                textSizes="text-[2vh]"
              />
            </div>
          </section>
          {/* button group y childrens */}
          <section className=" flex min-h-[69%] flex-col">
            {/* children */}
            <div className="flex h-full flex-col items-center overflow-y-auto px-4 py-2">
              {buttonSelected === 0 ? (
                <div className="flex w-full flex-grow flex-col gap-4 rounded-2xl  bg-[#3B4047] py-2">
                  <div className="flex gap-2 px-2">
                    <FontAwesomeIcon
                      icon={faBuildingColumns}
                      style={{
                        backgroundColor: '#F4D64C',
                        borderRadius: '50%',
                        width: '14px',
                        height: '14px',
                        padding: 4,
                        color: 'black',
                      }}
                    />
                    <h1 className="text-[2vh] font-semibold text-white">
                      Added locations
                    </h1>
                  </div>
                  <div className=" flex h-full px-2">
                    <MyLocationCarrousel navigate={navigate} />
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-full pt-1">
                    {dataHomeList.map((item, index) => (
                      <CardBlocks info={item} key={index}  />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      </div>
      {/* Drawer de planes */}
      <Drawer
        anchor="bottom"
        open={openPlanDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Plans indexValue={3} setOpenPlans={setOpenPlans} />
      </Drawer>
    </>
  );
}
export default Profile;
