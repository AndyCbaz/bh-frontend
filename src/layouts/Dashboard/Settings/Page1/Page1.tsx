import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faClock,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@mui/material";


import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import Switch from "../../../../components/Switch";
import { Divider } from "../../../../components";
import TimeClock from "../../../../components/settings/TimeClock";
import SelectMenu from "../../../../components/settings/SelectMenu";
import { itemsSelectedMenuModalSettingsPage1 } from "../../../../constants/generalItems/Settings/Page1";


function Page1() {
  type State = {
    day: string;
    state: boolean;
    from: Dayjs | null;
    to: Dayjs | null;
  }
  const initialState = [
    { day: "Mon", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
    { day: "Tue", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
    { day: "Wed", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
    { day: "Thu", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
    { day: "Fri", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
    { day: "Sat", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
    { day: "Sun", state: false, from: dayjs('2022-04-17T00:00'), to: dayjs('2022-04-17T00:00') },
  ];
  const [estado, setStado] = useState<State[]>(initialState);
  //MODAL
  const [open, setOpen] = useState<boolean>(false);
  const [FromTo, setFromTo] = useState<boolean>(true);
  const [day, setDay] = useState<number>(0);
  const [hourFrom, setHourFrom] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'))
  const [hourTo, setHourTo] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'))
  //FUNCION DE CERRAR MODAL
  const handleClose = () => {
    setOpen(false)
    setFromTo(true)
  };
  // FUNCION DE CLICKSWITCH
  const click = (i: number) => {
    if (!estado[i].state) {
      setHourFrom(dayjs('2022-04-17T00:00'))
      setHourTo(dayjs('2022-04-17T00:00'))
      setOpen(true);
    } else {
      setHourFrom(dayjs('2022-04-17T00:00'))
      setHourTo(dayjs('2022-04-17T00:00'))
      const newState = [...estado];
      newState[i].state = !newState[i].state;
      setStado(newState);
    }
    setDay(i);
  };
  //FUNCION DE SAVE MODAL
  const handleSaveHour = () => {
    const newState = [...estado];
    newState[day].from = hourFrom;
    setStado(newState);
    setFromTo(!FromTo);
    if (FromTo === false) {
      const newState = [...estado];
      newState[day].state = !newState[day].state;
      newState[day].to = hourTo;
      setStado(newState);
      handleClose();
    }
  };
  return (
    <>
    {/* DESCRIPTION */}
      <div className="bg-black text-white text-center w-[90%] rounded-2xl p-2 opacity-30 my-4">
        <h1 className="text-primary-yellow font-bold text-[2.3vh]">
          Let set your working filters in three easy steeps to maximize your
          incomes to the next level.
        </h1>
      </div>
      {/* WORKING SHIFT AREA */}
      <div className="flex flex-col flex-grow bg-white w-[90%] rounded-2xl">
        <div className="bg-[#d9d9d9] rounded-t-2xl h-[12%] flex items-center pl-2 gap-3">
          <div
            style={{ boxShadow: "0px 4px 4px -1px rgba(0,0,0,0.75)" }}
            className="bg-primary-yellow rounded-full flex justify-center items-center p-1"
          >
            <FontAwesomeIcon
              style={{ color: "#757575", width: "2.5vh", height: "2.5vh" }}
              icon={faClock}
            />
          </div>
          <h1 className="font-bold text-[#818181] text-[2.5vh]">
            Select your working shift.
          </h1>
        </div>
        <div className="flex flex-col flex-grow justify-around p-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div className="flex" key={i}>
              {/* <h1 className="text-[2vh]">Swith</h1> */}
              <Switch
              name={day}
                value={day}
                state={estado[i].state}
                switchClick={() => click(i)}
              />
              <h1 className="text-[2vh] ml-2">{day}</h1>
              <div className="flex flex-grow justify-end gap-3 px-2">
                <h1 className="font-bold text-[#8d8d8d] text-[2vh]">From</h1>
                <div
                  style={{ backgroundColor: "#D9D9D9" }}
                  className=" rounded-lg px-1 flex items-center"
                >
                  <h1 className={`text-[2vh] font-semibold ${estado[i].state ? 'text-primary-orange': ''}`}>{estado[i].from?.format('HH:mm')}</h1>
                </div>
                <h1 className="font-bold text-[#8d8d8d] text-[2vh] ">to</h1>
                <div className="rounded-lg px-1 flex items-center bg-[#D9D9D9]">
                  <h1 className={`text-[2vh] font-semibold ${estado[i].state ? 'text-primary-orange': ''}`}>{estado[i].to?.format('HH:mm')}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <div className="bg-primary-gray py-1  rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between px-4 py-2">
            <button onClick={handleClose}>
              <FontAwesomeIcon
                style={{ color: "#757575", width: "23px", height: "23px" }}
                icon={faCircleXmark}
              />
            </button>
            <h1 className="text-white font-semibold">
              {FromTo ? "From" : "To"}
            </h1>
            <button onClick={handleSaveHour}>
              <FontAwesomeIcon
                style={{ color: "#757575", width: "23px", height: "23px" }}
                icon={faFloppyDisk}
              />
            </button>
          </header>
          <Divider color="primary-yellow" size={1} />
          <main className="flex w-full justify-center">
            {FromTo ? (
              <>
                <TimeClock value={hourFrom} setValue={setHourFrom}/>
              </>
            ) : (
              <>
                <TimeClock value={hourTo} setValue={setHourTo}/>
              </>
            )}
          </main>
          <footer className={`${FromTo ? 'hidden' : ''} flex justify-between px-[1.5vh] items-center bg-[#757575] mx-4 rounded-xl`}>
              <h1 className="text-[#c5c5c5] text-[2vh] font-semibold">Repeat</h1>
              <SelectMenu items={itemsSelectedMenuModalSettingsPage1}/>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Page1;
