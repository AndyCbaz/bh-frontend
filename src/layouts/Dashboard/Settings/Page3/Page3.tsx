//IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE COMPONENTES
import Section1Page3 from "./Sections/Section1Page3";
import Section2Page3 from "./Sections/Section2Page3";
import Section3Page3 from "./Sections/Section3Page3";
import Section4Page3 from "./Sections/Section4Page3";
import { Divider } from "../../../../components";

function Page3() {
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  return (
    <>
      <div className="bg-white flex-grow flex flex-col w-[95%] rounded-2xl">
        {/* Encabezado */}
        <header className="bg-[#d9d9d9] rounded-t-2xl h-[12%] flex items-center pl-2 gap-2 py-2">
          <div
            style={{ boxShadow: "0px 4px 4px -1px rgba(0,0,0,0.75)" }}
            className="bg-principal-main rounded-full border flex justify-center items-center p-1"
          >
            <FontAwesomeIcon
              style={{ color: "#757575", width: "3vh", height: "3vh" }}
              icon={faFilter}
              className="p-1"
            />
          </div>
          <h1 style={{ color: "#818181" }} className="font-bold text-[2.2vh]">
            Set your advanced filters (optional)
          </h1>
        </header>
        <main className="flex flex-col flex-grow">
            <div className="flex h-full"><Section1Page3/></div>
            <div className="mx-[2vh]"><Divider color="white" size={1}/></div>
            <div className="flex h-full"><Section2Page3/></div>
            <div className="mx-[2vh]"><Divider color="bg-[#d1d5db]" size={1}/></div>
            <div className="flex h-full"><Section3Page3/></div>
            <div className="mx-[2vh]"><Divider color="bg-[#d1d5db]" size={1}/></div>
            <div className="flex h-full"><Section4Page3/></div>
        </main>
      </div>
    </>
  );
}
export default Page3;
