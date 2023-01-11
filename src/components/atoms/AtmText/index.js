import React from 'react';
import {Text} from 'react-native';
import Style from './style';

const AtmText = ({
  text,
  textColor,
  weight,
  size = 'sm',
  height,
  lineHeight,
  fontSize,
  underlined,
  textTransform,
}) => {
  const styles = [
    Style.basic,
    Style[size],
    Style[weight],
    textTransform && {textTransform: textTransform},
    height && {height: height},
    lineHeight && {lineHeight: lineHeight},
    fontSize && {fontSize: fontSize},
    underlined && {textDecorationLine: 'underline'},
  ];
  return (
    <Text
      style={[
        styles,
        {
          color:
            textColor == 'primary'
              ? Style.primaryColor.color
              : textColor == 'secondary'
              ? Style.secondaryColor.color
              : textColor == 'tertiary'
              ? Style.tertiaryColor.color
              : textColor == 'primaryText'
              ? Style.primaryTextColor.color
              : textColor == 'secondaryText'
              ? Style.secondaryTextColor.color
              : textColor == 'tertiaryText'
              ? Style.tertiaryTextColor.color
              : textColor == 'neutral'
              ? Style.neutralColor.color
              : textColor == 'theme'
              ? Style.themeColor.color
              : textColor == 'stunning'
              ? Style.stunningColor.color
              : textColor == 'success'
              ? Style.successColor.color
              : textColor == 'warning'
              ? Style.warningColor.color
              : textColor == 'danger'
              ? Style.dangerColor.color
              : textColor == 'darkGlass'
              ? Style.darkGlassColor.color
              : textColor,
        },
      ]}>
      {text}
    </Text>
  );
};

export default AtmText;
