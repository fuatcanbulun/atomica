import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import MolCheck from '../../molecules/MolCheck';
import AtmContainer from '../../atoms/AtmContainer';

const MolOption = ({text, onChange, status}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} onPress={onChange} flexDirection="row">
        <AtmContainer justifyContent="center" alignItems="flex-start" flex={1}>
          <AtmText text={text} size="sm" textColor="primaryText" />
        </AtmContainer>
        <AtmContainer justifyContent="center" alignItems="center" width={40}>
          <MolCheck
            noEvent
            value={status}
            onChange={onChange}
            shape="circle"
            size="sm"
          />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer>
        <AtmLine color="secondary" />
      </AtmContainer>
    </>
  );
};

export default MolOption;
