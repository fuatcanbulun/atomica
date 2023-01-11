import EStyleSheet from 'react-native-extended-stylesheet';

const Style = EStyleSheet.create({
  basic: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '$ColorSecondary',
  },
  active: {
    backgroundColor: '$ColorTheme',
  },
  // shape
  circle: {
    borderRadius: 30,
  },
  square: {
    borderRadius: 10,
  },
});

export default Style;
