import styled from "styled-components";
import { IMovieThumbnailProps } from "@/pages/movie/types/styled";
import { FANDANGO_PINK, WHITE } from "@/ui-kit/constants/colors";


export const MovieThumbnail = styled.div<IMovieThumbnailProps>` && {
  width: 300px;
  height: 300px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  text-align: center;
  border-radius: 10px;
}`;

export const MovieHeader = styled.div` && {
  display: flex;
  flex-direction: row;
  gap: 0 30px;
}`;

export const MovieDirector = styled.span` && {
  font-size: 12px;
  color: ${WHITE};
  padding: 4px 25px;
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: absolute;
  background: ${FANDANGO_PINK};
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  transform: translateY(-12px);
}`

export const MovieInfo = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
}`;

export const MovieTitle = styled.p` && {
  font-size: 28px;
  color: ${WHITE};
  margin: 0;
  font-weight: 700;
}`;
