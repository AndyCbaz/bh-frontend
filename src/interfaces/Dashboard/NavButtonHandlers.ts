export interface INavButtonHandlers {
  open: {
    menu: () => void;
    filterSettings: () => void;
    earningsPage: () => void;
    notifications: () => void;
    referrals: () => void;
  };
  close: () => void;
};