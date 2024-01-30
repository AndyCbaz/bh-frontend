// Importacion de React
import { useState } from 'react';
// Importacion de fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft, faDollar, faWallet } from '@fortawesome/free-solid-svg-icons';
// Importacion de MUI
import { Modal } from '@mui/material';
// Importacion de sub layouts
import InformationModal from './Earnings/InformationModal';
// Importacion de componentes
import { Carrousel, ButtonsGroup, MonthlyIncomesGraph } from '../../components';
// Importacion de constantes
import { items, itemsHours, itemsMonths, itemsWeeks } from '../../constants/generalItems/EarningsDrawer';
// Importacion de interfaces
import { IEarningsDrawerProps, IFlexParameters, IReferralsParameters } from '../../interfaces';



const EarningsDrawer = ({ navigate }: IEarningsDrawerProps) => {
  // Variables Reactivas
  //---------------variable para control de modales ------------------
  const [openModalInfo, setOpenModalInfo] = useState<boolean>(false);
  //---------------variable para control de origen de earnings ------------------
  const [originEarnings, setOriginEarnings] = useState<number>(0);
  //---------------variable para control de parametros existentes en caso de seleccionar origenEarning=0 (Amazon) ------------------

  const [flexParameters, setFlexParameters] = useState<IFlexParameters>({
    activitySelected: 0,
    hoursInterval: 0,
    weekInterval: 0,
    monthInterval: 0,
  });
  //---------------variable para control de parametros existentes en caso de seleccionar origenEarning=1 (Referrals) ------------------

  const [referralsParameters, setReferralsParameters] =
    useState<IReferralsParameters>({
      monthSelected: 0,
    });

  return (
    <>
      <div className="flex h-screen w-full flex-col">
        {/* HEADER */}
        <header className="flex h-[9%] flex-col justify-center border-b-2 border-b-primary-yellow bg-[#3B4048]">
          <div className="flex h-full justify-between px-3">
            {/* boton atras */}
            <button onClick={() => navigate('/app/dashboard')}>
              <FontAwesomeIcon
                className="h-[25px] w-[25px] text-primary-gray-light"
                icon={faArrowLeft}
              />
            </button>
            {/* titulo */}
            <div className="flex h-full items-center justify-center ">
              {/* Titulo*/}
              <h1 className="text-center  text-[3vh] font-semibold text-white">
                Earnings
              </h1>
            </div>
            {/* wallet */}
            <div className="flex items-center">
              <button onClick={()=>navigate('/app/wallet')}>
                <FontAwesomeIcon
                  className="h-[4vh] w-[4vh] text-primary-gray-light"
                  icon={faWallet}
                />
              </button>
            </div>
          </div>
        </header>
        {/* Section Principal */}
        <section className="flex h-[81%] flex-col overflow-y-auto p-2">
          <ButtonsGroup
            buttonSelected={originEarnings}
            setButtonSelected={setOriginEarnings}
            items={items}
            textSizes="text-[4vw]"
          />
          {/* description */}
          <section className="flex flex-col gap-2 rounded-2xl  p-2">
            <main className="flex flex-col items-center justify-center gap-2">
              {/* date */}
              <div className="flex items-center">
                <h1 className="font-semibold text-white">August, 2023</h1>
                {originEarnings === 0 && (
                  <FontAwesomeIcon
                    className={`h-1.5 w-1.5 rounded-full bg-primary-gray-light p-1 ${
                      flexParameters.activitySelected === 1 ? '' : ''
                    }`}
                    icon={faArrowDown}
                  />
                )}
              </div>
              {/* price */}
              <div className="rounded-full border-2 border-primary-orange bg-primary-gray-dark px-4">
                <h1 className="text-[3vh] font-bold text-white">$720</h1>
              </div>
              {/* current balance */}
              <div className="rounded-full bg-primary-orange px-1">
                <h1 className="text-[1.5vh] text-white">Current balance</h1>
              </div>
            </main>
            <footer className="flex w-full items-end justify-center">
              <h1 className="text-center text-[2vh] text-white">
                Total referral income by 08/30/2023
              </h1>
            </footer>
          </section>
          {/* graficas e info */}
          <section className="flex flex-grow flex-col">
            {originEarnings === 1 ? (
              <div className="border-primary-gray-ligth border-t-[1px]">
                <h1 className="font-semibold text-white">Monthly activity</h1>
              </div>
            ) : (
              <div className="flex border-t-[1px] border-primary-gray-light text-[2vh] text-primary-gray-light">
                <button
                  onClick={() =>
                    setFlexParameters((prevState) => ({
                      ...prevState,
                      activitySelected: 0,
                    }))
                  }
                  className={`flex-grow border-r-[1px] ${
                    flexParameters.activitySelected === 0 &&
                    'font-bold text-white'
                  }`}
                >
                  Hourly activity
                </button>
                <button
                  onClick={() =>
                    setFlexParameters((prevState) => ({
                      ...prevState,
                      activitySelected: 1,
                    }))
                  }
                  className={`flex-grow ${
                    flexParameters.activitySelected === 1 &&
                    'font-bold text-white'
                  }`}
                >
                  Weekly activity
                </button>
                <button
                  onClick={() =>
                    setFlexParameters((prevState) => ({
                      ...prevState,
                      activitySelected: 2,
                    }))
                  }
                  className={`flex-grow border-l-[1px] ${
                    flexParameters.activitySelected === 2 &&
                    'font-bold text-white'
                  }`}
                >
                  Monthly activity
                </button>
              </div>
            )}
            <div className="py-2">
              <Carrousel activeDots={false} items={itemsMonths}>
                {originEarnings === 1 ? (
                  itemsMonths.map((item, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setReferralsParameters((prevState) => ({
                          ...prevState,
                          monthSelected: index,
                        }))
                      }
                      data-carousel-item
                      data-index={index}
                      className={`mx-1  rounded-full px-2 text-[2vh] ${
                        referralsParameters.monthSelected === index
                          ? 'bg-primary-orange text-white'
                          : ' bg-primary-gray-light'
                      }`}
                    >
                      {item}
                    </button>
                  ))
                ) : flexParameters.activitySelected === 0 ? (
                  <div className="flex w-full items-center justify-center">
                    {itemsHours.map((item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setFlexParameters((prevState) => ({
                            ...prevState,
                            hoursInterval: index,
                          }))
                        }
                        data-carousel-item
                        data-index={index}
                        className={`mx-1 rounded-full px-2 py-1 text-[0.9vh] ${
                          flexParameters.hoursInterval === index
                            ? 'bg-primary-orange text-white'
                            : ' bg-primary-gray-light'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : flexParameters.activitySelected === 1 ? (
                  <div className="flex w-full items-center justify-center">
                    {itemsWeeks.map((item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setFlexParameters((prevState) => ({
                            ...prevState,
                            weekInterval: index,
                          }))
                        }
                        data-carousel-item
                        data-index={index}
                        className={`mx-1  rounded-full px-2 text-[2vh] ${
                          flexParameters.weekInterval === index
                            ? 'bg-primary-orange text-white'
                            : ' bg-primary-gray-light'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : (
                  itemsMonths.map((item, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setFlexParameters((prevState) => ({
                          ...prevState,
                          monthInterval: index,
                        }))
                      }
                      data-carousel-item
                      data-index={index}
                      className={`mx-1  rounded-full px-2 text-[2vh] ${
                        flexParameters.monthInterval === index
                          ? 'bg-primary-orange text-white'
                          : ' bg-primary-gray-light'
                      }`}
                    >
                      {item}
                    </button>
                  ))
                )}
              </Carrousel>
            </div>
            {/* grafica */}
            <div className="flex flex-grow flex-col gap-1 rounded-2xl bg-primary-gray p-2">
              <header className="flex gap-1">
                <div className="flex gap-2 px-2">
                  <FontAwesomeIcon
                    icon={faDollar}
                    className="h-3.5 w-3.5 rounded-full bg-primary-yellow p-1 text-black"
                  />
                  <h1 className="text-[2vh] font-semibold text-white">
                    Monthly incomes
                  </h1>
                </div>
              </header>
              <div className="flex flex-grow flex-col items-center justify-center rounded-xl bg-white p-1">
                <MonthlyIncomesGraph />
              </div>
            </div>
            <div className="flex justify-between">
              {originEarnings === 1 ? (
                <h1 className="text-[2vh] text-white">
                  Monthly incomes by referrals
                </h1>
              ) : (
                <div className="flex flex-col">
                  <h1 className="text-[2vh] text-white">Fri, Aug 25</h1>
                  <p className="text-[1.5vh] text-primary-gray-light">
                    6:00 AM - 8:30 AM
                  </p>
                </div>
              )}

              <h1 className="text-[2vh] text-white">$720</h1>
            </div>
            <div className="flex justify-between">
              {originEarnings === 1 ? (
                <h1 className="text-[2vh] text-white">
                  Expert hunter plan monthly payment
                </h1>
              ) : (
                <div className="flex flex-col">
                  <h1 className="text-[2vh] text-white">Fri, Aug 25</h1>
                  <p className="text-[1.5vh] text-primary-gray-light">
                    1:45 PM - 5:45 PM
                  </p>
                </div>
              )}

              <h1 className="text-[2vh] text-white">-$199</h1>
            </div>
          </section>
        </section>
        {/* FOOTER */}
        <footer className="flex h-[10%] w-full flex-col items-center justify-center px-2">
          <button className="w-full rounded-full border-2 border-primary-yellow  py-2">
            <h1 className="font-bold text-primary-yellow">
              {originEarnings === 0
                ? 'Deposits and charges'
                : 'Earnings activity'}
            </h1>
          </button>
        </footer>

        {/* MODAL DE INFORMACION */}
        <Modal open={openModalInfo} onClose={() => setOpenModalInfo(false)}>
          <InformationModal />
        </Modal>
      </div>
    </>
  );
};

export default EarningsDrawer;
