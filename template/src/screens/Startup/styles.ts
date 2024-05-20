import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  margin-vertical: ${({ theme }) => theme.dimens.defaultSmallerPadding}px;
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.dimens.font.regular}px;
  color: ${({ theme }) => theme.colors.errorColor};
`;
