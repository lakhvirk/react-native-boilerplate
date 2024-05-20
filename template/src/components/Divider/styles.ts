import { DefaultPadding } from '@/theme/dimens';
import styled from 'styled-components/native';

type DividerHeight = DefaultPadding;

export const Divider = styled.View<{ height: DividerHeight }>`
  height: ${({ theme, height }) => theme.dimens[height]}px;
  width: 100%;
`;
