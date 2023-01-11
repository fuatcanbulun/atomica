import React, {useState, useEffect} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmSelect from '../../atoms/AtmSelect';
import AtmModal from '../../atoms/AtmModal';
import MolOption from '../../molecules/MolOption';
import MolButton from '../../molecules/MolButton';
import AtmContainer from '../../atoms/AtmContainer';

const MolMultiSelectBox = ({
  label,
  withBorder,
  withBackground,
  onChange,
  placeholder,
  options,
  value,
}) => {
  const [bottomModal, setBottomModal] = useState(false);
  const [valueArray, setValueArray] = useState(value);
  useEffect(() => {
    setValueArray(value);
  }, [value]);

  function onSelect(type, val) {
    let newValueArray = [...valueArray];
    newValueArray = newValueArray.filter(function (el) {
      return el !== val;
    });
    if (!type) {
      newValueArray.push(val);
    }
    setValueArray(newValueArray);
  }

  function apply() {
    onChange(valueArray);
    setBottomModal(false);
  }

  function cancel() {
    setValueArray(value);
    setBottomModal(false);
  }

  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}
      <AtmContainer>
        <AtmSelect
          value={value.length + ' items selected'}
          placeholder={placeholder}
          withBorder={withBorder}
          withBackground={withBackground}
          onPress={() => setBottomModal(true)}
        />
      </AtmContainer>

      <AtmModal visibility={bottomModal} close={() => cancel()} type="bottom">
        <AtmContainer padding={10}>
          {options.map(item => (
            <MolOption
              key={item.value}
              size="md"
              text={item.label}
              textColor="primaryText"
              status={valueArray.includes(item.value)}
              onChange={() => {
                onSelect(valueArray.includes(item.value), item.value);
              }}
            />
          ))}
        </AtmContainer>

        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={5} flex={1}>
            <MolButton
              withBorder
              color="neutral"
              text="Cancel"
              onPress={() => cancel()}
            />
          </AtmContainer>
          <AtmContainer padding={5} flex={1}>
            <MolButton color="theme" text="Apply" onPress={() => apply()} />
          </AtmContainer>
        </AtmContainer>
      </AtmModal>
    </>
  );
};

export default MolMultiSelectBox;
