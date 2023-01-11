import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Style from './style';
import Modal from 'react-native-modal';

const AtmModal = ({visibility, type, children, close, maxHeight}) => {
  return (
    <Modal
      style={[Style.basic, {flexDirection: type === 'left' ? 'row' : 'column'}]}
      isVisible={visibility}
      animationIn={
        type === 'bottom'
          ? 'slideInUp'
          : type === 'top'
          ? 'slideInDown'
          : 'slideInLeft'
      }
      animationOut={
        type === 'bottom'
          ? 'slideOutDown'
          : type === 'top'
          ? 'slideOutUp'
          : 'slideOutLeft'
      }
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      onBackdropPress={close}>
      {type === 'bottom' && (
        <>
          <View style={Style.space} pointerEvents="none" />
          <View style={Style.modalBottomHeader}>
            <View style={Style.modalHandle} />
          </View>
          <View
            style={[Style.modalBottom, maxHeight && {maxHeight: maxHeight}]}>
            <ScrollView>{children}</ScrollView>
          </View>
        </>
      )}
      {type === 'top' && (
        <>
          <View style={[Style.modalTop]}>{children}</View>
          <View style={Style.space} pointerEvents="none" />
        </>
      )}
      {type === 'center' && (
        <>
          <View style={Style.space} pointerEvents="none" />
          <View style={[Style.modalCenter]}>{children}</View>
          <View style={Style.space} pointerEvents="none" />
        </>
      )}
      {type === 'left' && (
        <>
          <View style={[Style.modalLeft]}>{children}</View>
          <View style={Style.space} pointerEvents="none" />
        </>
      )}
    </Modal>
  );
};

export default AtmModal;
