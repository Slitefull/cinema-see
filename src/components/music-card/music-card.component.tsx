import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import DateIcon from "@/ui-kit/icons/date/date";
import MicrophoneIcon from "@/ui-kit/icons/microphone/microphone";
import SandClockIcon from "@/ui-kit/icons/sand-clock/sand-clock";
import PlaylistIcon from "@/ui-kit/icons/playlist/playlist";
import { useTheme } from "styled-components";

import { IMusicCardProps } from './types/music-card.types';
import {
  AdditionalInfoWrapper,
  AuthorTitle,
  GenreTitle,
  MainInfoWrapper,
  MusicCardAlbum,
  MusicCardDate,
  MusicCardThumbnail,
  MusicCardTitle,
  MusicCardWrapper,
  SongDuration
} from './styled';


export const MusicCard: FC<IMusicCardProps> = memo((
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
  }, [])

  return (
    <MusicCardWrapper onClick={onClickCardHandler}>
      <MusicCardAlbum>
        {album}
      </MusicCardAlbum>
      <MusicCardThumbnail background={thumbnail}/>
      <MainInfoWrapper>
        <MusicCardDate>
          <DateIcon color={theme.colors.movieCard.icon}/> {year}
        </MusicCardDate>
        <MusicCardTitle>
          {name}
        </MusicCardTitle>
        <GenreTitle>
          <PlaylistIcon color={theme.colors.movieCard.icon}/> {genre}
        </GenreTitle>
      </MainInfoWrapper>
      <AdditionalInfoWrapper>
        <AuthorTitle>
          <MicrophoneIcon color={theme.colors.movieCard.icon}/> {author}
        </AuthorTitle>
        <SongDuration>
          <SandClockIcon color={theme.colors.movieCard.icon}/> {duration}
        </SongDuration>
      </AdditionalInfoWrapper>
    </MusicCardWrapper>
  )
});
