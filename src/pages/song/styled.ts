import styled from "styled-components";
import { ISongThumbnailProps } from "@/pages/song/types/styled";


export const ThumbnailWrapper = styled.div` && {
  position: relative;
}`;

export const SongThumbnail = styled.div<ISongThumbnailProps>` && {
  width: 300px;
  height: 300px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  text-align: center;
  border-radius: 10px;
}`;

export const SongHeader = styled.div` && {
  display: flex;
  flex-direction: row;
  gap: 0 30px;
}`;

export const SongAlbum = styled.span` && {
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

export const SongInfo = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
}`;

export const SongTitle = styled.p` && {
  font-size: 28px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 700;
}`;

export const SongAuthor = styled.p` && {
  font-size: 16px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 600;
}`;

export const LyricsWrapper = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  margin: 15px 0 0 0;
}`;

export const LyricsDescription = styled.p` && {
  font-size: 12px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 600;
}`;

export const Lyrics = styled.p` && {
  font-size: 14px;
  color: #FFFFFF;
  margin: 0;
  font-weight: 400;
  max-width: 300px;
  line-height: 1.5;
}`;
