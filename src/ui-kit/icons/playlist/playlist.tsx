import React, { FC } from 'react';
import { IPlaylistIconProps } from "./types";


const PlaylistIcon: FC<IPlaylistIconProps> = ({ width, height }): JSX.Element => {
  return (
    <svg
      width={width || 15}
      height={height || 15}
      viewBox="0 0 19 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>queue_music</title>
      <desc>Created with Sketch.</desc>
      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Rounded" transform="translate(-170.000000, -999.000000)">
          <g id="AV" transform="translate(100.000000, 852.000000)">
            <g id="-Round-/-AV-/-queue_music" transform="translate(68.000000, 142.000000)">
              <g>
                <rect id="Rectangle-Copy-45" x="0" y="0" width="24" height="24"></rect>
                <path
                  d="M13,5 L3,5 C2.45,5 2,5.45 2,6 C2,6.55 2.45,7 3,7 L13,7 C13.55,7 14,6.55 14,6 C14,5.45 13.55,5 13,5 Z M13,9 L3,9 C2.45,9 2,9.45 2,10 C2,10.55 2.45,11 3,11 L13,11 C13.55,11 14,10.55 14,10 C14,9.45 13.55,9 13,9 Z M3,15 L9,15 C9.55,15 10,14.55 10,14 C10,13.45 9.55,13 9,13 L3,13 C2.45,13 2,13.45 2,14 C2,14.55 2.45,15 3,15 Z M18,5 C16.9,5 16,5.9 16,7 L16,13.18 C15.69,13.07 15.35,13 15,13 C13.16,13 11.72,14.64 12.05,16.54 C12.26,17.75 13.25,18.74 14.46,18.95 C16.36,19.28 18,17.84 18,16 L18,7 L20,7 C20.55,7 21,6.55 21,6 C21,5.45 20.55,5 20,5 L18,5 Z"
                  id="🔹Icon-Color" fill="#1D1D1D"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default PlaylistIcon;
