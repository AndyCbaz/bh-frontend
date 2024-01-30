// IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// IMPORTACIONES DE REACT
import React from 'react';
//IMPORTACION DE COMPONENTES

//IMPORTACION DE FRAMER MOTION
import { motion } from 'framer-motion';
import Section1 from './SettingsLocation/Section1';
import Section2 from './SettingsLocation/Section2';
import Section3 from './SettingsLocation/Section3';
import Section4 from './SettingsLocation/Section4';
import Section5 from './SettingsLocation/Section5';
import { NavigateFunction } from 'react-router-dom';

interface SettingsLocationProps {
    navigate:NavigateFunction
}
const SettingsLocation:React.FC<SettingsLocationProps> = ({navigate}) => {
  return (
    <div className="flex h-screen flex-col">
      <header className="border-b-primary-yellow flex h-[9%] flex-col justify-center border-b-2 bg-[#3B4048]">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/app/dashboard')}
            className="flex w-[10%] items-center justify-start pl-2"
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
              Location Settings
            </h1>
          </div>
          <div className="w-[10%]" />
        </div>
      </header>
      <main className="flex h-[82%] flex-col overflow-auto">
        {/* Section1 */}
        <Section1 />
        {/* Section2 */}
        <Section2 />
        {/* Section3 */}
        <Section3 />
        {/* Section4 */}
        <Section4 />
        {/* Section 5 */}
        <Section5 />
      </main>
      <footer className="flex h-[8%] items-center justify-center p-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-full rounded-3xl border-2 border-[#F4D64C]"
          onClick={() => navigate('/app/dashboard')}
        >
          <h1 className="px-8 py-2 font-semibold text-[#F4D64C]">APPLY</h1>
        </motion.button>
      </footer>
    </div>
  );
}
export default SettingsLocation;
