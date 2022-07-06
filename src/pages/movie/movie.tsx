import React, { FC } from "react";
import PageWrapper from "../../components/page-wrapper/page-wrapper";
import { useParams } from "react-router-dom";
import MicrophoneIcon from "../../ui-kit/icons/microphone/microphone";
import CardsSkeleton from "@/ui-kit/components/sceletons/cards";
import { useMovieByIdQuery } from "@/hooks/getMovieByIdQuery";

import {
  Lyrics,
  LyricsDescription,
  LyricsWrapper,
  SongAlbum,
  SongAuthor,
  SongHeader,
  SongInfo,
  SongThumbnail,
  SongTitle,
  ThumbnailWrapper
} from "./styled";


const SongPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const movieId = id!.replace(":", "");

  const { data, loading, error } = useMovieByIdQuery(movieId);

  if (error) return <pre>{error.message}</pre>
  if (loading) return <CardsSkeleton/>;

  const { movie } = data!;

  return (
    <PageWrapper>
      <SongHeader>
        <ThumbnailWrapper>
          <SongAlbum>{movie.album}</SongAlbum>
          <SongThumbnail background={movie.thumbnail}/>
        </ThumbnailWrapper>
        <SongInfo>
          <SongTitle>
            {movie.name}
          </SongTitle>
          <SongAuthor>
            <MicrophoneIcon color="#FFFFFF"/> {movie.author}
          </SongAuthor>
        </SongInfo>
      </SongHeader>
      {movie.lyrics && (
        <LyricsWrapper>
          <LyricsDescription>
            {`${movie.name} lyrics`}
          </LyricsDescription>
          <Lyrics>
            {movie.lyrics}
          </Lyrics>
        </LyricsWrapper>
      )}
    </PageWrapper>
  );
}

export default SongPage;
