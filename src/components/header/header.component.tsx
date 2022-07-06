import React, { FC, useContext, useState } from 'react';
import { HeaderLogo, HeaderTitle, HeaderWrapper } from "./styles";
import logo from "../../ui-kit/images/logo.png";
import { ThemePreferenceContext } from "@/app/app";
import CustomSwitcher from "@/ui-kit/components/switchers/custom";
import { Themes } from "@/constants/themes";


const Header: FC = (): JSX.Element => {
  const { setCurrentTheme } = useContext(ThemePreferenceContext)!;
  const [isToggled, setIsToggled] = useState(true);

  const onToggle = () => {
    if (!isToggled) {
      setCurrentTheme(Themes.dark);
      setIsToggled(true);
    } else {
      setCurrentTheme(Themes.light)
      setIsToggled(false);
    }
  }

  return (
    <HeaderWrapper>
      <HeaderLogo src={logo} alt="Logo"/>
      <HeaderTitle>Movie Catalog</HeaderTitle>
      <CustomSwitcher isToggled={isToggled} onToggle={onToggle}/>
    </HeaderWrapper>
  );
};

export default Header;
