import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmIcon from '../../atoms/AtmIcon';
import AtmInput from '../../atoms/AtmInput';
import AtmContainer from '../../atoms/AtmContainer';

const MolInputBox = ({
  label,
  withBorder,
  withBackground,
  onChange,
  placeholder,
  value,
  icon,
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
          onChange={onChange}
          placeholder={placeholder}
          withBorder={withBorder}
          withBackground={withBackground}
          value={value}
        />
        {icon && (
          <AtmContainer
            top={5}
            right={5}
            width={30}
            height={30}
            position="absolute"
            zIndex={1}>
            <AtmIcon icon={icon} iconColor="primaryText" iconSize="sm" />
          </AtmContainer>
        )}
      </AtmContainer>
    </>
  );
};

export default MolInputBox;
