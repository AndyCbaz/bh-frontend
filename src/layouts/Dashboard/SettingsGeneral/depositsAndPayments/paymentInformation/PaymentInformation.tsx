//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faCircleQuestion,
  faCreditCard,
  faGreaterThan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//IMPORTACIONES DE REACT
import { useState, Dispatch } from "react";
//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";

import { Drawer } from "@mui/material";
import Payment from "./payment/Payment";
import Switch from "../../../../../components/Switch";

type PaymentInformationProps = {
  openDrawer: Dispatch<React.SetStateAction<boolean>>;
};
function PaymentInformation({ openDrawer }: PaymentInformationProps) {
  const [swithState, setSwithState] = useState<boolean>(true);
  const [openPayment, setOpenPayment] = useState<boolean>(false);
  //---------------------------------------------------------------------
  // cerrar los drawers
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
setOpenPayment(open);
    };
  return (
    <>
      <div className="flex flex-col flex-grow h-screen">
        <header className="bg-[#3B4048] border-b-2 border-b-primary-yellow h-[9%] flex flex-col justify-center">
          <div className="flex pt-2 pl-2">
            <button onClick={() => openDrawer(false)} className="">
              <FontAwesomeIcon
                style={{
                  color: "#BBBBBB",
                  width: "25px",
                  height: "25px",
                }}
                icon={faArrowLeft}
              />
            </button>
          </div>
          <h1 className="text-white font-semibold text-center text-[3vh] pb-4 leading-3">
            Payment information
          </h1>
        </header>
        <main className="flex flex-col flex-grow p-2 items-center">
          {/* metodos añadidos */}
          <section className="bg-[#3B4048] rounded-2xl flex flex-col items-center w-full">
            <div className="flex gap-2 p-2 w-full">
              {/* icono de amarillo */}

              <div className="flex flex-grow gap-2">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  style={{
                    backgroundColor: "#F4D64C",
                    borderRadius: "50%",
                    width: "14px",
                    height: "14px",
                    padding: 4,
                    color: "black",
                  }}
                />
                {/* titulo mas icono */}
                <h1 className="text-white text-[2vh] font-bold">Credit card</h1>
                <button onClick={()=>setOpenPayment(true)}>
                  <div>
                    <FontAwesomeIcon
                      style={{
                        color: "#BBBBBB",
                        width: "2.5vh",
                        height: "2.5vh",
                      }}
                      icon={faPenToSquare}
                    />
                  </div>
                </button>
              </div>
              {/* switch */}
              <Switch
                name="switch credit card"
                state={swithState}
                switchClick={() => setSwithState(!swithState)}
                value="enableSwith"
              />
            </div>
            <div className="flex flex-col w-[80%] mb-4">
              <h1 className="text-white text-[2vh]">Visa ****2796</h1>
              <p className="text-primary-gray-light text-[1.5vh]">
                Monthly payments will charge to your credit card.
              </p>
            </div>
          </section>
          {/* MESSAGE */}
          <div className="flex justify-center w-[80%] my-2">
            <div className="flex">
              <FontAwesomeIcon
                style={{
                  color: "#E6822D",
                  width: "1.3vh",
                  height: "1.3vh",
                }}
                icon={faCircleQuestion}
              />
            </div>
            <p className="text-white text-[1.3vh] text-center">
              This will be the Credit Card where{" "}
              <span className="text-primary-orange font-bold">Blockhunt</span>{" "}
              will charge your subscription payments
            </p>
          </div>
          {/* añadir metodo */}
          <motion.section
          onClick={()=>setOpenPayment(true)}
            whileTap={{ scale: 0.95 }}
            className="flex items-center p-2 my-2 gap-2 w-full"
          >
            <FontAwesomeIcon
              style={{
                color: "#d9d9d9",
                width: "4vh",
                height: "4vh",
              }}
              icon={faCreditCard}
            />
            <div className="flex flex-col items-start justify-center w-full">
              <h1 className="font-bold text-white text-[2vh]">
                Payment Method
              </h1>
              <p className="text-white font-thin text-[2vh]">Add Credit Card</p>
            </div>
            <div>
              <FontAwesomeIcon
                style={{
                  color: "#d9d9d9",
                  width: "2.5vh",
                  height: "2.5vh",
                }}
                icon={faGreaterThan}
              />
            </div>
          </motion.section>
        </main>
      </div>
      <Drawer
        anchor="right"
        open={openPayment}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#222529",
          },
        }}
      >
        <Payment openDrawer={setOpenPayment}/>
      </Drawer>
    </>
  );
}
export default PaymentInformation;
