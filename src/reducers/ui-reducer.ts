import { Reducer } from "redux";
import {
  SideMenuAction,
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU
} from "../actions/side-menu";

export interface UIState {
  isOpeningSideMenu: boolean;
  isMonitorWide: boolean;
}

const initialState: UIState = {
  isOpeningSideMenu: false,
  isMonitorWide: false
};

const uiReducer: Reducer<UIState, SideMenuAction> = (
  state: UIState = initialState,
  action: SideMenuAction
): UIState => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return {
        ...state,
        isOpeningSideMenu: true
      };
    case CLOSE_SIDE_MENU:
      return {
        ...state,
        isOpeningSideMenu: false
      };
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const check: never = action.type;

      return state;
  }
};

export default uiReducer;
