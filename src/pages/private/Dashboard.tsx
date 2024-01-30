// Importaciones de React
import { Suspense, lazy, useEffect } from 'react';
// Importaciones de react router dom
import { useNavigate } from 'react-router-dom';
// Importaciones de Helpers
import { checkToken } from '../../helpers';
import { DashboardLayout } from '../../layouts';

// Importaciones de Paginas
const DesktopPage = lazy(() => import('../public/Desktop'));


const Dashboard = () => {
  //react router dom
  const navigate = useNavigate();

  //Chequeo de token
  useEffect(() => {
    const cleanup = checkToken(navigate);
    return cleanup;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Esta seccion es para vistas mobile */}
      <section className="section-mobile bg-primary-gray-dark ">
        <DashboardLayout />
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

export default Dashboard;
