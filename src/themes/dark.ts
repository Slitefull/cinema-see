import { Theme } from "@/themes/types";
import { Themes } from "@/constants/themes";


const body = {
  background: '#3c4359',
}

const header = {
  text: '#FFFFFF',
}

const movieCard = {
  body: "#FFFFFF",
  text: "#000000",
  icon: "#000000",
  border: '#F4F4F4',
}

const notFound = {
  text: '#0765E3',
  subText: '#FFFFFF',
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
