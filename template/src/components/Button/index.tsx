import { FC } from 'react';
import {
  FlexAlignType,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { LoadingContent, SVG } from '@/components';
import { SVGName } from '@/components/SVG';
import { ThemeColorKey } from '@/theme/types';
import {
  ContentText,
  ContentView,
  LeftView,
  RightView,
  RoundedContainer,
  WrapperView,
} from './styles';
import { ButtonBaseProps } from './types';

export type Color =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'plain'
  | 'plainSemiTransparent'
  | 'dialog'
  | 'semiTransparent';

type Shape = {
  text: ThemeColorKey;
  background: ThemeColorKey;
};

const colorMap: Record<Color, Shape> = {
  primary: {
    text: 'titleTextColor',
    background: 'primaryColor',
  },
  secondary: {
    text: 'titleTextColor',
    background: 'secondaryColor',
  },
  basic: {
    text: 'titleTextColor',
    background: 'whiteDisabled',
  },
  plain: {
    text: 'titleTextColor',
    background: 'transparent',
  },
  plainSemiTransparent: {
    text: 'semiTransparentTitleTextColor',
    background: 'transparent',
  },
  dialog: {
    text: 'secondaryColor',
    background: 'transparent',
  },
  semiTransparent: {
    text: 'semiTransparentTitleTextColor',
    background: 'whiteDisabled',
  },
};

type Size = 'full' | 'small' | 'tiny';

const sizeAlignTypeMap: Record<Size, FlexAlignType> = {
  full: 'stretch',
  small: 'flex-start',
  tiny: 'flex-start',
};

type ButtonProps = ButtonBaseProps & {
  color?: Color;
  size?: Size;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  testID?: string;
};

const ButtonBase: FC<ButtonBaseProps & { tiny?: boolean }> = ({
  title,
  titleColor = 'titleTextColor',
  backgroundColor = 'secondaryColor',
  leftIcon,
  rightIcon,
  isLoading = false,
  onPress,
  defaultPadding,
  tiny = false,
  disabled = false,
}) => {
  const renderSVG = (svgIcon: SVGName) => (
    <SVG name={svgIcon} size="20" fillThemeColor={titleColor} />
  );

  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading || disabled}>
      <RoundedContainer
        color={disabled ? 'icon' : backgroundColor}
        defaultPadding={defaultPadding}>
        <LoadingContent isLoading={isLoading}>
          <ContentView>
            {leftIcon ? <LeftView>{renderSVG(leftIcon)}</LeftView> : null}
            <ContentText tiny={tiny} textColor={titleColor}>
              {title}
            </ContentText>
            {rightIcon ? <RightView>{renderSVG(rightIcon)}</RightView> : null}
          </ContentView>
        </LoadingContent>
      </RoundedContainer>
    </TouchableOpacity>
  );
};

const Button: FC<ButtonProps> = ({
  color = 'primary',
  size = 'full',
  style,
  ...rest
}) => {
  return (
    <WrapperView style={style} alignType={sizeAlignTypeMap[size]}>
      <ButtonBase
        tiny={size === 'tiny'}
        titleColor={colorMap[color].text}
        backgroundColor={colorMap[color].background}
        {...rest}
      />
    </WrapperView>
  );
};

export default Button;
