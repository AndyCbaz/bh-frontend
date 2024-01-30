//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faCircleArrowRight,
  faCreditCard,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
//IMPROTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE MUI
import { Drawer } from "@mui/material";
//IMPORTACIONES DE REACT
import { useState } from "react";

import PaymentInformation from "./paymentInformation/PaymentInformation";
import { Divider } from "../../../../components";
import BankInformationDrawer from "../../Wallet/BankInformationDrawer";
import { NavigateFunction } from "react-router-dom";


type DepositsAndPaymentsProps = {
  openDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction
};
function DepositsAndPayments({ openDrawer, navigate }: DepositsAndPaymentsProps) {
    const [openBankInformation, setOpenBankInformation] = useState<boolean>(false);
    const [openPaymentInformation, setOpenPaymentInformation] = useState<boolean>(false);

    //----------------------------------------------------------------
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
    setOpenBankInformation(open);
    setOpenPaymentInformation(open);
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
            Deposits and Payments
          </h1>
        </header>
        <main className="flex flex-col flex-grow items-center">
          <div className="flex flex-col w-[90%]">
            <motion.section
            onClick={()=>setOpenBankInformation(true)}
              whileTap={{ scale: 0.95 }}
              className="flex gap-2 py-2"
            >
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{
                    borderRadius: "50%",
                    padding: 2,
                    color: "#BBBBBB",
                    height: "3vh",
                    width: "3vh",
                  }}
                />
              </div>
              <div className="flex flex-grow items-center">
                <h1 className="text-white text-[1.8vh] font-semibold text-center">
                  Update bank account (Referral program)
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  style={{
                    borderRadius: "50%",
                    padding: 2,
                    color: "#BBBBBB",
                    height: "2vh",
                    width: "2vh",
                  }}
                />
              </div>
            </motion.section>
            <Divider color="primary-gray-light" size={1} />
          </div>
          <div className="flex flex-col w-[90%]">
            <motion.section
              whileTap={{ scale: 0.95 }}
              className="flex gap-2 py-2"
              onClick={()=>setOpenPaymentInformation(true)}
            >
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  style={{
                    borderRadius: "50%",
                    padding: 2,
                    color: "#BBBBBB",
                    height: "3vh",
                    width: "3vh",
                  }}
                />
              </div>
              <div className="flex flex-grow items-center">
                <h1 className="text-white text-[1.8vh] font-semibold text-center">
                  Update payment method (Subscription)
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  style={{
                    borderRadius: "50%",
                    padding: 2,
                    color: "#BBBBBB",
                    height: "2vh",
                    width: "2vh",
                  }}
                />
              </div>
            </motion.section>
            <Divider color="primary-gray-light" size={1} />
          </div>
        </main>
        <footer className="flex flex-col justify-center items-center h-[11%]">
          <button className="border-primary-yellow border-2 text-primary-yellow font-bold rounded-full w-[90%] py-2">
            Sign out
          </button>
        </footer>
      </div>
      <Drawer
        anchor="right"
        open={openBankInformation}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#222529",
          },
        }}
      >
        <BankInformationDrawer navigate={navigate}/>
      </Drawer>
      <Drawer
        anchor="right"
        open={openPaymentInformation}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#222529",
          },
        }}
      >
        <PaymentInformation openDrawer={setOpenPaymentInformation}/>
      </Drawer>
    </>
  );
}
export default DepositsAndPayments;
