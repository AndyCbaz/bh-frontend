//IMPORTACIONES DE REACT
import { useState } from "react";
// IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faDollarSign,
  faFloppyDisk,
  faGem,
  faQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import Switch from "../../../../../components/Switch";
import { Divider } from "../../../../../components";
import BlockHuntSlider from "../../../../../components/Slider";
//IMPORTACIONES DE FRAMER MOTION



function Section1Page3() {
  const [switchStateSection1, setSwitchStateSection1] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalInput, setOpenModalInput] = useState(false);
  const [openModalAwesome, setOpenModalAwesome] = useState(false);
  const [hightValueBlockHunting, setHightValueBlockHunting] = useState("");
  const [highValueBlockHuntingSlider, setHighValueBlockHuntingSlider] =
    useState("");
  //-----------------------------------------------------------------
  const switchSection1Click = () => {
    setSwitchStateSection1(!switchStateSection1);
  };
  const handleCloseModals = () => {
    setOpenModalInfo(false);
    setOpenModalInput(false);
    setOpenModalAwesome(false);
  };
  const handleChangeHighValueBlockhuntingSlider = (
    _event: Event,
    newValue: number | number[]
  ) => {
    const valor = String(newValue);
    setHighValueBlockHuntingSlider(valor);
  };
  const handleInputSave = () => {
    setOpenModalInput(false);
    setOpenModalAwesome(true);
    setHightValueBlockHunting(highValueBlockHuntingSlider);
  };
  const handleGotIt = () => {
    
    setOpenModalAwesome(false);
  };
  return (
    <>
      <div className="flex flex-col w-full">
        {/* parte superior */}
        <section className="flex items-center">
          {/* SWITCH */}
          <div className="flex w-[20%] justify-center">
            <Switch
              name="HightValueBlockHunting"
              state={switchStateSection1}
              switchClick={switchSection1Click}
              value="section1"
            />
          </div>
          {/* encabezado */}
          <header className="flex items-center gap-2">
            {/* icono */}
            <div className="bg-primary-yellow rounded-full border flex justify-center items-center p-2">
              <FontAwesomeIcon
                style={{ color: "#757575", width: "2.5vh", height: "2.5vh" }}
                icon={faGem}
              />
            </div>
            {/* texto */}
            <div className="flex flex-col">
              <h1 className="font-bold text-[2.5vh]">
                High value block hunting
              </h1>
              <button
                onClick={() => setOpenModalInfo(true)}
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
        </section>
        {/* parte inferior */}
        <section className="flex gap-2 items-center w-full justify-center py-3">
          {/* icono */}
          <div className="flex justify-end w-[10%]">
            <FontAwesomeIcon
              style={{
                color: "white",
                width: "2.5vh",
                height: "2.5vh",
                backgroundColor: "#D1D5DB",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faDollarSign}
            />
          </div>
          {/* input */}
          <div
            onClick={() => setOpenModalInput(true)}
            className="bg-white w-[10vh]  h-[4vh] border-2 border-[#d1d5db] rounded flex justify-center items-center text-[2vh] font-semibold"
          >
            {hightValueBlockHunting}
          </div>
          {/* relleno para centrado */}
          <div className="flex w-[10%]"></div>
        </section>
      </div>
      {/* MODAL DE INFORMACION */}
      <Modal open={openModalInfo} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-primary-gray-light flex py-2 gap-1 justify-center rounded-t-2xl border-b-2 border-b-primary-yellow items-center">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "20px",
                height: "20px",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faGem}
            />
            <h1 className="text-[2vh] font-bold text-center">High value block hunting</h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.8vh] px-7 py-2">
              We've developed this powerful feature for those drivers who don't
              want to lose any prey, even more a juicy one.
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2">
              From now on with this feature you can set the price for your high
              value delivery block and we'll hunt it down for you regardless of
              whether it fits into your current schedule or note.
            </p>
            <p className="text-center text-[1.8vh] px-7 py-2">
              Having said that, you can ask us to hunt for you delivery blocks
              from $150, $170, $190 or any amount you want and we'll hunt it for
              you no matter what time it appears, then you decide if you
              complete it or forfeit it.
            </p>

            <Divider color="bg-primary-yellow" size={1} />
          </main>
          <footer className="flex justify-center mb-4">
            <button
             
              onClick={() => setOpenModalInfo(false)}
             
              className="custom-shadow bg-primary-yellow rounded-full py-2 px-4"
            >
              <h1 className="text-sm font-bold">GOT IT</h1>
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE INPUT */}
      <Modal open={openModalInput} onClose={handleCloseModals}>
        <div className="bg-[#3b4048] w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between rounded-t-2xl border-b-2 border-b-primary-yellow items-center p-2">
            <button onClick={handleCloseModals} className="flex">
              <FontAwesomeIcon
                style={{
                  width: "2vh",
                  height: "2vh",
                  backgroundColor: "#9E9E9E",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faXmark}
              />
            </button>
            <h1 className="font-bold text-white text-[2.5vh] text-center">
              High value block hunting
            </h1>
            <button className="flex" onClick={handleInputSave}>
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
              <h1 className="font-bold text-[2vh] text-white">
                Minimum payment per block:
              </h1>
            </div>
            <div className="flex w-[80%] items-center pt-12">
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                onChange={handleChangeHighValueBlockhuntingSlider}
              />
              <h1 className="text-[3vh] ml-2 text-white">$</h1>
            </div>
          </main>
        </div>
      </Modal>
      {/* MODAL DE AWESOME */}
      <Modal open={openModalAwesome} onClose={handleCloseModals}>
        <div className="bg-[#222529] py-1 w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-[#3B4047] flex justify-center mx-[2vh] rounded-2xl py-4 my-2">
            <div className="bg-primary-yellow rounded-full flex justify-center items-center p-2">
              <FontAwesomeIcon
                style={{
                  color: "#222529",
                  width: "5vh",
                  height: "5vh",
                  padding: 1,
                  borderRadius: "50%",
                }}
                icon={faCheck}
              />
            </div>
          </header>
          <main className="flex flex-col items-center px-4 gap-2">
            <h1 className="font-bold text-[3vh] text-white text-center">AWESOME</h1>
            <p className="text-[#757575] font-bold text-center text-[2vh]">
              ve activated the "HIGH VALUE BLOCK HUNTING" feature successfully,
              so from now on we'll hunt delivery blocks for you which match your
              preferences regardless of your pre-stablished working hours, then
              you can decide wether complete it or forfeit it.
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color='primary-gray' />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
             
             
              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleGotIt}
            >
              Got it
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Section1Page3;
