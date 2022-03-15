import { Dispatch } from "react";
import { connect } from "react-redux";
import { SideMenuAction, closeMenu } from "../actions/side-menu";
import { RootState } from "../reducer";
import Overlay from "../components/overlay";

interface StateProps {
  isOverlaying: boolean;
}

interface DispatchProps {
  closeMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOverlaying: state.ui.isOpeningSideMenu
});

const mapDispatchToProps = (
  dispatch: Dispatch<SideMenuAction>
): DispatchProps => ({
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
