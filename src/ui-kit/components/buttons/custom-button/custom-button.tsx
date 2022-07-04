import React, { FC } from 'react';

import { CustomButtonProps } from "./types/custom-button.types";
import { StyledCustomButton } from "./styled";


const CustomButton: FC<CustomButtonProps> = (
  {
    disabled,
    children,
    type
  }
): JSX.Element => {
  return (
    <StyledCustomButton
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
