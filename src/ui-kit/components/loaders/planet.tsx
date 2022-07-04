import React, { FC } from 'react';

import './style.css'


const PlanetLoader: FC = (): JSX.Element => {
  return (
    <div className="parent-content">
      <div className="content">
        <div className="planet">
          <div className="ring"/>
          <div className="cover-ring"/>
          <div className="spots">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
        </div>
        <p>loading</p>
      </div>
    </div>
  );
};

export default PlanetLoader;
