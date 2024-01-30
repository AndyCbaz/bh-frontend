// Importaciones de react
import { cloneElement, lazy, Suspense } from 'react';
// Importaciones de framer motion
import { AnimatePresence } from 'framer-motion';
// Importaciones de react router dom
import { useRoutes, useLocation } from 'react-router-dom';
// Importaciones de rutas protegidas
import ProtectedRoutesAfterLogin from './ProtectedRoutesAfterLogin';
import ProtectedRoutesBeforeLogin from './ProtectedRoutesBeforeLogin';
// Importaciones de paginas
import {
  Introduction,
  Authentication,
  PageNotFound,
  Dashboard,
} from '../pages';
// Importaciones de layouts
const LoginLayout = lazy(() => import('../layouts/Auth/Login'));
const SingupLayout = lazy(() => import('../layouts/Auth/Singup'));
const ForgotPasswordLayout = lazy(
  () => import('../layouts/Auth/ForgotPassword'),
);
const EmailConfirmationLayout = lazy(
  () => import('../layouts/Auth/EmailConfirmation'),
);
const ResetPasswordLayout = lazy(() => import('../layouts/Auth/ResetPassword'));
// Importacion de componentes
import { Loader } from '../components';


export const Routes = () => {
  const element = useRoutes([
    //Rutas publicas antes del login
    {
      path: '/',
      element: <ProtectedRoutesAfterLogin />,
      children: [
        {
          index: true,
          element: <Introduction />,
        },
        {
          path: 'auth/',
          element: <Authentication />,
          children: [
            {
              path: 'login/',
              element: (
                <Suspense fallback={<Loader />}>
                  <LoginLayout />
                </Suspense>
              ),
            },
            {
              path: 'singup/',
              element: (
                <Suspense fallback={<Loader />}>
                  <SingupLayout />
                </Suspense>
              ),
            },
            {
              path: 'verify_email/:token/',
              element: (
                <Suspense fallback={<Loader />}>
                  <EmailConfirmationLayout />
                </Suspense>
              ),
            },
            {
              path: 'forgot-password/',
              element: (
                <Suspense fallback={<Loader />}>
                  <ForgotPasswordLayout />
                </Suspense>
              ),
            },
            {
              path: 'reset_password/:token',
              element: (
                <Suspense fallback={<Loader />}>
                  <ResetPasswordLayout />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    //Rutas protegidas despues del login
    {
      path: '/app',
      element: <ProtectedRoutesBeforeLogin />,
      children: [
        {
          path: 'dashboard/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'menu/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'notifications/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'earnings/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'wallet/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'bank-information',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'referrals/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'schedule-calendar/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'stadistic/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'profile/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'location-settings/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'settings/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'filters/',
          element: <Dashboard key="DashboardLayout" />,
        },
        {
          path: 'settings-filters/',
          element: <Dashboard key="DashboardLayout" />,
        },
      ],
    },
    //Rutas no encontradas
    {
      path: '/*',
      element: <PageNotFound />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};
