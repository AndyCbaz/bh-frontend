//IMPORTACIONES DE CUSTOM COMPONENTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//IMPORTACIONES DE FRAMER MOTION
import { motion } from "framer-motion";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "../../../../components";


type Section1Props = {
  setOpenInvitees: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenReferrals: React.Dispatch<React.SetStateAction<boolean>>;
};
function Section1({setOpenInvitees, setOpenReferrals}: Section1Props) {
  return (
    <>
      <div className="flex flex-col gap-4 w-full p-4">
        {/* avatar y titulo */}
        <section className="flex items-center gap-4">
          <div className="border-2 rounded-full">
            <Avatar
              weight="w-[8vh]"
              height="w-[8vh]"
              src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688495085/BlockHunt/Drawer/Users/fotod_p7huhe.jpg"
            />
          </div>
          <h1 className="text-white font-bold text-[3vh]">Andres Bonilla</h1>
        </section>
        {/* botones */}
        <section className="flex justify-center gap-4">
            {/* boton general */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled
            className="border-2 border-primary-orange py-2  min-w-[12vh] rounded-full"
          >
            <FontAwesomeIcon
              icon={faUserPlus}
              style={{
                height: "3vh",
                width: "3vh",
                color: "white",
              }}
            />
          </motion.button>
          {/* boton invitados */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={()=>setOpenInvitees(true)}
            className="border-2 flex flex-col justify-center items-center border-white  min-w-[12vh] rounded-full py-2"
          >
                <h1 className="text-white text-[4vw] font-bold leading-4">25</h1>
                <h1 className="text-white font-semibold text-[3vw] leading-4">invitees</h1>
                
          </motion.button>
          {/* boton referidos */}
          <motion.button
          onClick={()=>setOpenReferrals(true)}
            whileTap={{ scale: 0.95 }}
            className="border-2 flex flex-col justify-center items-center border-white  min-w-[12vh] rounded-full py-1"
          >
                <h1 className="text-white text-[4vw] font-bold leading-4">32</h1>
                <h1 className="text-white font-semibold text-[3vw] leading-4">referrals</h1>
                
          </motion.button>
        </section>
      </div>
    </>
  );
}
export default Section1;
