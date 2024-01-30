//IMPORTACIONES DE FONTAWESOME
import {
  faComment,
  faEnvelope,
  faGraduationCap,
  faInbox,
  faLeaf,
  faQrcode,
  faSquarePhone,
  faTag,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleXmark,
  faCreditCard,
} from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE REACT
import { useState } from 'react';
//IMPORTACIONES DE FRAMER MOTION

import { DateRange } from '@mui/x-date-pickers-pro';
import dayjs, { Dayjs } from 'dayjs';
import { ButtonsGroup, Divider } from '../../../../../components';
import Switch from '../../../../../components/Switch';
import DateRangeCalendar from '../../../../../components/DataRangeCalendar';
import RangeSlider from '../../../../../components/RangeSlider';

// CONSTANTES
const itemsInvitationmethod = [
  { title: 'All', icon: faInbox, iconEnable: true },
  { title: 'Phone', icon: faSquarePhone, iconEnable: true },
  { title: 'Email', icon: faEnvelope, iconEnable: true },
  { title: 'Bar code', icon: faQrcode, iconEnable: true },
];
const itemsComunicationMethod = [
  { title: 'Whatsapp', icon: faWhatsapp, iconEnable: true },
  { title: 'Text message', icon: faComment, iconEnable: true },
];
const itemsPlan = [
  { title: 'All', icon: faInbox, iconEnable: true },
  { title: 'Explorer', icon: faWpexplorer, iconEnable: true },
  { title: 'Seasonal', icon: faLeaf, iconEnable: true },
  { title: 'Expert', icon: faGraduationCap, iconEnable: true },
];
const itemsSortBy = [
  { title: 'Reward', icon: faTrophy, iconEnable: true },
  { title: 'Plan', icon: faTag, iconEnable: true },
];
const itemsStatus = [
  { title: 'All', icon: faInbox, iconEnable: true },
  { title: 'Active', icon: faCreditCard, iconEnable: true },
  { title: 'Unsuscribed', icon: faCircleXmark, iconEnable: true },
];

type FiltersProps = {
  setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
};
function Filters({ setOpenFilters }: FiltersProps) {
  const [invitationMethodSelect, setInvitationMethodSelect] =
    useState<number>(0);
  const [comunicationMethod, setComunicationMethod] = useState<number>(0);
  const [switchComunicationMethod, setSwitchComunicationMethod] =
    useState<boolean>(false);
  const [planSelect, setPlanSelect] = useState<number>(0);
  const [sortBySelect, setSortBySelect] = useState<number>(0);
  const [statusSelected, setStatusSelected] = useState<number>(0);
  const [switchSubscriptionDateRange, setSwitchSubscriptionDateRange] =
    useState<boolean>(false);
  const [switchSubscriptionTimeRange, setSwitchSubscriptionTimeRange] =
    useState<boolean>(false);
  const [rangeSliderValue, setRangeSliderValue] = useState<number[]>([1, 100]);
  const [dataRangeValues, setDataRangeValues] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs(),
  ]);
  //--------------------------------------------
  const switchComunicationMethodClick = () => {
    setSwitchComunicationMethod(!switchComunicationMethod);
  };
  const switchSubscriptionDateRangeClick = () => {
    setSwitchSubscriptionDateRange(!switchSubscriptionDateRange);
  };
  const switchSubscriptionTimeRangeClick = () => {
    setSwitchSubscriptionTimeRange(!switchSubscriptionDateRange);
  };
  return (
    <>
      <div
        style={{ height: `calc(100vh - 15vh)` }}
        className="bg-principal-main flex w-full flex-col items-center rounded-t-[24px]"
      >
        {/* Encabezado del menu de filter */}
        <header className="flex h-[5%] w-full flex-col items-center ">
          <div className="my-2 h-[1px] w-[100px] rounded-full border-2 border-primary-gray bg-primary-gray"></div>
        </header>
        <main className="flex w-[95%] flex-grow flex-col overflow-y-auto rounded-2xl bg-white px-2 py-4">
          {/* invitation method */}
          <h1 className="text-[2vh] font-bold">Invitation method</h1>
          <div className="py-2">
            <ButtonsGroup
              buttonSelected={invitationMethodSelect}
              setButtonSelected={setInvitationMethodSelect}
              items={itemsInvitationmethod}
              textSizes="text-[2vh]"
            />
          </div>
          <Divider color="primary-gray-light" size={1} />
          {/* comunication method */}
          <h1 className="pt-4 text-[2vh] font-bold">Comunication method</h1>
          <div className="py-2">
            <ButtonsGroup
              buttonSelected={comunicationMethod}
              setButtonSelected={setComunicationMethod}
              items={itemsComunicationMethod}
              textSizes="text-[2vh]"
              otherStates={switchComunicationMethod}
            />
          </div>
          <div className="flex gap-2 py-2">
            <Switch
              name="swith comunication method filters invited"
              state={switchComunicationMethod}
              switchClick={() => switchComunicationMethodClick()}
              value=""
            />
            <h1 className="font-semibold">Both</h1>
          </div>
          <Divider color="bg-primary-gray-ligth" size={1} />
          {/* Plan */}
          <h1 className="pt-4 text-[2vh] font-bold">Plan</h1>
          <div className="py-2">
            <ButtonsGroup
              buttonSelected={planSelect}
              items={itemsPlan}
              setButtonSelected={setPlanSelect}
              textSizes="text-[1.8vh]"
            />
          </div>
          <div className="pt-2">
            <Divider color="bg-primary-gray-ligth" size={1} />
          </div>
          {/* Sort by */}
          <h1 className="pt-4 text-[2vh] font-bold">Sort by</h1>
          <div className="py-2">
            <ButtonsGroup
              buttonSelected={sortBySelect}
              items={itemsSortBy}
              setButtonSelected={setSortBySelect}
              textSizes="text-[2vh]"
            />
          </div>
          <div className="pt-2">
            <Divider color="bg-primary-gray-ligth" size={1} />
          </div>
          {/* STATUS */}
          <h1 className="pt-4 text-[2vh] font-bold">Status</h1>
          <div className="py-2">
            <ButtonsGroup
              buttonSelected={statusSelected}
              items={itemsStatus}
              setButtonSelected={setStatusSelected}
              textSizes="text-[2vh]"
            />
          </div>
          <div className="pt-2">
            <Divider color="bg-primary-gray-ligth" size={1} />
          </div>
          {/* SUBSCRIPTION DATE AND RANGE */}
          <div className="flex gap-2 py-2">
            <Switch
              name="subscription date range"
              state={switchSubscriptionDateRange}
              switchClick={() => switchSubscriptionDateRangeClick()}
              value=""
            />
            <h1 className="font-semibold">Subscription date range</h1>
          </div>
          <div className="border-primary-gray flex flex-col items-center justify-center rounded-2xl border-2">
            <DateRangeCalendar
              value={dataRangeValues}
              setValue={setDataRangeValues}
            />
          </div>
          {/* ----- */}
          <div className="flex justify-center gap-2 py-2">
            <div className=" flex min-w-[35%] flex-col items-start rounded-lg border-2 border-[#d1d5db] pt-1">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">From</h1>
              </div>
              {/* VALOR */}
              <div className="flex w-full justify-center">
                <h1 className="text-[2.5vh]">
                  {dataRangeValues[0]?.format('DD/MM/YYYY')}
                </h1>
              </div>
            </div>
            <div className="mx-[2vh] flex w-full flex-col justify-center">
              <Divider color="bg-[#d1d5db]" size={1} />
            </div>
            <div className="flex min-w-[35%] flex-col items-start rounded-lg border-2 border-[#d1d5db] pt-1">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">To</h1>
              </div>
              {/* VALOR */}
              <div className="flex w-full justify-center">
                <h1 className="text-[2.5vh]">
                  {dataRangeValues[1]?.format('DD/MM/YYYY')}
                </h1>
              </div>
            </div>
          </div>
          {/* ---- */}
          <Divider color="bg-primary-gray-ligth" size={1} />
          {/* SUBSCRIPTION TIME RANGE */}
          <div className="flex gap-2 py-2">
            <Switch
              name="subscription date range"
              state={switchSubscriptionTimeRange}
              switchClick={() => switchSubscriptionTimeRangeClick()}
              value=""
            />
            <h1 className="font-semibold">Subscription time range</h1>
          </div>
          <div className="px-4 pt-4">
            <RangeSlider
              max={100}
              min={1}
              minDistance={1}
              set={setRangeSliderValue}
              value={rangeSliderValue}
              step={1}
            />
          </div>
          {/* ----- */}
          <div className="flex justify-center gap-2 py-2">
            <div className=" flex min-w-[35%] flex-col items-start rounded-lg border-2 border-[#d1d5db] pt-1">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">From</h1>
              </div>
              {/* VALOR */}
              <div className="flex w-full justify-center">
                <h1 className="text-[2.5vh]">12:00AM</h1>
              </div>
            </div>
            <div className="mx-[2vh] flex w-full flex-col justify-center">
              <Divider color="primary-gray" size={1} />
            </div>
            <div className="flex min-w-[35%] flex-col items-start rounded-lg border-2 border-[#d1d5db] pt-1">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">To</h1>
              </div>
              {/* VALOR */}
              <div className="flex w-full justify-center">
                <h1 className="text-[2.5vh]">12:00AM</h1>
              </div>
            </div>
          </div>
        </main>
        {/* PIE DE PAGINA */}
        <footer className="my-3">
          <button
            onClick={() => setOpenFilters(false)}
            className="my-2 rounded-full bg-black px-8 py-2 text-[2vh] font-bold text-white"
          >
            APPLY
          </button>
        </footer>
      </div>
    </>
  );
}
export default Filters;
