import styled from "styled-components";
import { BYZANTIUM, WHITE } from "@/ui-kit/constants/colors";


export const StyledCustomButton = styled.button` && {
  gap: 13px;
  width: 100%;
  height: 50px;
  background: ${BYZANTIUM};
  border-radius: 6px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: ${WHITE};
  cursor: pointer;
}`
