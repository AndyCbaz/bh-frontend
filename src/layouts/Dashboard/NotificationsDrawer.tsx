// Importaciones de fontawesome para iconos
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importaciones de componentes
import { Avatar, Divider } from '../../components';

import { NavigateFunction } from 'react-router-dom';

interface INotificationsProps {
  navigate: NavigateFunction;
}
function NotificationsDrawer({ navigate }: INotificationsProps) {
  return (
    <>
      <div className="flex h-screen flex-grow flex-col">
        <header className="flex h-[9%] flex-col justify-center border-b-2 border-b-primary-yellow bg-[#3B4048]">
          <div className="flex pl-2 pt-2">
            <button
              onClick={() => navigate('/app/dashboard')}
              className="flex w-[30%] items-center justify-start"
            >
              <FontAwesomeIcon
                className="h-[25px] w-[25px] text-primary-gray-light"
                icon={faArrowLeft}
              />
            </button>
            <div className="flex flex-grow items-center justify-center">
              <h1 className="text-center text-[3vh] font-semibold text-white">
                Notifications
              </h1>
            </div>
            <div className="w-[30%]" />
          </div>
        </header>
        <section className="flex h-[91%] flex-col gap-2 overflow-y-auto p-4">
          {/* TODAY SECTION */}
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-white">Today</h1>
            {[1, 2, 3].map((_item, index) => (
              <div key={index} className="flex gap-2">
                <Avatar
                  weight="w-[6vh]"
                  height="w-[6vh]"
                  src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688495085/BlockHunt/Drawer/Users/fotod_p7huhe.jpg"
                />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="leading-5 text-primary-gray-light">
                    <span className="font-bold text-white">Blockhunt</span>{' '}
                    hunted a delivery block for you.{' '}
                    <span className="font-semibold">3h</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
          {/* LAST 7 DAYS SECTION */}
          <Divider color="white" size={1} />
          <section className="flex flex-col gap-3">
            <h1 className="font-bold text-white">Last 7 Days</h1>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => (
              <div key={index} className="flex gap-2">
                <Avatar
                  weight="w-[6vh]"
                  height="w-[6vh]"
                  src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688495085/BlockHunt/Drawer/Users/fotod_p7huhe.jpg"
                />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="leading-5 text-primary-gray-light">
                    <span className="font-bold text-white">Blockhunt</span>{' '}
                    hunted a delivery block for you.{' '}
                    <span className="font-semibold">3h</span>
                  </h1>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
  );
}
export default NotificationsDrawer;
