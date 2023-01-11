import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmSpace from '../../atoms/AtmSpace';
import AtmProgress from '../../atoms/AtmProgress';
import MolButton from '../../molecules/MolButton';
import AtmContainer from '../../atoms/AtmContainer';

const MolCard6 = ({title, subtitle, duration, percentage}) => {
  return (
    <>
      <AtmContainer borderRadius={10} backgroundColor="neutral">
        <>
          <AtmSpace size="sm" />
          <AtmContainer flexDirection="row">
            <AtmContainer alignItems="flex-start" paddingLeft={10} flex={1}>
              <AtmText
                text={title}
                size="sm"
                weight="medium"
                textColor="primaryText"
              />
            </AtmContainer>
            <AtmContainer
              horizontal="horizontalRight"
              paddingRight={10}
              flex={1}
              alignItems="flex-end">
              <MolButton size="xxs" color="neutral" icon="heart" />
            </AtmContainer>
          </AtmContainer>
          <AtmContainer flexDirection="row">
            <AtmContainer alignItems="flex-start" paddingLeft={10} flex={1}>
              <AtmText text={subtitle} size="sm" textColor="secondaryText" />
            </AtmContainer>
            <AtmContainer alignItems="flex-end" paddingRight={10} flex={1}>
              <AtmText text={duration} size="sm" textColor="secondaryText" />
            </AtmContainer>
          </AtmContainer>
          <AtmContainer horizontal="horizontalLeft" paddingHorizontal={10}>
            <AtmProgress percentage={percentage} color="stunning" height={10} />
          </AtmContainer>
          <AtmSpace size="sm" />
        </>
      </AtmContainer>
    </>
  );
};

export default MolCard6;
