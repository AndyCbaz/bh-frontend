import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
const PageNotFound = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex h-screen w-full flex-col items-center justify-start bg-primary-yellow py-4"
      >
        <picture className='bg-white rounded-2xl mx-4 '>
          <img
            className="pointer-events-none scale-90"
            src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1686524976/BlockHunt/Logo/logo_fkgbib.png"
            alt="logo"
          />
        </picture>
        <div className="my-2 flex flex-col items-center gap-4 flex-grow justify-center" >
          <FontAwesomeIcon
            className="text-principal-dark h-[24vw] w-[24vw] rounded-full  p-0"
            icon={faFaceFrown}
          />
          <h1 className="text-center text-3xl font-bold">Page not found</h1>
          <h1 className="text-center text-3xl font-bold">404</h1>
        </div>
      </motion.div>
    </>
  );
}

export default PageNotFound;
