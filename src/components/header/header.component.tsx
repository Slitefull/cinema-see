import React, { FC } from 'react';
import { HeaderLogo, HeaderTitle, HeaderWrapper } from "./styles";
import logo from "../../ui-kit/images/logo.png";


const Header:FC = ():JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Logo"/>
      <HeaderTitle>Music Catalog</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
