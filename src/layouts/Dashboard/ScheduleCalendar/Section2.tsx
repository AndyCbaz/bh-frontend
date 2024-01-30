//IMPORTACIONES DE REACT
import { useState } from "react";

//IMPORTACIONES DE CONSTANTES

//IMPORTACIONES DE FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faCalendar,
  faCar,
  faClock,
  faDollarSign,
  faLocationArrow,
  faLocationDot,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
import { Carrousel, Divider } from "../../../components";
import { itemsCarrouselCalendar } from "../../../constants/apiResponses/ScheduleCalendar";

// CONSTANTES

function Section2() {
  //-------------------------------------------------------------------

  const [openMoreButtons, setOpenMoreButtons] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full px-2">
      {/* carrousel */}
      <Carrousel activeDots={true} items={itemsCarrouselCalendar} gap="gap-2">
        {itemsCarrouselCalendar.map((item, index) => (
          <div
            key={index}
            data-carousel-item
            data-index={index}
            className="relative flex flex-col bg-[#3b4047] rounded-2xl snap-center snap-always min-w-[100%]"
          >
            {/* HEADER */}
            <header className="flex justify-center ">
              <div className="flex items-center justify-center gap-3  w-full  py-2">
                {/* Icono */}
                <FontAwesomeIcon
                  style={{
                    color: "#d9d9d9",
                    width: "3vh",
                    height: "3vh",
                    borderRadius: "50%",
                    padding: 4,
                  }}
                  icon={faClock}
                />
                {/* Texto */}
                <h1 className="text-[#d9d9d9] font-semibold text-[2vh]">
                  Start: {item.StartTime}
                </h1>
              </div>
              <div className=" flex justify-center">
                <Divider color="primary-gray" size={1} />
              </div>
              <div className="flex items-center justify-center gap-3 w-full rounded-lg py-2">
                {/* Icono */}
                <FontAwesomeIcon
                  style={{
                    color: "#d9d9d9",
                    width: "3vh",
                    height: "3vh",
                    borderRadius: "50%",
                    padding: 4,
                  }}
                  icon={faClock}
                />
                {/* Texto */}
                <h1 className="text-[#d9d9d9] font-semibold text-[2vh]">
                  End: {item.EndTime}
                </h1>
              </div>
            </header>
            {/* MAIN */}
            <main className="flex flex-col relative">
              <img
                src={item.img}
                alt={item.img}
                className="opacity-30 w-full h-[20vh] "
                style={{
                  boxShadow: "0px 91px 37px -16px rgba(0,0,0,4) inset",
                }}
              />
              <div className="absolute flex top-[2vh] left-[2.5vh]">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    style={{
                      color: "#F4D64C",
                      width: "2vh",
                      height: "2vh",
                      borderRadius: "50%",
                      padding: 4,
                    }}
                    icon={faCalendar}
                  />
                  <h1 className="text-white font-bold text-[2vh]">
                    {item.Date}
                  </h1>
                </div>
              </div>
              <div className="absolute flex top-[2vh] right-[2vh]">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    style={{
                      // color: "#F4D64C",
                      width: "2vh",
                      height: "2vh",
                      borderRadius: "50%",
                      backgroundColor: "#F4D64C",
                      padding: 4,
                    }}
                    icon={faDollarSign}
                  />
                  <h1 className="text-white font-bold text-[2vh]">
                    {item.Price}
                  </h1>
                </div>
              </div>
            </main>

            {/* FOOTER */}
            <footer className="flex justify-start gap-3 p-2 items-center">
              {/* icono */}
              <FontAwesomeIcon
                style={{
                  color: "#3b4047",
                  width: "3vh",
                  height: "3vh",
                  borderRadius: "50%",
                  backgroundColor: "#d9d9d9",
                  padding: 4,
                }}
                icon={faBuildingColumns}
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold text-white text-[2.5vh]">
                  {item.WearHouse}
                </h1>
                <p className="text-white font-thin text-[2vh]">
                  {item.Location}
                </p>
              </div>
              <div></div>
            </footer>
            {/* ELEMENTOS ABSOLUTOS */}
            {/* BOTON ABRIR MAS OPCIONES */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-[5vh] right-[2vh]"
              onClick={() => setOpenMoreButtons(!openMoreButtons)}
            >
              <div
                className={`
                   bg-primary-yellow
                 rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    // color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon={faCar}
                />
              </div>
            </motion.button>
            {/* BOTON DE BORRAR */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute bottom-[12vh] right-[2vh] ${
                !openMoreButtons ? "hidden" : "block"
              }`}

              // onClick={handleDelete}
            >
              <div
                className={`bg-primary-yellow
                } rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    // color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon={faTrashCan}
                />
              </div>
            </motion.button>
            {/* BOTON DE UBICACION */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute bottom-[19vh] right-[2vh] ${
                !openMoreButtons ? "hidden" : "block"
              }`}

              // onClick={()=>openDrawer(true)}
            >
              <div
                className={`bg-primary-yellow
                } rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    // color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon={faLocationDot}
                />
              </div>
            </motion.button>
            {/* BOTON DE arrow locator */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute bottom-[26vh] right-[2vh] ${
                !openMoreButtons ? "hidden" : "block"
              }`}

              // onClick={()=>openDrawer(true)}
            >
              <div
                className={`bg-primary-yellow
                } rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    // color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon={faLocationArrow}
                />
              </div>
            </motion.button>
          </div>
        ))}
      </Carrousel>
    </div>
  );
}
export default Section2;
