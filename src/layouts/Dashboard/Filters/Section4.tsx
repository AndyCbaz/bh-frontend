// IMPORTACIONE DE REACT
import { useState } from "react";
// IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE DAYJS
import dayjs, { Dayjs } from "dayjs";
// IMPORTACIONES DE MUIXPRO
import { DateRange } from '@mui/x-date-pickers-pro';
import DateRangeCalendar from "../../../components/DataRangeCalendar";
import { Divider } from "../../../components";

function Section4() {
  const [dataRangeValues, setDataRangeValues] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs(),
  ]);
  return (
    <section className="flex flex-col gap-4 p-4">
      <header className="flex">
        <h1 className="font-bold text-[2vh]">Date range</h1>
      </header>
      <main className="flex flex-col items-center border-2 border-[#d1d5db] rounded-2xl">
        <DateRangeCalendar value={dataRangeValues} setValue={setDataRangeValues}/>
      </main>
      <footer className="flex justify-center gap-2 px-2">
        <div className="border-2 min-w-[35%] border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
          {/* TITULO */}
          <div className="flex w-full justify-start px-2">
            <h1 className="text-[1.5vh]">From</h1>
          </div>
          {/* VALOR */}
          <div className="flex justify-center w-full">
            <h1 className="text-[2vh] font-semibold">{dataRangeValues[0]?.format('DD/MM/YYYY')}</h1>
          </div>
        </div>
        <div className="mx-[2vh] w-full flex flex-col justify-center">
          <Divider color='primary-gray' size={1} />
        </div>
        <div className="border-2 min-w-[35%] border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
          {/* TITULO */}
          <div className="flex w-full justify-start px-2">
            <h1 className="text-[1.5vh]">To</h1>
          </div>
          {/* VALOR */}
          <div className="flex justify-center w-full">
            <h1 className="text-[2vh] font-semibold">{dataRangeValues[1]?.format('DD/MM/YYYY')}</h1>
          </div>
        </div>
      </footer>
    </section>
  );
}
export default Section4;
