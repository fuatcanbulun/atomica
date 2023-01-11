import React from 'react';
import AtmText from '../../atoms/AtmText';

import AtmContainer from '../../atoms/AtmContainer';

const MolYears = ({onYearPress, years, selectedYear}) => {
  return (
    <AtmContainer paddingVertical={10} flexWrap="wrap" flexDirection="row">
      {years.map(year => (
        <AtmContainer
          width="33.3%"
          paddingHorizontal={5}
          paddingVertical={5}
          key={year.id}>
          <AtmContainer
            borderRadius={5}
            justifyContent="center"
            alignItems="center"
            backgroundColor={selectedYear == year.id ? 'theme' : 'tertiary'}
            onPress={() => onYearPress(year.id)}>
            <AtmText
              text={year.id}
              size="sm"
              textColor={selectedYear == year.id ? 'white' : 'primaryText'}
            />
          </AtmContainer>
        </AtmContainer>
      ))}
    </AtmContainer>
  );
};

export default MolYears;
