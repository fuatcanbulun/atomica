import React from 'react';
import {View} from 'react-native';
import Style from './style';

const AtmLine = ({color}) => {
  const styles = [
    Style.basic,
    color && {
      borderBottomColor:
        color == 'primary'
          ? Style.primaryColor.color
          : color == 'secondary'
          ? Style.secondaryColor.color
          : color == 'tertiary'
          ? Style.tertiaryColor.color
          : color == 'primaryText'
          ? Style.primaryTextColor.color
          : color == 'secondaryText'
          ? Style.secondaryTextColor.color
          : color == 'tertiaryText'
          ? Style.tertiaryTextColor.color
          : color == 'neutral'
          ? Style.neutralColor.color
          : color == 'theme'
          ? Style.themeColor.color
          : color == 'stunning'
          ? Style.stunningColor.color
          : color == 'success'
          ? Style.successColor.color
          : color == 'warning'
          ? Style.warningColor.color
          : color == 'danger'
          ? Style.dangerColor.color
          : color == 'darkGlass'
          ? Style.darkGlassColor.color
          : color,
    },
  ];
  return <View style={styles} />;
};

export default AtmLine;
