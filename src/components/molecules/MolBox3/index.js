import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmImage from '../../atoms/AtmImage';
import AtmSpace from '../../atoms/AtmSpace';
import AtmContainer from '../../atoms/AtmContainer';

const MolBox3 = ({image, title, subtitle}) => {
  return (
    <>
      <AtmContainer height={200} borderRadius={10} overflow="hidden">
        <AtmContainer>
          <AtmImage
            data={image}
            resizeMode="stretch"
            size="cover"
            radius={10}
          />
        </AtmContainer>
        <AtmContainer
          position="absolute"
          zIndex={1}
          bottom={0}
          left={0}
          width="100%"
          paddingLeft={10}
          paddingBottom={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          backgroundColor="darkGlass">
          <AtmText text={title} size="sm" textColor="white" />
          <AtmText text={subtitle} size="xs" textColor="white" />
        </AtmContainer>
      </AtmContainer>
      <AtmSpace size="sm" />
    </>
  );
};

export default MolBox3;
