import EStyleSheet from 'react-native-extended-stylesheet';

const Styles = EStyleSheet.create({
  basic: {
    width: '100%',
    margin: 0,
    padding: 0,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  space: {
    flex: 1,
  },
  modalBottomHeader: {
    backgroundColor: '$ColorNeutral',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHandle: {
    width: 100,
    height: 5,
    borderRadius: 5,
    backgroundColor: '$ColorSecondary',
  },
  modalBottom: {
    backgroundColor: '$ColorNeutral',
    paddingBottom: 50,
  },
  modalTop: {
    backgroundColor: '$ColorNeutral',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 10,
    paddingTop: 50,
  },
  modalCenter: {
    backgroundColor: '$ColorNeutral',
    borderRadius: 10,
    width: '100% - 40',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalLeft: {
    width: '80%',
    backgroundColor: '$ColorNeutral',
    paddingBottom: 50,
  },
});

export default Styles;
