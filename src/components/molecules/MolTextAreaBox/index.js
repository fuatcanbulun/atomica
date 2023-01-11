import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmInput from '../../atoms/AtmInput';
import AtmContainer from '../../atoms/AtmContainer';

const MolTextAreaBox = ({
  label,
  withBorder,
  withBackground,
  onChange,
  placeholder,
  value,
  rowCount,
}) => {
  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}
      <AtmContainer>
        <AtmInput
          multiline
          rowCount={rowCount}
          onChange={onChange}
          placeholder={placeholder}
          withBorder={withBorder}
          withBackground={withBackground}
          value={value}
        />
      </AtmContainer>
    </>
  );
};

export default MolTextAreaBox;
