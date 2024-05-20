import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.dimens.defaultExtraLargePadding}px;
`;

export const TitleContainer = styled.View`
  margin-top: ${({ theme }) => theme.dimens.defaultLargePadding}px;
  padding-horizontal: ${({ theme }) => theme.dimens.defaultMediumPadding}px;
`;

export const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  padding-horizontal: ${({ theme }) => theme.dimens.defaultMediumPadding}px;
  padding-top: ${({ theme }) => theme.dimens.defaultLargePadding}px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  tint-color: ${({ theme }) => theme.colors.alertColor};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.whiteDisabled};
  border-radius: 35px;
  width: 70px;
  height: 70px;
  margin-bottom: ${({ theme }) => theme.dimens.defaultPadding}px;
  align-items: center;
  justify-content: center;
`;
