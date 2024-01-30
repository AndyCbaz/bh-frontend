// IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd, faQuestion, faClock, faXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE REACT
import { useState } from "react";
// IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import { Divider } from "../../../components";
import BlockHuntSlider from "../../../components/Slider";
// IMPORTACIONES DE FRAMER MOTION



// --------------------------------------------------------------------------------------------------------------------------------
function Section2() {
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalInput, setOpenModalInput] = useState(false);
  const [bufferTimeToArriveValue, setBufferTimeToArriveValue] = useState("");
  const [sliderValue, setSliderValue] = useState("");

  //--------------------------------------------------------------------------------------------------------------------------------
  const handleCloseModals = () => {
    setOpenModalInfo(false);
    setOpenModalInput(false);
  };

  const handleChangeBufferTimeToArriveSlider = (
    _event: Event,
    newValue: number | number[]
  ) => {
    const valor = String(newValue);
    setSliderValue(valor);
  };

  const saveInputValue = () => {
    setBufferTimeToArriveValue(sliderValue);
    setOpenModalInput(false);
  }

  // --------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <section className="flex-col flex bg-[#3B4048] rounded-2xl m-2 p-2 gap-2">
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
              icon={faHourglassEnd}
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[2vh]">Buffer time to arrive</h1>
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
        <main className="flex flex-col gap-8 my-4 ">
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="flex justify-end">
                <FontAwesomeIcon
                  style={{
                    color: "#474947",
                    width: "2.5vh",
                    height: "2.5vh",
                    backgroundColor: "#757575",
                    borderRadius: "50%",
                    padding: 4,
                  }}
                  icon={faClock}
                />
              </div>
              <div className="flex justify-center">
                <div
                  onClick={() => setOpenModalInput(true)}
                  className="bg-white w-[80px] h-8 rounded-lg flex justify-center text-[2vh] items-center font-bold text-[#757575]"
                >
                  {bufferTimeToArriveValue}
                </div>
              </div>
              <div className="flex">
                <h1 className="text-[#757575] font-semibold text-[2vh]">MIN</h1>
              </div>
            </div>
          </main>
      </section>
      {/* Modal de informacion */}
      <Modal open={openModalInfo} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-primary-gray-light flex py-2 gap-1 justify-center items-center rounded-t-2xl border-b-2 border-b-primary-yellow">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "3vh",
                height: "3vh",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faHourglassEnd}
            />
            <h1 className="font-bold text-[2.5vh]">Buffer time to arrive</h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[2vh] px-6 py-2">
              Use this feature to set the minimum time gap you need to arrive at
              this station, so that way we'll only hunt delivery blocks for you
              that match your minimum requirement to avoid the possibility of
              losing any prey.
            </p>

            <Divider color="bg-primary-yellow" size={1} />
          </main>
          <footer className="flex justify-center items-center my-2">
            <button
             
              onClick={handleCloseModals}
             
              className="custom-shadow bg-primary-yellow rounded-full py-2 px-4"
            >
              <h1 className="text-[2vh] font-bold">GOT IT</h1>
            </button>
          </footer>
        </div>
      </Modal>
      {/* Modal de input  */}
      <Modal open={openModalInput} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between bg-[#D9D9D9] rounded-t-2xl border-b-2 border-b-primary-yellow items-center p-2">
            <button
              onClick={handleCloseModals}
              className="flex"
            >
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
            <h1 className="font-bold text-[2.5vh]">Time buffer</h1>
            <button className="flex" onClick={saveInputValue}>
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
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                style={{
                  color: "#474947",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#F4D64C",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faClock}
              />
              <h1 className="font-bold text-[2.5vh] text-[#757575]">
                Time to arrive at the station:
              </h1>
            </div>
            <div className="flex w-[80%] items-center pt-12">
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                onChange={handleChangeBufferTimeToArriveSlider}
              />
              <h1 className="text-[2vh] ml-2">Minutes</h1>
            </div>
          </main>
        </div>
      </Modal>
    </>
  );
}
export default Section2;
