import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmIcon from '../../atoms/AtmIcon';
import AtmImage from '../../atoms/AtmImage';
import AtmContainer from '../../atoms/AtmContainer';

const MolButton = ({
  text,
  icon,
  size,
  color,
  radius = 10,
  onPress,
  borderWidth,
  borderColor,
  iconColor,
  image,
}) => {
  return (
    <AtmContainer
      flexDirection="row"
      backgroundColor={color}
      justifyContent="center"
      alignItems="center"
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={radius}
      paddingHorizontal={size === 'xs' || image ? 0 : 10}
      width={
        size === 'xxs'
          ? 30
          : size === 'xs'
          ? 40
          : size === 'sm'
          ? 50
          : size === 'md'
          ? 150
          : size === 'lg'
          ? 300
          : '100%'
      }
      height={
        size === 'xxs'
          ? 30
          : size === 'xs'
          ? 40
          : size === 'sm'
          ? 50
          : size === 'md'
          ? 50
          : size === 'lg'
          ? 50
          : 40
      }
      onPress={onPress}>
      {image && (
        <AtmContainer
          width={40}
          justifyContent="center"
          alignItems="center"
          padding={5}>
          <AtmImage data={image} />
        </AtmContainer>
      )}
      {size != 'sm' && text && (
        <AtmContainer
          flex={1}
          justifyContent="center"
          alignItems={
            icon & image
              ? 'center'
              : icon & !image
              ? 'flex-start'
              : !icon & image
              ? 'center'
              : 'center'
          }>
          <AtmText
            text={text}
            underlined={color === 'transparent'}
            size="sm"
            textColor={
              color === 'neutral' || color === 'transparent'
                ? 'primaryText'
                : 'white'
            }
          />
        </AtmContainer>
      )}
      {icon && (
        <AtmContainer
          width={40}
          height={40}
          justifyContent="center"
          alignItems="center">
          <AtmIcon
            icon={icon}
            iconColor={
              iconColor
                ? iconColor
                : color === 'neutral'
                ? 'primaryText'
                : 'white'
            }
            iconSize={size === 'xs' ? 'xs' : 'sm'}
          />
        </AtmContainer>
      )}
      {image && (
        <AtmContainer width={40} justifyContent="center" alignItems="center">
          <AtmIcon
            icon="chevron-forward"
            iconColor="primaryText"
            iconSize="sm"
          />
        </AtmContainer>
      )}
    </AtmContainer>
  );
};

export default MolButton;
