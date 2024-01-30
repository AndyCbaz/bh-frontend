//IMPORTACIONES DE REACT
import { useState } from "react"
import RangeSlider from "../../../components/RangeSlider"
import { Divider } from "../../../components"
//IMPORTACIONES DE CUSTOM COMPONENTS


function Section7() {
  const [rangeSliderValue, setRangeSliderValue] = useState<number[]>([1, 100]) // [min, max
  return (
    <section className="flex flex-col gap-4 p-4">
      <header className="flex">
        <h1 className="font-bold text-[2vh]">Delivery block duration</h1>
      </header>
      <main className="flex flex-col items-center px-2">
        <RangeSlider
          max={100}
          min={1}
          minDistance={1}
          set={setRangeSliderValue}
          value={rangeSliderValue}
          step={1}
        />
      </main>
      <footer className="flex justify-center gap-2 px-2">
        <div className=" min-w-[35%] border-2 border-[#d1d5db] rounded-lg pt-1 flex flex-col items-start">
          {/* TITULO */}
          <div className="flex w-full justify-start px-2">
            <h1 className="text-[1.5vh]">From</h1>
          </div>
          {/* VALOR */}
          <div className="flex justify-center w-full">
            <h1 className="text-[2.5vh] font-semibold">0</h1>
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
            <h1 className="text-[2.5vh] font-semibold">5</h1>
          </div>
        </div>
      </footer>
    </section>
  )
}
export default Section7