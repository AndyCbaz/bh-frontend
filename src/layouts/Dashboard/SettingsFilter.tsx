//IIMPORTACIONES DE FRAMER MOTION

//IMPORTACIONES DE REACT
import { useState } from 'react';
//IMPORTACIONES DE CUSTOM COMPONENTS

import Page1 from './Settings/Page1/Page1';
import Page2 from './Settings/Page2/Page2';
import Page3 from './Settings/Page3/Page3';
import Stepper from '../../components/SettingsFilters/Stepper';
import { NavigateFunction } from 'react-router-dom';


type SettingsProps = {
navigate: NavigateFunction
};
const SettingsFilters:React.FC<SettingsProps> = ({navigate}) => {
  // stepper /////////////////////////////////////////////
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState('1%');
  // funciones/////////////////////////////////////////////
  const handleNextClick = () => {
    if (step == 0) {
      setProgress('50%');
      setStep(1);
    } else if (step == 1) {
      setProgress('100%');
      setStep(2);
    } else {
      setProgress('0%');
      setStep(0);
      navigate('/app/dashboard');
    }
  };
  return (
    <div
      style={{ height: `calc(100vh - 15vh)` }}
      className="bg-primary-yellow flex w-full flex-col items-center rounded-t-[24px]"
    >
      {/* Encabezado del menu de settings */}
      <header className="flex w-full flex-col items-center">
        <div className="bg-primary-gray border-primary-gray my-2 h-[1px] w-[100px] rounded-full border-2"></div>
        <div className="flex w-full items-center justify-center pb-2">
          <Stepper progress={progress} step={step} />
        </div>
      </header>
      {/* Cuerpo del menu de settings */}
      <main

        className="flex w-full flex-grow flex-col items-center justify-center "
      >
        {step == 0 ? (
          <Page1 />
        ) : step == 1 ? (
          <Page2 navigate={navigate} />
        ) : (
          <Page3 />
        )}
      </main>
      {/* Pie de pagina del menu de settings */}
      <footer className="flex items-center">
        <button
          onClick={handleNextClick}
          
          className="my-4 h-[5vh] rounded-full bg-black px-8 font-bold text-white"
        >
          {step !== 2 ? (
            <h1 className="text-[2vh]">NEXT</h1>
          ) : (
            <h1 className="text-[2vh]">APPLY</h1>
          )}
        </button>
      </footer>
    </div>
  );
}
export default SettingsFilters;
