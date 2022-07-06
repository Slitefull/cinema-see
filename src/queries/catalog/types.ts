import { ICatalogElement } from "@/pages/catalog/types";


export interface ISongsQueryResponseModel {
  movies: ICatalogElement[];
}

export interface ISongByIdQueryResponseModel {
  movie: ICatalogElement;
}
