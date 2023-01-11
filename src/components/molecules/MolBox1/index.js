import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmImage from '../../atoms/AtmImage';
import AtmContainer from '../../atoms/AtmContainer';

const MolBox1 = ({image, title}) => {
  return (
    <AtmContainer borderRadius={10} backgroundColor="neutral">
      <AtmContainer height={100}>
        <AtmImage
          data={image}
          size="cover"
          resizeMode="stretch"
          topLeftRadius={10}
          topRightRadius={10}
        />
      </AtmContainer>
      <AtmContainer paddingHorizontal={10}>
        <AtmText text={title} size="sm" textColor="primaryText" />
      </AtmContainer>
    </AtmContainer>
  );
};

export default MolBox1;
