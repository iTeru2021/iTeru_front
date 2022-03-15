import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { getRooms } from "../actions/rooms";
import Rooms from "../components/rooms";
import { RootState } from "../reducer";
import { RoomState } from "../constants";

export interface StateProps {
  rooms: RoomState[];
  isFetching: boolean;
}

interface DispatchProps {
  getRooms: (locationName: string) => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  rooms: state.rooms.rooms,
  isFetching: state.rooms.isFetching
});

const mapDispatchToProps = (
  // eslint-disable-next-line
  dispatch: ThunkDispatch<any, any, any>
): DispatchProps => ({
  getRooms: locationName => dispatch(getRooms(locationName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
