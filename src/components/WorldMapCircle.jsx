import React, { useContext } from "react";
import { AppContext } from "../App";
import { ReactComponent as WorldImg } from "../assets/world.svg";
import "./WorldMapCircle.scss";

const WorldMapCircle = () => {
  const [{ mapCircle }] = useContext(AppContext);

  return (
    <div className='WorldMapCircle'>
      <WorldImg />
      <svg className='circle' width='1010' height='666' viewBox='0 0 1010 666'>
        <circle
          cx={mapCircle.x}
          cy={mapCircle.y}
          r={mapCircle.range}
          vectorEffect='non-scaling-stroke'
        />
      </svg>
    </div>
  );
};

export default WorldMapCircle;
