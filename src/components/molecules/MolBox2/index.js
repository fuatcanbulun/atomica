import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmIcon from '../../atoms/AtmIcon';
import AtmImage from '../../atoms/AtmImage';
import AtmSpace from '../../atoms/AtmSpace';
import MolButton from '../../molecules/MolButton';
import AtmContainer from '../../atoms/AtmContainer';

const MolBox2 = ({data}) => {
  return (
    <AtmContainer
      borderRadius={10}
      backgroundColor="neutral"
      overflow="hidden"
      paddingTop={20}>
      <AtmContainer top={20} right={20} position="absolute" zIndex={1}>
        <AtmIcon
          icon="heart"
          iconColor={data.favorite ? 'red' : 'secondary'}
          iconSize="sm"
        />
      </AtmContainer>
      <AtmContainer height={150}>
        <AtmImage data={data.image} size="cover" resizeMode="contain" />
      </AtmContainer>
      <AtmContainer padding={10}>
        <AtmText text={data.name} size="xs" textColor="secondaryText" />
      </AtmContainer>
      <AtmContainer paddingHorizontal={5} flexDirection="row">
        <AtmContainer paddingHorizontal={5} flex={1}>
          <AtmText
            text={data.prize}
            size="md"
            textColor="primaryText"
            weight="bold"
          />
        </AtmContainer>
        <AtmContainer paddingHorizontal={5} width={50}>
          <MolButton size="xs" color="theme" icon="add" />
        </AtmContainer>
      </AtmContainer>
      <AtmSpace size="sm" />
    </AtmContainer>
  );
};

export default MolBox2;
