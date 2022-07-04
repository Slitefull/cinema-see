import styled from "styled-components";


export const HeaderWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
  border-bottom: 2px solid rgba(255,255,255,0.25);
}`;

export const HeaderTitle = styled.p` && {
  font-size: 34px;
  font-weight: bold;
  color: #FFFFFF;
  margin: 0;
}`;

export const HeaderLogo = styled.img` && {
  height: auto;
  width: auto;
  max-width: 75px;
}`;
