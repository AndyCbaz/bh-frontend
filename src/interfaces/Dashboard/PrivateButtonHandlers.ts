import { IStatePrivateDrawers } from ".."

export interface IPrivateButtonHandlers {
  open: {
    bankInformation: React.Dispatch<React.SetStateAction<IStatePrivateDrawers>>;
    locationSettings: React.Dispatch<React.SetStateAction<IStatePrivateDrawers>>;
    filters: ()=>void;

  };
  close: {
    bankInformation: React.Dispatch<React.SetStateAction<IStatePrivateDrawers>>;
    locationSettings: React.Dispatch<React.SetStateAction<IStatePrivateDrawers>>;
    filters: () => void;
  };
}