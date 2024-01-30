import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutesBeforeLogin() {
  const isLogued = Boolean(localStorage.getItem('token'));

  if (!isLogued) return <Navigate to="/" />;
  return <Outlet />;
}
export default ProtectedRoutesBeforeLogin;
