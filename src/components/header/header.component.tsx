import React, { FC, useCallback, useContext, useState } from 'react';
import { ThemePreferenceContext } from "@/app/app";
import CustomSwitcher from "@/ui-kit/components/switchers/custom";
import { Themes } from "@/constants/themes";

import { HeaderTitle, HeaderWrapper } from "./styles";


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

  return (
    <HeaderWrapper>
      <HeaderTitle>Movie Catalog</HeaderTitle>
      <CustomSwitcher isToggled={isToggled} onToggle={onToggle}/>
    </HeaderWrapper>
  );
};

export default Header;
