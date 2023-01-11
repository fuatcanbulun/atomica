import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import MolSelectText from '../../molecules/MolSelectText';
import AtmContainer from '../../atoms/AtmContainer';

const MolStrip3 = ({text, textColor, options, onChange, value}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} flexDirection="row" height={50}>
        <AtmContainer flex={1} justifyContent="center" alignItems="flex-start">
          <AtmText text={text} size="sm" textColor={textColor} />
        </AtmContainer>
        <AtmContainer jflex={1} ustifyContent="center" alignItems="flex-end">
          <MolSelectText options={options} onChange={onChange} value={value} />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer>
        <AtmLine color="secondaryText" />
      </AtmContainer>
    </>
  );
};

export default MolStrip3;
