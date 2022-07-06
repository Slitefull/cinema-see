import { Theme } from "@/themes/types";
import { Themes } from "@/constants/themes";
import { BISQUE, CHARCOAL, DARK_LIVER, DAVY_GREY, WHITE } from "@/ui-kit/constants/colors";


const body = {
  background: BISQUE,
}

const header = {
  text: DAVY_GREY,
}

const movieCard = {
  body: CHARCOAL,
  text: WHITE,
  icon: WHITE,
  border: DARK_LIVER,
}

const notFound = {
  text: DAVY_GREY,
  subText: DAVY_GREY,
}

const colors = {
  body,
  header,
  movieCard,
  notFound,
}

export const light: Theme = {
  name: Themes.light,
  colors,
}
