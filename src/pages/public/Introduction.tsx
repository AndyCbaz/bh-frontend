// Importaciones de react
import { Suspense, lazy } from 'react';
// Importaciones de Layouts
import { IntroductionLayout } from '../../layouts';
//Importaciones de pages
const DesktopPage = lazy(() => import('./Desktop'));
// Importaciones de framer motion
import { motion } from 'framer-motion';
// Importaciones de estilos
import '../../styles/Auth/Introduction.css';

const Introduction = () => {
  return (
    <>
      {/* Esta seccion es para vistas mobile */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="section-mobile bg-primary-yellow"
      >
        <IntroductionLayout />
      </motion.section>
      {/* Esta seccion es para vistas desktop */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="section-desktop"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <DesktopPage />
        </Suspense>
      </motion.section>
    </>
  );
};

export default Introduction;
