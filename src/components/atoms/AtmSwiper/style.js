import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const pageHeight = Dimensions.get('window').height - 150;

const Style = EStyleSheet.create({
  default: {
    width: '100%',
    overflow: 'hidden',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  holder: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%-30px',
  },
  dots: {
    width: '100%',
    height: 30,
    // borderStyle:'solid',
    // borderWidth:0.5,
    // borderColor:'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  passive: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '$ColorNeutral',
  },
  active: {
    width: 20,
    height: 20,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '$ColorTheme',
  },
  // height
  full: {
    height: pageHeight,
  },
});

export default Style;
