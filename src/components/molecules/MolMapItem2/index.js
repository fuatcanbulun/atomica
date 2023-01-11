import React from 'react';
import AtmImage from '../../atoms/AtmImage';
import AtmContainer from '../../atoms/AtmContainer';
import {TouchableHighlight} from 'react-native';

const MolMapItem2 = ({image}) => {
  return (
    <TouchableHighlight activeOpacity={0}>
      <AtmContainer padding={5} borderRadius={100} backgroundColor="neutral">
        <AtmContainer
          width={50}
          height={50}
          justifyContent="center"
          alignItems="center">
          <AtmImage data={image} size="lg" radius={100} />
        </AtmContainer>
      </AtmContainer>
    </TouchableHighlight>
  );
};

export default MolMapItem2;
