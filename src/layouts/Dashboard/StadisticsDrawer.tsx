//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faArrowsRotate,
  faBuildingColumns,
  faCalendar,
  faClock,
  faCube,
  faDollar,
  faHourglass,
  faMoneyBills,
  faSliders,
  faTableCellsLarge,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE FRAMER MOTION
import { motion } from 'framer-motion';
//IMPORTACIOENS DE REACT
import { useState } from 'react';
// IMPORTACIONES DE CUSTOM COMPONENTS

// IMPORTACIONES DE MUI
import { SwipeableDrawer } from '@mui/material';
// IMPORTACIONES DE COMPONENTES

import dayjs from 'dayjs';
import { Carrousel, Divider } from '../../components';
import CustomPieGraphic from './Stadistics/customPieGrafic/CustomPieGraphic';
import Drawer from './Stadistics/drawer/Drawer';
import { CustomBarGraphic } from './Stadistics/customBarGrafic/CustomBarGraphic';
import { NavigateFunction } from 'react-router-dom';
//CONSTANTES
const items = [
  { Month: 'Jan', value: 1 },
  { Month: 'Feb', value: 2 },
  { Month: 'Mar', value: 3 },
  { Month: 'Apr', value: 4 },
  { Month: 'May', value: 5 },
  { Month: 'Jun', value: 6 },
  { Month: 'Jul', value: 7 },
  { Month: 'Aug', value: 8 },
  { Month: 'Sep', value: 9 },
  { Month: 'Oct', value: 10 },
  { Month: 'Nov', value: 11 },
  { Month: 'Dec', value: 12 },
];
const options = [faCube, faDollar, faBuildingColumns];
interface StadisticsProps {
  navigate: NavigateFunction
};
const Stadistics:React.FC<StadisticsProps> = ({navigate}) => {
  const [monthSelected, setMonthSelected] = useState<number>(1);
  const [optionSelected, setOptionSelected] = useState<number>(0);
  const [daySelected, setDaySelected] = useState<string>('1');
  const [dayOrMonth, setDayOrMonth] = useState<boolean>(true);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  //---------------------------------------------------
  const days = getDaysInMonth2(monthSelected);
  // CLOSE DE DRAWERS
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
      setOpenDrawer(open);
    };

  return (
    <>
      <div className="flex h-screen w-full flex-col">
        {/* HEADER */}
        <header className="border-b-primary-yellow flex h-[9%] flex-col justify-center border-b-2 bg-[#3B4048]">
          {/* BOTON ATRAS */}
          <div className="flex h-full w-full justify-center px-3">
            <div className="flex w-[30%]">
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
            </div>
            <div className="flex h-full flex-grow items-center justify-center">
              {/* TITULO */}
              <h1 className="text-center  text-[3vh] font-semibold text-white">
                Statistics
              </h1>
            </div>
            <div className="flex w-[30%] justify-end  gap-2">
              {/* CALENDAR */}
              <div className="flex  items-center">
                <motion.button
                  onClick={() => setDayOrMonth(!dayOrMonth)}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon
                    style={{
                      color: '#BBBBBB',
                      width: '4vh',
                      height: '4vh',
                    }}
                    icon={faCalendar}
                  />
                </motion.button>
              </div>
              {/* Settings */}
              <div className="flex  items-center">
                <motion.button
                  onClick={() => setOpenDrawer(true)}
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
          </div>
        </header>
        <main className="flex h-[91%] flex-col overflow-y-auto">
          {/* BOTONES */}
          <section className="flex flex-col gap-4 p-2">
            <Carrousel activeDots={false} items={items}>
              {dayOrMonth
                ? items.map((item, index) => (
                    <button
                      onClick={() => setMonthSelected(item.value)}
                      key={index}
                      data-carousel-item
                      data-index={index}
                      className={`${
                        item.value === monthSelected
                          ? 'bg-primary-orange'
                          : 'bg-[#3B4048]'
                      } mx-2 flex max-h-[80px] min-h-[80px] min-w-[10vh] snap-center snap-always flex-col items-center justify-center rounded-2xl p-3`}
                    >
                      <h1
                        className={`text-[4vh] ${
                          item.value === monthSelected
                            ? 'font-bold text-white'
                            : 'font-normal text-[#BBBBBB]'
                        }`}
                      >
                        {item.Month}
                      </h1>
                    </button>
                  ))
                : days.map((day, index) => (
                    <button
                      onClick={() => setDaySelected(day.daysNumber)}
                      // whileTap={{ scale: 0.95 }}
                      key={index}
                      data-carousel-item
                      data-index={index}
                      className={`${
                        day.daysNumber === daySelected
                          ? 'bg-primary-orange'
                          : 'bg-[#3B4048]'
                      } mx-2 flex max-h-[80px] min-h-[80px] min-w-[10vh] snap-center snap-always flex-col items-center justify-center rounded-2xl p-3`}
                    >
                      <h1
                        className={`text-[4vh] ${
                          day.daysNumber === daySelected
                            ? 'font-bold text-white'
                            : 'font-normal text-[#BBBBBB]'
                        }`}
                      >
                        {day.daysNumber}
                      </h1>
                      <h3
                        className={`text-[2vh] ${
                          day.daysNumber === daySelected
                            ? 'font-bold text-white'
                            : 'font-normal text-[#BBBBBB]'
                        }`}
                      >
                        {day.daysString}
                      </h3>
                    </button>
                  ))}
            </Carrousel>
            <div className="flex justify-center gap-2">
              {options.map((item, index) => (
                <motion.div
                  onClick={() => setOptionSelected(index)}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  className={`${
                    optionSelected === index
                      ? 'border-primary-orange'
                      : 'border-white'
                  } flex items-center justify-center rounded-full border-2 px-4 py-1`}
                >
                  <FontAwesomeIcon
                    style={{
                      color: 'white',
                      width: '3vh',
                      height: '3vh',
                    }}
                    icon={item}
                  />
                </motion.div>
              ))}
            </div>
            <Divider color="bg-primary-gray-light" size={1} />
          </section>
          {/* CUERPO */}
          <main className="flex flex-grow flex-col px-2 pb-2">
            {/* title */}
            <div className="flex h-[5%] items-center pb-2">
              <h1 className="text-white">
                {optionSelected === 0
                  ? 'By delivery blocks'
                  : optionSelected === 1
                    ? 'By earnings'
                    : 'By warehouses'}
              </h1>
            </div>
            {/* section 1  */}
            <section className="flex h-[45%] flex-col">
              <div className="flex w-full flex-grow flex-col gap-2 rounded-2xl bg-[#3B4048] p-2">
                <header className="flex gap-1">
                  <div className="flex gap-2 px-2">
                    <FontAwesomeIcon
                      icon={
                        optionSelected === 0
                          ? faSliders
                          : optionSelected === 1
                            ? faMoneyBills
                            : faBuildingColumns
                      }
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
                      {optionSelected === 0
                        ? 'Registered blocks'
                        : optionSelected === 1
                          ? 'Incomes'
                          : 'Warehouses visited'}
                    </h1>
                  </div>
                </header>
                <main className="flex flex-grow flex-col justify-center">
                  <CustomPieGraphic
                    data={
                      optionSelected === 0
                        ? ['33', '33', '100']
                        : optionSelected === 1
                          ? ['20', '700']
                          : ['33', '33', '34']
                    }
                    variables={
                      optionSelected === 0
                        ? ['Hunted', 'Rejected', 'Lost']
                        : optionSelected === 1
                          ? ['From referals', 'From Amazon flex']
                          : ['DCM6', 'VOH3', 'DCN2']
                    }
                    label2={optionSelected === 1 ? '$' : ''}
                  />
                </main>
              </div>
            </section>
            {/* section2 */}
            <section className="flex h-[45%] flex-grow flex-col p-2">
              <Carrousel items={[1, 2, 3]} activeDots={false}>
                {optionSelected === 0 ? (
                  <Group1 />
                ) : optionSelected === 1 ? (
                  <Group2 />
                ) : (
                  <Group3 />
                )}
              </Carrousel>
            </section>
          </main>
        </main>
      </div>
      {/* MENU DE FILTROS */}
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
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
        <Drawer setOpenDrawer={setOpenDrawer} />
      </SwipeableDrawer>
    </>
  );
}
export default Stadistics;

function Group1() {
  return (
    <>
      {/* grupo 1 */}
      <div
        key={1}
        data-carousel-item
        data-index={1}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-start snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex gap-2 px-2">
            <FontAwesomeIcon
              icon={faTableCellsLarge}
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
              Hunted blocks by type
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center">
          <CustomPieGraphic
            data={['33', '33', '100']}
            variables={['Hunted', 'Rejected', 'Lost']}
            label="blocks"
          />
        </main>
      </div>
      {/* grupo 2 */}
      <div
        key={2}
        data-carousel-item
        data-index={2}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-start snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
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
              Hunted block by warehouse
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center">
          <CustomPieGraphic
            data={['33', '33', '100']}
            variables={['Hunted', 'Rejected', 'Lost']}
            label="blocks"
          />
        </main>
      </div>
      {/* grupo 3 */}
      <div
        key={3}
        data-carousel-item
        data-index={3}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-end snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex gap-2 px-2">
            <FontAwesomeIcon
              icon={faHourglass}
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
              Hunted block by duration
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center">
          <CustomPieGraphic
            data={['33', '33', '100']}
            variables={['Hunted', 'Rejected', 'Lost']}
            label="blocks"
          />
        </main>
      </div>
    </>
  );
}

function Group2() {
  return (
    <>
      {/* grupo 1 */}
      <div
        key={1}
        data-carousel-item
        data-index={1}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-start snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex gap-2 px-2">
            <FontAwesomeIcon
              icon={faUserPlus}
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
              Incomes by referrals
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center rounded-2xl bg-white">
          <CustomBarGraphic />
        </main>
      </div>
      {/* grupo 2 */}
      <div
        key={2}
        data-carousel-item
        data-index={2}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-end snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex gap-2 px-2">
            <FontAwesomeIcon
              icon={faCube}
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
              Incomes by Amazon flex
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center rounded-2xl bg-white">
          <CustomBarGraphic />
        </main>
      </div>
    </>
  );
}

function Group3() {
  return (
    <>
      {/* grupo 1 */}
      <div
        key={1}
        data-carousel-item
        data-index={1}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-start snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex gap-2 px-2">
            <FontAwesomeIcon
              icon={faDollar}
              style={{
                backgroundColor: '#F4D64C',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                padding: 4,
                color: 'black',
              }}
            />
            <h1 className="text-[3.5vw] font-semibold text-white">
              Payment range average by warehouse
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center rounded-2xl bg-white">
          <CustomBarGraphic />
        </main>
      </div>
      {/* grupo 2 */}
      <div
        key={2}
        data-carousel-item
        data-index={2}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-start snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex items-center gap-2 px-2">
            <FontAwesomeIcon
              icon={faClock}
              style={{
                backgroundColor: '#F4D64C',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                padding: 4,
                color: 'black',
              }}
            />
            <h1 className="text-[2.5vw] font-semibold text-white">
              Payment range average per hour by warehouse
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center rounded-2xl bg-white">
          <CustomBarGraphic />
        </main>
      </div>
      {/* grupo 3 */}
      <div
        key={3}
        data-carousel-item
        data-index={3}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-end snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex gap-2 px-2">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              style={{
                backgroundColor: '#F4D64C',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                padding: 4,
                color: 'black',
              }}
            />
            <h1 className="text-[3.5vw] font-semibold text-white">
              Warehouses visited by me
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center rounded-2xl bg-white">
          <CustomBarGraphic />
        </main>
      </div>
      {/* grupo 4 */}
      <div
        key={4}
        data-carousel-item
        data-index={4}
        className="relative mx-2 flex min-w-[90%] flex-grow snap-end snap-always flex-col gap-2 rounded-2xl bg-[#3b4047] object-contain p-2"
      >
        <header className="flex gap-1">
          <div className="flex items-center gap-2 px-2">
            <FontAwesomeIcon
              icon={faUsers}
              style={{
                backgroundColor: '#F4D64C',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                padding: 4,
                color: 'black',
              }}
            />
            <h1 className="text-[1.7vh] font-semibold text-white">
              Most visited by the community
            </h1>
          </div>
        </header>
        <main className="flex flex-grow flex-col justify-center rounded-2xl bg-white">
          <CustomBarGraphic />
        </main>
      </div>
    </>
  );
}

function getDaysInMonth2(month: number): {
  daysString: string;
  daysNumber: string;
}[] {
  const daysInMonth = dayjs(`${dayjs().year()}-${month}-01`).daysInMonth();
  const daysNumber = Array.from({ length: daysInMonth }, (_, i) =>
    dayjs(`${dayjs().year()}-${month}-${i + 1}`).format('DD'),
  );
  const daysString = Array.from({ length: daysInMonth }, (_, i) =>
    dayjs(`${dayjs().year()}-${month}-${i + 1}`).format('ddd'),
  );
  const resultado = [];
  if (daysNumber.length === daysString.length) {
    for (let i = 0; i < daysNumber.length; i++) {
      resultado.push({ daysString: daysString[i], daysNumber: daysNumber[i] });
    }
  }
  return resultado;
}
