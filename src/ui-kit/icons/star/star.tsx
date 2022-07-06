import React, { FC } from 'react';
import { StarIconProps } from "@/ui-kit/icons/star/types";


const StarIcon: FC<StarIconProps> = (
  {
    size,
    color
  }
): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size || 15}
      width={size || 15}
    >
      <path
        fill={color || "#000000"}
        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
      />
    </svg>
  )
}

export default StarIcon;
