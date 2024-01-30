//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";

import { useState } from "react";
import { DateRange } from "@mui/x-date-pickers-pro";
//IMPORTACIONES DE DAYJS
import dayjs, { Dayjs } from "dayjs";
import DateRangeCalendar from "../../../../components/DataRangeCalendar";
import { Divider } from "../../../../components";


type drawerProps = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
function Drawer({ setOpenDrawer }: drawerProps) {
  const [dataRangeValues, setDataRangeValues] = useState<DateRange<Dayjs>>([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);
  const handleApplyClick = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <div className="flex flex-col w-full rounded-t-[24px] bg-primary-yellow items-center">
        {/* Encabezado del menu de filter */}
        <header className="w-full flex flex-col items-center h-[5%] ">
          <div className="bg-primary-gray border-primary-gray border-2 h-[1px] w-[100px] rounded-full my-2"></div>
        </header>
        {/* Cuerpo del menu de filter */}
        <main className="bg-white flex flex-col w-[95%] rounded-2xl overflow-auto justify-center items-center">
          <DateRangeCalendar
            value={dataRangeValues}
            setValue={setDataRangeValues}
          />
          <section className="flex justify-center gap-2 px-8 w-full mb-2">
            <div className="border-2 min-w-[35%] border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">From</h1>
              </div>
              {/* VALOR */}
              <div className="flex justify-center w-full">
                <h1 className="text-[2vh] font-semibold">
                  {dataRangeValues[0]?.format("DD/MM/YYYY")}
                </h1>
              </div>
            </div>
            <div className="mx-[2vh] w-full flex flex-col justify-center">
              <Divider color="primary-gray" size={1} />
            </div>
            <div className="border-2 min-w-[35%] border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
              {/* TITULO */}
              <div className="flex w-full justify-start px-2">
                <h1 className="text-[1.5vh]">To</h1>
              </div>
              {/* VALOR */}
              <div className="flex justify-center w-full">
                <h1 className="text-[2vh] font-semibold">
                  {dataRangeValues[1]?.format("DD/MM/YYYY")}
                </h1>
              </div>
            </div>
          </section>
        </main>
        <footer className="my-3">
          <motion.button
            onClick={handleApplyClick}
            whileTap={{ scale: 0.9 }}
            className="text-white text-[2vh] font-bold bg-black rounded-full py-2 px-8"
          >
            APPLY
          </motion.button>
        </footer>
      </div>
    </>
  );
}
export default Drawer;
