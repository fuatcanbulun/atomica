import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  basic: {
    width: '100%',
    borderStyle: 'solid',
    height: 30,
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
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
  // active
  active: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: '100%',
    height: 3,
  },
});

export default Style;
