import React, { FC, useEffect } from "react";

import Room, { RoomProps } from "./room";
import "./rooms.scss";

export interface RoomsProps {
  rooms?: {
    roomId?: string;
    roomName?: string;
    isUsing?: boolean;
    elapsedMinutes?: number;
  }[];
  isFetching?: boolean;
  getRooms?: (locationName: string) => void;
}

const Rooms: FC<RoomsProps> = ({
  rooms = [],
  isFetching = false,
  getRooms = () => {}
}) => {
  useEffect(() => {
    const path = decodeURI(window.location.pathname.replace("/", ""));
    getRooms(path);
  }, []);

  // 使用中の部屋は下に表示する
  const sorted = rooms.slice().sort((a, b) => {
    if (a.isUsing && !b.isUsing) return 1;
    if (!a.isUsing && b.isUsing) return -1;

    return 0;
  });

  return (
    <div className="Rooms">
      <img
        className={`Rooms-loading ${isFetching ? "-show" : "-hidden"}`}
        src="/loading.gif"
        alt="Now Loading"
      />
      {sorted.map((room: RoomProps) => {
        return (
          <Room
            key={room.roomId}
            roomName={room.roomName}
            elapsedMinutes={room.elapsedMinutes}
            isUsing={room.isUsing}
            co2={room.co2}
          />
        );
      })}
    </div>
  );
};

export default Rooms;
