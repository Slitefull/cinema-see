import styled from "styled-components";
import { IMovieThumbnailProps } from "@/pages/movie/types/styled";


export const MovieInfoWrapper = styled.div` && {
  display: flex;
  flex-direction: column;
  gap: 15px 0;
}`

export const HeaderContainer = styled.div` && {
  display: flex;
  flex-direction: row;
  gap: 0 30px;
}`

export const MovieThumbnail = styled.div<IMovieThumbnailProps>` && {
  width: 350px;
  height: 500px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  text-align: center;
  background-position-x: center;
  border-radius: 10px;
}`;

export const MovieYear = styled.span` && {
  font-weight: 300;
  font-size: 36px;
  color: #E1E1E1;
  display: inline-block;
  flex-direction: row;
  align-items: center;
}`

export const MovieTitle = styled.p` && {
  font-weight: 700;
  font-size: 36px;
  color: #E1E1E1;
}`

export const MovieSubtitle = styled.p` && {
  font-weight: 400;
  font-size: 16px;
  color: #E1E1E1;
}`

export const MovieDescription = styled.p` && {
  font-weight: 300;
  font-size: 16px;
  color: #E1E1E1;
  max-width: 500px;
}`
