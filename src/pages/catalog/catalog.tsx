import React, { FC } from "react";
import { MovieCard } from "@/components/movie-card/movie-card.component";
import CardsSkeleton from "@/ui-kit/components/sceletons/cards";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { useMoviesQuery } from "@/hooks/getMoviesQuery";

import { CatalogWrapper } from "./styles";


const CatalogPage: FC = (): JSX.Element => {
  const { data, loading, error } = useMoviesQuery();

  if (error) return <pre>{error.message}</pre>
  if (loading) return <CardsSkeleton/>;

  const { movies } = data!;

  return (
    <PageWrapper>
      <CatalogWrapper>
        {movies.map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            album={movie.album}
            thumbnail={movie.thumbnail}
            author={movie.author}
            name={movie.name}
            year={movie.year}
            duration={movie.duration}
            genre={movie.genre}
          />
        ))}
      </CatalogWrapper>
    </PageWrapper>
  );
}

export default CatalogPage;
