import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { G } from 'react-native-svg';
import xmldom from 'xmldom';
import { ThemeColorKey } from '@/theme/types';
import {
  SVGName,
  SVGSize,
  svgXmlDataStrings,
} from '@/components/SVG/resources';
import { transformToElements } from '@/components/SVG/transforms';
import { useTheme } from 'styled-components/native';

export type SVGProps = {
  name?: SVGName;
  fill?: string | null;
  size?: SVGSize;
  style?: ViewStyle;
  fillThemeColor?: ThemeColorKey;
};

export const SVG: FC<SVGProps> = ({
  name,
  fill = null,
  fillThemeColor,
  size = '24',
  style,
  ...rest
}) => {
  const { colors } = useTheme();
  const colorFromTheme = fillThemeColor ? colors[fillThemeColor] : null;
  const fillColor = fill || colorFromTheme || colors.titleTextColor;
  const xmlString = name && svgXmlDataStrings[name];

  if (!xmlString) {
    return null;
  }

  const document = new xmldom.DOMParser().parseFromString(xmlString);
  const svgXmlChildren = Array.from(document.childNodes[0].childNodes);

  return (
    <View style={style}>
      <Svg
        id={name}
        width={size}
        height={size} // Design exports the icons at this size
        viewBox="0 0 24 24"
        {...rest}>
        <G>
          {svgXmlChildren.map((node, index) =>
            transformToElements(node, fillColor, index),
          )}
        </G>
      </Svg>
    </View>
  );
};

export default SVG;
