//IMPORTACIONES DE FONTAWESOME
import { faDollar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//IMPORTACIONES DE REACT
import { useState } from "react";

//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import Switch from "../../../components/Switch";
import { Divider } from "../../../components";
//IMPORTACIONES DE CUSTOM COMPONENTS



function Section1() {
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [switchStateSection1, setSwitchStateSection1] = useState(false);
  // -------------------------------------------------------------------
  const switchSection1Click = () => {
    setSwitchStateSection1(!switchStateSection1);
  };
  const handleCloseModals = () => {
    setOpenModalInfo(false);
  };
  return (
    <>
      {/* Contenedor principal */}
      <section className="flex justify-start w-full py-1 pr-[2.5vh] pl-2">
        {/* Contenedor del texto */}
        <div className="flex flex-col">
          {/* Contenedor del titulo y boton learn more*/}
          <div className="flex gap-2 items-center">
            <h1 className="text-white font-bold text-[2.2vh]">Available Now</h1>
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
              <h1 className="text-primary-orange text-[1.5vh] font-semibold leading-3">
                Learn More
              </h1>
            </button>
          </div>
          {/* Contenedor del texto */}
          <div>
            <h1 className="font-thin text-white  text-[1.8vh]">
              Nearby offers that start innmediately
            </h1>
          </div>
        </div>
        {/* Contenedor de switch */}
        <div className="flex flex-grow justify-end items-center">
          <Switch
            name="SwitchScheduleCalendar"
            state={switchStateSection1}
            switchClick={switchSection1Click}
            value="section1"
          />
        </div>
      </section>
      {/* MODAL DE INFORMACION {este se debe cambiar pues no es referente al mismo} */}
      <Modal open={openModalInfo} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-primary-gray-lighter m-2 flex py-4 gap-1 justify-center rounded-2xl   items-center">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "8vh",
                height: "8vh",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faDollar}
            />
          </header>
          <main className="flex-col flex pb-4">
            <h1 className="text-center text-[2.5vh] font-bold px-7 py-2">
              How to get offers
            </h1>
            <p className="text-center mx-2  text-primary-gray-lighter font-bold text-[2.2vh]">
              Be near pickup locations during busy times to improve your chance
              of getting an offer
            </p>
          </main>
          <Divider color="primary-yellow" size={1} />
          <footer className="flex justify-center m-4">
            <button
              onClick={() => setOpenModalInfo(false)}              
              className="custom-shadow bg-primary-yellow rounded-full py-2 px-4"
            >
              <h1 className="text-sm font-bold">GOT IT</h1>
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Section1;
