import React, { FC } from "react";
import PageWrapper from "../../ui-kit/components/page-wrapper/page-wrapper";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MicrophoneIcon from "../../ui-kit/icons/microphone/microphone";
import { songByIdQuery } from "../../queries/catalog/catalog";

import {
  Lyrics,
  LyricsDescription,
  LyricsWrapper,
  SongAlbum,
  SongAuthor,
  SongHeader,
  SongInfo,
  SongThumbnail,
  SongTitle, ThumbnailWrapper
} from "./styled";
import { ISongByIdQueryResponseModel } from "@/queries/catalog/types";


const SongPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const songId = id!.replace(":", "");

  const { data, loading, error } = useQuery<ISongByIdQueryResponseModel>(songByIdQuery, {
    variables: {
      id: songId
    }
  });

  if (error) return <pre>{error.message}</pre>
  if (loading) return <div>Loading...</div>;

  const { song } = data!;

  const songLink = song.videoURL.split('=')[1];

  return (
    <PageWrapper>
      <SongHeader>
        <ThumbnailWrapper>
          <SongAlbum>{song.album}</SongAlbum>
          <SongThumbnail background={song.thumbnail}/>
        </ThumbnailWrapper>
        <SongInfo>
          <SongTitle>
            {song.name}
          </SongTitle>
          <SongAuthor>
            <MicrophoneIcon color="#FFFFFF"/> {song.author}
          </SongAuthor>
          <iframe
            width="400"
            height="100%"
            src={`https://www.youtube.com/embed/${songLink}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </SongInfo>
      </SongHeader>
      {song.lyrics && (
        <LyricsWrapper>
          <LyricsDescription>
            {`${song.name} lyrics`}
          </LyricsDescription>
          <Lyrics>
            {song.lyrics}
          </Lyrics>
        </LyricsWrapper>
      )}
    </PageWrapper>
  );
}

export default SongPage;
