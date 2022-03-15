import { Reducer } from "redux";
import {
  RoomsAction,
  FETCHING_ROOMS,
  SUCCEED_ROOMS,
  FAILED_ROOMS
} from "../actions/rooms";
import { RoomState } from "../constants";

export interface RoomsState {
  rooms: RoomState[];
  isFetching: boolean;
}

const initialState: RoomsState = {
  rooms: [],
  isFetching: false
};

const roomsReducer: Reducer<RoomsState, RoomsAction> = (
  state: RoomsState = initialState,
  action: RoomsAction
): RoomsState => {
  switch (action.type) {
    case FETCHING_ROOMS:
      return {
        ...state,
        isFetching: true
      };
    case SUCCEED_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
        isFetching: false
      };
    case FAILED_ROOMS:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default roomsReducer;
