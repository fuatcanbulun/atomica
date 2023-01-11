import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmIcon from '../../atoms/AtmIcon';

import AtmContainer from '../../atoms/AtmContainer';

const MolCheck = ({tag, size, icon, onChange, value, shape, noEvent}) => {
  return (
    <AtmContainer
      flexDirection="row"
      noEvent={noEvent}
      borderWidth={1}
      borderColor="tertiaryText"
      borderRadius={shape == 'circle' ? 40 : 10}
      backgroundColor={value ? 'theme' : 'neutral'}
      width={
        size == 'sm'
          ? 40
          : size == 'md'
          ? 120
          : size == 'lg'
          ? '50%'
          : size == 'xl'
          ? '100%'
          : null
      }
      height={40}
      onPress={() => onChange(!value)}>
      {tag && size != 'sm' && (
        <AtmContainer
          flex={1}
          height={40}
          justifyContent="center"
          alignItems={icon ? 'flex-start' : 'center'}
          paddingLeft={icon ? 10 : 0}>
          <AtmText
            text={tag}
            size="sm"
            textColor={value ? 'white' : 'secondaryText'}
          />
        </AtmContainer>
      )}

      {icon && (
        <AtmContainer
          height={40}
          width={40}
          justifyContent="center"
          alignItems="flex-end">
          <AtmIcon
            icon={icon}
            iconColor={value ? 'white' : 'secondaryText'}
            iconSize="full"
          />
        </AtmContainer>
      )}
    </AtmContainer>
  );
};

export default MolCheck;
