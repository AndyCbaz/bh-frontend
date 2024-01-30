//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faBullhorn,
  faCalendarDays,
  faCheck,
  faClock,
  faEnvelope,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/material";
//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
//IMPORTACIONES DE REACT
import { useState } from "react";
import { Divider } from "../../../../../components";


type DetailsProps = {
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
};
function Details({ setOpenDetails }: DetailsProps) {
    const [openResendInvitation, setOpenResendInvitation] = useState<boolean>(false);
    

  return (
    <>
      <div className="flex flex-col h-screen w-full">
        {/* HEADER */}
        <header className="bg-[#3B4048] border-b-2 border-b-primary-yellow h-[9%] flex flex-col justify-center">
          {/* BOTON ATRAS */}
          <div className="flex justify-between px-3 h-full">
            <button onClick={() => setOpenDetails(false)} className="">
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
            <div className="flex h-full items-end justify-center">
              <h1 className="text-white font-semibold text-center text-[2.5vh]">
                Invitees
              </h1>
            </div>
            {/* ESPACIO EN BLANCO */}
            <div className="flex justify-end items-center pr-2"></div>
          </div>
          {/* TEXTO Y BUTON DE QR */}
        </header>
        {/* MAIN */}
        <main className="flex flex-col flex-grow p-2 gap-2">
          {/* metodo de invitacion */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-4 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#3B4048",
                width: "2vh",
                height: "2vh",
                border: "2px solid #F4D64C",
                borderRadius: "50%",
                background: "#F4D64C",
                padding: "0.5vh",
              }}
              icon={faBullhorn}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Invitation method: <span className="font-thin">Email</span>
            </h1>
          </div>
          {/* correo */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-4 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#3B4048",
                width: "2vh",
                height: "2vh",
                border: "2px solid #F4D64C",
                borderRadius: "50%",
                background: "#F4D64C",
                padding: "0.5vh",
              }}
              icon={faEnvelope}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Email: <span className="font-thin">andy.cbr@gmail.com</span>
            </h1>
          </div>
          {/* fecha de invitacion */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-4 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#3B4048",
                width: "2vh",
                height: "2vh",
                border: "2px solid #F4D64C",
                borderRadius: "50%",
                background: "#F4D64C",
                padding: "0.5vh",
              }}
              icon={faCalendarDays}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Invitation date: <span className="font-thin">08/23/2023</span>
            </h1>
          </div>
          {/* hora de invitacion */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-4 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#F4D64C",
                width: "3.4vh",
                height: "3.4vh",

                borderRadius: "50%",
              }}
              icon={faClock}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Invitation time: <span className="font-thin">4:35 PM</span>
            </h1>
          </div>
          {/* STATUS */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-4 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#3B4048",
                width: "2vh",
                height: "2vh",
                border: "2px solid #F4D64C",
                borderRadius: "50%",
                background: "#F4D64C",
                padding: "0.5vh",
              }}
              icon={faHourglassHalf}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Status: <span className="font-thin">Pending</span>
            </h1>
          </div>
        </main>
        {/* FOOTER */}
        <footer className="h-[10%] flex flex-col justify-center items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={()=>setOpenResendInvitation(true)}
            className="bg-primary-yellow rounded-full py-2 w-[80%]"
          >
            <h1 className="text-[2.5vh] font-bold">Resend invitation</h1>
          </motion.button>
        </footer>
      </div>
      {/* MODAL DE INFORMACION */}
      <Modal open={openResendInvitation} onClose={()=>setOpenResendInvitation(false)}>
      <div className="bg-white py-1 w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-[#757575] flex justify-center mx-[2vh] rounded-2xl py-4 my-2">
            <div
              className={`${"bg-primary-yellow"} rounded-full flex justify-center items-center p-2`}
            >
              <FontAwesomeIcon
                style={{
                  color: "#757575",
                  width: "5vh",
                  height: "5vh",
                  padding: 1,
                  borderRadius: "50%",
                }}
                icon={faCheck}
              />
            </div>
          </header>
          <main className="flex flex-col items-center px-4 gap-2">
            <h1 className="font-bold text-[2.5vh]">CONGRATULATION</h1>
            <p className="text-[#757575] font-bold text-center text-[2.5vh]">
              Your invitation has been successfully sent. We'll notify you when your referral has signed up
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color='primary-gray' />
            </div>
          </main>
          <footer className="flex justify-center items-center px-[3vh] py-[1.5vh]">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={()=>setOpenResendInvitation(false)}
              style={{ boxShadow: "0px 4px 4px -1px rgba(0,0,0,0.75)" }}
              className="bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              
            >
              Got it
            </motion.button>
          </footer>
        </div>
      </Modal>

    </>
  );
}
export default Details;
