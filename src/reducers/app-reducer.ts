import { Reducer } from "redux";
import {
  RoomsAction,
  FETCHING_ROOMS,
  SUCCEED_ROOMS,
  FAILED_ROOMS
} from "../actions/rooms";

export interface AppState {
  isFetching: boolean;
  error: boolean;
  message: string;
}

const initialState: AppState = {
  isFetching: false,
  error: false,
  message: ""
};

const appReducer: Reducer<AppState, RoomsAction> = (
  state: AppState = initialState,
  action: RoomsAction
): AppState => {
  switch (action.type) {
    case FETCHING_ROOMS:
      return {
        ...state,
        isFetching: true
      };
    case SUCCEED_ROOMS:
      return {
        ...state,
        isFetching: false,
        error: false
      };
    case FAILED_ROOMS:
      return {
        ...state,
        isFetching: false,
        message: action.payload.error.message,
        error: true
      };
    default:
      return state;
  }
};

export default appReducer;
