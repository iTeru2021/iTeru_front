import { Dispatch } from "redux";
import { fetchRooms } from "../modules/api";
import { RoomState } from "../constants";

// async actions
export const FETCHING_ROOMS = "FETCHING_ROOMS";
export const SUCCEED_ROOMS = "SUCCESS_ROOMS";
export const FAILED_ROOMS = "FAILED_ROOMS";

export const fetchingRooms = () => ({
  type: FETCHING_ROOMS as typeof FETCHING_ROOMS
});

export const succeedRooms = (result: RoomState[]) => ({
  type: SUCCEED_ROOMS as typeof SUCCEED_ROOMS,
  payload: {
    rooms: result
  }
});

export const failedRooms = (error: Error) => ({
  type: FAILED_ROOMS as typeof FAILED_ROOMS,
  payload: {
    error
  },
  error: true
});

export const getRooms = (locationName: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchingRooms());
      const result = await fetchRooms(locationName);
      dispatch(succeedRooms(result));
    } catch (error) {
      dispatch(failedRooms(error));
    }
  };
};

export type RoomsAction =
  | ReturnType<typeof fetchingRooms>
  | ReturnType<typeof succeedRooms>
  | ReturnType<typeof failedRooms>;
