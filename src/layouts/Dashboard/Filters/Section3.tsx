//IMPORTACIONES D EREACT
import { useState } from "react";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE FONTAWESOME
import { faHand, faThumbsUp, faTrashCan, faCalendarDays  } from "@fortawesome/free-solid-svg-icons";
import { ButtonsGroup } from "../../../components";
import Switch from "../../../components/Switch";

// CONSTANTES
const items = [
  { title: "Rejected", icon: faHand, iconEnable: true },
  { title: "Hunted", icon: faThumbsUp, iconEnable: true },
  { title: "Lost", icon: faTrashCan, iconEnable: true },
  { title: "Schedule", icon: faCalendarDays, iconEnable: true },
];
function Section3() {
  const [switchState, setSwitchState] = useState<boolean>(false);
  const [buttonSelected, setButtonSelected] = useState<number>(0);
  // --------------------------------------------------------------------------------------------
  const switchClick = () => {
    setSwitchState(!switchState);
  }
  return (
    <section className="flex flex-col gap-4 p-4">
      <header className="flex">
        <h1 className="font-bold text-[2vh]">Type of blocks</h1>
      </header>
      <main className="flex flex-col">
          <ButtonsGroup otherStates={switchState} items={items} buttonSelected={buttonSelected} setButtonSelected={setButtonSelected}/> 
      </main>
      <footer className="flex justify-start gap-4">
        <Switch
          name="switch-all-location-filters"
          state={switchState}
          switchClick={switchClick}
          value="all-location"
        />
        <div>
          <h1 className="font-semibold">All delivery blocks</h1>
        </div>
      </footer>
    </section>
  );
}
export default Section3;
