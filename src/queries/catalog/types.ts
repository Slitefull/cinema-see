import { ICatalogElement } from "@/pages/catalog/types";


export interface ISongsQueryResponseModel {
  songs: ICatalogElement[];
}

export interface ISongByIdQueryResponseModel {
  song: ICatalogElement;
}
