import React, { FC } from "react";
import "./header.scss";
import "./hamburger.css";

export interface HeaderProps {
  isOpeningSideMenu?: boolean;
  openMenu?: () => void;
  closeMenu?: () => void;
}

const Header: FC<HeaderProps> = ({
  isOpeningSideMenu = false,
  openMenu = () => {},
  closeMenu = () => {}
}) => (
  <header className="Header">
    <h1>iTeru</h1>
    <div
      className={`menu-trigger ${isOpeningSideMenu ? "active" : ""}`}
      onClick={() => {
        if (isOpeningSideMenu) closeMenu();
        else openMenu();
      }}
    >
      <span />
      <span />
      <span />
    </div>
  </header>
);

export default Header;
