import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutesAfterLogin() {
  const isLogued = Boolean(localStorage.getItem('token'));

  if (isLogued) return <Navigate to="/app/dashboard" />;
  return <Outlet />;
}

export default ProtectedRoutesAfterLogin;
