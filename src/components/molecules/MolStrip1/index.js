import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import AtmIcon from '../../atoms/AtmIcon';
import AtmContainer from '../../atoms/AtmContainer';

const MolStrip1 = ({text, textColor, icon, iconColor}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} flexDirection="row" height={50}>
        <AtmContainer flex={1} justifyContent="center" alignItems="flex-start">
          <AtmText text={text} size="sm" textColor={textColor} />
        </AtmContainer>
        <AtmContainer flex={1} justifyContent="center" alignItems="flex-end">
          <AtmIcon icon={icon} iconColor={iconColor} iconSize="sm" />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer>
        <AtmLine color="secondaryText" />
      </AtmContainer>
    </>
  );
};

export default MolStrip1;
