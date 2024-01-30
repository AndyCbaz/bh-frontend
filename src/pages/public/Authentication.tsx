// Importaciones de react
import { lazy, Suspense } from 'react';
// Importaciones de Layouts
import { AuthenticationLayout } from '../../layouts';
//Importaciones de pages
const DesktopPage = lazy(() => import('./Desktop'));
// Importaciones de estilos
import '../../styles/Auth/Authentication.css';

const Authentication = () => {
  return (
    <>
      {/* Esta seccion es para vistas mobile */}
      <section className="section-mobile bg-primary-yellow ">
        <AuthenticationLayout />
      </section>
      {/* Esta seccion es para vistas desktop */}
      <section className="section-desktop">
        <Suspense fallback={<div>Loading...</div>}>
          <DesktopPage />
        </Suspense>
      </section>
    </>
  );
};

export default Authentication;
