//Importaciones de react router dom
import { NavigateFunction } from "react-router-dom";

export const checkToken = (navigate: NavigateFunction) => {
  const handleStorageChange = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  };

  window.addEventListener('storage', handleStorageChange);

  // Devuelve una función de limpieza que puede ser llamada para eliminar el evento
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
};
