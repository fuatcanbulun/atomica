import React from 'react';
import {View} from 'react-native';
import Style from './style';

const AtmColor = ({color, width, height, radius}) => {
  const styles = [
    Style.basic,
    width && {width: width},
    height && {height: height},
    radius && {borderRadius: radius},
    color && {backgroundColor: color},
  ];
  return <View style={styles} />;
};

export default AtmColor;
