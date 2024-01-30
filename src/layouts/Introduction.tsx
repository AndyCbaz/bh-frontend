// Importaciones de react
import { useState } from 'react';
// Importaciones de framer motion
import { motion } from 'framer-motion';
// Importaciones de componentes
import Carrousel from '../components/Carrousel';
// Importaciones de imagenes
import { imagesIntroduction } from '../assets/ImagesIntroduction';
// Importaciones de react-router-dom
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const [enableSection, setEnableSection] = useState<boolean>(false); // Estado para habilitar la seccion
  const navigate = useNavigate(); // Hook para navegar entre rutas

  return (
    <>
      <header className="">
        <motion.picture
          className="flex max-w-2xl justify-center bg-white bg-cover bg-center p-4"
          layout
          style={{
            borderRadius: '50% 50% 50% 50% / 30% 30% 30% 30%',
          }}
          animate={{
            scale: [0, 1, 1, 1, 1],
            rotate: [180, 0, 0, 0, 0],
            y: [`calc(${window.innerHeight / 2})px`, '0px'],
            borderRadius: [
              '50% 50% 50% 50% / 30% 30% 30% 30%',
              '50% 50% 50% 50% / 30% 30% 30% 30%',
              '50% 50% 50% 50% / 30% 30% 30% 30%',
              '0% 0% 50% 50% / 0% 0% 30% 30%',
              '0% 0% 50% 50% / 0% 0% 30% 30%',
            ],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            times: [0, 0.4, 0.6, 0.8, 1],
          }}
          onAnimationComplete={() => setEnableSection(true)}
        >
          <img
            className="max-h-[430px]] pointer-events-none w-[430px] scale-90 object-cover object-center"
            src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1701444614/BH-OPTIMIZED/GENERAL/Logo_blzpfb.png"
            alt="Logo de la empresa"
            loading="eager"
          />
        </motion.picture>
      </header>
      <main
        className={` section-invisible ${
          enableSection ? 'disabled' : ''
        }  w-full flex-grow flex-col items-center justify-center `}
      >
        {/* Mensaje introductorio */}
        <div className="flex flex-grow flex-col items-center justify-center px-2">
          <h1 className="text-center text-[5vw] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptate incidunt reprehenderit voluptates.
          </h1>
        </div>
        {/* Carrousel de imagenes */}
        <div className="flex w-full flex-col items-center">
          <Carrousel activeDots={true} items={imagesIntroduction}>
            {imagesIntroduction.map((image, index) => (
              <picture
                key={index}
                data-carousel-item
                data-index={index}
                className={`relative flex w-full flex-shrink-0 flex-grow-0 basis-auto snap-center snap-always justify-center`}
              >
                <img
                  src={image}
                  alt={`Imagen carrousel introduction ${index}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="pointer-events-none block  object-cover"
                />
              </picture>
            ))}
          </Carrousel>
        </div>
        {/* Boton Next */}
        <div className="flex h-[20%] flex-col items-center justify-center">
          <motion.button
            onClick={() => navigate('/auth/login')}
            whileTap={{ scale: 0.9, backgroundColor: '#78716c' }}
            className="rounded-full bg-black px-8"
          >
            <h1 className="p-4 text-[4vw] font-bold text-white">LET'S HUNT</h1>
          </motion.button>
        </div>
      </main>
    </>
  );
};

export default Introduction;
