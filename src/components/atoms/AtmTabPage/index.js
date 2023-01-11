import React, {useState} from 'react';
import Style from './style';
import {View, Animated, PanResponder} from 'react-native';

function AtmTabPage({children}) {
  const styles = [Style.default];

  return <View style={styles}>{children}</View>;
}

export default AtmTabPage;
