import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import Style from './style';

const AtmCheck = ({children, value, shape, onChange, clickable}) => {
  const styles = [
    Style.basic,
    Style[shape],
    value ? Style.active : Style.passive,
  ];
  return (
    <>
      {clickable ? (
        <TouchableHighlight
          activeOpacity={0}
          style={styles}
          onPress={() => onChange(!value)}>
          {children}
        </TouchableHighlight>
      ) : (
        <View style={styles}>{children}</View>
      )}
    </>
  );
};

export default AtmCheck;
