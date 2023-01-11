import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import AtmContainer from '../../atoms/AtmContainer';

const MolStrip4 = ({text, textColor, value, valueColor}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} flexDirection="row">
        <AtmContainer flex={1} justifyContent="center" alignItems="flex-start">
          <AtmText text={text} size="sm" textColor={textColor} />
        </AtmContainer>
        <AtmContainer jflex={1} ustifyContent="center" alignItems="flex-end">
          <AtmText text={value} size="sm" textColor={valueColor} />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer>
        <AtmLine color="secondaryText" />
      </AtmContainer>
    </>
  );
};

export default MolStrip4;
