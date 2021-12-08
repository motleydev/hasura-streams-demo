import React from 'react';
import { Building, Floor } from '../../generated/graphql';
import { FloorComp } from '../Floor';

export interface BuildingProps {
  building: Partial<Building>;
}

export const BuildingComp: React.VFC<BuildingProps> = ({ building }) => {
  return (
    <div className="w-72 grid grid-cols-1">
      {building.floors.map((floor: Floor, index) => {
        return <FloorComp key={index} floor={floor} />;
      })}
    </div>
  );
};
