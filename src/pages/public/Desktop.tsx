import { motion } from 'framer-motion';
function Desktop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="bg-primary-yellow flex h-screen w-full flex-col items-center justify-center"
    >
      <picture className="bg-primary-yellow flex w-4/5  flex-col items-center justify-center bg-[url('https://res.cloudinary.com/dclbjyyfn/image/upload/v1701444635/BH-OPTIMIZED/GENERAL/Logo_small_kmtnhb.png')] bg-cover bg-center">
        <img
          className="bg-primary-yellow pointer-events-none w-full object-cover object-center"
          src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1701444614/BH-OPTIMIZED/GENERAL/Logo_blzpfb.png"
          alt="Logo de la empresa"
          loading="eager"
        />
      </picture>
      <section className="my-2 flex flex-col items-center gap-4">
        <h1 className="text-center text-[3vw] font-bold">
          We are working on a web version to improve your experience
        </h1>
        <p className="text-center text-[3vw] font-bold">
          Please use a smarthphone to use BlockHunt
        </p>
      </section>
    </motion.div>
  );
}

export default Desktop;
