//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE FRAMER MOTION
import { motion } from 'framer-motion';
//IMPORTACIOENS DE CUSTOM COMPONENTS
import { Divider } from '../../components';
//IMPORTACIONES DE CONSTANTES
import { itemsSettingsGeneral } from '../../constants/generalItems/SettingsGeneral';
//IMPORTACIONES DE MUI
import { Drawer, SwipeableDrawer } from '@mui/material';
//IMPORTACIONES DE REACT
import { useState } from 'react';
//IMPORTACIONES DE LAYOUTS
import ConfirmPasswordDrawer from './ConfirmPasswordDrawer';
import PersonalInformation from './SettingsGeneral/personalInformation/PersonalInformation';
import DepositsAndPayments from './SettingsGeneral/depositsAndPayments/DepositsAndPayments';
import TaxInformation from './SettingsGeneral/taxInformation/TaxInformation';
import Plans from './Plans';
import TermsAndCondition from './SettingsGeneral/termsAndCondition/TermsAndCondition';
import LanguageDrawer from './SettingsGeneral/language/LanguageDrawer';
import { NavigateFunction } from 'react-router-dom';

interface SettingsGeneralProps {
  navigate: NavigateFunction;
}
const SettingsGeneral: React.FC<SettingsGeneralProps> = ({ navigate }) => {
  const [indexValue, setIndexValue] = useState<number>(0);
  const [openConfirmPassword, setOpenConfirmPassword] =
    useState<boolean>(false);
  const [openPersonalInformation, setOpenPersonalInformation] =
    useState<boolean>(false);
  const [openDepositsAndPayments, setOpenDepositsAndPayments] =
    useState<boolean>(false);
  const [openTaxInformation, setOpenTaxInformation] = useState<boolean>(false);
  const [openSubscription, setOpenSubscription] = useState<boolean>(false);
  const [openTermsAndCondition, setOpenTermsAndCondition] =
    useState<boolean>(false);
  const [openLanguageDrawer, setOpenLanguageDrawer] = useState<boolean>(false);
  //----------------------------------------------------------------
  // cerrar los drawers
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
      setOpenConfirmPassword(open);
      setOpenTaxInformation(open);
      setOpenSubscription(open);
      setOpenLanguageDrawer(open);
    };

  // selecionar una opcion del menu
  const handleClickOption = (index: number) => {
    if (index === 0 || index === 1) {
      setOpenConfirmPassword(true);
      setIndexValue(index);
    } else if (index === 2) {
      setOpenTaxInformation(true);
      setIndexValue(index);
    } else if (index === 3) {
      setOpenSubscription(true);
      setIndexValue(index);
    } else if (index === 4) {
      setOpenTermsAndCondition(true);
      setIndexValue(index);
    } else {
      setOpenLanguageDrawer(true);
      setIndexValue(index);
    }
  };
  return (
    <>
      <div className="flex h-screen flex-grow flex-col">
        <header className="flex h-[9%] flex-col justify-center border-b-2 border-b-primary-yellow bg-[#3B4048]">
          <div className="flex">
            <button
              onClick={() => navigate('/app/dashboard')}
              className="flex w-[30%] items-center justify-start pl-2"
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
            <div className="flex flex-grow items-center justify-center">
              <h1 className="text-center text-[3vh] font-semibold text-white">
                Settings
              </h1>
            </div>
            <div className="w-[30%]" />
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-start overflow-y-auto p-2">
          {itemsSettingsGeneral.map((item, index) => (
            <div key={index} className="flex flex-col">
              <motion.section
                onClick={() => handleClickOption(index)}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="flex gap-2 py-2"
              >
                <div className="">
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{
                      borderRadius: '50%',
                      padding: 2,
                      color: '#BBBBBB',
                      height: '3vh',
                      width: '3vh',
                    }}
                  />
                </div>
                <div className="flex flex-grow">
                  <h1 className="font-semibold text-white">{item.title}</h1>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      borderRadius: '50%',
                      padding: 2,
                      color: '#BBBBBB',
                      height: '3vh',
                      width: '3vh',
                    }}
                  />
                </div>
              </motion.section>
              <Divider color="primary-gray-light" size={1} />
            </div>
          ))}
        </main>
        <footer className="flex h-[10%] flex-col items-center justify-center px-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full border-2 border-primary-yellow py-2 font-bold text-primary-yellow"
          >
            Sign out
          </motion.button>
        </footer>
      </div>
      {/* Drawer de confirm password */}
      <SwipeableDrawer
        anchor="bottom"
        open={openConfirmPassword}
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
        <ConfirmPasswordDrawer />
      </SwipeableDrawer>
      {/* drawer de personal information */}
      <Drawer
        anchor="right"
        open={openPersonalInformation}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <PersonalInformation openDrawer={setOpenPersonalInformation} />
      </Drawer>
      {/* deposits and payments */}
      <Drawer
        anchor="right"
        open={openDepositsAndPayments}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <DepositsAndPayments
          navigate={navigate}
          openDrawer={setOpenDepositsAndPayments}
        />
      </Drawer>
      {/* Tax Information */}
      <Drawer
        anchor="right"
        open={openTaxInformation}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <TaxInformation openDrawer={setOpenTaxInformation} />
      </Drawer>
      {/* subscription */}
      <Drawer
        anchor="bottom"
        open={openSubscription}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Plans setOpenPlans={setOpenSubscription} indexValue={indexValue} />
      </Drawer>
      {/* terms and condition */}
      <Drawer
        anchor="right"
        open={openTermsAndCondition}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <TermsAndCondition openDrawer={setOpenTermsAndCondition} />
      </Drawer>
      {/* Language */}
      <SwipeableDrawer
        anchor="bottom"
        open={openLanguageDrawer}
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
        <LanguageDrawer openDrawer={setOpenLanguageDrawer} />
      </SwipeableDrawer>
    </>
  );
};
export default SettingsGeneral;
