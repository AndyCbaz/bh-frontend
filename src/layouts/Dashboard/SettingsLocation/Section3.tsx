// IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFloppyDisk,
  faHourglassEnd,
  faQuestion,
  faStopwatch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faClock as faClock2 } from "@fortawesome/free-regular-svg-icons";
//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE MUI
import { Checkbox, Modal } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Divider } from "../../../components";
import RangeSlider from "../../../components/RangeSlider";

//IMPORTACIONES DE FRAMER MOTION


// --------------------------------------------------------------------------------------------------------------------------------
function Section3() {
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalInput, setOpenModalInput] = useState(false);
  const [deliveryBlockDurationMax, setDeliveryBlockDurationMax] = useState("");
  const [deliveryBlockDurationMin, setDeliveryBlockDurationMin] = useState("");
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([1, 1.5]);
  const [moreOptions, setMoreOptions] = useState(false);

  // --------------------------------------------------------------------------------------------------------------------------------
  const handleCloseModals = () => {
    setOpenModalInfo(false);
    setOpenModalInput(false);
  };
  const handleInputSave = () => {
    setOpenModalInput(false);
    setDeliveryBlockDurationMin(valueRangeSlider[0].toString());
    setDeliveryBlockDurationMax(valueRangeSlider[1].toString());
  };
  const handleChangeMoreState = () => {
    setMoreOptions(!moreOptions);
  };
  //--------------------------------------------------------------------------------------------------------------------------------
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
              icon={faClock2}
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white text-[2vh]">
              Delivery block duration (optional)
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
        <main className="flex flex-col gap-2 my-4">
          {/* Minimo */}
          <div className="flex justify-center items-center gap-2 w-full">
            <div className="flex w-[35%] gap-1 justify-end">
              <h1 className="text-[#757575] text-[2vh]">Minimum</h1>
              <FontAwesomeIcon
                style={{
                  color: "#474947",
                  width: "2vh",
                  height: "2vh",
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
                {deliveryBlockDurationMin}
              </div>
            </div>
            <div className="flex w-[35%] justify-start">
              <h1 className="text-[#757575] text-[2vh] font-semibold text-start">
                HOUR
              </h1>
            </div>
          </div>
          {/* Maximo */}
          <div className="flex justify-center items-center gap-2 w-full">
            <div className="flex w-[35%] gap-1 justify-end">
              <h1 className="text-[#757575] text-[2vh]">Maximum</h1>
              <FontAwesomeIcon
                style={{
                  color: "#474947",
                  width: "2vh",
                  height: "2vh",
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
                {deliveryBlockDurationMax}
              </div>
            </div>
            <div className="flex w-[35%]">
              <h1 className="text-[#757575] text-[2vh] font-semibold">HOUR</h1>
            </div>
          </div>
        </main>
      </section>
      {/* Modal de Info */}
      <Modal open={openModalInfo} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-primary-gray-light flex items-center py-2 gap-1 justify-center rounded-t-2xl border-b-2 border-b-primary-yellow">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "3vh",
                height: "3vh",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faStopwatch}
            />
            <h1 className="font-bold text-[2.5vh]">Delivery block duration</h1>
          </header>
          <main className="flex-col flex">
            <h1 className="text-center font-bold text-[2vh] px-6 py-2">
              Yes... BLOCKHUNT did it again...
            </h1>
            <p className="text-center text-[2vh] px-7 py-2">
              Since BLOCKHUNT is a tool made by Amazon flex drivers to other
              Amazon flex drivers, we know exactly what you need to make your
              job more easy and profitable, that's why we've developed this
              feature where you can set an accurate time duration for your
              delivery blocks by setting the minimum and maximum numbers of
              hours you prefer for them so we'll have a time gap to hunt blocks
              for you within it.
            </p>
            <p className="text-center text-[2vh] px-8 py-2">
              Also you can choose an specific block time duration by clicking
              the "more option" button located in the "DELIVERY BLOCK DURATION"
              setting pop up (for example: only those offers that match whit
              your preferences)
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
      {/* Modal Input */}
      <Modal
        slotProps={{ backdrop: { style: { zIndex: -1 } } }}
        open={openModalInput}
        onClose={handleCloseModals}
      >
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between bg-[#D9D9D9] rounded-t-2xl border-b-2 border-b-primary-yellow items-center p-2">
            <button onClick={handleCloseModals} className="flex">
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
            <h1 className="font-bold text-[2.5vh]">Block Duration</h1>
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
            <div className="flex gap-2 p-4">
              <FontAwesomeIcon
                style={{
                  color: "#474947",
                  width: "2vh",
                  height: "2vh",
                  backgroundColor: "#F4D64C",
                  borderRadius: "50%",
                  padding: 4,
                }}
                icon={faHourglassEnd}
              />
              <h1 className="font-bold text-[2.5vh] text-[#757575]">
                Time block duration:
              </h1>
            </div>
            <div className="flex w-[80%] items-center pt-6 justify-center">
              <RangeSlider
                minDistance={0.5}
                max={5}
                min={1}
                step={0.5}
                value={valueRangeSlider}
                set={setValueRangeSlider}
              />

              <h1 className="text-[2vh] ml-2 font-semibold">Hours</h1>
            </div>
          </main>
          <footer className="flex justify-center py-2">
            <button
              onClick={handleChangeMoreState}
              className="bg-[#757575] rounded-2xl"
            >
              <h1 className="text-[1.5vh] text-white px-4 ">More options...</h1>
            </button>
          </footer>
          <section
            className={`flex flex-col items-center ${
              !moreOptions ? "hidden" : ""
            }`}
          >
            <FormGroup>
              {["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"].map(
                (item, index) => (
                  <FormControlLabel
                    slotProps={{
                      typography: { fontSize: "12px", fontWeight: "bold" },
                    }}
                    key={index}
                    control={<Checkbox color="warning" name={item} />}
                    label={`Only ${item} hour`}
                  />
                )
              )}
            </FormGroup>
          </section>
        </div>
      </Modal>
    </>
  );
}
export default Section3;
