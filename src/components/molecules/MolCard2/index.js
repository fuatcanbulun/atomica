import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmIcon from '../../atoms/AtmIcon';
import AtmContainer from '../../atoms/AtmContainer';

const MolCard2 = ({title, icon, valueLeft, valueRight}) => {
  return (
    <AtmContainer borderRadius={10} backgroundColor="neutral">
      <>
        <AtmContainer
          flexDirection="row"
          backgroundColor="secondary"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}>
          <AtmContainer
            flex={1}
            justifyContent="center"
            alignItems="flex-start"
            paddingHorizontal={10}
            paddingVertical={5}>
            <AtmText text={title} size="sm" textColor="primaryText" />
          </AtmContainer>
          <AtmContainer
            width={50}
            justifyContent="center"
            alignItems="flex-end"
            paddingHorizontal={10}>
            <AtmIcon icon={icon} iconColor="primaryText" iconSize="sm" />
          </AtmContainer>
        </AtmContainer>
        <AtmContainer flexDirection="row">
          <AtmContainer
            flex={1}
            justifyContent="center"
            alignItems="flex-start"
            paddingHorizontal={10}>
            <AtmText text={valueLeft} size="sm" textColor="primaryText" />
          </AtmContainer>
          <AtmContainer
            flex={1}
            justifyContent="center"
            alignItems="flex-end"
            paddingHorizontal={10}
            paddingVertical={5}>
            <AtmText text={valueRight} size="sm" textColor="primaryText" />
          </AtmContainer>
        </AtmContainer>
      </>
    </AtmContainer>
  );
};

export default MolCard2;
