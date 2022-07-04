import React, { FC } from 'react';

import { PageWrapperContainer } from "./styles";
import { IPageWrapperProps } from "./types/page-wrapper.types";


const PageWrapper: FC<IPageWrapperProps> = ({ children }): JSX.Element => {
  return (
    <PageWrapperContainer>
      {children}
    </PageWrapperContainer>
  );
};

export default PageWrapper;
