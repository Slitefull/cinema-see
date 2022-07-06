import 'styled-components';


interface Body {
  background: string;
}

interface Header {
  text: string;
}

interface MovieCard {
  body: string;
  text: string;
  icon: string;
  border: string;
}

interface NotFound {
  text: string;
  subText: string;
}

interface Colors {
  body: Body;
  header: Header;
  movieCard: MovieCard;
  notFound: NotFound;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
  }
}
