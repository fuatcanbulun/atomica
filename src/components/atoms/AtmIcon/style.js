import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  basic: {
    // borderStyle: 'solid',
    // borderWidth: 0.5,
    // borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  // bgColor
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
  orange: {
    backgroundColor: 'orange',
  },

  // bgShape
  circle: {
    borderRadius: 100,
  },
  square: {
    borderRadius: 0,
  },
});

export default Style;
