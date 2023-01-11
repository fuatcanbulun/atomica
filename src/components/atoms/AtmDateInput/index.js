import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import Style from './style';

const AtmDateInput = ({
  value,
  withBorder,
  withBackground,
  onPress,
  radius = 10,
}) => {
  const styles = [
    Style.basic,
    withBorder && Style.withBorder,
    withBackground && Style.withBackground,
    radius && {borderRadius: radius},
  ];
  return (
    <TouchableHighlight
      activeOpacity={0}
      style={styles}
      onPress={() => onPress()}>
      <Text
        style={{
          height: 40,
          lineHeight: 40,
          fontSize: 16,
          color: value
            ? Style.primaryTextColor.color
            : Style.secondaryTextColor.color,
        }}>
        {value ? value : null}
      </Text>
    </TouchableHighlight>
  );
};

export default AtmDateInput;
