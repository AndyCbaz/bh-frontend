// Importaciones de react-router-dom
import { Outlet } from 'react-router-dom';


const Aunthentication = () => {
  return (
    <>
      <header className="header-authentication">
        <picture id="logo-empresa" className="header-picture">
          <img
            loading="eager"
            src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1701444614/BH-OPTIMIZED/GENERAL/Logo_blzpfb.png"
            alt="logo"
            className="pointer-events-none scale-90 object-cover object-center"
          />
        </picture>
      </header>
      <main className="main-authentication">
        <Outlet />
      </main>
    </>
  );
};

export default Aunthentication;
