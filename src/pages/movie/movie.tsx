import React, { FC } from "react";
import PageWrapper from "../../components/page-wrapper/page-wrapper";
import { useParams } from "react-router-dom";
import CardsSkeleton from "@/ui-kit/components/sceletons/cards";
import { useMovieByIdQuery } from "@/hooks/getMovieByIdQuery";

import {
  HeaderContainer,
  MovieDescription,
  MovieInfoWrapper,
  MovieSubtitle,
  MovieThumbnail,
  MovieTitle,
  MovieYear
} from "@/pages/movie/styled";


const MoviePage: FC = (): JSX.Element => {
  const { id } = useParams();
  const movieId = id!.replace(":", "");

  const { data, loading, error } = useMovieByIdQuery(movieId);

  if (error) return <pre>{error.message}</pre>
  if (loading) return <CardsSkeleton/>;

  const { movie } = data!;

  return (
    <PageWrapper>
      <HeaderContainer>
        <MovieThumbnail background={movie.thumbnail}/>
        <MovieInfoWrapper>
          <MovieTitle>{movie.name} <MovieYear>{movie.year}</MovieYear></MovieTitle>
          <MovieSubtitle>{movie.genre} {movie.duration}</MovieSubtitle>
          <MovieDescription>{movie.description}</MovieDescription>
        </MovieInfoWrapper>
      </HeaderContainer>
    </PageWrapper>
  );
}

export default MoviePage;
