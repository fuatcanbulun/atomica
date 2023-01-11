import React from 'react';
import * as RootNavigation from '../../../../RootNavigation';
import AtmContainer from '../../atoms/AtmContainer';
import AtmIcon from '../../atoms/AtmIcon';
import AtmText from '../../atoms/AtmText';

const MolNavigationBar = ({options, selectedNav, setSelectedNav}) => {
  return (
    <AtmContainer backgroundColor="neutral" flexDirection="row">
      {options.map((item, index) => (
        <AtmContainer
          key={item.id}
          flex={1}
          flexDirection="column"
          onPress={() => {
            RootNavigation.navigate(item.link);
            setSelectedNav(item.id);
          }}>
          <>
            {item.icon && (
              <AtmContainer height={item.name ? 40 : 50} paddingTop={10}>
                <AtmContainer justifyContent="center" alignItems="center">
                  <AtmIcon
                    icon={item.icon}
                    iconColor={selectedNav == item.id ? 'theme' : 'primaryText'}
                    iconSize="sm"
                  />
                </AtmContainer>
              </AtmContainer>
            )}
            {item.name && (
              <AtmContainer height={item.icon ? 25 : 40}>
                <AtmContainer justifyContent="center" alignItems="center">
                  <AtmText text={item.name} size="sm" textColor="primaryText" />
                </AtmContainer>
              </AtmContainer>
            )}
          </>
        </AtmContainer>
      ))}
      <AtmContainer
        position="absolute"
        backgroundColor="neutral"
        width="100%"
        height={35}
        flex={1}
        bottom={-35}
        left={0}
        zIndex={9999}
      />
    </AtmContainer>
  );
};

export default MolNavigationBar;
