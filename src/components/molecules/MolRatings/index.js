import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';
import MolButton from '../MolButton';

const MolRatings = ({total, value, onChange, icon}) => {
  return (
    <>
      <AtmContainer flexDirection="row">
        <AtmContainer flexDirection="row" flex={1}>
          {[...Array(total)].map((x, i) => (
            <MolButton
              key={i}
              size="sm"
              icon={icon}
              iconColor={value >= i + 1 ? 'theme' : 'secondary'}
              onPress={() => onChange(i + 1)}
            />
          ))}
        </AtmContainer>
        <AtmContainer
          width={100}
          justifyContent="center"
          alignItems="flex-end"
          paddingRight={5}>
          <AtmText
            text={value}
            size="lg"
            weight="medium"
            textColor="primaryText"
          />
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolRatings;
