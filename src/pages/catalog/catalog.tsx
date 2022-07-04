import React, { FC } from "react";
import { useQuery } from '@apollo/client';
import { MusicCard } from "../../ui-kit/components/music-card/music-card.component";
import PageWrapper from "../../ui-kit/components/page-wrapper/page-wrapper";
import { songsQuery } from "../../queries/catalog/catalog";

import { CatalogWrapper } from "./styles";
import { ISongsQueryResponseModel } from "@/queries/catalog/types";


const CatalogPage: FC = (): JSX.Element => {
  const { data, loading, error } = useQuery<ISongsQueryResponseModel>(songsQuery);

  if (error) return <pre>{error.message}</pre>
  if (loading) return <div>Loading...</div>;

  const { songs } = data!;

  return (
    <PageWrapper>
      <CatalogWrapper>
        {songs.map((song) => (
          <MusicCard
            id={song.id}
            album={song.album}
            thumbnail={song.thumbnail}
            author={song.author}
            name={song.name}
            year={song.year}
            duration={song.duration}
            genre={song.genre}
          />
        ))}
      </CatalogWrapper>
    </PageWrapper>
  );
}

export default CatalogPage;
