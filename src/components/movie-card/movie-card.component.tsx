import React, { FC, memo, useCallback } from 'react';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import DateIcon from "@/ui-kit/icons/date/date";
import MicrophoneIcon from "@/ui-kit/icons/microphone/microphone";
import SandClockIcon from "@/ui-kit/icons/sand-clock/sand-clock";
import PlaylistIcon from "@/ui-kit/icons/playlist/playlist";

import { IMovieCardProps } from './types/movie-card.types';
import {
  AdditionalInfoWrapper,
  AuthorTitle,
  GenreTitle,
  MainInfoWrapper,
  MovieCardAlbum,
  MovieCardDate,
  MovieCardThumbnail,
  MovieCardTitle,
  MovieCardWrapper,
  MovieDuration
} from './styled';


export const MovieCard: FC<IMovieCardProps> = memo((
  {
    id,
    album,
    thumbnail,
    author,
    name,
    year,
    duration,
    genre,
  }
): JSX.Element => {
  const history = useNavigate();
  const theme = useTheme();

  const onClickCardHandler = useCallback(() => {
    history(`/movie:${id}`)
  }, [history, id])

  return (
    <MovieCardWrapper onClick={onClickCardHandler}>
      <MovieCardAlbum>
        {album}
      </MovieCardAlbum>
      <MovieCardThumbnail background={thumbnail}/>
      <MainInfoWrapper>
        <MovieCardDate>
          <DateIcon color={theme.colors.movieCard.icon}/> {year}
        </MovieCardDate>
        <MovieCardTitle>
          {name}
        </MovieCardTitle>
        <GenreTitle>
          <PlaylistIcon color={theme.colors.movieCard.icon}/> {genre}
        </GenreTitle>
      </MainInfoWrapper>
      <AdditionalInfoWrapper>
        <AuthorTitle>
          <MicrophoneIcon color={theme.colors.movieCard.icon}/> {author}
        </AuthorTitle>
        <MovieDuration>
          <SandClockIcon color={theme.colors.movieCard.icon}/> {duration}
        </MovieDuration>
      </AdditionalInfoWrapper>
    </MovieCardWrapper>
  )
});
