//Importaciones de react
import { useEffect, useState } from 'react';
//Importacion de fontawesome para iconos
import {
  faBars,
  faBell,
  faGear,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Importacion de componentes
import {
  Carrousel,
  NavHeaderButton,
  NavHeaderEarningsButton,
} from '../components';
//Importacion de Mui para Drawers
import { Drawer, Modal, SwipeableDrawer } from '@mui/material';
//Importacion de sub layouts
import VerticalMenu from './Dashboard/VerticalMenu';
//Importacion de constantes
import { wearhouses } from '../constants/apiResponses/Dashboard';
//Importacion de react router dom
import {
  useLocation,
  useNavigate,
  Location,
  NavigateFunction,
} from 'react-router-dom';
//Importacion de interfaces
import {
  INavButtonHandlers,
  IPrivateButtonHandlers,
  IStateMenuButtonHandlers,
  IStateNavButtonHandlers,
  IStatePrivateDrawers,
  IVerticalMenuButtonHandlers,
} from '../interfaces';
//Importacion de helpers
import { checkPrivateRoute } from '../helpers';
//Importacion de componentes
import FloatingButtons from '../components/Dashboard/FloatingButtons';
import CardBlocks from '../components/Dashboard/CardDashboardBlocks';
//Importacion de constantes
import { dataDashboardCardBlocks } from '../constants/apiResponses/dataDashboardCardBlocks';
//Importacion de sub layouts
import LogoutModal from './Dashboard/LogoutModal';
import NotificationsDrawer from './Dashboard/NotificationsDrawer';
//Importacion de estilos
import '../styles/Dashboard/DashboardLayout.css';
import EarningsDrawer from './Dashboard/EarningsDrawer';
import WalletDrawer from './Dashboard/WalletDrawer';
import BankInformationDrawer from './Dashboard/Wallet/BankInformationDrawer';
import ReferralsDrawer from './Dashboard/ReferralsDrawer';
import ScheduleCalendar from './Dashboard/ScheduleCalendarDrawer';
import Stadistics from './Dashboard/StadisticsDrawer';
import Profile from './Dashboard/ProfileDrawer';
import SettingsLocation from './Dashboard/SettingsLocationDrawer';
import SettingsGeneral from './Dashboard/SettingsGeneral';
import Filters from './Dashboard/Filters';
import SettingsFilters from './Dashboard/SettingsFilter';

const Dashboard = () => {
  // Hooks
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  // Variables Reactivas
  //---------------variable para el estado de los botones del header ------------------
  const [stateNavButtonHandler, setStateNavButtonHandler] =
    useState<IStateNavButtonHandlers>({
      menu: false,
      filterSettings: false,
      earningsPage: false,
      notifications: false,
      referrals: false,
    });
  //---------------variable para el estado de los botones de menu ------------------
  const [stateVerticalMenuButtonHandler, setStateVerticalMenuButtonHandler] =
    useState<IStateMenuButtonHandlers>({
      scheduleCalendar: false,
      stadistic: false,
      earnings: false,
      wallet: false,
      profile: false,
      settigns: false,
      helpAndChat: false,
      logout: false,
    });
  // ---------------variable para el estado de los private drawers ------------------
  const [statePrivateDrawers, setStatePrivateDrawers] =
    useState<IStatePrivateDrawers>({
      bankInformation: false,
      locationSettings: false,
      filters: false,
    });

  // Handlers
  const navButtonHandlers: INavButtonHandlers = {
    open: {
      menu: () => navigate('/app/menu'),
      filterSettings: () => {navigate('/app/settings-filters')},
      earningsPage: () => navigate('/app/earnings'),
      notifications: () => navigate('/app/notifications'),
      referrals: () => {
        navigate('/app/referrals');
      },
    },
    close: () => navigate('/app/dashboard'),
  };
  const verticalMenuButtonHandlers: IVerticalMenuButtonHandlers = {
    open: [
      (path) => navigate(path),
      () => {
        setStateVerticalMenuButtonHandler((prevState) => ({
          ...prevState,
          logout: true,
        }));
      },
    ],
    close: {
      general: () => navigate('/app/dashboard'),
      logout: () => {
        setStateVerticalMenuButtonHandler((prevState) => ({
          ...prevState,
          logout: false,
        }));
      },
    },
  };
  const privateButtonHandlers: IPrivateButtonHandlers = {
    open: {
      bankInformation: (prevState) => ({ ...prevState, bankInformation: true }),
      locationSettings: (prevState) => ({
        ...prevState,
        locationSettings: true,
      }),
      filters: () => {
        setStatePrivateDrawers((prevState) => ({
          ...prevState,
          filters: true,
        }));
      },
    },
    close: {
      bankInformation: (prevState) => ({
        ...prevState,
        bankInformation: false,
      }),
      locationSettings: (prevState) => ({
        ...prevState,
        locationSettings: false,
      }),
      filters: () => {
        navigate('/app/dashboard');
      },
    },
  };

  // UseEffects
  useEffect(() => {
    checkPrivateRoute({
      location: location,
      setState: setStateNavButtonHandler,
      setVerticalMenu: setStateVerticalMenuButtonHandler,
      setStatePrivateDrawers: setStatePrivateDrawers,
    });
  }, [location]);

  return (
    <>
      <header className="header-dashboard">
        {/* Esta es la seccion de navegacion dentro del dashboard */}
        <nav className="header-dashboard-nav">
          <NavHeaderButton
            onClick={navButtonHandlers.open.menu}
            icon={faBars}
          />
          <NavHeaderButton
            onClick={navButtonHandlers.open.filterSettings}
            icon={faGear}
          />
          <NavHeaderEarningsButton
            onClick={navButtonHandlers.open.earningsPage}
          />
          <NavHeaderButton
            onClick={navButtonHandlers.open.notifications}
            icon={faBell}
          />
          <NavHeaderButton
            onClick={navButtonHandlers.open.referrals}
            icon={faUserPlus}
          />
        </nav>
        {/* Esta es la seccion de wearhouses dentro del header */}
        <section className="header-dashboard-wearhouses">
          <Carrousel
            padding="p-2"
            activeDots={false}
            items={wearhouses}
            gap="gap-2"
          >
            {wearhouses.map((item, index) => (
              <button
                key={index}
                id={item.title}
                className="flex min-w-max items-center justify-center gap-1 rounded-full border-2 p-1"
              >
                <FontAwesomeIcon
                  className="h-[4vw] w-[4vw] rounded-full border-2 bg-primary-gray-light p-1"
                  icon={item.icon}
                />
                <h1 className="text-[3.5vw] text-white">{item.title}</h1>
              </button>
            ))}
          </Carrousel>
        </section>
      </header>
      {/* Esta es la seccion de contenido dentro del dashboard */}
      <main className="main-dashboard">
        {/* Esta seccion es el contenido de la pagina */}
        {dataDashboardCardBlocks.map((card, index) => (
          <CardBlocks key={index} info={card} />
        ))}
        {/* Esta seccion es el menu flotante de opciones */}
        <nav className="main-dashboard-floating-menu">
          <FloatingButtons navigate={navigate} />
        </nav>
      </main>
      {/* Swipeable Drawer de Vertical Menu */}
      <SwipeableDrawer
        anchor="left"
        open={stateNavButtonHandler.menu}
        onClose={navButtonHandlers.close}
        onOpen={navButtonHandlers.open.menu}
        PaperProps={{
          sx: {
            minWidth: '65vw',
          },
        }}
      >
        <VerticalMenu
          navigate={navigate}
          verticalMenuButtonHandlers={verticalMenuButtonHandlers}
        />
      </SwipeableDrawer>
      {/* MENU DE FILTROS */}
      <SwipeableDrawer
        anchor="bottom"
        open={statePrivateDrawers.filters}
        onClose={privateButtonHandlers.close.filters}
        onOpen={privateButtonHandlers.open.filters}
        PaperProps={{
          sx: {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            backgroundColor: '#F4D64C',
          },
        }}
      >
        <Filters navigate={navigate} />
      </SwipeableDrawer>
      {/* CONFIG MENU */}
      <SwipeableDrawer
        anchor="bottom"
        open={stateNavButtonHandler.filterSettings}
        onClose={navButtonHandlers.close}
        onOpen={navButtonHandlers.open.filterSettings}
        PaperProps={{
          sx: {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            backgroundColor: '#F4D64C',
          },
        }}
      >
        <SettingsFilters navigate={navigate} />
      </SwipeableDrawer>
      {/* Drawer de Earnings */}
      <Drawer
        anchor="right"
        open={stateNavButtonHandler.earningsPage}
        onClose={navButtonHandlers.close}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <EarningsDrawer navigate={navigate} />
      </Drawer>
      {/* Drawer de Notifications */}
      <Drawer
        anchor="right"
        open={stateNavButtonHandler.notifications}
        onClose={navButtonHandlers.close}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <NotificationsDrawer navigate={navigate} />
      </Drawer>
      {/* Drawer de Wallet */}
      <Drawer
        anchor="right"
        open={stateVerticalMenuButtonHandler.wallet}
        onClose={verticalMenuButtonHandlers.close.general}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <WalletDrawer navigate={navigate} />
      </Drawer>
      {/* Drawer de Banck Informaction */}
      <Drawer
        anchor="right"
        open={statePrivateDrawers.bankInformation}
        onClose={privateButtonHandlers.close.bankInformation}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <BankInformationDrawer navigate={navigate} />
      </Drawer>
      {/* Drawer de referrals */}
      <Drawer
        anchor="right"
        open={stateNavButtonHandler.referrals}
        onClose={navButtonHandlers.close}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <ReferralsDrawer navigate={navigate} />
      </Drawer>
      {/* Schedule Calendar */}
      <Drawer
        anchor="right"
        open={stateVerticalMenuButtonHandler.scheduleCalendar}
        onClose={verticalMenuButtonHandlers.close.general}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <ScheduleCalendar navigate={navigate} />
      </Drawer>
      {/* Profile */}
      <Drawer
        anchor="right"
        open={stateVerticalMenuButtonHandler.profile}
        onClose={verticalMenuButtonHandlers.close.general}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Profile navigate={navigate} />
      </Drawer>
      {/* Location Settings */}
      <Drawer
        anchor="right"
        open={statePrivateDrawers.locationSettings}
        onClose={privateButtonHandlers.close.locationSettings}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <SettingsLocation navigate={navigate} />
      </Drawer>
      {/* Stadistics */}
      <Drawer
        anchor="right"
        open={stateVerticalMenuButtonHandler.stadistic}
        onClose={verticalMenuButtonHandlers.close.general}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <Stadistics navigate={navigate} />
      </Drawer>
      {/* Settings General */}
      <Drawer
        anchor="right"
        open={stateVerticalMenuButtonHandler.settigns}
        onClose={verticalMenuButtonHandlers.close.general}
        PaperProps={{
          sx: {
            width: '100%',
            backgroundColor: '#222529',
          },
        }}
      >
        <SettingsGeneral navigate={navigate} />
      </Drawer>
      {/* Modal de logout*/}
      <Modal
        open={stateVerticalMenuButtonHandler.logout}
        onClose={verticalMenuButtonHandlers.close.logout}
      >
        <div className="absolute left-[50%] top-[50%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white py-1 ">
          <LogoutModal setOpenLogout={setStateVerticalMenuButtonHandler} />
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
