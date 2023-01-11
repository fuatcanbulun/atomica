import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import AtmSwitch from '../../atoms/AtmSwitch';
import AtmContainer from '../../atoms/AtmContainer';

const MolStrip2 = ({text, textColor, status, onChange}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} flexDirection="row" height={50}>
        <AtmContainer flex={1} justifyContent="center" alignItems="flex-start">
          <AtmText text={text} size="sm" textColor={textColor} />
        </AtmContainer>
        <AtmContainer jflex={1} ustifyContent="center" alignItems="flex-end">
          <AtmSwitch status={status} onChange={onChange} />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer>
        <AtmLine color="secondaryText" />
      </AtmContainer>
    </>
  );
};

export default MolStrip2;
