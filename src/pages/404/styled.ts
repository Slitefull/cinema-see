import styled, { DefaultTheme } from "styled-components";


export const NotFoundContainer = styled.div` && {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}`

export const NotFoundText = styled.p<{ theme: DefaultTheme }>` && {
  font-weight: 400;
  font-size: 260px;
  color: ${({ theme }) => theme.colors.notFound.text};
  text-align: center;
}`

export const NotFoundSubtext = styled.p<{ theme: DefaultTheme }>` && {
  font-weight: 400;
  font-size: 42px;
  color: ${({ theme }) => theme.colors.notFound.subText};
  text-align: center;
}`
