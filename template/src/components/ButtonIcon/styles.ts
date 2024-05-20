import styled, { css } from 'styled-components/native';
import { SVGSize } from '@/components/SVG';
import { ThemeColorKey } from '@/theme/types';

export const ContentView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const RoundedContainer = styled.View<{
  color: ThemeColorKey;
  isRounded?: boolean;
  iconSize?: SVGSize;
}>(
  ({ theme: { dimens, colors }, color, isRounded, iconSize }) => css`
    padding: ${dimens.defaultPadding}px;
    background-color: ${colors[color]};
    ${isRounded &&
    iconSize &&
    css`
      border-radius: ${(dimens.default24Padding + Number(iconSize)) / 2}px;
      width: ${dimens.default24Padding + Number(iconSize)}px;
      height: ${dimens.default24Padding + Number(iconSize)}px;
    `}
  `,
);
