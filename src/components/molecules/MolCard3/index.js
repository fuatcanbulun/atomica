import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmLine from '../../atoms/AtmLine';
import AtmSpace from '../../atoms/AtmSpace';
import AtmImage from '../../atoms/AtmImage';
import AtmContainer from '../../atoms/AtmContainer';

const MolCard3 = ({title, image, data}) => {
  return (
    <AtmContainer borderRadius={10} backgroundColor="neutral">
      <>
        <AtmContainer
          flexDirection="row"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          paddingVertical={10}>
          <AtmContainer
            flex={1}
            justifyContent="center"
            alignItems="flex-start"
            paddingHorizontal={10}
            paddingVertical={5}>
            <AtmText
              text={title}
              size="md"
              textColor="primaryText"
              weight="medium"
            />
          </AtmContainer>
          <AtmContainer
            justifyContent="center"
            alignItems="flex-end"
            paddingHorizontal={10}>
            <AtmImage data={image} size="lg" radius={30} />
          </AtmContainer>
        </AtmContainer>

        {data.map((item, index) => (
          <React.Fragment key={item.valueLeft}>
            <AtmContainer flexDirection="row">
              <AtmContainer
                flex={1}
                justifyContent="center"
                alignItems="flex-start"
                paddingHorizontal={10}>
                <AtmText
                  text={item.valueLeft}
                  size="sm"
                  textColor="primaryText"
                />
              </AtmContainer>
              <AtmContainer
                flex={1}
                justifyContent="center"
                alignItems="flex-end"
                paddingHorizontal={10}
                paddingVertical={5}>
                <AtmText
                  text={item.valueRight}
                  size="sm"
                  textColor="primaryText"
                />
              </AtmContainer>
            </AtmContainer>
            {index != data.length - 1 && (
              <AtmContainer
                justifyContent="center"
                alignItems="center"
                paddingHorizontal={10}
                paddingVertical={5}>
                <AtmLine />
              </AtmContainer>
            )}
          </React.Fragment>
        ))}

        <AtmSpace size="sm" />
      </>
    </AtmContainer>
  );
};

export default MolCard3;
