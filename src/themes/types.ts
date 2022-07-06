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

export interface Theme {
  name: string;
  colors: Colors;
}
