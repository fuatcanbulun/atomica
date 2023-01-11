import React, {useState} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmModal from '../../atoms/AtmModal';
import MolOption from '../../molecules/MolOption';
import AtmContainer from '../../atoms/AtmContainer';
import AtmIcon from '../../atoms/AtmIcon';

const MolSelectText = ({onChange, options, value}) => {
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <>
      <AtmContainer onPress={() => setBottomModal(true)} flexDirection="row">
        <AtmText
          text={value}
          size="sm"
          textColor="primaryText"
          textTransform="uppercase"
        />
        <AtmIcon icon="chevron-down" iconColor="primaryText" iconSize="sm" />
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

export default MolSelectText;
