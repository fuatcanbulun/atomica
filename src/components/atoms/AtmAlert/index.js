import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Style from './style';
import Modal from 'react-native-modal';

const AtmAlert = ({visibility, children}) => {
  return (
    <Modal
      style={[Style.basic, {flexDirection: 'column'}]}
      isVisible={visibility}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      animationInTiming={800}
      animationOutTiming={800}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}>
      <View style={[Style.modalTop]}>{children}</View>
      <View style={Style.space} pointerEvents="none" />
    </Modal>
  );
};

export default AtmAlert;
