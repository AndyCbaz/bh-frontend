//IMPORTACION DE FRAMER MOTION
import { motion } from "framer-motion";
import { Divider } from "../../../../components";



type LanguageDrawerProps = {
    openDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
function LanguageDrawer({openDrawer}: LanguageDrawerProps) {
  return (
    <div className="flex flex-col p-2">
      <header className="w-full flex flex-col items-center h-[5%] ">
        <div className="bg-primary-gray border-primary-gray border-2 h-[1px] w-[100px] rounded-full my-2"></div>
      </header>
      <main className="bg-white rounded-2xl flex flex-col gap-2 p-4">
        <motion.section onClick={()=>openDrawer(false)} whileTap={{scale:0.95}}><h1 className="font-bold">Español</h1></motion.section>
        <Divider color="primary-gray-light" size={1}/>
        <motion.section onClick={()=>openDrawer(false)} whileTap={{scale:0.95}}><h1 className="font-bold">English</h1></motion.section>
      </main>
    </div>
  );
}
export default LanguageDrawer;
