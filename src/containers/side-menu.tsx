import { Dispatch } from "react";
import { connect } from "react-redux";
import { SideMenuAction, openMenu, closeMenu } from "../actions/side-menu";
import SideMenu from "../components/side-menu";
import { RootState } from "../reducer";

interface StateProps {
  isOpen: boolean;
}

interface DispatchProps {
  openMenu: () => void;
  closeMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpen: state.ui.isOpeningSideMenu
});

const mapDispatchToProps = (
  dispatch: Dispatch<SideMenuAction>
): DispatchProps => ({
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
