//Importaciones de react
import { useState } from 'react';
//Importaciones de elementos estaticos
import unknowUser from '../assets/StaticImages/unknowUser.jpg';

interface IAvatarProps {
  src: string; // URL de la imagen
  weight: string; // valor de tailwindcss
  height: string; // valor de tailwindcss
}
const Avatar = ({ src, height, weight }: IAvatarProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <picture className="flex flex-col items-center justify-center">
        {!isLoading && (
          <img
            className={`${weight} ${height} rounded-full`}
            src={unknowUser}
            alt={`unknown avatar`}
          />
        )}
        <img
          className={`${weight} ${height} rounded-full ${
            isLoading ? '' : 'hidden'
          }`}
          src={src}
          onLoad={() => setIsLoading(true)}
          alt={`Avatar ${src}`}
        />
      </picture>
    </>
  );
};

export default Avatar;
