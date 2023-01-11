import React from 'react';
import {TouchableHighlight, View} from 'react-native';

import Style from './style';

const AtmContainer = ({
  children,
  onPress,
  top,
  bottom,
  left,
  right,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingHorizontal,
  paddingVertical,
  width,
  height,
  position,
  display,
  zIndex,
  borderWidth,
  borderColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  flex,
  flexWrap,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  opacity,
  backgroundColor,
  noEvent,
}) => {
  const styles = [
    Style.basic,
    top && {top: top},
    (bottom || bottom == 0) && {bottom: bottom},
    left && {left: left},
    right && {right: right},
    padding && {padding: padding},
    paddingTop && {paddingTop: paddingTop},
    paddingBottom && {paddingBottom: paddingBottom},
    paddingLeft && {paddingLeft: paddingLeft},
    paddingRight && {paddingRight: paddingRight},
    paddingHorizontal && {
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal,
    },
    paddingVertical && {
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical,
    },
    width && {width: width},
    height && {height: height},
    position && {position: position},
    display && {display: display},
    zIndex && {zIndex: zIndex},
    borderWidth && {borderWidth},
    ,
    borderRadius && {borderRadius: borderRadius},
    borderTopLeftRadius && {borderTopLeftRadius: borderTopLeftRadius},
    borderTopRightRadius && {borderTopRightRadius: borderTopRightRadius},
    borderBottomLeftRadius && {borderBottomLeftRadius: borderBottomLeftRadius},
    borderBottomRightRadius && {
      borderBottomRightRadius: borderBottomRightRadius,
    },
    flex && {flex: flex},
    flexWrap && {flexWrap: flexWrap},
    flexDirection && {flexDirection: flexDirection},
    justifyContent && {justifyContent: justifyContent},
    alignItems && {alignItems: alignItems},
    opacity && {opacity: opacity},
    backgroundColor && {
      backgroundColor:
        backgroundColor == 'primary'
          ? Style.primaryColor.color
          : backgroundColor == 'secondary'
          ? Style.secondaryColor.color
          : backgroundColor == 'tertiary'
          ? Style.tertiaryColor.color
          : backgroundColor == 'primaryText'
          ? Style.primaryTextColor.color
          : backgroundColor == 'secondaryText'
          ? Style.secondaryTextColor.color
          : backgroundColor == 'tertiaryText'
          ? Style.tertiaryTextColor.color
          : backgroundColor == 'neutral'
          ? Style.neutralColor.color
          : backgroundColor == 'theme'
          ? Style.themeColor.color
          : backgroundColor == 'stunning'
          ? Style.stunningColor.color
          : backgroundColor == 'success'
          ? Style.successColor.color
          : backgroundColor == 'warning'
          ? Style.warningColor.color
          : backgroundColor == 'danger'
          ? Style.dangerColor.color
          : backgroundColor == 'darkGlass'
          ? Style.darkGlassColor.color
          : backgroundColor,
    },
    borderColor && {
      borderColor:
        borderColor == 'primary'
          ? Style.primaryColor.color
          : borderColor == 'secondary'
          ? Style.secondaryColor.color
          : borderColor == 'tertiary'
          ? Style.tertiaryColor.color
          : borderColor == 'primaryText'
          ? Style.primaryTextColor.color
          : borderColor == 'secondaryText'
          ? Style.secondaryTextColor.color
          : borderColor == 'tertiaryText'
          ? Style.tertiaryTextColor.color
          : borderColor == 'neutral'
          ? Style.neutralColor.color
          : borderColor == 'theme'
          ? Style.themeColor.color
          : borderColor == 'stunning'
          ? Style.stunningColor.color
          : borderColor == 'success'
          ? Style.successColor.color
          : borderColor == 'warning'
          ? Style.warningColor.color
          : borderColor == 'danger'
          ? Style.dangerColor.color
          : borderColor == 'darkGlass'
          ? Style.darkGlassColor.color
          : borderColor,
    },
  ];
  return onPress && !noEvent ? (
    <TouchableHighlight onPress={onPress} style={styles} underlayColor="none">
      <>{children}</>
    </TouchableHighlight>
  ) : (
    <View style={styles}>{children}</View>
  );
};

export default AtmContainer;
