import React from "react";
import { Room, useToggleLightSwitchMutation } from "../../generated/graphql";

export interface RoomProps {
  room: Room;
  floorColor: string;
}

export const RoomComp: React.VFC<RoomProps> = ({ room, floorColor }) => {
  const { mutate } = useToggleLightSwitchMutation();

  const handleClick = (e) => {
    e.stopPropagation();
    mutate({
      id: room.lights[0].id,
      status: !room.lights[0].on,
    });
  };
  return (
    <div
      className="p-4"
      style={{
        background: floorColor,
      }}
    >
      <div
        onClick={handleClick}
        className="bg-white w-8 h-8 rounded-sm  border border-white"
        style={{
          background: room.lights[0].on ? "white" : floorColor,
        }}
      />
    </div>
  );
};
