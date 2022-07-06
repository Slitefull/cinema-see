import React, { FC, useCallback, useContext, useState } from 'react';
import { ThemePreferenceContext } from "@/app/app";
import CustomSwitcher from "@/ui-kit/components/switchers/custom";
import { Themes } from "@/constants/themes";
import CustomButton from "@/ui-kit/components/buttons/custom-button/custom-button";
import { LS_AUTH_KEY } from "@/constants/localStorage";

import { HeaderTitle, HeaderWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "@/constants/routes";



const Header: FC = (): JSX.Element => {

  const { setCurrentTheme } = useContext(ThemePreferenceContext)!;
  const [isToggled, setIsToggled] = useState(true);

  const onToggle = useCallback(() => {
    if (!isToggled) {
      setCurrentTheme(Themes.dark);
      setIsToggled(true);
    } else {
      setCurrentTheme(Themes.light)
      setIsToggled(false);
    }
  }, [isToggled, setCurrentTheme])

  const onLogoutHandler = useCallback(() => {
    localStorage.removeItem(LS_AUTH_KEY);
  }, [])

  return (
    <HeaderWrapper>
      <HeaderTitle>Movie Catalog</HeaderTitle>
      <CustomSwitcher isToggled={isToggled} onToggle={onToggle}/>
      <CustomButton onClick={onLogoutHandler}>Logout</CustomButton>
    </HeaderWrapper>
  );
};

export default Header;
