import { useQuery } from "@apollo/client";
import { ISongsQueryResponseModel } from "@/queries/catalog/types";
import { MOVIES_QUERY } from "@/queries/catalog/catalog";


export const useMoviesQuery = () => {
  const { data, loading, error } = useQuery<ISongsQueryResponseModel>(MOVIES_QUERY);
  return { data, loading, error }
}
