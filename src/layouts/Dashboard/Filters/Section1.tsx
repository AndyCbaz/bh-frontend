//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACION DE CUSTOM COMPONENTS

// IMPORTACIONES DE FONTAWESOME
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { ButtonsGroup } from "../../../components";
// CONSTANTES
const items = [
  { title: "Comunity data", icon: faUserGroup, iconEnable: true },
  { title: "Personal data", icon: faUser, iconEnable: true },
];

function Section1() {
  //---------------------------------------------
  const [buttonSelected, setButtonSelected] = useState(0);

  //---------------------------------------------
  return (
    <>
      <section className="flex flex-col p-4 gap-4">
        {/* header */}
        <header className="flex flex-col">
          <div className="bg-primary-gray-light rounded-2xl px-2 py-1 text-center">
            <p className="text-gray-500 font-semibold text-[2vh]">{`Let's set the preferences you want to display in this area.`}</p>
          </div>
          <h1 className="font-bold text-[2vh]">Type of data</h1>
        </header>
        <main>
          <ButtonsGroup
            buttonSelected={buttonSelected}
            setButtonSelected={setButtonSelected}
            items={items}
            textSizes="text-[2vh]"
          />
        </main>
      </section>
    </>
  );
}
export default Section1;
