//IMPORTACIONES DE FONTAWESOME
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//IMPORTACIOENS DE REACT
import { Dispatch, useState } from "react";
//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
//IMPORTACIONES DE REACT HOOK FORM
import { useForm } from "react-hook-form";

import { Modal } from "@mui/material";
import { Divider } from "../../../../../../components";
//IMPORTACIONES DE CUSTOM COMPONENTS


type PaymentProps = {
  openDrawer: Dispatch<React.SetStateAction<boolean>>;
};
function Payment({ openDrawer }: PaymentProps) {
    const [openModalCreditCardAdded, setOpenModalCreditCardAdded] = useState<boolean>(false);

  //--------------------------------------------------------------------
  const handleCloseModals = () => {
    setOpenModalCreditCardAdded(false);
    openDrawer(false);
  }
  // react hook form
  type FormValues = {
    cardNumber: string;
    nameOfTheCard: string;
    expirationDate: string;
    securityCode: string;
    zipCode: number;
    country: string;
    address: string;
    city: string;
    state: string;
    zipCodeBillingAddress: number;
  };
  const form = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = (data: FormValues) => {
    console.log(data);
    setOpenModalCreditCardAdded(true);
  };
  return (
    <>
      <div className="flex flex-col flex-grow h-screen">
        <header className="bg-[#3B4048] border-b-2 border-b-principal-main h-[9%] flex flex-col justify-center">
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
            Payment
          </h1>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col h-[91%]"
        >
          <main className="flex flex-grow flex-col overflow-y-auto items-center gap-1">
            {/* CARD NUMBER */}
            <label className="w-[90%] text-white text-[2vh]">Card Number</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.cardNumber ? "border-red-500" : "border-black"
              }`}
              id="cardNumber"
              type="number"
              placeholder="1234 1234 1234 1234"
              {...register("cardNumber", {
                required: {
                  value: true,
                  message: "Card number is required",
                },
                minLength: {
                  value: 16,
                  message: "Card Number must be at least 16 characters long",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.cardNumber?.message}
            </p>
            {/* Name of the card */}
            <label className="w-[90%] text-white text-[2vh]">
              Name on the card
            </label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.nameOfTheCard ? "border-red-500" : "border-black"
              }`}
              id="nameOfTheCard"
              type="text"
              placeholder="Jeff Bezos"
              {...register("nameOfTheCard", {
                required: {
                  value: true,
                  message: "Name of the card is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.nameOfTheCard?.message}
            </p>
            {/* Expiration date and ccv */}
            <div className="flex max-w-[90%] justify-between gap-2">
              {/* expiration date */}
              <div className="flex flex-col w-[45%] ">
                <label className=" text-white text-[2vh]">
                  Expiration date
                </label>
                <input
                  className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl  leading-tight focus:outline-none focus:shadow-outline ${
                    errors.expirationDate ? "border-red-500" : "border-black"
                  }`}
                  id="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  {...register("expirationDate", {
                    required: {
                      value: true,
                      message: "Expiration Date is required",
                    },
                  })}
                />
                <p className={`text-red-500 font-bold text-[2vh] text-center `}>
                  {errors.expirationDate?.message}
                </p>
              </div>
              {/* ccv */}
              <div className="flex flex-col w-[45%]">
                <label className=" text-white text-[2vh]">CCV</label>
                <input
                  className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl leading-tight focus:outline-none focus:shadow-outline ${
                    errors.securityCode ? "border-red-500" : "border-black"
                  }`}
                  id="securityCode"
                  type="number"
                  placeholder="CCV"
                  {...register("securityCode", {
                    required: {
                      value: true,
                      message: "Security Code is required",
                    },
                    minLength: {
                      value: 3,
                      message:
                        "Security Code must be at least 3 characters long",
                    },
                  })}
                />
                <p className={`text-red-500 font-bold text-[2vh] text-center `}>
                  {errors.securityCode?.message}
                </p>
              </div>
              
            </div>
            {/* zip code */}
            <label className="w-[90%] text-white text-[2vh]">Zip Code</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.zipCode ? "border-red-500" : "border-black"
              }`}
              id="zipCode"
              type="number"
              placeholder="55555"
              {...register("zipCode", {
                required: {
                  value: true,
                  message: "Zip Code is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.zipCode?.message}
            </p>
            {/* BILLING ADDRESS */}
            <h2 className="text-white text-start w-[90%] font-bold">BILLING ADDRESS</h2>
            {/* country */}
            <label className="w-[90%] text-white text-[2vh]">Country</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.country ? "border-red-500" : "border-black"
              }`}
              id="country"
              type="string"
              placeholder="United States"
              {...register("country", {
                required: {
                  value: true,
                  message: "Country is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.country?.message}
            </p>
            {/* address */}
            <label className="w-[90%] text-white text-[2vh]">Address</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.address ? "border-red-500" : "border-black"
              }`}
              id="address"
              type="string"
              placeholder="5368 Architec Dr."
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.address?.message}
            </p>
            {/* city */}
            <label className="w-[90%] text-white text-[2vh]">City</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.city ? "border-red-500" : "border-black"
              }`}
              id="city"
              type="string"
              placeholder="Dublin"
              {...register("city", {
                required: {
                  value: true,
                  message: "City is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.city?.message}
            </p>
            {/* state */}
            <label className="w-[90%] text-white text-[2vh]">State</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.state ? "border-red-500" : "border-black"
              }`}
              id="state"
              type="string"
              placeholder="Ohio"
              {...register("state", {
                required: {
                  value: true,
                  message: "State is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.state?.message}
            </p>
            {/* zip code */}
            <label className="w-[90%] text-white text-[2vh]">Zip Code</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.zipCodeBillingAddress ? "border-red-500" : "border-black"
              }`}
              id="zipCodeBillingAddress"
              type="number"
              placeholder="55555"
              {...register("zipCodeBillingAddress", {
                required: {
                  value: true,
                  message: "Zip Code is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.zipCodeBillingAddress?.message}
            </p>
          </main>
          <footer className=" h-[11%] flex flex-col justify-center items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="py-2 bg-principal-main rounded-full w-[90%] font-bold"
            >
              Submit
            </motion.button>
          </footer>
        </form>
        
      </div>
      <Modal open={openModalCreditCardAdded} onClose={handleCloseModals}>
        <div className="bg-white py-1 w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-[#757575] flex justify-center mx-[2vh] rounded-2xl py-4 my-2">
            <div
              className={`${"bg-principal-main"} rounded-full flex justify-center items-center p-2`}
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
            <h1 className="font-bold text-[2.5vh]">CONGRATULATION!!</h1>
            <p className="text-[#757575] font-bold text-center text-[2.5vh]">
              Your credit card has been successfully added
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color='primary-gray' />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <motion.button
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: "0px 4px 4px -1px rgba(0,0,0,0.75)" }}
              className="bg-principal-main font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleCloseModals}
            >
              Got it
            </motion.button>

          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Payment;
