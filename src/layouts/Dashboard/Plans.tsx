//IMPORTACIONES DE FONTAWESOME
import {
  faArrowLeft,
  faCheck,
  faDatabase,
  faExclamation,
  faGraduationCap,
  faQuestion,
  faThumbsUp,
  faUser,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvira, faWpexplorer } from "@fortawesome/free-brands-svg-icons";
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACIONES DE REACT
import { useState } from "react";
//IMPORTACIONES DE MUI
import { Modal } from "@mui/material";


import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { ButtonsGroup, Carrousel, Divider } from "../../components";

type PlansProps = {
  setOpenPlans: React.Dispatch<React.SetStateAction<boolean>>;
  indexValue: number;
};
const items = [
  {
    title: "EXPLORER",
    more: [
      {
        icon: faUserGroup,
        title: "Total access to community social feed",
        description:
          "You'll be able to watch amd share content with our whole community",
      },
      {
        icon: faThumbsUp,
        title: "Up to $200 free Hunted blocks per week",
        description:
          "You'll be able to hunt up to $200 in delivery blocks totally free",
      },
      {
        icon: faDatabase,
        title: "Only personal data access",
        description:
          "You'll be able to see and sort only your own Amazon flex data",
      },
      {
        icon: faUserPlus,
        title: "1 free week by referrals",
        description: `You'll receive one free week in the "Expert hunter plan" for each referred user `,
      },
    ],
  },
  {
    title: "SEASONAL HUNTER",
    more: [
      {
        icon: faUserGroup,
        title: "Total access to community social feed",
        description:
          "You'll be able to watch amd share content with our whole community",
      },
      {
        icon: faThumbsUp,
        title: "Unlimited Hunted blocks",
        description:
          "You'll be able to hunt unlimited delivery blocks into your search criteria",
      },
      {
        icon: faDatabase,
        title: "Whole community data access",
        description:
          "You'll be able to see and sort the whole community Amazon flex data",
      },
      {
        icon: faUserPlus,
        title: "1 free week by referrals",
        description: `You'll receive one free week in the "Expert hunter plan" for each referred user `,
      },
    ],
  },
  {
    title: "EXPERT HUNTER",
    more: [
      {
        icon: faUserGroup,
        title: "Total access to community social feed",
        description:
          "You'll be able to watch amd share content with our whole community",
      },
      {
        icon: faThumbsUp,
        title: "Unlimited Hunted blocks",
        description:
          "You'll be able to hunt unlimited delivery blocks into your search criteria",
      },
      {
        icon: faDatabase,
        title: "Whole community data access",
        description:
          "You'll be able to see and sort the whole community Amazon flex data",
      },
      {
        icon: faUserPlus,
        title: "Residual incomes program by referrals",
        description: `You'll receive $60 monthly for each referred user as long as both of you remain subscribed within the "Expert hunter plan" `,
      },
    ],
  },
];
const itemsPlan3 = [
  { title: "Wekkly", icon: faUser, iconEnable: false },
  { title: "Monthly", icon: faUserGroup, iconEnable: false },
];

function Plans({ setOpenPlans, indexValue }: PlansProps) {
  
  const [openModalHuntedBlocks, setOpenModalInfoHuntedBlocks] =
    useState<boolean>(false);
  const [openModalPlanFreeActivated, setOpenModalPlanFreeActivated] =
    useState<boolean>(false);
  const [openModalPlanExpertActivated, setOpenModalPlanExpertActivated] =
    useState<boolean>(false);
  const [openModalPlanSeasonalActivated, setOpenModalPlanSeasonalActivated] =
    useState<boolean>(false);
  const [buttonSelected, setButtonSelected] = useState<number>(0);
  const [openModalCancelPlan, setOpenModalCancelPlan] =
    useState<boolean>(false);
  const [openModalPlanCancelled, setOpenModalPlanCancelled] =
    useState<boolean>(false);

  //-----------------------------------------------------------------------
  const handleCloseModals = () => {
    setOpenModalInfoHuntedBlocks(false);
    setOpenModalPlanFreeActivated(false);
    setOpenModalPlanExpertActivated(false);
    setOpenModalPlanSeasonalActivated(false);
    setOpenModalCancelPlan(false);
    setOpenModalPlanCancelled(false);
  };
  const handleSelectPlan = (index: number) => {
    if (index === 0) {
      setOpenModalPlanFreeActivated(true);
    } else if (index === 1) {
      setOpenModalPlanSeasonalActivated(true);
    } else {
      setOpenModalPlanExpertActivated(true);
    }
  };
  const handleGotItFreePlan = () => {
    
    setOpenModalPlanFreeActivated(false);
    setOpenPlans(false);
  };
  const handleGotItExpertPlan = () => {
    
    setOpenModalPlanExpertActivated(false);
    setOpenPlans(false);
  };

  const handleGotItSeasonalPlan = () => {
    
    setOpenModalPlanSeasonalActivated(false);
    setOpenPlans(false);
  };
  const handleCancellSubscription = () => {
    
    setOpenModalCancelPlan(false);
    setOpenModalPlanCancelled(true);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full">
        {/* HEADER */}
        <header
          style={{
            borderRadius: "0% 0% 100% 100% / 0% 0% 60% 60%",
          }}
          className={`${
            indexValue === 3 ? "bg-primary-yellow" : "bg-[#31394F]"
          } flex flex-col justify-center items-center pb-2`}
        >
          {/* BOTON ATRAS */}
          <div className="flex pt-2 pl-2 w-full">
            <button onClick={() => setOpenPlans(false)} className="">
              <FontAwesomeIcon
                style={{
                  color: indexValue === 3 ? "black" : "white",
                  width: "3vh",
                  height: "3vh",
                }}
                icon={faArrowLeft}
              />
            </button>
          </div>
          {/* TITULO Y DESCRIPCION */}
          <div className="flex flex-col gap-4 justify-center items-center w-[70%]">
            {/* TITULO */}
            <h1
              className={`${
                indexValue === 3 ? "black" : "text-white"
              } font-semibold text-center text-[3vh] leading-3`}
            >
              Plans and Pricing
            </h1>
            <p
              className={`${
                indexValue === 3 ? "text-black" : "text-primary-yellow"
              } text-[3vh] font-bold text-center leading-6 `}
            >
              Enjoy 7 Days free trial, then we'll charge your chosen plan.
            </p>
          </div>
        </header>
        {/* MAIN */}
        <main className="flex flex-col flex-grow ">
          <Carrousel activeDots={true} items={items}>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex relative flex-col mt-2 mx-4 bg-[#3b4047] min-w-[90%] rounded-2xl snap-center"
                data-carousel-item
                data-index={index}
              >
                {/* ENCABEZADO DE LA CARD */}
                <header className="flex flex-col items-center justify-center py-2 gap-2">
                  {/* titulo */}
                  <h1 className="text-white text-[2.5vh] font-bold">
                    {item.title}
                  </h1>
                  {/* icono */}
                  <div className="flex bg-primary-yellow rounded-full p-1">
                    <FontAwesomeIcon
                      style={{
                        color: "#3B4047",
                        backgroundColor: "#F4D64C",
                        width: index === 0 ? "10vh" : "6vh",
                        height: index === 0 ? "10vh" : "6vh",
                        borderRadius: "50%",
                        padding: index === 0 ? "" : "1vh",
                        border: index === 0 ? "" : "0.8vh solid #3B4047",
                      }}
                      icon={
                        index === 0
                          ? faWpexplorer
                          : index === 1
                          ? faEnvira
                          : faGraduationCap
                      }
                      flip="horizontal"
                    />
                  </div>
                  {/* price and details */}
                  <div className="flex w-full px-4">
                    {/* LINEA */}
                    <div className="w-full flex flex-col justify-center">
                      <Divider color="white" size={1} />
                    </div>
                    {/* PRECIO */}
                    <div className="flex items-center px-4">
                      <h1 className="text-white font-bold text-[4vh] leading-6">
                        {index === 0
                          ? "$0"
                          : index === 1
                          ? "5%"
                          : buttonSelected === 0
                          ? "$54"
                          : "$199"}
                      </h1>
                      <span
                        className={`${
                          index === 2 ? "" : "hidden"
                        } text-primary-gray-light text-[2vh] pl-2`}
                      >
                        {buttonSelected === 0 ? "/we" : "/mo"}
                      </span>
                    </div>
                    {/* LINEA */}
                    <div className="w-full flex flex-col justify-center">
                      <Divider color="white" size={1} />
                    </div>
                  </div>
                  {/* description price */}
                  <div>
                    <h1
                      className={`text-white text-[2vh] leading-4 ${
                        index === 2 ? "hidden" : ""
                      }`}
                    >
                      {index === 0
                        ? "(Free)"
                        : index === 1
                        ? "(Hunted blocks)"
                        : ""}
                    </h1>
                  </div>
                  {/* BOTON LEARN MORE PLAN DOS */}
                  <button
                    onClick={() => setOpenModalInfoHuntedBlocks(true)}
                    className={`flex items-center gap-1 ${
                      index !== 1 ? "hidden" : ""
                    }`}
                  >
                    <FontAwesomeIcon
                      style={{
                        color: "#474947",
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#E6822D",
                        borderRadius: "50%",
                        padding: 1,
                      }}
                      icon={faQuestion}
                    />
                    <h1 className="text-primary-orange text-[1.5vh] font-semibold">
                      Learn More
                    </h1>
                  </button>
                  {/* BUTTON GROUP PLAN 3 */}
                  <div className={`${index === 2 ? "flex w-[70%]" : "hidden"}`}>
                    <ButtonsGroup
                      buttonSelected={buttonSelected}
                      setButtonSelected={setButtonSelected}
                      items={itemsPlan3}
                    />
                  </div>
                </header>
                {/* CUERPO DE LA CARD */}
                <main className="flex flex-col flex-grow  w-full justify-center items-center px-4">
                  {item.more.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 h-full  w-full"
                    >
                      {/* icono */}
                      <FontAwesomeIcon
                        style={{
                          color: "#3b4047",
                          width: "2.5vh",
                          height: "2.5vh",
                          border: "2px solid #3b4047",
                          borderRadius: "50%",
                          backgroundColor: "#757575",
                          padding: "1vh",
                        }}
                        icon={item.icon}
                      />
                      {/* title and description */}
                      <div className="flex flex-col w-full justify-center ">
                        <h1 className="text-white font-semibold text-[1.6vh]">
                          {item.title}
                        </h1>
                        <p className="text-[1.2vh] text-primary-gray-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </main>
                {/* FOOTER */}
                <footer className="flex flex-col items-center justify-center h-[15%] gap-2">
                  <button
                    onClick={() => handleSelectPlan(index)}
                   
                    className="bg-primary-yellow w-[75%] font-bold  rounded-full px-4 py-3"
                  >
                    <h1
                      className={`${
                        index !== 0 ? "text-[4vw]" : "text-[3.5vw]"
                      }`}
                    >
                      {index === 0
                        ? indexValue === 3
                          ? "Upgrade for 5% (Hunted blocks)"
                          : "Start for free"
                        : index === 1
                        ? indexValue === 3
                          ? "Upgrade from $199 /mo"
                          : "Start a free trial"
                        : indexValue === 3
                        ? "Blockhunt best value"
                        : "Start a free trial"}
                    </h1>
                  </button>
                  <button
                    onClick={() => setOpenModalCancelPlan(true)}
                    className={`text-red-500 text-[1.5vh] font-bold ${
                      indexValue !== 3 ? "hidden" : ""
                    } `}
                  >
                    Cancel subscription
                  </button>
                </footer>
                {/* Elementos sobrepuestos */}
                <div className={`absolute -right-4 -top-2 ${index !== 2 ? 'hidden' : ''}`}>
                  <img className="h-[13vh] w-[13vh]" src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1699297766/BlockHunt/Logo/bestPlan_abubf1.png" alt="" />
                </div>
              </div>
            ))}
          </Carrousel>
        </main>
      </div>
      {/* MODAL DE INFORMACION */}
      <Modal open={openModalHuntedBlocks} onClose={handleCloseModals}>
        <div className="bg-white w-[80%] rounded-2xl absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ">
          <header className="bg-primary-gray-ligth flex py-2 gap-1 justify-center rounded-t-2xl border-b-2 border-b-primary-yellow items-center">
            <FontAwesomeIcon
              style={{
                color: "#474947",
                width: "20px",
                height: "20px",
                backgroundColor: "#F4D64C",
                borderRadius: "50%",
                padding: 4,
              }}
              icon={faEnvira}
            />
            <h1 className="text-[2vh] font-bold text-center">
              Seasonal hunter
            </h1>
          </header>
          <main className="flex-col flex">
            <p className="text-center text-[1.8vh] px-7 py-2">
              We'll charge you only 5% of every hunted block by Blockhunt that
              has been successfully completed.
            </p>
            <p className="text-center text-[1.8vh] px-6 py-2">
              If you decide to forfeit a delivery block after being hunted by
              us, it has to be forfeited through Blockhunt, otherwise it will be
              counted in your next billing.
            </p>
            <p className="text-center text-[1.8vh] px-7 py-2">
              Blockhunt will issue your invoice within the next seven days of
              signing up this plan.
            </p>

            <Divider color="primary-yellow" size={1} />
          </main>
          <footer className="flex justify-center mb-4">
            <button
             
              onClick={handleCloseModals}
              className="custom-shadow bg-primary-yellow rounded-full py-2 px-4"
            >
              <h1 className="text-sm font-bold">GOT IT</h1>
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE ACEPTACION DE PLAN EXPLORER */}
      <Modal open={openModalPlanFreeActivated} onClose={handleCloseModals}>
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
              You've been enrolled successfully in the Explorer plan
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="primary-gray" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleGotItFreePlan}
            >
              Got it
            </button>
            <button
              className="custom-shadow bg-black text-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
            >
              Upgrate
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE ACEPTACION DE PLAN EXPERT */}
      <Modal open={openModalPlanExpertActivated} onClose={handleCloseModals}>
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
              You've been enrolled successfully in the Expert hunter plan
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="white" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
             
             
              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleGotItExpertPlan}
            >
              Got it
            </button>
            <button
              className="custom-shadow bg-black text-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
            >
              Upgrate
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE ACEPTACION DE PLAN SEASONAL */}
      <Modal open={openModalPlanSeasonalActivated} onClose={handleCloseModals}>
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
              You've been enrolled in the Seasonal hunter plan
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="white" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleGotItSeasonalPlan}
            >
              Got it
            </button>
            <button
              className="custom-shadow bg-black text-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
            >
              Upgrate
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE CANCELACION DE PLANES */}
      <Modal open={openModalCancelPlan} onClose={handleCloseModals}>
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
                icon={faExclamation}
              />
            </div>
          </header>
          <main className="flex flex-col items-center px-4 gap-2">
            <h1 className="font-bold text-[2.5vh]">ATENTION!!</h1>
            <p className="text-[#757575] font-bold text-center text-[2vh]">
              Are you sure you want to cancel your current subscription?.
            </p>
            <p className="text-[#757575] font-bold text-center text-[2vh]">
              By canceling your current subscription you'll be removd from our
              referral program and all your incomes by referral will be canceled
              as well
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="white" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={handleCancellSubscription}
            >
              Yes
            </button>
            <button
              onClick={() => setOpenModalCancelPlan(false)}              
              className="custom-shadow bg-black text-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
            >
              Nope
            </button>
          </footer>
        </div>
      </Modal>
      {/* MODAL DE PLAN CANCELADO */}
      <Modal open={openModalPlanCancelled} onClose={handleCloseModals}>
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
                icon={faFaceFrown}
              />
            </div>
          </header>
          <main className="flex flex-col items-center px-4 gap-2">
            <h1 className="font-bold text-[2vh]">WE'LL MISS YOU HUNTER!!</h1>
            <p className="text-[#757575] font-bold text-center text-[2vh]">
              You've successfully canceled your subscription
            </p>
            <p className="text-[#757575] font-bold text-center text-[2vh]">
              You've been removed from our referral program as well, this change
              will take place from next billing cycle
            </p>
            <div className="flex flex-col w-full mx-4">
              <Divider size={1} color="white" />
            </div>
          </main>
          <footer className="flex justify-around px-[3vh] py-[1.5vh]">
            <button
              className="custom-shadow bg-primary-yellow font-bold px-[3vh] py-[1vh] rounded-full"
              onClick={() => setOpenModalPlanCancelled(false)}
            >
              Got it
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
}
export default Plans;
