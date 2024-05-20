import { FlexAlignType, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ThemeColorKey } from '@/theme/types';
import { Text } from '@/components';

export const WrapperView = styled(View)<{ alignType: FlexAlignType }>`
  align-items: ${({ alignType }) => alignType};
`;

export const LeftView = styled.View`
  margin-right: ${({ theme }) => theme.dimens.defaultSmallerPadding}px;
`;

type ContentProps = {
  textColor: ThemeColorKey;
  tiny?: boolean;
};

export const ContentText = styled(Text).attrs<ContentProps>(
  ({ textColor }) => ({
    color: textColor,
    allowFontScaling: false,
    type: 'BUTTON_TEXT',
  }),
)<ContentProps>(
  ({ tiny }) =>
    tiny &&
    css`
      font-size: 12px;
      line-height: 16px;
    `,
);

export const RightView = styled.View`
  margin-left: ${({ theme }) => theme.dimens.defaultSmallerPadding}px;
`;

export const ContentView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RoundedContainer = styled.View<{
  color: ThemeColorKey;
  defaultPadding?: number;
}>(
  ({ theme, color, defaultPadding }) => css`
    border-radius: ${theme.dimens.borderRadius.tiny}px;
    padding: ${defaultPadding ?? theme.dimens.defaultSecondaryPadding}px;
    background-color: ${theme.colors[color]};
  `,
);
