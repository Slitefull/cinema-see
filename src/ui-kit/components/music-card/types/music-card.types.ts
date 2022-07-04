import { GenresMusic } from "@constants/genres";

//TODO OMIT
export interface IMusicCardProps {
  id: string;
  album: string;
  thumbnail: string;
  author: string;
  name: string;
  year: number;
  duration: string;
  genre: GenresMusic;
}
