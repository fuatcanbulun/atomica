import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import Style from './style';

const AtmTabButton = ({text, leftBorder, textColor, onPress, status}) => {
  const styles = [Style.basic, leftBorder && {borderLeftWidth: 0.5}, ,];
  return (
    <TouchableHighlight
      activeOpacity={0}
      style={[
        styles,
        {
          borderColor:
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
      ]}
      onPress={onPress}>
      <>
        <Text
          style={[
            Style.text,
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
        {status && (
          <View
            style={[
              Style.active,
              {
                backgroundColor:
                  textColor == 'primaryText'
                    ? Style.themeColor.color
                    : textColor == 'neutral'
                    ? Style.themeActiveColor.color
                    : textColor,
              },
            ]}
          />
        )}
      </>
    </TouchableHighlight>
  );
};

export default AtmTabButton;
