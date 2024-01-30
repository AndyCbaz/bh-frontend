//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faCheck,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";
//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE REACT HOOK FORM
import { useForm } from "react-hook-form";
import { Divider } from "../../../../components";
//IMPORTACIONES DE CUSTOM COMPONENTS


type PersonalInformationProps = {
  openDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
function PersonalInformation({ openDrawer }: PersonalInformationProps) {
  const [openModalPersonalInformationChanged, setOpenModalPersonalInformationChanged] = useState<boolean>(false);
    //----------------------------------------------------------------
    // CLOSE MODALS
    const handleCloseModals = () => {
        setOpenModalPersonalInformationChanged(false);
        openDrawer(false);
    }
  // react hook form
  type FormValues = {
    legalFirstName: string;
    legalMiddleName: string;
    legalLastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
    mobileNumber: number;
    SSN: string;
  };
  const form = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = (data: FormValues) => {
    setOpenModalPersonalInformationChanged(true)
    console.log(data);
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
            Personal Information
          </h1>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col flex-grow h-[81%]"
        >
          <main className="flex flex-col flex-grow items-center gap-1 py-1 overflow-y-auto">
            {/* LEGAL FIRST NAME */}
            <label className="w-[90%] text-white text-[2vh]">
              Legal first name
            </label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.legalFirstName ? "border-red-500" : "border-black"
              }`}
              id="legalFirstName"
              type="text"
              placeholder="First Name"
              {...register("legalFirstName", {
                required: {
                  value: true,
                  message: "Legal first name is required",
                },
                minLength: {
                  value: 1,
                  message:
                    "Legal first name must be at least 1 characters long",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.legalFirstName?.message}
            </p>
            {/* LEGAL MIDDLE NAME */}
            <label className="w-[90%] text-white text-[2vh]">
              Legal middle name
            </label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.legalMiddleName ? "border-red-500" : "border-black"
              }`}
              id="legalMiddleName"
              type="text"
              placeholder="Middle Name"
              {...register("legalMiddleName", {
                required: {
                  value: true,
                  message: "Legal middle name is required",
                },
                minLength: {
                  value: 1,
                  message:
                    "Legal middle name must be at least 1 characters long",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.legalMiddleName?.message}
            </p>
            {/* LEGAL LAST NAME */}
            <label className="w-[90%] text-white text-[2vh]">
              Legal last name
            </label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.legalLastName ? "border-red-500" : "border-black"
              }`}
              id="legalLastName"
              type="text"
              placeholder="Last Name"
              {...register("legalLastName", {
                required: {
                  value: true,
                  message: "Legal last name is required",
                },
                minLength: {
                  value: 1,
                  message: "Legal last name must be at least 1 characters long",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.legalLastName?.message}
            </p>
            {/* ADDRESS */}
            <label className="w-[90%] text-white text-[2vh]">Address</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.address ? "border-red-500" : "border-black"
              }`}
              id="address"
              type="text"
              placeholder="Address"
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
            {/* CITY */}
            <label className="w-[90%] text-white text-[2vh]">City</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.city ? "border-red-500" : "border-black"
              }`}
              id="city"
              type="text"
              placeholder="City"
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
            {/* STATE */}
            <label className="w-[90%] text-white text-[2vh]">State</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.city ? "border-red-500" : "border-black"
              }`}
              id="state"
              type="text"
              placeholder="State"
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
            {/* ZIP CODE */}
            <label className="w-[90%] text-white text-[2vh]">Zip Code</label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.zipCode ? "border-red-500" : "border-black"
              }`}
              id="zipCode"
              type="number"
              placeholder="Zip Code"
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
            {/* MOBILE NUMBER */}
            <label className="w-[90%] text-white text-[2vh]">
              Mobile Number
            </label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.mobileNumber ? "border-red-500" : "border-black"
              }`}
              id="mobileNumber"
              type="number"
              placeholder="Mobile number"
              {...register("mobileNumber", {
                required: {
                  value: true,
                  message: "Mobile Number is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.mobileNumber?.message}
            </p>
            {/* SSN */}
            <label className="w-[90%] text-white text-[2vh]">
              SSN
            </label>
            <input
              className={`py-1 placeholder-slate-500 appearance-none px-4 bg-white border-2 text-black text-[2.7vh] rounded-3xl w-[90%] leading-tight focus:outline-none focus:shadow-outline ${
                errors.SSN ? "border-red-500" : "border-black"
              }`}
              id="ssn"
              type="number"
              placeholder="XXX-XX-XXXX"
              {...register("SSN", {
                required: {
                  value: true,
                  message: "Mobile Number is required",
                },
              })}
            />
            <p className={`text-red-500 font-bold text-[2vh] text-center `}>
              {errors.SSN?.message}
            </p>
            {/* MESSAGE */}
            <div className="flex justify-center w-[90%]">
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
                This will be the personal information used by{" "}
                <span className="text-primary-orange font-bold">Blockhunt</span> to set up
                your monthly referrals earnings wire transfers
              </p>
            </div>
          </main>
          <footer className="flex flex-col justify-center h-[11%] items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary-yellow font-bold rounded-full w-[80%] py-2 text-[2.5vh]"
            >
              Edit
            </motion.button>
          </footer>
        </form>
        
      </div>
      <Modal open={openModalPersonalInformationChanged} onClose={handleCloseModals}>
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
            <h1 className="font-bold text-[2.5vh]">CONGRATULATION!!</h1>
            <p className="text-[#757575] font-bold text-center text-[2.5vh]">
              Your personal information has been successfully edited
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="primary-gray" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <motion.button
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: "0px 4px 4px -1px rgba(0,0,0,0.75)" }}
              className="bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
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
export default PersonalInformation;
