import React from 'react';
import AtmIcon from '../../atoms/AtmIcon';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';

const MolMapItem1 = ({data}) => {
  return (
    <>
      <AtmContainer justifyContent="center" alignItems="center">
        <AtmIcon
          icon="car-sport"
          iconColor="white"
          iconSize="sm"
          bgShape="circle"
          bgColor="red"
        />
      </AtmContainer>

      <AtmContainer justifyContent="center" alignItems="center" width={100}>
        <AtmText
          text={data.name}
          size="autoSm"
          textColor="primaryText"
          position="center"
        />
      </AtmContainer>
    </>
  );
};

export default MolMapItem1;
