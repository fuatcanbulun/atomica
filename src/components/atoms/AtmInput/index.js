import React from 'react';
import {View, TextInput} from 'react-native';
import Style from './style';

const AtmInput = ({
  onChange,
  placeholder,
  withBorder,
  withBackground,
  type,
  value,
  radius = 10,
  rowCount,
  multiline,
}) => {
  const styles = [
    Style.basic,
    withBorder && Style.withBorder,
    withBackground && Style.withBackground,
    radius && {borderRadius: radius},
  ];
  return (
    <View style={[styles, {height: multiline ? rowCount * 30 : 40}]}>
      <TextInput
        rowCount
        numberOfLines={rowCount}
        multiline={multiline}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={type}
        style={{
          height: rowCount ? rowCount * 30 : 40,
          paddingLeft: 10,
          fontSize: 16,
          color: Style.primaryTextColor.color,
        }}
        placeholderTextColor={Style.secondaryTextColor.color}
        value={value?.toString()}
      />
    </View>
  );
};

export default AtmInput;
