//IMPORTACIONES DE REACT
import { useState } from "react";
// IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion, faTrashCan } from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import Switch from "../../../../../components/Switch";
import { Divider } from "../../../../../components";



function Section4Page3() {
  const [switchStateSection4, setSwitchStateSection4] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalAwesome, setOpenModalAwesome] = useState(false);

  //-----------------------------------------------------------------
  const switchSection4Click = () => {
    setSwitchStateSection4(!switchStateSection4);
    if(switchStateSection4 === false){

        setOpenModalAwesome(true);
    }
  };
  const handleCloseModals = () => {
    setOpenModalInfo(true);
    setOpenModalInfo(false);
  };

  const handleGotIt = () => {
    setOpenModalAwesome(false);
  }

  return (
    <>
      <div className="flex flex-col w-full">
        {/* parte superior */}
        <section className="flex items-center">
          {/* SWITCH */}
          <div className="flex w-[20%] justify-center">
            <Switch
              name="Autoforfeit"
              state={switchStateSection4}
              switchClick={switchSection4Click}
              value="section4"
            />
          </div>
          {/* encabezado */}
          <header className="flex items-center gap-2">
            {/* icono */}
            <div className="bg-primary-yellow rounded-full border flex justify-center items-center p-2">
              <FontAwesomeIcon
                style={{ color: "#757575", width: "2.5vh", height: "2.5vh" }}
                icon={faTrashCan}
              />
            </div>
            {/* texto */}
            <div className="flex flex-col">
              <h1 className="font-bold text-[2.5vh]">Autoforfeit</h1>
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
              icon={faTrashCan}
            />
            <h1 className="text-[2vh] font-bold text-center">Autoforfeit</h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.8vh] px-7 py-2">
              BLOCKHUNT have developed for you such a powerful feature that
              we're sure you'll looooooooove it.
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2">
              How many times have you lost a delivery block because you fell
              asleep or just because you simply didn't remember that you had it
              scheduled, causing your standing to drop dangerously?
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2 font-bold">
              No worries, we've you covered.
            </p>
            <p className="text-center text-[1.8vh] px-7 py-2">
              Through this unique feature you won't experience that kind of
              stress any more, you just have to activate it and that way we'll
              reach you out one hour before each delivery block begins through
              email, push notification and text message with a call to action
              through which you must confirm that you are available to complete
              it.
            </p>
            <p className="text-center text-[1.8vh] px-7 py-2">
              If you do not confirm it, we'll forfeit it for you 50 (fifty)
              minutes before it starts, so that way your standing will never be
              affected because lost blocks ever again
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
              <Divider size={1} color="bg-[#3B4047]" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
              
              className="cstom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
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
export default Section4Page3;
