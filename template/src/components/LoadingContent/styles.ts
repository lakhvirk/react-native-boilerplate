import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const LoadingIndicatorSizes = Object.freeze({
  SMALL: 'small',
  LARGE: 'large',
} as const);

export type LoadingIndicatorProps = {
  indicatorSize?: 'tiny' | 'small' | 'large';
};

export const LoadingIndicator = styled(
  ActivityIndicator,
).attrs<LoadingIndicatorProps>(({ theme, indicatorSize }) => ({
  color: theme.colors.titleTextColor,
  size:
    indicatorSize === 'large'
      ? LoadingIndicatorSizes.LARGE
      : LoadingIndicatorSizes.SMALL,
}))<LoadingIndicatorProps>`
  transform: scale(
    ${({ indicatorSize }) => (indicatorSize === 'tiny' ? 0.75 : 1)}
  );
`;
