import {
  faArrowLeft,
  faBullhorn,
  faCalendarDays,
  faClock,
  faHourglassHalf,
  faPhone,
  faTag,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DetailsProps = {
  setOpenReferralsDetails: React.Dispatch<React.SetStateAction<boolean>>;
};
function Details({ setOpenReferralsDetails }: DetailsProps) {
  return (
    <>
      <div className="flex flex-col h-screen w-full">
        {/* HEADER */}
        <header className="bg-[#3B4048] border-b-2 border-b-primary-yellow h-[9%] flex flex-col justify-center">
          {/* BOTON ATRAS */}
          <div className="flex justify-between px-3 h-full">
            <button onClick={() => setOpenReferralsDetails(false)} className="">
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
            <div className="flex h-full items-center justify-center">
              <h1 className="text-white font-semibold text-center text-[5vw]">
                Referrals
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
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
              Invitation method: <span className="font-thin">Text Message</span>
            </h1>
          </div>
          {/* numero de telefono */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
              icon={faPhone}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Phone number: <span className="font-thin">7866302624</span>
            </h1>
          </div>
          {/* invitation date */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
          {/* Invitation time */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
          {/* status */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
              Status: <span className="font-thin">Enrrolled</span>
            </h1>
          </div>
          {/* subscription date */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
              Subscription date: <span className="font-thin">08/28/2023</span>
            </h1>
          </div>
          {/* subscription time */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
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
              Suscription time: <span className="font-thin">3:38 AM</span>
            </h1>
          </div>
          {/* plan */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#F4D64C",
                width: "3.4vh",
                height: "3.4vh",
                borderRadius: "50%",
              }}
              icon={faTag}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Plan: <span className="font-thin">Explorer</span>
            </h1>
          </div>
          {/* reward */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#F4D64C",
                width: "3.4vh",
                height: "3.4vh",
                borderRadius: "50%",
              }}
              icon={faTrophy}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Reward: <span className="font-thin">1 Free Week (08/1/2023 - 08/8/2023)</span>
            </h1>
          </div>
          {/* status */}
          <div className="bg-[#3B4048] flex rounded-full items-center py-3 px-4 gap-2">
            <FontAwesomeIcon
              style={{
                color: "#F4D64C",
                width: "3.4vh",
                height: "3.4vh",
                borderRadius: "50%",
              }}
              icon={faHourglassHalf}
            />

            <h1 className="text-white font-bold text-[2vh]">
              Status: <span className="font-thin">Active</span>
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}
export default Details;
