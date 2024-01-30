// IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faFloppyDisk, faQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
import { Divider } from "../../../components";
import BlockHuntSlider from "../../../components/Slider";
import CheckBox from "../../../components/CheckBox";

//IMPORTACION DE CUSTOM COMPONENTS


// --------------------------------------------------------------------------------------------------
function Section5() {
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalInput, setOpenModalInput] = useState(false);


  // ------------------------------------------------------------------------------------------------
    const handleCloseModals = () => {
    setOpenModalInfo(false);
    setOpenModalInput(false);
    }
    const handleSaveInput = () => {
    setOpenModalInput(false);
    }
  // ----------------
  return (
    <>
      <section className="flex-col flex bg-[#3B4048] rounded-2xl m-2 p-2 gap-2">
        <header className="flex gap-2">
          <div className="">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "2.5VH",
                height: "2.5VH",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faCalendarAlt}
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[2vh]">Located Schedule (optional)</h1>
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
        <main className="flex flex-col gap-2">
            {/* Minimo */}
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="flex w-[35%] gap-1 justify-end">
                <h1 className="text-[#757575] text-[2vh]">From</h1>
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
                  {/* {locatedScheduleMin} */}
                  {"valor"}
                </div>
              </div>
              <div className="flex w-[35%]">
                <h1 className="text-[#757575] font-semibold text-[2vh]">HOUR</h1>
              </div>
            </div>
            {/* Maximo */}
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="flex w-[35%] gap-1 justify-end">
                <h1 className="text-[#757575] text-[2vh]">To</h1>
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
                  {/* {locatedScheduleMax} */}
                  {"valor"}
                </div>
              </div>
              <div className="flex w-[35%]">
                <h1 className="text-[#757575] font-semibold text-[2vh]">HOUR</h1>
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
              icon={faCalendarAlt}
            />
            <h1 className="text-[2.5vh] font-bold">Located Schedule</h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.8vh] px-6 py-2">
              As Amazon flex drivers, just like you, we know you need as much
              flexibility as you can when it comes to setting your filters, and
              we also know that every location is different when it comes to
              profit and working hours, that's why we've included the
              possibility to set a personalized schedule per each available
              location.
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2">
              From now on you are able to set a different schedule for each
              available location and that way you will get the most out of each
              of them. The same way that "MINIMUM PAYMENT PER HOUR" works, this
              preference only will apply for this location and will have
              priority over your general filters, so if you already set your
              schedule through your general filters and you also set a "LOCATED
              SCHEDULE" In this location, then the general setting won't apply
              on this occasion.
            </p>
            <p className="text-center text-[1.8vh] px-7 py-2">
              Otherwise since it is an optional feature, if you don't use it,
              then this location will use your pre-stablished "WORKING SHIFT
              from your general filters.
            </p>

            <Divider color="primary-yellow" size={1} />
          </main>
          <footer className="flex justify-center mb-4">
            <button
              
              onClick={handleCloseModals}
              
              className="custom-shadow bg-primary-yellow rounded-full py-2 px-4"
            >
              <h1 className="text-[2vh] font-bold">GOT IT</h1>
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE INPUT */}
      <Modal
        slotProps={{ backdrop: { style: { zIndex: -1 } } }}
        open={openModalInput}
        onClose={handleCloseModals}
      >
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
            <h1 className="font-bold text-[2.5vh]">Located Schedule</h1>
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
                <CheckBox group="from" items={["am", "pm"]} />
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
                <CheckBox group="to" items={["am", "pm"]} />
              </div>
            </div>
          </main>
        </div>
      </Modal>
    </>
  );
}
export default Section5;
