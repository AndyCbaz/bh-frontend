//IMPORTACIONES DE FRAMERA MOTION
import { motion } from "framer-motion";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE REACT
import { useState } from "react";
import {
  faArrowRotateRight,
  faCheckDouble,
  faComment,
  faEnvelope,
  faInbox,
  faQrcode,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import { ButtonsGroup, Divider } from "../../../../../components";
import Switch from "../../../../../components/Switch";
import DateRangeCalendar from "../../../../../components/DataRangeCalendar";
import RangeSlider from "../../../../../components/RangeSlider";

// CONSTANTES
const itemsInvitationmethod = [
  { title: "All", icon: faInbox, iconEnable: true },
  { title: "Phone", icon: faSquarePhone, iconEnable: true },
  { title: "Phone", icon: faEnvelope, iconEnable: true },
  { title: "Phone", icon: faQrcode, iconEnable: true },
];
const itemsComunicationMethod = [
  { title: "Whatsapp", icon: faWhatsapp, iconEnable: true },
  { title: "Text message", icon: faComment, iconEnable: true },
];

const itemsStatus = [
  { title: "All", icon: faInbox, iconEnable: true },
  { title: "Pending", icon: faArrowRotateRight, iconEnable: true },
  { title: "Enrrolled", icon: faCheckDouble, iconEnable: true },
];

type FiltersProps = {
  setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
};
function Filters({ setOpenFilters }: FiltersProps) {
  const [invitationMethodSelect, setInvitationMethodSelect] =
    useState<number>(0);
  const [comunicationMethod, setComunicationMethod] = useState<number>(0);
  const [statusSelected, setStatusSelected] = useState<number>(0);
  const [switchComunicationMethod, setSwitchComunicationMethod] =
    useState<boolean>(false);
  const [switchInvitationDateRange, setSwitchInvitationDateRange] =
    useState<boolean>(false);
  const [switchInvitationTimeRange, setSwitchInvitationTimeRange] =
    useState<boolean>(false);
  const [rangeSliderValue, setRangeSliderValue] = useState<number[]>([1, 100]);
  const [dataRangeValues, setDataRangeValues] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs(),
  ]);
  //-----------------------------------------------------------
  const switchComunicationMethodClick = () => {
    setSwitchComunicationMethod(!switchComunicationMethod);
  };
  const switchInvitationDateRangeClick = () => {
    setSwitchInvitationDateRange(!switchInvitationDateRange);
  };
  const switchInvitationTimeRangeClick = () => {
    setSwitchInvitationTimeRange(!switchInvitationTimeRange);
  };
  return (
    <>
      <div
        style={{ height: `calc(100vh - 15vh)` }}
        className="flex flex-col w-full rounded-t-[24px] bg-primary-main items-center"
      >
        {/* Encabezado del menu de filter */}
        <header className="w-full flex flex-col items-center h-[5%] ">
          <div className="bg-primary-gray border-primary-gray border-2 h-[1px] w-[100px] rounded-full my-2"></div>
        </header>
        {/* Cuerpo del menu de filter */}
        <main className="bg-white flex flex-col flex-grow w-[95%] rounded-2xl overflow-y-auto px-2 py-4">
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
          <Divider color="bg-primary-gray-ligth" size={1} />
          {/* comunication method */}
          <h1 className="text-[2vh] font-bold pt-4">Comunication method</h1>
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
          <Divider color="bg-primary-gray-light" size={1} />
          {/* Status */}
          <h1 className="text-[2vh] font-bold pt-4">Status</h1>
          <div className="py-2">
            <ButtonsGroup
              buttonSelected={statusSelected}
              setButtonSelected={setStatusSelected}
              items={itemsStatus}
              textSizes="text-[2vh]"
            />
          </div>
          <Divider color="bg-primary-gray-light" size={1} />
          {/* Invitation date range */}
          <div className="flex gap-2 py-2">
            <Switch
              name="swith invitation date range"
              state={switchInvitationDateRange}
              switchClick={() => switchInvitationDateRangeClick()}
              value=""
            />
            <h1 className="font-semibold">Invitation date range</h1>
          </div>

          <div className="border-2 rounded-2xl border-principal-gray flex flex-col justify-center items-center">
          <DateRangeCalendar value={dataRangeValues} setValue={setDataRangeValues}/>
          </div>
          {/* ----- */}
          <div className="flex justify-center gap-2 py-2">
            <div className=" min-w-[35%] border-2 border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">From</h1>
              </div>
              {/* VALOR */}
              <div className="flex justify-center w-full">
                <h1 className="text-[2.5vh]">{dataRangeValues[0]?.format('DD/MM/YYYY')}</h1>
              </div>
            </div>
            <div className="mx-[2vh] w-full flex flex-col justify-center">
              <Divider color="bg-[#d1d5db]" size={1} />
            </div>
            <div className="border-2 min-w-[35%] border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">To</h1>
              </div>
              {/* VALOR */}
              <div className="flex justify-center w-full">
                <h1 className="text-[2.5vh]">{dataRangeValues[1]?.format('DD/MM/YYYY')}</h1>
              </div>
            </div>
          </div>
          {/* ---- */}
          <Divider color="bg-principal-gray-ligth" size={1} />
          {/* Invitation time range */}
          <div className="flex gap-2 py-2">
            <Switch
              name="swith invitation time range"
              state={switchInvitationTimeRange}
              switchClick={() => switchInvitationTimeRangeClick()}
              value=""
            />
            <h1 className="font-semibold">Invitation time range</h1>
          </div>
          <div className="p-4">
            <RangeSlider
              max={100}
              min={1}
              minDistance={1}
              set={setRangeSliderValue}
              value={rangeSliderValue}
              step={1}
            />
          </div>
          <div className="flex justify-center gap-2 py-2">
            <div className=" min-w-[35%] border-2 border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">From</h1>
              </div>
              {/* VALOR */}
              <div className="flex justify-center w-full">
                <h1 className="text-[2.5vh]">12:00AM</h1>
              </div>
            </div>
            <div className="mx-[2vh] w-full flex flex-col justify-center">
              <Divider color="bg-[#d1d5db]" size={1} />
            </div>
            <div className="border-2 min-w-[35%] border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">To</h1>
              </div>
              {/* VALOR */}
              <div className="flex justify-center w-full">
                <h1 className="text-[2.5vh]">12:00AM</h1>
              </div>
            </div>
          </div>
        </main>
        {/* PIE DE PAGINA */}
        <footer className="my-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpenFilters(false)}
            className="text-white text-[2vh] font-bold bg-black rounded-full py-2 px-8 my-2"
          >
            APPLY
          </motion.button>
        </footer>
      </div>
    </>
  );
}
export default Filters;
