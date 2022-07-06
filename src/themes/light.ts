import { Theme } from "@/themes/types";
import { Themes } from "@/constants/themes";


const body = {
  background: '#FFE6C9',
}

const header = {
  text: '#5e5252',
}

const movieCard = {
  body: "#3c4359",
  text: "#FFFFFF",
  icon: "#FFFFFF",
  border: '#4c4c4c63',
}

const notFound = {
  text: '#5e5252',
  subText: '#5e5252',
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
