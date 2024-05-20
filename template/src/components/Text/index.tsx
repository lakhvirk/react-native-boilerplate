import React, { FC } from 'react';
import {
  StyleProp,
  TextProps,
  TextStyle,
  Text as ReactNativeText,
} from 'react-native';
import styled, { css } from 'styled-components/native';
import { ThemeColorKey } from '@/theme/types';

const reactNativeFlex1CSS = css`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
`;

export type TextType =
  | 'HEADER_1'
  | 'HEADER_2'
  | 'HEADER_3'
  | 'SUBTITLE_1'
  | 'SUBTITLE_2'
  | 'BODY_1'
  | 'BODY_2'
  | 'BUTTON_TEXT'
  | 'CAPTION'
  | 'CAPTION_2';

const textTypeStyles = {
  HEADER_1: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 32px;
    letter-spacing: 0;
    line-height: 44px;
  `,
  HEADER_2: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 24px;
    letter-spacing: 0;
    line-height: 30px;
  `,
  HEADER_3: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
  `,
  SUBTITLE_1: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
  `,
  SUBTITLE_2: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
  `,
  BODY_1: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
  `,
  BODY_2: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
  `,
  BUTTON_TEXT: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
  `,
  CAPTION: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 12px;
    letter-spacing: 0.25px;
    line-height: 18px;
  `,
  CAPTION_2: css`
    font-family: ${({ theme }) => theme.fonts.TenorRegular};
    font-size: 12px;
    letter-spacing: 0.25px;
    line-height: 18px;
  `,
};

type Props = TextProps & {
  type?: TextType;
  color?: ThemeColorKey;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: StyleProp<TextStyle>;
  flexOne?: boolean;
};

const TextBase = styled(ReactNativeText).attrs<Props>(
  ({ theme, type = 'BODY_1' }) => ({
    selectionColor: theme.colors.titleTextColor,
    type,
  }),
)<Props>`
  color: ${({ color = 'titleTextColor', theme }) => theme.colors[color]};
  ${({ type = 'BODY_1' }) => textTypeStyles[type]};
  text-align: ${({ textAlign = 'auto' }) => textAlign};
  ${({ flexOne }) => flexOne && reactNativeFlex1CSS};
`;

export const Text: FC<Props> = props => <TextBase {...props} />;

export default Text;
