import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmColor from '../../atoms/AtmColor';
import AtmContainer from '../../atoms/AtmContainer';
import AtmSpace from '../../atoms/AtmSpace';

const MolLegend = ({data, onLegendPress}) => {
  return (
    <>
      <AtmContainer flexDirection="row" flexWrap="wrap" paddingVertical={10}>
        {data.map((item, index) => (
          <React.Fragment key={item.name}>
            <AtmContainer
              key={item.name}
              height={30}
              width={
                data.length == 1 ? '100%' : data.length == 2 ? '50%' : '33.3%'
              }
              flexDirection="row"
              opacity={item.visible ? 1 : 0.5}
              onPress={() => onLegendPress(index)}>
              <AtmContainer width={30} padding={5}>
                <AtmColor width={20} height={20} color={item.color} />
              </AtmContainer>
              <AtmContainer>
                <AtmText text={item.name} size="sm" textColor="primaryText" />
              </AtmContainer>
            </AtmContainer>
          </React.Fragment>
        ))}
      </AtmContainer>
    </>
  );
};

export default MolLegend;
