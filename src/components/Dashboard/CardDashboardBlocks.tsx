//Importacion de componentes
import { Avatar } from '..';
//Importacion de fontawesome iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuildingColumns,
  faCalendarDays,
  faClock,
  faDollarSign,
  faHourglassHalf,
} from '@fortawesome/free-solid-svg-icons';
//Importaciones de estilos
import '../../styles/Dashboard/Components/CardBlock.css';

interface ICardBlocksProps {
  info: {
    user: string;
    photo: string;
    time: number;
    follow: boolean;
    wearhouse: string;
    date: string;
    timeInterval: string;
    timeDoIt: string;
  };
}

function CardBlocks({ info }: ICardBlocksProps) {
  return (
    <div className="dashboard-cardblock">
      {/* Encabezado de la card */}
      <header className="header-dashboard-cardblock">
        {/* Avatar */}
        <Avatar src={info.photo} height="h-[6.5vw]" weight="w-[6.5vw]" />
        {/* User Info */}
        <div className="flex-grow">
          <div className="flex flex-col">
            <h1 className="font-bold leading-3 text-white">{info.user}</h1>
            <span className="text-[10px] text-white">{info.time} ago</span>
          </div>
        </div>
      </header>
      {/* Cuerpo de la card */}
      <section className="section-dashboard-cardblock">
        {/* User data */}
        <div className="flex-grow justify-start">
          <div className="flex flex-col gap-1">
            {/* wearhouse */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faBuildingColumns}
                className="h-[3vw] w-[3vw] rounded-full bg-primary-gray-light p-1 text-primary-gray"
              />
              <h3 className="text-[3vw] font-bold text-primary-gray-light">
                {info.wearhouse}
              </h3>
            </div>
            {/* date */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="h-[4vw] w-[4vw] p-[2px] text-primary-gray-light"
              />
              <h3 className="text-[3vw] font-bold text-primary-gray-light">
                {info.date}
              </h3>
            </div>
            {/* time interval */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="h-[4vw] w-[4vw] p-[2px] text-primary-gray-light"
              />
              <h3 className="text-[3vw] font-bold text-primary-gray-light">
                {info.timeInterval}
              </h3>
            </div>
            {/* duration */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faHourglassHalf}
                className="h-[4vw] w-[4vw] p-[2px] text-primary-gray-light"
              />
              <h3 className="text-[3vw] font-bold text-primary-gray-light">
                {info.timeDoIt}
              </h3>
            </div>
          </div>
        </div>
        {/* BLock Price */}
        <div className="flex flex-col items-end justify-end">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="h-[3.5vw] w-[3.5vw] rounded-full bg-primary-yellow p-[2px] text-black"
            />
            <h1 className=" items-center gap-1 text-xl font-semibold text-white">
              155
            </h1>
          </div>
          <h1 className="text-[1.7vh] text-white">$34.4 / hr</h1>
        </div>
      </section>
    </div>
  );
}
export default CardBlocks;
