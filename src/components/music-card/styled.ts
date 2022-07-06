import styled from 'styled-components';
import { IMusicCardThumbnailProps } from "@/components/music-card/types/styled.types";
import { Theme } from "@/themes/types";


export const MusicCardWrapper = styled.div<{ theme: Theme }>` && {
  width: auto;
  height: auto;
  min-width: 280px;
  max-height: 500px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.movieCard.body};
  transition: 0.2s;
  position: relative;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px 5px rgba(79, 64, 59, 0.71);
    transition: 0.2s;
  }
}`;

export const MusicCardAlbum = styled.span` && {
  font-size: 12px;
  color: #fff;
  padding: 4px 25px;
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: absolute;
  background: #E84E8A;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  transform: translateY(-12px);
}`

export const MainInfoWrapper = styled.div<{ theme: Theme }>` && {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border: 2px solid ${({ theme }) => theme.colors.movieCard.border};
}`;

export const AdditionalInfoWrapper = styled.div` && {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 10px;
  padding: 15px;
  font-size: 12px;
  justify-content: space-between;
}`;

export const MusicCardDate = styled.p<{ theme: Theme }>` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.movieCard.text};
  text-align: center;
}`;

export const MusicCardTitle = styled.p<{ theme: Theme }>` && {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.movieCard.text};
}`;

export const AuthorTitle = styled.p<{ theme: Theme }>` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.movieCard.text};
  margin: 0;
  text-align: center;
}`;

export const SongDuration = styled.p<{ theme: Theme }>` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.movieCard.text};
  margin: 0;
  text-align: center;
}`;

export const GenreTitle = styled.p<{ theme: Theme }>` && {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.movieCard.text};
  text-align: center;
  margin: 0;
}`;

export const MusicCardThumbnail = styled.div<IMusicCardThumbnailProps>` && {
  width: 100%;
  height: 250px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  text-align: center;
  border-radius: 10px 10px 0 0;
}`;
