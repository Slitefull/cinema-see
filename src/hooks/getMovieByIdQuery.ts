import { useQuery } from "@apollo/client";
import { ISongByIdQueryResponseModel } from "@/queries/catalog/types";
import { MOVIE_BY_ID_QUERY } from "@/queries/catalog/catalog";


export const useMovieByIdQuery = (id: string | number) => {
  const { data, loading, error } = useQuery<ISongByIdQueryResponseModel>(MOVIE_BY_ID_QUERY, {
    variables: { id }
  });
  return { data, loading, error }
}
