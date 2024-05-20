import { ThemeColorKey } from '@/theme/types';
import { SVGName } from '@/components/SVG';

export type ButtonBaseProps = {
  title: string;
  titleColor?: ThemeColorKey;
  backgroundColor?: ThemeColorKey;
  leftIcon?: SVGName;
  rightIcon?: SVGName;
  isLoading?: boolean;
  onPress: () => void;
  defaultPadding?: number;
  disabled?: boolean;
};

export type ButtonProps = Omit<ButtonBaseProps, 'titleColor'>;
