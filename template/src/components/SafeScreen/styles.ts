import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const StyledStatusBar = styled(StatusBar).attrs(({ theme }) => ({
  barStyle: theme.themeType === 'dark' ? 'light-content' : 'dark-content',
}))`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
