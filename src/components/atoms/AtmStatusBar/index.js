import React from 'react';
import {StatusBar} from 'react-native';
import Style from './style';

const AtmStatusBar = ({bgColor, hidden, color}) => {
  return (
    <StatusBar
      translucent={bgColor === 'transparent'}
      hidden={hidden}
      backgroundColor={
        bgColor == 'primary'
          ? Style.primaryColor.color
          : bgColor == 'secondary'
          ? Style.secondaryColor.color
          : bgColor == 'tertiary'
          ? Style.tertiaryColor.color
          : bgColor == 'primaryText'
          ? Style.primaryTextColor.color
          : bgColor == 'secondaryText'
          ? Style.secondaryTextColor.color
          : bgColor == 'tertiaryText'
          ? Style.tertiaryTextColor.color
          : bgColor == 'neutral'
          ? Style.neutralColor.color
          : bgColor == 'theme'
          ? Style.themeColor.color
          : bgColor == 'stunning'
          ? Style.stunningColor.color
          : bgColor == 'success'
          ? Style.successColor.color
          : bgColor == 'warning'
          ? Style.warningColor.color
          : bgColor == 'danger'
          ? Style.dangerColor.color
          : bgColor == 'darkGlass'
          ? Style.darkGlassColor.color
          : bgColor
      }
      barStyle={color === 'light' ? 'light-content' : 'dark-content'}
    />
  );
};

export default AtmStatusBar;
