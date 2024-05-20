import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import SVG, { SVGName, SVGSize } from '@/components/SVG';
import { ThemeColorKey } from '@/theme/types';
import { ContentView, RoundedContainer } from './styles';

type ButtonIconProps = {
  backgroundColor?: ThemeColorKey;
  color?: ThemeColorKey;
  icon: SVGName;
  disabled?: boolean;
  iconSize?: SVGSize;
  isRounded?: boolean;
  onPress?: () => void;
};

const ButtonIcon: FC<ButtonIconProps> = ({
  backgroundColor = 'primaryColor',
  color = 'titleTextColor',
  disabled,
  icon,
  iconSize = '20',
  isRounded,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <RoundedContainer
        color={disabled ? 'icon' : backgroundColor}
        isRounded={isRounded}
        iconSize={iconSize}>
        <ContentView>
          <SVG name={icon} size={iconSize} fillThemeColor={color} />
        </ContentView>
      </RoundedContainer>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
