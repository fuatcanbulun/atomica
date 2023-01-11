import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolStrip1 from '../molecules/MolStrip1';
import MolStrip2 from '../molecules/MolStrip2';
import MolStrip3 from '../molecules/MolStrip3';
import MolStrip4 from '../molecules/MolStrip4';

export default function Strips({navigation, route}) {
  const [status, setStatus] = useState(false);
  const colorOptions = [
    {
      label: 'Soft',
      value: 'soft',
    },
    {
      label: 'Ocean',
      value: 'ocean',
    },
    {
      label: 'Dark',
      value: 'dark',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Strips"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />

      <AtmContainer padding={10} direction="column">
        <MolStrip1
          size="sm"
          text="Ankara"
          textColor="primaryText"
          icon="rocket"
          iconColor="theme"
        />
        <MolStrip2
          size="sm"
          text="Notifications"
          textColor="primaryText"
          status={status}
          onChange={() => setStatus(!status)}
        />
        <MolStrip3
          size="sm"
          text="Theme"
          textColor="primaryText"
          options={colorOptions}
          onChange={val => alert(val)}
          value="soft"
        />
        <MolStrip4
          size="sm"
          text="Temperature"
          textColor="primaryText"
          value="28 °C"
          valueColor="primaryText"
        />
      </AtmContainer>
    </SafeAreaView>
  );
}
