import React, { FC } from "react";
import PageWrapper from "../../components/page-wrapper/page-wrapper";
import { useParams } from "react-router-dom";
import CardsSkeleton from "@/ui-kit/components/sceletons/cards";
import { useMovieByIdQuery } from "@/hooks/getMovieByIdQuery";

import { MovieDirector, MovieHeader, MovieInfo, MovieThumbnail, MovieTitle, } from "./styled";


const MoviePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const movieId = id!.replace(":", "");

  const { data, loading, error } = useMovieByIdQuery(movieId);

  if (error) return <pre>{error.message}</pre>
  if (loading) return <CardsSkeleton/>;

  const { movie } = data!;

  return (
    <PageWrapper>
      <MovieHeader>
        <MovieDirector>{movie.director}</MovieDirector>
        <MovieThumbnail background={movie.thumbnail}/>
        <MovieInfo>
          <MovieTitle>
            {movie.name}
          </MovieTitle>
        </MovieInfo>
      </MovieHeader>
    </PageWrapper>
  );
}

export default MoviePage;
