import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';
import MolCheck from '../../molecules/MolCheck';

const MolCheckBox = ({label, onChange, value}) => {
  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}
      <AtmContainer>
        <MolCheck size="sm" value={value} onChange={onChange} />
      </AtmContainer>
    </>
  );
};

export default MolCheckBox;
