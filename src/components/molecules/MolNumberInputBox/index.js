import React, {useEffect, useState} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';
import AtmInput from '../../atoms/AtmInput';
import MolButton from '../../molecules/MolButton';

const MolNumberInputBox = ({
  label,
  withBorder,
  withBackground,
  onChange,
  placeholder,
  value,
}) => {
  const [numberValue, setNumberValue] = useState(value);

  useEffect(() => {
    setNumberValue(value);
  }, [value]);

  function plus() {
    onChange(numberValue + 1);
  }

  function minus() {
    onChange(numberValue - 1);
  }

  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}

      <AtmContainer flexDirection="row">
        <AtmContainer width={40}>
          <MolButton
            size="xs"
            color="neutral"
            borderWidth={1}
            borderColor="tertiaryText"
            icon="remove"
            radius={10}
            onPress={() => minus()}
            withBorder
          />
        </AtmContainer>
        <AtmContainer flex={1} paddingHorizontal={5}>
          <AtmInput
            type="numeric"
            value={numberValue}
            onChange={onChange}
            placeholder={placeholder}
            withBorder={withBorder}
            withBackground={withBackground}
          />
        </AtmContainer>

        <AtmContainer width={40}>
          <MolButton
            size="xs"
            color="neutral"
            borderWidth={1}
            borderColor="tertiaryText"
            icon="add"
            radius={10}
            onPress={() => plus()}
            withBorder
          />
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolNumberInputBox;
