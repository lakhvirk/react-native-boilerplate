import { Dimensions } from 'react-native';

// When we start supporting portrait and landscape,
// we'll need to add event listeners for height/width
const { height, width } = Dimensions.get('window');

const padding = {
  defaultTinyPadding: 4,
  defaultSmallerPadding: 8,
  defaultSmallPadding: 10,
  defaultSecondaryPadding: 16,
  defaultPadding: 20,
  default24Padding: 24,
  defaultMediumPadding: 30,
  defaultLargePadding: 40,
  defaultExtraLargePadding: 55,
} as const;

const fontSizes = {
  small: 12,
  regular: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 28,
} as const;

export type DefaultPadding = keyof typeof padding;

const borderRadius = {
  tiny: 4,
  default: 8,
  medium: 12,
  large: 16,
} as const;

export default {
  // On Android, height includes the status bar, but excludes the hardware buttons
  // On iOS, height includes the entire visible screen
  window: {
    height,
    width,
  },
  ...padding,
  font: fontSizes,
  borderRadius: {
    ...borderRadius,
  }, // spread to keep compatibility with current code
  bottomModalTopBorderRadius: 12,
  modal: {
    borderRadius: 10,
    windowSizeRatio: 0.85,
    maxWidth: 400,
  },
  materialTextInput: {
    height: 80,
  },
  list: {
    padding: padding.defaultPadding,
    borderBottomWidth: 1,
    minHeight: 60,
  },
  dividerHeight: 2,
  horizontalDividerHeight: 24,
  horizontalDividerWidth: 2,
  scheduleList: {
    headerHeight: 50,
    footerHeight: 35,
    tallCellHeight: 100,
    shortCellHeight: 50,
    separatorHeight: 2,
    leftVerticalLineWidth: 6,
    iconSize: 28,
  },
  directionsButtonSpace: 50,
  paddedWindowSizeRatio: 0.85,
  navButtonPaddingHorizontal: padding.defaultSecondaryPadding,
};
