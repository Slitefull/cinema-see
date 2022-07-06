import { Theme } from "@/themes/types";
import { Themes } from "@/constants/themes";
import { BLACK, BRIGHT_NAVY_BLUE, CHARCOAL, WHITE, WHITE_SMOKE } from "@/ui-kit/constants/colors";


const body = {
  background: CHARCOAL,
}

const header = {
  text: WHITE,
}

const movieCard = {
  body: WHITE,
  text: BLACK,
  icon: BLACK,
  border: WHITE_SMOKE,
}

const notFound = {
  text: BRIGHT_NAVY_BLUE,
  subText: WHITE,
}

const colors = {
  body,
  header,
  movieCard,
  notFound,
}

export const dark: Theme = {
  name: Themes.dark,
  colors,
}
