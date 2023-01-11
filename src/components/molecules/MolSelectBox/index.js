import React, {useState} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmSelect from '../../atoms/AtmSelect';
import AtmModal from '../../atoms/AtmModal';
import MolOption from '../../molecules/MolOption';
import AtmContainer from '../../atoms/AtmContainer';

const MolSelectBox = ({
  label,
  withBorder,
  withBackground,
  onChange,
  placeholder,
  options,
  value,
}) => {
  const [bottomModal, setBottomModal] = useState(false);
  let valueLabel;
  options.forEach(item => {
    if (item.value === value) {
      valueLabel = item.label;
    }
  });
  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}
      <AtmContainer>
        <AtmSelect
          value={valueLabel}
          placeholder={placeholder}
          withBorder={withBorder}
          withBackground={withBackground}
          onPress={() => setBottomModal(true)}
        />
      </AtmContainer>

      <AtmModal
        maxHeight={500}
        visibility={bottomModal}
        close={() => setBottomModal(false)}
        type="bottom">
        <AtmContainer padding={10}>
          {options.map(item => (
            <MolOption
              key={item.value}
              size="md"
              text={item.label}
              textColor="primaryText"
              status={value == item.value}
              onChange={() => {
                onChange(item.value);
                setBottomModal(false);
              }}
            />
          ))}
        </AtmContainer>
      </AtmModal>
    </>
  );
};

export default MolSelectBox;
