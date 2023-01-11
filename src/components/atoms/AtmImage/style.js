import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  basic: {
    // borderStyle: 'solid',
    // borderWidth: 0.5,
    // borderColor: 'blue',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  // size {
  sm: {
    width: 30,
    height: 30,
  },
  md: {
    width: 40,
    height: 40,
  },
  lg: {
    width: 50,
    height: 50,
  },
  xl: {
    width: 100,
    height: 100,
  },
  xxl: {
    width: 150,
    height: 150,
  },
  cover: {
    width: '100%',
    height: '100%',
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
