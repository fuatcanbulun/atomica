import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmSpace from '../../atoms/AtmSpace';
import AtmImage from '../../atoms/AtmImage';
import MolButton from '../../molecules/MolButton';
import AtmContainer from '../../atoms/AtmContainer';

const MolCard5 = ({image, title, subTitle, actions, id}) => {
  return (
    <>
      <AtmContainer />
      <AtmContainer
        borderRadius={10}
        backgroundColor="neutral"
        paddingVertical={10}
        flexDirection="row">
        <AtmContainer
          paddingLeft={10}
          justifyContent="center"
          alignItems="center"
          width={60}>
          <AtmImage data={image} size="lg" radius={5} />
        </AtmContainer>
        <AtmContainer
          flex={1}
          paddingLeft={10}
          justifyContent="center"
          alignItems="flex-start">
          <AtmText text={title} size="sm" textColor="primaryText" />
          <AtmText text={subTitle} size="xs" textColor="secondaryText" />
        </AtmContainer>
        <AtmContainer flexDirection="row">
          {actions?.map(item => (
            <MolButton
              key={item.id}
              size="sm"
              iconColor="primaryText"
              icon={item.icon}
              onPress={() => item.onPress(id)}
            />
          ))}
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolCard5;
