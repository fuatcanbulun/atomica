import React from 'react';
import AtmTabButtons from '../../atoms/AtmTabButtons';
import AtmTabButton from '../../atoms/AtmTabButton';

const MolTabButtons = ({data, color, onChange, activeTab, radius}) => {
  return (
    <>
      <AtmTabButtons color={color} radius={radius}>
        {data.map((item, index) => (
          <AtmTabButton
            key={item.id}
            text={item.text}
            status={activeTab === index + 1}
            leftBorder={index !== 0}
            textColor={color === 'theme' ? 'neutral' : 'primaryText'}
            onPress={() => onChange(index + 1, item.id ? item.id : null)}
          />
        ))}
      </AtmTabButtons>
    </>
  );
};

export default MolTabButtons;
