import {
  IStateMenuButtonHandlers,
  IStateNavButtonHandlers,
  IStatePrivateDrawers,
} from '../interfaces';
import { Location } from 'react-router-dom';

interface ICkeckMenuRouteParams {
  setState: React.Dispatch<React.SetStateAction<IStateNavButtonHandlers>>;
  setVerticalMenu: React.Dispatch<
    React.SetStateAction<IStateMenuButtonHandlers>
  >;
  location: Location;
  setStatePrivateDrawers: React.Dispatch<
    React.SetStateAction<IStatePrivateDrawers>
  >;
}
export const checkPrivateRoute = ({
  setState,
  location,
  setVerticalMenu,
  setStatePrivateDrawers,
}: ICkeckMenuRouteParams) => {
  if (location.pathname === '/app/menu') {
    setState((prevState) => ({ ...prevState, menu: true }));
  } else if (location.pathname === '/app/settings-filters') {
    setState((prevState) => ({ ...prevState, filterSettings: true }));
  } else if (location.pathname === '/app/notifications') {
    setState((prevState) => ({ ...prevState, notifications: true }));
  } else if (location.pathname === '/app/filter-settings') {
    setState((prevState) => ({ ...prevState, filterSettings: true }));
  } else if (location.pathname === '/app/earnings') {
    setState((prevState) => ({ ...prevState, earningsPage: true }));
  } else if (location.pathname === '/app/referrals') {
    setState((prevState) => ({ ...prevState, referrals: true }));
  } else if (location.pathname === '/app/wallet') {
    setVerticalMenu((prevState) => ({ ...prevState, wallet: true }));
  } else if (location.pathname === '/app/schedule-calendar') {
    setVerticalMenu((prevState) => ({ ...prevState, scheduleCalendar: true }));
  }else if (location.pathname === '/app/stadistic') {
    setVerticalMenu((prevState) => ({ ...prevState, stadistic: true }));
  } else if (location.pathname === '/app/profile') {
    setVerticalMenu((prevState) => ({ ...prevState, profile: true }));
  } else if (location.pathname === '/app/settings') {
    setVerticalMenu((prevState) => ({ ...prevState, settigns: true }));
  } else if (location.pathname === '/app/bank-information') {
    setStatePrivateDrawers((prevState) => ({
      ...prevState,
      bankInformation: true,
    }));
  } else if (location.pathname === '/app/filters') {
    setStatePrivateDrawers((prevState) => ({
      ...prevState,
      filters: true,
    }));
  } else if (location.pathname === '/app/location-settings') {
    setStatePrivateDrawers((prevState) => ({
      ...prevState,
      locationSettings: true,
    }));
  } else {
    setState(() => ({
      menu: false,
      notifications: false,
      filterSettings: false,
      earningsPage: false,
      referrals: false,
    }));
    setVerticalMenu(() => ({
      scheduleCalendar: false,
      stadistic: false,
      earnings: false,
      wallet: false,
      profile: false,
      settigns: false,
      helpAndChat: false,
      logout: false,
    }));
    setStatePrivateDrawers(() => ({
      bankInformation: false,
      locationSettings: false,
      filters: false
    }));
  }
};
