import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmImage from '../../atoms/AtmImage';
import AtmContainer from '../../atoms/AtmContainer';

const MolCard7 = ({image, title, subTitle, actions, id}) => {
  return (
    <>
      <AtmContainer
        height={80}
        borderRadius={10}
        backgroundColor="neutral"
        paddingVertical={10}
        flexDirection="row">
        <AtmContainer
          flex={1}
          paddingLeft={20}
          justifyContent="center"
          alignItems="flex-start">
          <AtmText
            text={title}
            fontSize={20}
            lineHeight={25}
            height={25}
            textColor="primaryText"
          />
          <AtmText
            text={subTitle}
            fontSize={15}
            lineHeight={20}
            height={20}
            textColor="secondaryText"
          />
        </AtmContainer>

        <AtmContainer
          paddingRight={15}
          justifyContent="center"
          alignItems="center"
          width={80}>
          <AtmImage data={image} width={70} height={70} radius={5} />
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolCard7;
