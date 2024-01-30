import { NavigateFunction } from "react-router-dom";
import { IVerticalMenuButtonHandlers } from "..";

export interface IVerticalMenuProps {
  verticalMenuButtonHandlers: IVerticalMenuButtonHandlers;
  navigate: NavigateFunction;
}