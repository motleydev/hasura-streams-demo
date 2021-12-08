import React from 'react';
import {
  Floor,
  Room,
  useUpdateFloorColorMutation,
} from '../../generated/graphql';
import { RoomComp } from '../Room';
import { getNiceColor } from './niceColors';

export interface FloorProps {
  floor: Floor;
}

export const FloorComp: React.VFC<FloorProps> = ({ floor }) => {
  const { mutate } = useUpdateFloorColorMutation();

  const handleClick = () => {
    const color = getNiceColor();
    mutate({
      color,
      id: floor.id,
    });
  };

  return (
    <div onClick={handleClick} className="flex justify-center">
      {floor.rooms.map((room: Room, index) => (
        <RoomComp key={index} room={room} floorColor={floor.color} />
      ))}
    </div>
  );
};
