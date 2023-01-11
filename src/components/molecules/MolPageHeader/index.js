import React from 'react';
import AtmText from '../../atoms/AtmText';
import MolButton from '../../molecules/MolButton';
import AtmContainer from '../../atoms/AtmContainer';

const MolPageHeader = ({title, leftButton, rightButton}) => {
  return (
    <>
      <AtmContainer
        paddingHorizontal={5}
        backgroundColor="theme"
        flexDirection="row">
        <AtmContainer justifyContent="center" alignItems="center" width={50}>
          {leftButton && (
            <MolButton
              size="sm"
              color="theme"
              icon={leftButton.icon}
              onPress={leftButton.onPress}
            />
          )}
        </AtmContainer>
        <AtmContainer justifyContent="center" alignItems="center" flex={1}>
          <AtmText text={title} size="md" textColor="white" />
        </AtmContainer>
        <AtmContainer justifyContent="center" alignItems="center" width={50}>
          {rightButton && (
            <MolButton
              size="sm"
              color="theme"
              icon={rightButton.icon}
              onPress={rightButton.onPress}
            />
          )}
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolPageHeader;
