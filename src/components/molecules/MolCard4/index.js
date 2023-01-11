import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmImage from '../../atoms/AtmImage';
import AtmContainer from '../../atoms/AtmContainer';

const MolCard4 = ({image, valueLeft, valueRight}) => {
  return (
    <AtmContainer borderRadius={50} backgroundColor="neutral">
      <AtmContainer
        flexDirection="row"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        paddingVertical={10}>
        <AtmContainer
          justifyContent="center"
          alignItems="flex-start"
          paddingHorizontal={10}
          width={60}>
          <AtmImage data={image} size="lg" radius={30} />
        </AtmContainer>
        <AtmContainer
          justifyContent="center"
          alignItems="flex-start"
          paddingHorizontal={10}
          paddingVertical={5}>
          <AtmText text={valueLeft} size="sm" textColor="secondaryText" />
        </AtmContainer>
        <AtmContainer
          justifyContent="center"
          alignItems="flex-end"
          paddingHorizontal={10}>
          <AtmText text={valueRight} size="sm" textColor="primaryText" />
        </AtmContainer>
      </AtmContainer>
    </AtmContainer>
  );
};

export default MolCard4;
