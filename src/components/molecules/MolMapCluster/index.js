import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';

const MolMapCluster = ({points, onPress}) => {
  return (
    <AtmContainer
      backgroundColor="neutral"
      borderRadius={20}
      width={40}
      height={40}
      justifyContent="center"
      alignItems="center">
      <AtmText text={points} size="md" textColor="primaryText" />
    </AtmContainer>
  );
};

export default MolMapCluster;
