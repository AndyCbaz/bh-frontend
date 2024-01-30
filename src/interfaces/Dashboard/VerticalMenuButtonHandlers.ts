export interface IVerticalMenuButtonHandlers {
  open: [(path: string) => void, () => void];
  close: {
    general: () => void;
    logout: () => void;
  };
}
