import React, {useState} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';
import MolButton from '../../molecules/MolButton';

const MolMonths = ({
  prevMonthYear,
  nextMonthYear,
  onMonthPress,
  months,
  selectedMonth,
  selectedMonthYear,
}) => {
  return (
    <>
      <AtmContainer paddingVertical={10} flexDirection="row">
        <AtmContainer>
          <MolButton
            size="xs"
            color="neutral"
            icon="chevron-back"
            radius={10}
            onPress={() => prevMonthYear()}
          />
        </AtmContainer>
        <AtmContainer flex={1} justifyContent="center" alignItems="center">
          <AtmText text={selectedMonthYear} size="sm" textColor="primaryText" />
        </AtmContainer>
        <AtmContainer vertical="verticalCenter" horizontal="horizontalRight">
          <MolButton
            size="xs"
            color="neutral"
            icon="chevron-forward"
            radius={10}
            onPress={() => nextMonthYear()}
          />
        </AtmContainer>
      </AtmContainer>

      <AtmContainer paddingVertical={10} flexWrap="wrap" flexDirection="row">
        {months.map(month => (
          <AtmContainer
            width="33.3%"
            paddingHorizontal={5}
            paddingVertical={5}
            key={month.id}>
            <AtmContainer
              borderRadius={5}
              justifyContent="center"
              alignItems="center"
              backgroundColor={selectedMonth == month.id ? 'theme' : 'tertiary'}
              onPress={() => onMonthPress(month.id)}>
              <AtmText
                text={month.name}
                size="sm"
                textColor={selectedMonth == month.id ? 'white' : 'primaryText'}
              />
            </AtmContainer>
          </AtmContainer>
        ))}
      </AtmContainer>
    </>
  );
};

export default MolMonths;
