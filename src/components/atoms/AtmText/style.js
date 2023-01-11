import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  basic: {
    // borderStyle:'solid',
    // borderWidth:0.5,
    // borderColor:'lime'
    fontFamily: 'EncodeSans-Regular',
  },
  // weight
  light: {
    fontFamily: 'EncodeSans-Light',
  },
  regular: {
    fontFamily: 'EncodeSans-Regular',
  },
  medium: {
    fontFamily: 'EncodeSans-Medium',
  },
  bold: {
    fontFamily: 'EncodeSans-Bold',
  },
  //size
  sm: {
    height: 30,
    lineHeight: 30,
    fontSize: 16,
  },
  md: {
    height: 40,
    lineHeight: 40,
    fontSize: 20,
  },
  lg: {
    height: 50,
    lineHeight: 50,
    fontSize: 28,
  },
  xl: {
    height: 50,
    lineHeight: 50,
    fontSize: 36,
  },
  //color
  primaryColor: {
    color: '$ColorPrimary',
  },
  secondaryColor: {
    color: '$ColorSecondary',
  },
  tertiaryColor: {
    color: '$ColorTertiary',
  },
  primaryTextColor: {
    color: '$ColorPrimaryText',
  },
  secondaryTextColor: {
    color: '$ColorSecondaryText',
  },
  tertiaryTextColor: {
    color: '$ColorTertiaryText',
  },
  neutralColor: {
    color: '$ColorNeutral',
  },
  themeColor: {
    color: '$ColorTheme',
  },
  stunningColor: {
    color: '$ColorStunning',
  },
  successColor: {
    color: '$ColorSuccess',
  },
  warningColor: {
    color: '$ColorWarning',
  },
  dangerColor: {
    color: '$ColorDanger',
  },
  darkGlassColor: {
    color: '$ColorDarkGlass',
  },
});

export default Style;
