import React, { FC, memo, useCallback } from 'react';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import DateIcon from "@/ui-kit/icons/date/date";
import UserIcon from "@/ui-kit/icons/user/user";
import SandClockIcon from "@/ui-kit/icons/sand-clock/sand-clock";
import MovieIcon from "@/ui-kit/icons/movie/movie";

import { IMovieCardProps } from './types/movie-card.types';
import {
  AdditionalInfoWrapper,
  AuthorTitle,
  GenreTitle,
  MainInfoWrapper,
  MovieCardDate,
  MovieCardRating,
  MovieCardThumbnail,
  MovieCardTitle,
  MovieCardWrapper,
  MovieDuration
} from './styled';
import StarIcon from "@/ui-kit/icons/star/star";
import { GOLD } from "@/ui-kit/constants/colors";


export const MovieCard: FC<IMovieCardProps> = memo((
  {
    id,
    name,
    director,
    year,
    duration,
    genre,
    thumbnail,
    rating,
  }
): JSX.Element => {
  const history = useNavigate();
  const theme = useTheme();

  const onClickCardHandler = useCallback(() => {
    history(`/movie:${id}`)
  }, [history, id])

  return (
    <MovieCardWrapper onClick={onClickCardHandler}>
      <MovieCardRating>
        <StarIcon color={GOLD}/> {rating}
      </MovieCardRating>
      <MovieCardThumbnail background={thumbnail}/>
      <MainInfoWrapper>
        <MovieCardDate>
          <DateIcon color={theme.colors.movieCard.icon}/> {year}
        </MovieCardDate>
        <MovieCardTitle>
          {name}
        </MovieCardTitle>
        <GenreTitle>
          <MovieIcon color={theme.colors.movieCard.icon}/> {genre}
        </GenreTitle>
      </MainInfoWrapper>
      <AdditionalInfoWrapper>
        <AuthorTitle>
          <UserIcon color={theme.colors.movieCard.icon}/> {director}
        </AuthorTitle>
        <MovieDuration>
          <SandClockIcon color={theme.colors.movieCard.icon}/> {duration}
        </MovieDuration>
      </AdditionalInfoWrapper>
    </MovieCardWrapper>
  )
});
