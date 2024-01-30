// IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faQuestion,
  faCheck,
  faShuffle,
  faXmark,
  faFloppyDisk,
  faExclamation,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";

//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
//IMPORTACIONES DE COMPONENTES
import Grafica from "./Section1/Grafica";
import { ButtonsGroup, Divider } from "../../../components";
import BlockHuntSlider from "../../../components/Slider";
import CheckBox from "../../../components/CheckBox";



// CONSTANTES
const items = [
  { title: "Single Payment", icon: faCheck, iconEnable: true },
  { title: "Split Payment", icon: faShuffle, iconEnable: true },
];

// ----------------------------------------------------------------------------------------------------------------------------------
function Section1() {
  const [buttonSelected, setButtonSelected] = useState(0);
  const [singlePaymentValue, setSinglePaymentValue] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<string>("");
  const [openModalInput, setOpenModalInput] = useState(false);
  const [openModalInfoSection1, setOpenModalInfoSection1] = useState(false);
  const [openModalGraph, setOpenModalGraph] = useState(false);
  //----------------------------------------------------------------------------------------------------------------------------------
  const handleCloseModals = () => {
    setOpenModalInput(false);
    setOpenModalInfoSection1(false);
    setOpenModalGraph(false);
  };
  const handleSaveInput = () => {
    setSinglePaymentValue(sliderValue);
    setOpenModalInput(false);
  };
  const handleChangeSlider = (_event: Event, newValue: number | number[]) => {
    const valor = String(newValue);
    setSliderValue(valor);
  };
  const handleSaveGraphInput = () => {
    setOpenModalGraph(false);
  };
  //----------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <section className="flex-col min-h-[360px] flex bg-[#3B4048] rounded-2xl m-2 p-2 gap-2">
        <header className="flex gap-2">
          <div className="">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "2.5vh",
                height: "2.5vh",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faDollarSign}
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[2vh]">Min block payment</h1>
            <button
              onClick={() => setOpenModalInfoSection1(true)}
              className="flex items-center gap-1"
            >
              <FontAwesomeIcon
                style={{
                  color: "#474947",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#E6822D",
                  borderRadius: "50%",
                  padding: 1,
                }}
                icon={faQuestion}
              />
              <h1 className="text-primary-orange text-[1.5vh] font-semibold">
                Learn More
              </h1>
            </button>
          </div>
        </header>
        <main className="flex flex-col flex-grow justify-center">
          {/* GRUPO DE BOTONES */}
          <div className="px-[2vh]">
            <ButtonsGroup
              items={items}
              setButtonSelected={setButtonSelected}
              buttonSelected={buttonSelected}
            />
          </div>
          {/* CHILDRENS  */}
          <div className="flex flex-col flex-grow justify-center items-center w-full">
            {buttonSelected === 0 ? (
              <div className="flex gap-2 items-center w-full justify-center">
                <div className="w-[30%] flex justify-end ">
                  <FontAwesomeIcon
                    style={{
                      color: "#474947",
                      width: "2.5vh",
                      height: "2.5vh",
                      backgroundColor: "#757575",
                      borderRadius: "50%",
                      padding: 4,
                    }}
                    icon={faDollarSign}
                  />
                </div>
                <div
                  onClick={() => setOpenModalInput(true)}
                  className="bg-white w-[10vh]  h-[4vh] rounded flex justify-center items-center text-[2vh] font-semibold"
                >
                  {singlePaymentValue}
                </div>
                <div className="w-[30%]"></div>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2 w-full">
                <div className="flex gap-2 justify-center items-center w-full">
                  <div className="flex w-[45%] justify-center">
                    <Grafica handleClickGraph={() => setOpenModalGraph(true)} />
                  </div>
                  <div className="w-[30%] flex flex-col gap-2 items-start justify-center">
                    <div className="flex  gap-1 items-center justify-center">
                      <div className="h-[4vh] w-[4vh] bg-[#E5C646] rounded-full"></div>
                      <h1 className="text-white text-[2vh]">$120</h1>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      <div className="h-[4vh] w-[4vh] bg-[#F4E9BD] rounded-full"></div>
                      <h1 className="text-white text-[2vh]">$100</h1>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                      <div className="h-[4vh] w-[4vh] bg-[#F9F5E5] rounded-full"></div>
                      <h1 className="text-white text-[2vh]">$90</h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <footer className="flex gap-1 justify-center items-center">
          <FontAwesomeIcon
            style={{
              color: "#757575",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              padding: 4,
            }}
            icon={faExclamation}
          />
          <p className="text-[#757575] text-xs">Tap input to edit</p>
        </footer>
      </section>
      {/* Modal de section 1 informacion */}
      <Modal open={openModalInfoSection1} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-primary-gray-light flex py-2 gap-1 justify-center rounded-t-2xl border-b-2 border-b-primary-yellow">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "20px",
                height: "20px",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faDollarSign}
            />
            <h1 className="font-bold text-[2.5vh]">Minimum block payment</h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.6vh] px-6 py-2">
              You can set the minimum amount of money you are willing to receive
              for each delivery block hunted in this location through this
              feature, and you can set it in two different ways:
            </p>
            <div className="flex justify-center gap-1 items-center">
              <FontAwesomeIcon
                style={{
                  color: "white",
                  width: "1.5vh",
                  height: "1.5vh",
                  backgroundColor: "#757575",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faCheck}
              />
              <h1 className="font-bold text-[2vh]">Single payment:</h1>
            </div>
            <p className="text-center text-[1.6vh] px-6 py-2">
              you must set a single amount of money which applies to all the
              delivery blocks hunted within your pre-established work schedule.
            </p>
            <div className="flex justify-center gap-1 items-center">
              <FontAwesomeIcon
                style={{
                  color: "white",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#757575",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faCheck}
              />
              <h1 className="font-bold text-[2vh]">Split payment:</h1>
            </div>
            <p className="text-center text-[1.6vh] px-7 py-2">
              you can set up to three different shifts included within the same
              pr-stablished work schedule and you can assign a different amount
              of money to each one of them getting the most benefit possible and
              taking advantage of the highest demand working hours to
              automatically raise the price of your delivery blocks preferences
              as well as lower it during off-peaks hours.
            </p>
            <p className="text-center text-[1.6vh] px-4 font-bold">
              With BLOCKHUNT a prey will never scape from you ever again
            </p>
            <Divider color="primary-yellow" size={1} />
          </main>
          <footer className="flex justify-center mb-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenModalInfoSection1(false)}
              style={{ boxShadow: "0px 4px 4px -1px rgba(0,0,0,0.75)" }}
              className="bg-primary-yellow rounded-full py-2 px-4"
            >
              <h1 className="text-[2vh] font-bold">GOT IT</h1>
            </motion.button>
          </footer>
        </div>
      </Modal>
      {/* Modal de input section 1 */}
      <Modal open={openModalInput} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between bg-[#D9D9D9] rounded-t-2xl border-b-2 border-b-primary-yellow items-center p-2">
            <button onClick={handleCloseModals} className="flex">
              <FontAwesomeIcon
                style={{
                  color: "#d9d9d9",
                  width: "1.8vh",
                  height: "1.8vh",
                  backgroundColor: "#9E9E9E",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faXmark}
              />
            </button>
            <h1 className="font-bold text-[2.5vh]">Single payment</h1>
            <button className="flex" onClick={handleSaveInput}>
              <FontAwesomeIcon
                style={{
                  color: "#9E9E9E",
                  width: "3vh",
                  height: "3vh",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faFloppyDisk}
              />
            </button>
          </header>
          <main className="flex flex-col items-center justify-center p-2">
            <div className="flex gap-2">
              <FontAwesomeIcon
                style={{
                  color: "#474947",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#F4D64C",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faDollarSign}
              />
              <h1 className="font-bold text-[2vh] text-[#757575]">
                Minimun payment per block:
              </h1>
            </div>
            <div className="flex w-[80%] items-center pt-12">
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                onChange={handleChangeSlider}
              />
              <FontAwesomeIcon
                style={{
                  color: "#9E9E9E",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faDollarSign}
              />
            </div>
          </main>
        </div>
      </Modal>
      {/* Modal de graph */}
      <Modal open={openModalGraph} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between bg-[#D9D9D9] rounded-t-2xl border-b-2 border-b-primary-yellow items-center p-2">
            <button onClick={() => setOpenModalGraph(false)} className="flex">
              <FontAwesomeIcon
                style={{
                  color: "#d9d9d9",
                  width: "1.8vh",
                  height: "1.8vh",
                  backgroundColor: "#9E9E9E",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faXmark}
              />
            </button>
            <h1 className="font-bold text-[2.5vh]">First shift</h1>
            <button className="flex" onClick={handleSaveGraphInput}>
              <FontAwesomeIcon
                style={{
                  color: "#9E9E9E",
                  width: "3vh",
                  height: "3vh",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faFloppyDisk}
              />
            </button>
          </header>
          <main className="flex flex-col items-center justify-center p-2 gap-1">
            <div className="flex gap-4 w-[80%] items-center">
              <div className="flex w-[70px] justify-end">
                <h1 className="text-[2vh]">From:</h1>
              </div>
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                max={12}
                sx={{
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "unset",
                    fontSize: "0.8rem",
                    top: 14,
                  },
                }}
              />
              <div className="flex flex-col items-center justify-center">
                <CheckBox items={["am", "pm"]} group="from" />
              </div>
            </div>
            <div className="flex gap-4 w-[80%] items-center">
              <div className="flex w-[70px] justify-end">
                <h1 className="text-[2vh] w-5">To:</h1>
              </div>
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                max={12}
                sx={{
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "unset",
                    fontSize: "0.8rem",
                    top: 14,
                  },
                }}
              />
              <div className="flex flex-col items-center justify-center">
                <CheckBox items={["am", "pm"]} group={"to"} />
              </div>
            </div>
            <div className="w-full">
              <Divider color="primary-gray" size={1} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon
                style={{
                  color: "#d9d9d9",
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#9E9E9E",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faDollar}
              />
              <h1 className="text-[2.5vh] font-semibold text-[#9E9E9E]">
                Set your desire shift price
              </h1>
            </div>
            <div className="flex w-[80%] pt-4">
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                max={50}
                sx={{
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "unset",
                    fontSize: "0.8rem",
                    top: 14,
                  },
                }}
              />
            </div>
          </main>
          <footer className="flex justify-center py-2">
            <button className="bg-[#757575] rounded-2xl">
              <h1 className="text-xs text-white px-4 ">save / add new shift</h1>
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Section1;
