import { ReactNode } from "react";


type ButtonTypes = "button" | "submit";

export interface CustomButtonProps {
  disabled?: boolean;
  children: ReactNode;
  type?: ButtonTypes;
  onClick?: () => void;
}
