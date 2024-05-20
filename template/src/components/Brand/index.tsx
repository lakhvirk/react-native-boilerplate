import { View, DimensionValue } from 'react-native';
import { useTheme } from 'styled-components/native';
import { StyledImage } from './styles';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height = 200, width = 200, mode = 'contain' }: Props) {
  const { images } = useTheme();

  return (
    <View style={{ height, width }}>
      <StyledImage source={images.logo} resizeMode={mode} />
    </View>
  );
}

export default Brand;
