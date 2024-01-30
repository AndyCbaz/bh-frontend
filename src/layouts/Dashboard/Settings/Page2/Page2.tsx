//IMPORTACIONES DE FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORTACIONES DE REACT
import { useState } from 'react';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import LocationsOptionsButton from './LocationsOptionsButton';
import AddLocationCarrousel from './AddLocationCarrousel';
import MyLocationCarrousel from './MyLocationCarrousel';
import { NavigateFunction } from 'react-router-dom';

interface Page2Props {
  navigate:NavigateFunction
};
const Page2:React.FC<Page2Props> = ({navigate}) => {
  const [buttonSelected, setButtonSelected] = useState<boolean>(true);

  return (
    <>
      <div className="flex h-full w-[95%] flex-grow flex-col rounded-2xl bg-white">
        {/* Encabezado */}
        <header className="flex items-center rounded-t-2xl bg-[#d9d9d9] p-2">
          <div className="flex h-[12%] items-center gap-2 rounded-t-2xl bg-[#d9d9d9] pl-2">
            <div
              style={{ boxShadow: '0px 4px 4px -1px rgba(0,0,0,0.75)' }}
              className="bg-primary-yellow flex items-center justify-center rounded-full p-2"
            >
              <FontAwesomeIcon
                style={{ color: '#757575', width: '3vh', height: '3vh' }}
                icon={faBuildingColumns}
              />
            </div>
            <h1 className="text-[2.5vh] font-bold text-[#818181]">
              Select your working locations.
            </h1>
          </div>
        </header>
        {/* Cuerpo */}
        <main className="flex flex-grow flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center py-4 ">
            <LocationsOptionsButton
              buttonSelected={buttonSelected}
              setButtonSelected={setButtonSelected}
            />
          </div>
          {buttonSelected ? (
            <div className="flex p-2">
              <AddLocationCarrousel navigate={navigate} />
            </div>
          ) : (
            <div className="flex p-2">
              <MyLocationCarrousel navigate={navigate} />
            </div>
          )}
        </main>
      </div>
    </>
  );
}
export default Page2;
