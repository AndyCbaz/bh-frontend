//IMPORTACIONES DE FRAMER MOTION
import { motion } from 'framer-motion';
//IMPORTACIONES DE CUSTOM COMPONENTS

//IMPORTACION DE COMPONENTES
import Section1 from './Filters/Section1';
import Section2 from './Filters/Section2';
import Section3 from './Filters/Section3';
import Section4 from './Filters/Section4';
import Section5 from './Filters/Section5';
import Section6 from './Filters/Section6';
import Section7 from './Filters/Section7';
import { Divider } from '../../components';
import { NavigateFunction } from 'react-router-dom';

type filterProps = {
  navigate: NavigateFunction
};
function Filters({ navigate }: filterProps) {
  //---------------------------------------------
  const handleApplyClick = () => {
    navigate('/app/dashboard');
  };

  //---------------------------------------------
  return (
    <div
      style={{ height: `calc(100vh - 15vh)` }}
      className="bg-primary-yellow flex w-full flex-col items-center rounded-t-[24px]"
    >
      {/* Encabezado del menu de filter */}
      <header className="flex h-[5%] w-full flex-col items-center ">
        <div className="bg-primary-gray border-primary-gray my-2 h-[1px] w-[100px] rounded-full border-2"></div>
      </header>
      {/* Cuerpo del menu de filter */}
      <main className="flex w-[95%] flex-grow flex-col overflow-auto rounded-2xl bg-white">
        {/* Section 1 Type of Data */}
        <Section1 />
        <div className="mx-[2vh]">
          <Divider color="primary-gray" size={1} />
        </div>
        {/* Section 2 Location */}
        <Section2 />
        <div className="mx-[2vh]">
          <Divider color="primary-gray" size={1} />
        </div>
        {/* Section 3 Type of Blocks */}
        <Section3 />
        <div className="mx-[2vh]">
          <Divider color="primary-gray" size={1} />
        </div>
        {/* Section 4 Date Range */}
        <Section4 />
        <div className="mx-[2vh]">
          <Divider color="primary-gray" size={1} />
        </div>
        {/* Section 5 Time Range */}
        <Section5 />
        <div className="mx-[2vh]">
          <Divider color="primary-gray" size={1} />
        </div>
        {/* Section 6 Payment Range */}
        <Section6 />
        <div className="mx-[2vh]">
          <Divider color="primary-gray" size={1} />
        </div>
        {/* Section 7 Delivery Block Duration */}
        <Section7 />
      </main>
      <footer className="my-3">
        <motion.button
          onClick={handleApplyClick}
          whileTap={{ scale: 0.9 }}
          className="rounded-full bg-black px-8 py-2 text-[2vh] font-bold text-white"
        >
          APPLY
        </motion.button>
      </footer>
    </div>
  );
}
export default Filters;
