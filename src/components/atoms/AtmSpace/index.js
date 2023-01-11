import React from 'react';
import {View} from 'react-native';
import Style from './style';

const AtmSpace = ({size}) => {
  const styles = [Style.basic, Style[size]];
  return <View style={styles} />;
};

export default AtmSpace;
