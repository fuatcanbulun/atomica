import React from 'react';
import AtmText from '../../atoms/AtmText';
import MolCheck from '../../molecules/MolCheck';
import AtmContainer from '../../atoms/AtmContainer';

const MolRadioGroupBox = ({label, options, onChange, size, value}) => {
  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}
      <AtmContainer
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between">
        {options.map(item => (
          <AtmContainer
            key={item.value}
            width={
              size == 'sm'
                ? 40
                : size == 'md'
                ? '32%'
                : size == 'lg'
                ? '49%'
                : size == 'xl'
                ? '100%'
                : null
            }>
            <MolCheck
              size="xl"
              tag={item.tag}
              icon={item.icon}
              value={value == item.value}
              onChange={() => {
                onChange(item.value);
              }}
            />
          </AtmContainer>
        ))}
      </AtmContainer>
    </>
  );
};

export default MolRadioGroupBox;
