import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./side-menu.scss";

export interface SideMenuProps {
  locations?: string[];
  isOpen?: boolean;
}

const SideMenu: FC<SideMenuProps> = ({
  // TODO: マスターにしなきゃ
  locations = ["新宿", "清澄", "新大阪", "南港"],
  isOpen = false
}) => {
  return (
    <div className={`SideMenu ${isOpen ? "" : "-close"}`}>
      <ul className="SideMenu-ul">
        {locations.map((locationName: string) => (
          <li className="SideMenu-li" key={locationName}>
            {/* TODO: S3バケットホスティングではクライアントサイドルーティングできないのでとりま消す
            <Link className="SideMenu-location" to={`/${locationName}`}>
              {locationName}
            </Link>
            */}
            <p className="SideMenu-location">{locationName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
