import React, { FC } from 'react';
import { NotFoundContainer, NotFoundSubtext, NotFoundText } from "./styled";


const NotFound: FC = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <NotFoundText>404</NotFoundText>
      <NotFoundSubtext>Oops! Something wrong…</NotFoundSubtext>
    </NotFoundContainer>
  );
};

export default NotFound;
