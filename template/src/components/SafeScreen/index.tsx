import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyledSafeAreaView, StyledStatusBar } from './styles';

const SafeScreen = ({ children }: PropsWithChildren) => (
  <StyledSafeAreaView>
    <StyledStatusBar />
    {children}
  </StyledSafeAreaView>
);

export default SafeScreen;
