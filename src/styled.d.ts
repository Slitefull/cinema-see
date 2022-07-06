import 'styled-components';


interface Header {
  text: string;
}

interface MovieCard {
  body: string;
  text: string;
  icon: string;
  border: string;
}

interface Colors {
  body: string;
  header: Header;
  movieCard: MovieCard;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
  }
}
