import React, { FC } from "react";
import "./overlay.scss";

export interface OverlayProps {
  isOverlaying?: boolean;
  closeMenu?: () => void;
}

const Overlay: FC<OverlayProps> = ({
  isOverlaying = false,
  closeMenu = () => {}
}) => (
  <div
    className={`Overlay ${isOverlaying ? "-show" : "-hide"}`}
    onClick={() => {
      if (isOverlaying) closeMenu();
    }}
  />
);

export default Overlay;
