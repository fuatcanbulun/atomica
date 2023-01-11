import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  transparent: {
    color: 'rgba(0,0,0,0)',
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
