import styled from "styled-components";
import { Theme } from "@/themes/types";


export const HeaderWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
}`;

export const HeaderTitle = styled.p<{ theme: Theme }>` && {
  font-size: 34px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.header.text};
  margin: 0;
}`;

export const HeaderLogo = styled.img` && {
  height: auto;
  width: auto;
  max-width: 75px;
}`;
