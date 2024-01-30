// IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDollarSign, faFloppyDisk, faHourglassEnd, faQuestion, faStopwatch, faXmark } from "@fortawesome/free-solid-svg-icons";
// IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import { Divider } from "../../../components";
import BlockHuntSlider from "../../../components/Slider";




// --------------------------------------------------------------------------------------------------

function Section4() {
const [openModalInfo, setOpenModalInfo] = useState(false);
const [openModalInput, setOpenModalInput] = useState(false);
const [minLocatedPayPerHourSlider, setMinLocatedPayPerHourSlider] = useState("");
const [minLocatedPayPerHour, setMinLocatedPayPerHour] = useState("");





  //-------------------------------------------------------------------------------------------------
  const handleCloseModals = () => {
    setOpenModalInfo(false);
    setOpenModalInput(false);
  }
   const handleChangeMinLocatedPayPerHourSlider = (_event: Event,
    newValue: number | number[]) => {
    const valor = String(newValue);
    setMinLocatedPayPerHourSlider(valor);
   }
  
  const handleInputSave = () => {
      setOpenModalInput(false);
      setMinLocatedPayPerHour(minLocatedPayPerHourSlider);
  }

  
  // ------------------------------------------------------------------------------------------------
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
            <h1 className="text-white text-[2vh]">Min located pay per hour (optional)</h1>
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
        <main className="flex flex-col gap-8 ">
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="flex w-[35%] justify-end">
                <FontAwesomeIcon
                  style={{
                    color: "#474947",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#757575",
                    borderRadius: "50%",
                    padding: 4,
                  }}
                  icon={faClock}
                />
              </div>
              <div className="flex w-[30%] justify-center">
                <div
                  onClick={() => setOpenModalInput(true)}
                  className="bg-white w-[80px] h-8 rounded-lg flex justify-center items-center font-bold text-[#757575]"
                >
                  {minLocatedPayPerHour}
                </div>
              </div>
              <div className="flex w-[35%]">
                <h1 className="text-[#757575] font-semibold">X HOUR</h1>
              </div>
            </div>
          </main>
      </section>
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
              icon={faStopwatch}
            />
            <h1 className="text-[2vh] font-bold">
              Minimun located pay per hour
            </h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.8vh] px-7 py-2">
              Through this feature you are able to set the minimum payment per
              hour you are willing to receive for each delivery block in this
              location, so we'll use this criteria to give you more options when
              it comes to hunt blocks for you.
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2">
              Is important to highlight that this preference only will apply for
              this location and will have priority over your general settings,
              so if you already set your "Minimum pay per hour" through your
              general filters and you also set a "Minimum located pay per hour"
              in this location, then the general settings won't apply on this
              time.
            </p>
            <p className="text-center text-[1.8vh] px-7 py-2">
              Otherwise since it is an optional feature, if you don't use it,
              then this location will use your pre-stablished "MINIMUM PAY PER
              HOUR" from your general filters.
            </p>

            <Divider color="primary-yellow" size={1} />
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
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between bg-[#D9D9D9] rounded-t-2xl border-b-2 border-b-primary-yellow items-center p-2">
            <button
              onClick={handleCloseModals}
              className="flex"
            >
              <FontAwesomeIcon
                style={{
                  color: "#d9d9d9",
                  width: "2vh",
                  height: "2vh",
                  backgroundColor: "#9E9E9E",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faXmark}
              />
            </button>
            <h1 className="font-bold text-[2.5vh]">Pay per hour</h1>
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
              <h1 className="font-bold text-[2vh] text-[#757575]">
                Min pay per working hour:
              </h1>
            </div>
            <div className="flex w-[80%] items-center pt-12">
              <BlockHuntSlider
                size="small"
                valueLabelDisplay="on"
                aria-label="pretto slider"
                min={0}
                onChange={handleChangeMinLocatedPayPerHourSlider}
              />
              <h1 className="text-[3vh] ml-2">$</h1>
            </div>
          </main>
        </div>
      </Modal>
    </>
  );
}
export default Section4;
