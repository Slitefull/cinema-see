import styled from "styled-components";
import { LeftSideStyledProps } from "@/pages/login/types/styled";
import { DAVY_GREY, WHITE } from "@/ui-kit/constants/colors";


export const LoginForm = styled.form` && {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`

export const LeftSide = styled.div<LeftSideStyledProps>` && {
  height: 100vh;
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
}`

export const FormWrapper = styled.div` && {
  display: flex;
  background: ${WHITE};
}`

export const Container = styled.div` && {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  gap: 15px 0;
}`

export const LoginText = styled.p` && {
  font-weight: 700;
  font-size: 36px;
  color: ${DAVY_GREY};
}`

export const LoginSubtext = styled.p` && {
  font-weight: 400;
  font-size: 16px;
  color: ${DAVY_GREY};
  margin: 0 0 30px;
}`

