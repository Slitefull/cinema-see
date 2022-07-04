import React, { FC } from 'react';
import { ISandClockIconProps } from "@ui-kit/icons/sand-clock/types";


const SandClockIcon: FC<ISandClockIconProps> = ({ width, height }): JSX.Element => {
  return (
    <svg
      height={height || 15}
      width={width || 15}
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      viewBox="0 0 32 32"
    >
      <path className="st1" d="M22,6H10C8.3,6,7,4.7,7,3v0h18v0C25,4.7,23.7,6,22,6z"/>
      <path className="st1" d="M10,26h12c1.7,0,3,1.3,3,3v0H7v0C7,27.3,8.3,26,10,26z"/>
      <path className="st1"
            d="M23,26v-4c0-0.6-0.3-1.2-0.8-1.6l-3.7-2.8c-1.1-0.8-1.1-2.4,0-3.2l3.7-2.8c0.5-0.4,0.8-1,0.8-1.6V6"/>
      <path className="st1"
            d="M9,6v4c0,0.6,0.3,1.2,0.8,1.6l3.7,2.8c1.1,0.8,1.1,2.4,0,3.2l-3.7,2.8C9.3,20.8,9,21.4,9,22v4"/>
      <polygon className="st1" points="11,26 16,21 21,26 "/>
      <polygon className="st1" points="16,12 13,10 19,10 "/>
    </svg>
  )
}

export default SandClockIcon;
