import React, { FC } from 'react';

import { CustomSwitcherProps } from "./types/custom";
import "./style.css";


const CustomSwitcher: FC<CustomSwitcherProps> = ({ isToggled, onToggle }): JSX.Element => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span className="switch"/>
    </label>
  );
};

export default CustomSwitcher;
