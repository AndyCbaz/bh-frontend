//IMPORTACIONES DE REACT
import { useState } from "react";
// IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faFloppyDisk,
  faQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import Switch from "../../../../../components/Switch";
import { Divider } from "../../../../../components";
import BlockHuntSlider from "../../../../../components/Slider";
//IMPORTACIONES DE FRAMER MOTION



function Section3Page3() {
  const [switchStateSection3, setSwitchStateSection3] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalInput, setOpenModalInput] = useState(false);
  const [minimunPayPerHour, setMinimumPayPerHour] = useState("");
  const [minimumPayPerHourSlider, setMinimumPayPerHourSlider] = useState("");
  //-----------------------------------------------------------------
  const switchSection3Click = () => {
    setSwitchStateSection3(!switchStateSection3);
  };
  const handleCloseModals = () => {
    setOpenModalInfo(false);
    setOpenModalInput(false);
  };
  const handleChangeHighValueBlockAlertSlider = (
    _event: Event,
    newValue: number | number[]
  ) => {
    const valor = String(newValue);
    setMinimumPayPerHourSlider(valor);
  };
  const handleInputSave = () => {
    setOpenModalInput(false);
    setMinimumPayPerHour(minimumPayPerHourSlider);
  };
  return (
    <>
      <div className="flex flex-col w-full">
        {/* parte superior */}
        <section className="flex items-center">
          {/* SWITCH */}
          <div className="flex w-[20%] justify-center">
            <Switch
              name="MinimumPayPerHour"
              state={switchStateSection3}
              switchClick={switchSection3Click}
              value="section3"
            />
          </div>
          {/* encabezado */}
          <header className="flex items-center gap-2">
            {/* icono */}
            <div className="bg-primary-yellow rounded-full border flex justify-center items-center p-2">
              <FontAwesomeIcon
                style={{ color: "#757575", width: "2.5vh", height: "2.5vh" }}
                icon={faDollarSign}
              />
            </div>
            {/* texto */}
            <div className="flex flex-col">
              <h1 className="font-bold text-[2.5vh]">Minimum pay per hour</h1>
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
            {minimunPayPerHour}
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
              icon={faDollarSign}
            />
            <h1 className="text-[2vh] font-bold text-center">Minimum pay per hour</h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.8vh] px-7 py-2">
              Through this feature you are able to set the minimum payment per
              hour you are willing to receive for each delivery block.
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2">
              This preference will apply for every single location as long as
              each particular location does not have its own "MINIMUM LOCATED
              PAY PER HOUR" pre-stablished.
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
            <h1 className="font-bold text-[2.5vh] text-white text-center">
              Min pay per hour
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
                onChange={handleChangeHighValueBlockAlertSlider}
              />
              <h1 className="text-[3vh] ml-2 text-white">$</h1>
            </div>
          </main>
        </div>
      </Modal>
    </>
  );
}
export default Section3Page3;
