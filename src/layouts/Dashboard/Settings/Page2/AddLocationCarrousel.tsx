//IMPORTACION DE FONTAWESO
import {
  faPlus,
  faCube,
  faStarHalfStroke,
  faCircleXmark,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORTACION DE REACT
import React, { useState } from "react";
// IMPORTACION DE MUI
import { Modal } from "@mui/material";
import { itemsAddLocationsSettignsPage2 } from "../../../../constants/apiResponses/LocationSettings";
import { caracteristicsRateLocation } from "../../../../constants/generalItems/Settings/Page2";
import RatingStatic from "../../../../components/RatingStatic";
import { Divider } from "../../../../components";
import RatingDinamic from "../../../../components/RatingDinamic";
import { NavigateFunction } from "react-router-dom";
//IMPORTACION DE CUSTOM COMPONENTS

interface AddLocationCarrouselProps {
  navigate:NavigateFunction
}

const AddLocationCarrousel:React.FC<AddLocationCarrouselProps> = ({navigate}) => {
  //   const [ratingValue, setRatingValue] = useState<number | null>(0);
  // FUNCION PARA EL BOTON DE RANTING
  const [openModalRating, setOpenModalRating] = useState<boolean>(false);
  const handleSaveRating = () => {
    setOpenModalRating(false);
  };
  // FUNCION PARA CERRAR MODALES
  const handleCloseModal = () => {
    setOpenModalRating(false);
  };
  // FUNCION PARA BOTONES DE CALIFICACIONES
  const [caracteristics, setCaracteristics] = useState(
    caracteristicsRateLocation
  );
  const handleSelectCaracteristic = (i: number) => {
    const newCaracteristics = caracteristics;
    newCaracteristics[i].state = !newCaracteristics[i].state;
    setCaracteristics([...newCaracteristics]);
  };
  return (
    <>
      <div className="flex gap-3 snap-x snap-mandatory overflow-scroll scroll-x-auto h-full w-full">
        {itemsAddLocationsSettignsPage2.map((item, index) => (
          <div
            key={index}
            className="bg-[#222529] flex-grow rounded-2xl flex flex-col justify-start items-center relative snap-start min-w-[80%]"
          >
            {/* ABSOLUTOS (ELEMENTOS SUPERPUESTOS)--------------------------------------------------*/}
            <div
              className="absolute flex w-full pb-4 rounded-t-2xl items-center justify-between pt-2 pr-4 "
              style={{
                boxShadow: "0px 35px 29px -15px rgba(0,0,0,0.34) inset",
              }}
            >
              {/* RATING Y BUTTON */}
              <div className="flex items-center justify-between w-full">
                <div className="ml-2">
                  <RatingStatic value={item.rating} enable={true} />
                </div>
                <button
                  onClick={() => setOpenModalRating(true)}
                >
                  <div className="bg-primary-yellow rounded-full flex justify-center items-center">
                    <FontAwesomeIcon
                      style={{
                        color: "#757575",
                        width: "3vh",
                        height: "3vh",
                        padding: 1,
                        borderRadius: "50%",
                      }}
                      icon={faStarHalfStroke}
                    />
                  </div>
                </button>
              </div>
            </div>
            <button
              className="absolute bottom-10 right-3"
              onClick={() => navigate('/app/location-settings')}
            >
              <div className="bg-primary-yellow rounded-full flex justify-center items-center p-2">
                <FontAwesomeIcon
                  style={{
                    color: "#F4D64C",
                    width: "3vh",
                    height: "3vh",
                    backgroundColor: "#222529",
                    padding: 3,
                    borderRadius: "50%",
                  }}
                  icon={faPlus}
                />
              </div>
            </button>
            {/* IMAGEN DE FONDO DE LA CARD */}
            <div className="flex h-full w-full">
              <img
                style={{
                  boxShadow: " 0px 91px 37px -16px rgba(0,0,0,0.8) inset",
                }}
                className="h-full w-full rounded-t-2xl object-cover"
                src={item.img}
                alt="Img"
              />
            </div>
            {/* FOOTER DE LA CARD */}
            <div className="flex items-center justify-start gap-2 p-2 rounded-b-2xl w-full">
              <div className="bg-white rounded-full flex p-1">
                <FontAwesomeIcon
                  style={{
                    color: "#222529",
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
      {/* MODAL DE RATING DINAMICO  */}
      <Modal open={openModalRating} onClose={handleCloseModal}>
        <div className="bg-primary-gray py-1 w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="flex justify-between px-4 py-2">
            <button onClick={handleCloseModal}>
              <FontAwesomeIcon
                style={{ color: "#757575", width: "3vh", height: "3vh" }}
                icon={faCircleXmark}
              />
            </button>
            <h1 className="text-white font-semibold text-[2.2vh]">
              Rate this Location
            </h1>
            <button onClick={handleSaveRating}>
              <FontAwesomeIcon
                style={{ color: "#757575", width: "3vh", height: "3vh" }}
                icon={faFloppyDisk}
              />
            </button>
          </header>
          <Divider color="primary-yellow" size={1} />
          <main className="flex flex-col gap-2">
            <RatingDinamic />
            <div className="inline-flex flex-wrap justify-center gap-2 py-2">
              {caracteristics.map((item, index) => (
                <button
                  onClick={() => handleSelectCaracteristic(index)}
                  key={index}
                  className={`${
                    item.state ? "bg-primary-orange" : "bg-primary-gray-light"
                  } rounded-full text-[1.5vh] px-2 py-1 ${item.state ? 'text-white' : 'text-black'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </main>
          <footer className="flex flex-col items-center bg-[#757575] mx-2 rounded-2xl px-2 my-2">
                  <input name="text-area" type="text" className="bg-[#757575] text-white text-[2vh] w-full mx-2 mt-2 " placeholder="Write a review (optional)" />
                  <div className="w-full"><Divider color="white" size={1}/></div>
                  <div className="w-full flex justify-end"><p className="text-white text-[2vh] font-thin">0/1000</p></div>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default AddLocationCarrousel;
