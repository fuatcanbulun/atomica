import React from 'react';
import AtmProgress from '../../atoms/AtmProgress';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';

const MolProgressBar = ({label, start, end, value, color, barHeight}) => {
  const range = end - start;
  const percentage = (value * 100) / range;

  return (
    <>
      <AtmContainer flexDirection="row">
        <AtmContainer justifyContent="center" alignItems="flex-start" flex={1}>
          <AtmText
            text={label}
            size="sm"
            textColor="primaryText"
            position="center"
          />
        </AtmContainer>
        <AtmContainer justifyContent="center" alignItems="flex-end" flex={1}>
          <AtmText
            text={percentage + '%'}
            size="md"
            weight="medium"
            textColor="primaryText"
            position="center"
          />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer>
        <AtmProgress percentage={percentage} color={color} height={barHeight} />
      </AtmContainer>
      <AtmContainer flexDirection="row">
        <AtmContainer justifyContent="center" alignItems="flex-start" flex={1}>
          <AtmText
            text={start}
            size="sm"
            textColor="secondaryText"
            position="center"
          />
        </AtmContainer>
        <AtmContainer justifyContent="center" alignItems="flex-end" flex={1}>
          <AtmText
            text={end}
            size="sm"
            textColor="secondaryText"
            position="center"
          />
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolProgressBar;
