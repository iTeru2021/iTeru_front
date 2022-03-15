import { Dispatch } from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import { SideMenuAction, openMenu, closeMenu } from "../actions/side-menu";
import { RootState } from "../reducer";

export interface StateProps {
  isOpeningSideMenu: boolean;
}

interface DispatchProps {
  openMenu: () => void;
  closeMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpeningSideMenu: state.ui.isOpeningSideMenu
});

const mapDispatchToProps = (
  dispatch: Dispatch<SideMenuAction>
): DispatchProps => ({
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
