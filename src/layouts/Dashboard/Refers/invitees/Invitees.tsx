//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORTACIOENS DE CUSTOM COMPONENTS


//IMPORTACIONES DE CONSTANTES

//IMPORTACIONES DE MUI
import { Drawer, SwipeableDrawer } from "@mui/material";
//IMPORTACIONES DE REACT
import { useState } from "react";
import Details from "./details/Details";
import Filters from "./filters/Filters";
import { Avatar, Divider } from "../../../../components";
import { itemsListInvitees } from "../../../../constants/apiResponses/Referrals";

type InviteesProps = {
  setOpenInvitees: React.Dispatch<React.SetStateAction<boolean>>;
};
function Invitees({ setOpenInvitees }: InviteesProps) {
  const [openDetailInvitees, setOpenDetailInvitees] = useState<boolean>(false);
  const [openFiltersInvitees, setOpenFiltersInvitees] =
    useState<boolean>(false);
  //-----------------------------------------------------------
  const handleCloseModals = () => {
    setOpenDetailInvitees(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenFiltersInvitees(open);
    };
  return (
    <>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        {/* HEADER */}

        <header className="bg-[#3B4048] border-b-2 border-b-primary-yellow h-[9%] flex flex-col justify-center">
          {/* BOTON ATRAS */}
          <div className="flex flex-grow justify-center">
            <button
              onClick={() => setOpenInvitees(false)}
              className="w-[30%] flex justify-center items-center"
            >
              <FontAwesomeIcon
                style={{
                  color: "#BBBBBB",
                  width: "25px",
                  height: "25px",
                }}
                icon={faArrowLeft}
              />
            </button>
            {/* TITULO */}
            <div className="flex flex-grow justify-center items-center">
              <h1 className="text-white font-semibold text-center text-[3vh] leading-3">
                Invitees
              </h1>
            </div>
                {/* CODIGO QR */}
                <div className="flex justify-end items-center pr-4 w-[30%]">
                <button
                  onClick={() => setOpenFiltersInvitees(true)}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "#BBBBBB",
                      width: "4vh",
                      height: "4vh",
                    }}
                    icon={faSliders}
                  />
                </button>
              </div>

          </div>
        </header>
        {/* MAIN */}
        <main className="flex flex-col flex-grow items-center max-h-[91%] ">
          {/* BARRA DE BUSQUEDA */}
          <section className="w-full px-4 py-2 ">
            <div className="flex items-center bg-white rounded-full p-1 w-full">
              {/* icono */}
              <div className="flex items-center bg-[#BBBBBB] rounded-full">
                <FontAwesomeIcon
                  style={{
                    color: "white",
                    width: "4vh",
                    height: "4vh",
                    padding: "1vh",
                  }}
                  icon={faMagnifyingGlass}
                />
              </div>
              {/* input */}
              <input
                type="text"
                placeholder="Search"
                name="search-invitees"
                className="placeholder:text-[2vh] shadow placeholder-slate-500 appearance-none px-4 rounded-r-full  text-black text-[2.7vh]  w-full h-[50px] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </section>
          <div className="px-4 w-full my-2">
            <Divider color="primary-gray" size={1} />
          </div>
          {/* LISTA DE INVITADOS */}
          <section className="flex flex-col w-full px-4 gap-4 flex-grow  overflow-y-auto">
            {/* titulo */}
            <h1 className="text-white text-[2.5vh] font-bold">All invitees</h1>
            {/* Lista de invitados */}

            {itemsListInvitees.map((item, index) => (
              <div key={index} className="flex items-center ">
                {/* foto */}
                <div className="border-2 rounded-full">
                  <Avatar
                    weight="w-[6vh]"
                    height="w-[6vh]"
                    src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688495085/BlockHunt/Drawer/Users/fotod_p7huhe.jpg"
                  />
                </div>
                {/* email */}
                <div className="flex justify-center flex-grow">
                  <h1 className="text-white font-bold text-[3.5vw]">
                    {item.email}
                  </h1>
                </div>
                {/* boton */}
                <div className="flex justify-end flex-grow">
                  <button
                    onClick={() => setOpenDetailInvitees(true)}
                    className={`border-2 py-1 text-[1.5vh] rounded-full px-6 ${
                      item.invited
                        ? "border-[#757575] text-[#757575]"
                        : "border-primary-orange text-white"
                    }`}
                  >
                    <h1>{item.invited ? "Pending" : "Enrolled"}</h1>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
      {/* DRAWER DE DETAILS OF INVITED */}
      <Drawer
        anchor="right"
        open={openDetailInvitees}
        onClose={handleCloseModals}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#222529",
          },
        }}
      >
        <Details setOpenDetails={setOpenDetailInvitees} />
      </Drawer>
      {/* DRAWER DE FILTER */}
      <SwipeableDrawer
        anchor="bottom"
        open={openFiltersInvitees}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            backgroundColor: "#F4D64C",
          },
        }}
      >
        <Filters setOpenFilters={setOpenFiltersInvitees} />
      </SwipeableDrawer>
    </>
  );
}
export default Invitees;
