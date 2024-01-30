//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE COMPONENTES
import FilterLocationCarrousel from "./section2/FilterLocationCarrousel";
import Switch from "../../../components/Switch";

function Section2() {
    const [switchState, setSwitchState] = useState<boolean>(false);
    // --------------------------------------------------------------------------------------------
    const switchClick = () => {
        setSwitchState(!switchState);
    }
  return (
    <section className="flex flex-col gap-4 p-4">
      <header className="flex">
        <h1 className="font-bold text-[2vh]">Location</h1>
      </header>
      <main className="flex flex-col">
        <FilterLocationCarrousel allLocationState={switchState}/>
      </main>
      <footer className="flex justify-start gap-4">
        <Switch name="switch-all-location-filters" state={switchState} switchClick={switchClick} value="all-location"/>
        <div><h1 className="font-semibold">All locations</h1></div>
      </footer>
    </section>
  );
}
export default Section2;
