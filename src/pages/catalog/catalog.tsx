import React, { FC } from "react";
import { useQuery } from '@apollo/client';
import { MusicCard } from "@/components/music-card/music-card.component";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import { songsQuery } from "@/queries/catalog/catalog";

import { CatalogWrapper } from "./styles";
import { ISongsQueryResponseModel } from "@/queries/catalog/types";
import CardsSkeleton from "@/ui-kit/components/sceletons/cards";


const CatalogPage: FC = (): JSX.Element => {
  const { data, loading, error } = useQuery<ISongsQueryResponseModel>(songsQuery);

  if (error) return <pre>{error.message}</pre>
  if (loading) return <CardsSkeleton/>;

  const { songs } = data!;

  return (
    <PageWrapper>
      <CatalogWrapper>
        {songs.map((song) => (
          <MusicCard
            id={song.id}
            key={song.id}
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
