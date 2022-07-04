import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import DateIcon from "../../icons/date/date";
import MicrophoneIcon from "../../icons/microphone/microphone";
import SandClockIcon from "../../icons/sand-clock/sand-clock";
import PlaylistIcon from "../../icons/playlist/playlist";

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
import { IMusicCardProps } from './types/music-card.types';


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

  const onClickCardHandler = useCallback(() => {
    history(`/song:${id}`)
  }, [])

  return (
    <MusicCardWrapper onClick={onClickCardHandler}>
      <MusicCardAlbum>
        {album}
      </MusicCardAlbum>
      <MusicCardThumbnail background={thumbnail}/>
      <MainInfoWrapper>
        <MusicCardDate>
          <DateIcon/> {year}
        </MusicCardDate>
        <MusicCardTitle>
          {name}
        </MusicCardTitle>
        <GenreTitle>
          <PlaylistIcon/> {genre}
        </GenreTitle>
      </MainInfoWrapper>
      <AdditionalInfoWrapper>
        <AuthorTitle>
          <MicrophoneIcon/> {author}
        </AuthorTitle>
        <SongDuration>
          <SandClockIcon/> {duration}
        </SongDuration>
      </AdditionalInfoWrapper>
    </MusicCardWrapper>
  )
});
