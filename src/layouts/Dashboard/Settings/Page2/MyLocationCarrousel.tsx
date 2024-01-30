//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACION DE FONTAWESO
import {
  faCube,
  faAnglesUp,
  faAnglesDown,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//IMPORTACION DE FRAMER MOTION

//IMPORTACION DE REACT
// import { useState } from "react";

// IMPORTACION DE CUSTOM COMPONENTS

// IMPORTACION DE MUI
import { Modal } from "@mui/material";
import { itemsAddLocationsSettignsPage2 } from "../../../../constants/apiResponses/LocationSettings";
import RatingStatic from "../../../../components/RatingStatic";
import Switch from "../../../../components/Switch";
import { Divider } from "../../../../components";
import { NavigateFunction } from "react-router-dom";

interface MyLocationCarrouselProps {
  navigate:NavigateFunction
}
const MyLocationCarrousel:React.FC<MyLocationCarrouselProps> = ({navigate}) => {
  //   VARIABLE QUE REPRESENTA EL ESTADO DEL SWITCH EN CADA CARD (SE CAMBIA POR BACKEND DESPUES)
  const [switchState, setSwitchState] = useState<boolean>(true);
  // FUNCION QUE CAMBIA EL ESTADO DEL SWITCH EN CADA CARD (SE CAMBIA POR BACKEND DESPUES)
  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };
  //   VARIABLE PARA ABRIR O CERRAR MAS BOTONES FLOTANTES
  const [openMoreButtons, setOpenMoreButtons] = useState<boolean>(false);
  //   FUNCION PARA ABRIR O CERRAR MAS BOTONES FLOTANTES
  const handleOpenMoreButtons = () => {
    setOpenMoreButtons(!openMoreButtons);
  };
  // FUNCIONES PARA EL BOTON DE BORRAR
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const handleDelete = () => {
    setOpenModalDelete(true);
  };
  const handleForfeit = () => {
    setOpenModalDelete(false);
  }
  const handleCancel = () => {
    setOpenModalDelete(false);
  }
  // FUNCION PARA CERRAR MODALES
  const handleCloseModal = () => {
    setOpenModalDelete(false);
  };

  return (
    <>
      <div className="flex gap-3 snap-x snap-mandatory overflow-scroll scroll-x-auto h-full w-full">
        {itemsAddLocationsSettignsPage2.map((item, index) => (
          <div
            key={index}
            className={`${
              switchState ? "bg-[#222529]" : "bg-primary-gray"
            } flex-grow rounded-2xl flex flex-col justify-start items-center relative snap-start min-w-[80%]`}
          >
            {/* ABSOLUTOS (ELEMENTOS SUPERPUESTOS)--------------------------------------------------*/}
            {/* RATING Y SWITCH */}
            <div
              className="absolute flex w-full pb-4 rounded-t-2xl items-center justify-between pt-2 pr-4 "
              style={{
                boxShadow: "0px 35px 29px -15px rgba(0,0,0,0.34) inset",
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="ml-2">
                  <RatingStatic value={item.rating} enable={switchState} />
                </div>
                <Switch
                name="card swith"
                  value=""
                  state={switchState}
                  switchClick={handleSwitchChange}
                />
              </div>
            </div>
            {/* BOTON ABRIR MAS OPCIONES */}
            <button
              className="absolute bottom-10 right-3"
              disabled={!switchState}
              onClick={handleOpenMoreButtons}
            >
              <div
                className={`${
                  switchState ? "bg-primary-yellow" : "bg-[#D9D9D9]"
                } rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon= {!openMoreButtons ? faAnglesUp : faAnglesDown} 
                />
              </div>
            </button>
            {/* BOTON DE BORRAR */}
            <button
              className={`absolute bottom-[14vh] right-3 ${
                !openMoreButtons ? "hidden" : "block"
              }`}
              disabled={!switchState}
              onClick={handleDelete}
            >
              <div
                className={`${
                  switchState ? "bg-primary-yellow" : "bg-[#D9D9D9]"
                } rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon={faTrashCan}
                />
              </div>
            </button>
            {/* BOTON DE EDITAR */}
            <button
              className={`absolute bottom-[22vh] right-3 ${
                !openMoreButtons ? "hidden" : "block"
              }`}
              disabled={!switchState}
              onClick={()=>navigate('/app/location-settings')}
            >
              <div
                className={`${
                  switchState ? "bg-primary-yellow" : "bg-[#D9D9D9]"
                } rounded-full flex justify-center items-center p-2`}
              >
                <FontAwesomeIcon
                  style={{
                    color: !switchState ? "#757575" : "#222529",
                    width: "3.5vh",
                    height: "3.5vh",
                    padding: 1,
                    borderRadius: "50%",
                  }}
                  icon={faPenToSquare}
                />
              </div>
            </button>
            {/* -------------------------------------------------------------- */}
            {/* IMAGEN DE FONDO DE LA CARD */}
            <div className="flex h-full w-full">
              <img
                style={{
                  boxShadow: " 0px 91px 37px -16px rgba(0,0,0,0.8) inset",
                }}
                className="h-full w-full rounded-t-2xl object-cover"
                src={item.img}
                alt={item.img}
              />
            </div>
            {/* FOOTER DE LA CARD */}
            <div className="flex items-center justify-start gap-2 p-2 rounded-b-2xl w-full">
              <div className="bg-white rounded-full flex p-1">
                <FontAwesomeIcon
                  style={{
                    color: !switchState ? "#757575" : "#222529",
                    width: "2vh",
                    height: "2vh",
                  }}
                  icon={faCube}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-[2vh]">{item.title}</h1>
                <h1 className="text-primary-gray-light text-[1.3vh]">
                  {item.subtitle}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* MODAL DE LA OPCION DELETE */}
      <Modal open={openModalDelete} onClose={handleCloseModal}>
        <div className="bg-white py-1 w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-[#757575] flex justify-center mx-[2vh] rounded-2xl py-4 my-2">
            <div
              className={`${
                switchState ? "bg-primary-yellow" : "bg-[#D9D9D9]"
              } rounded-full flex justify-center items-center p-2`}
            >
              <FontAwesomeIcon
                style={{
                  color: !switchState ? "#757575" : "#222529",
                  width: "5vh",
                  height: "5vh",
                  padding: 1,
                  borderRadius: "50%",
                }}
                icon={faTrashCan}
              />
            </div>
          </header>
          <main className="flex flex-col items-center px-4 gap-2">
            <h1 className="font-bold text-[2.5vh]">Forfeit block?</h1>
            <p className="text-[#757575] font-bold text-center text-[2.5vh]">
              Sure you want to forfeit this delivery block
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="white" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button

              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleForfeit}
            >
              Forfeit
            </button>
            <button

              className="custom-shadow bg-black text-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default MyLocationCarrousel;
