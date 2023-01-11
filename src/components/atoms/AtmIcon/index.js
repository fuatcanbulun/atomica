import React from 'react';
import {View} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const AtmIcon = ({
  icon,
  iconColor,
  iconSize = 'sm',
  bgColor,
  bgShape,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
}) => {
  const styles = [Style.basic, Style[iconSize], Style[bgColor], Style[bgShape]];
  return (
    <View
      style={[
        styles,
        radius && {borderRadius: radius},
        topLeftRadius && {borderTopLeftRadius: topLeftRadius},
        topRightRadius && {borderTopRightRadius: topRightRadius},
        bottomLeftRadius && {borderBottomLeftRadius: bottomLeftRadius},
        bottomRightRadius && {borderBottomRightRadius: bottomRightRadius},
        {
          width:
            iconSize == 'xs'
              ? 30
              : iconSize == 'sm'
              ? 30
              : iconSize == 'md'
              ? 40
              : iconSize == 'lg'
              ? 50
              : iconSize == 'full'
              ? '100%'
              : null,
        },
        {
          height:
            iconSize == 'xs'
              ? 30
              : iconSize == 'sm'
              ? 30
              : iconSize == 'md'
              ? 40
              : iconSize == 'lg'
              ? 50
              : iconSize == 'full'
              ? '100%'
              : null,
        },
      ]}>
      <Icon
        name={icon}
        size={
          !bgShape && iconSize == 'sm'
            ? 30
            : !bgShape && iconSize == 'md'
            ? 40
            : !bgShape && iconSize == 'lg'
            ? 50
            : !bgShape && iconSize == 'full'
            ? 30
            : bgShape && iconSize == 'sm'
            ? 20
            : bgShape && iconSize == 'md'
            ? 30
            : bgShape && iconSize == 'lg'
            ? 40
            : bgShape && iconSize == 'full'
            ? 20
            : null
        }
        color={
          iconColor == 'primary'
            ? Style.primaryColor.color
            : iconColor == 'secondary'
            ? Style.secondaryColor.color
            : iconColor == 'tertiary'
            ? Style.tertiaryColor.color
            : iconColor == 'primaryText'
            ? Style.primaryTextColor.color
            : iconColor == 'secondaryText'
            ? Style.secondaryTextColor.color
            : iconColor == 'tertiaryText'
            ? Style.tertiaryTextColor.color
            : iconColor == 'neutral'
            ? Style.neutralColor.color
            : iconColor == 'theme'
            ? Style.themeColor.color
            : iconColor == 'stunning'
            ? Style.stunningColor.color
            : iconColor == 'success'
            ? Style.successColor.color
            : iconColor == 'warning'
            ? Style.warningColor.color
            : iconColor == 'danger'
            ? Style.dangerColor.color
            : iconColor == 'darkGlass'
            ? Style.darkGlassColor.color
            : iconColor
        }
      />
    </View>
  );
};

export default AtmIcon;
