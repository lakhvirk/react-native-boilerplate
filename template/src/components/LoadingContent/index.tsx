import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { LoadingIndicator, LoadingIndicatorProps } from './styles';

type Props = PropsWithChildren &
  LoadingIndicatorProps & {
    isLoading: boolean;
    customLoadingIndicator?: ReactElement;
  };

const LoadingContent: FC<Props> = ({
  children,
  isLoading,
  customLoadingIndicator,
  indicatorSize,
}) => {
  if (isLoading) {
    return (
      customLoadingIndicator || (
        <LoadingIndicator indicatorSize={indicatorSize} />
      )
    );
  }
  return <>{children}</>;
};

export default LoadingContent;
