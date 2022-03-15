import { connect } from "react-redux";

import Message from "../components/message";
import { RootState } from "../reducer";

export interface StateProps {
  message: string;
  error: boolean;
}

const mapStateToProps = (state: RootState): StateProps => ({
  message: state.app.message,
  error: state.app.error
});

export default connect(mapStateToProps)(Message);
