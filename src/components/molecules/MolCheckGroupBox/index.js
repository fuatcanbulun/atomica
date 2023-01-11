import React, {useEffect, useState} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';
import AtmSpace from '../../atoms/AtmSpace';
import MolCheck from '../../molecules/MolCheck';

const MolCheckGroupBox = ({label, options, onChange, size, value}) => {
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
    onChange(newValueArray);
  }
  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}
      <AtmContainer
        flexWrap="wrap"
        justifyContent="space-between"
        flexDirection="row">
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
              value={valueArray.includes(item.value)}
              onChange={() => {
                onSelect(valueArray.includes(item.value), item.value);
              }}
            />
            <AtmSpace size="sm" />
          </AtmContainer>
        ))}
      </AtmContainer>
    </>
  );
};

export default MolCheckGroupBox;
