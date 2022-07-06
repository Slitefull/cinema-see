import React, { FC, useContext } from 'react';
import { HeaderLogo, HeaderTitle, HeaderWrapper } from "./styles";
import logo from "../../ui-kit/images/logo.png";
import { ThemePreferenceContext } from "@/app/app";


const Header:FC = ():JSX.Element => {
  // @ts-ignore
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext)

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Logo"/>
      <HeaderTitle>Music Catalog</HeaderTitle>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </HeaderWrapper>
  );
};

export default Header;
