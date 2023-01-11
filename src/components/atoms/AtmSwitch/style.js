import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  basic: {
    width: 60,
    height: 30,
    borderRadius: 20,
    padding: 2,
    backgroundColor: '$ColorTertiaryText',
  },
  handle: {
    borderRadius: 20,
    width: 26,
    height: 26,
    backgroundColor: '$ColorNeutral',
  },
  true: {
    backgroundColor: '$ColorTheme',
  },
});

export default Style;
