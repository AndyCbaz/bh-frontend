//IMPROTACIONES DE REACT
import React from 'react';
//IMPORTACIONES DE FONTAWESOME
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE COMPONENTES
import Section1 from './ScheduleCalendar/Section1';
import Section2 from './ScheduleCalendar/Section2';
import Section3 from './ScheduleCalendar/Section3';
import { Divider } from '../../components';
import { NavigateFunction } from 'react-router-dom';

interface ScheduleCalendarProps  {
  navigate: NavigateFunction
};
const ScheduleCalendar:React.FC<ScheduleCalendarProps> = ({navigate}) =>  {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* HEADER */}
      <header className="border-b-primary-yellow flex h-[9%] flex-col justify-center border-b-2 bg-[#3B4048]">
        <div className="flex items-center pl-2 ">
          <button onClick={() => navigate('/app/dashboard')} className="w-[10%]">
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
              Schedule / Calendar
            </h1>
          </div>
          <div className="w-[10%]" />
        </div>
      </header>
      {/* MAIN */}
      <main className="flex h-[91%] w-full flex-col items-center">
        {/* SECTION 1 */}

        <Section1 />

        <div className="m-[1vh] w-full">
          <Divider color="bg-[#d1d5db]" size={1} />
        </div>
        {/* SECTION 2 */}

        <Section2 />

        {/* SECTION 3 */}

        <Section3 />
      </main>
    </div>
  );
}
export default ScheduleCalendar;
