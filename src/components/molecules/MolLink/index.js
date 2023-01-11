import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import AtmIcon from '../../atoms/AtmIcon';
import AtmContainer from '../../atoms/AtmContainer';

const MolLink = ({icon, text, onPress}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} flexDirection="row" onPress={onPress}>
        {icon && (
          <AtmContainer
            width={30}
            justifyContent="center"
            alignItems="flex-start">
            <AtmIcon icon={icon} iconColor="tertiaryText" iconSize="sm" />
          </AtmContainer>
        )}
        <AtmContainer
          flex={1}
          justifyContent="center"
          alignItems="flex-start"
          paddingLeft={10}>
          <AtmText text={text} size="sm" textColor="primaryText" />
        </AtmContainer>
        <AtmContainer width={30} justifyContent="center" alignItems="flex-end">
          <AtmIcon
            icon="chevron-forward"
            iconColor="primaryText"
            iconSize="sm"
          />
        </AtmContainer>
      </AtmContainer>

      <AtmContainer>
        <AtmLine color="tertiaryText" />
      </AtmContainer>
    </>
  );
};

export default MolLink;
