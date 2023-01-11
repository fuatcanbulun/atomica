import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolPage from '../molecules/MolPage';
import MolStrip2 from '../molecules/MolStrip2';
import MolStrip3 from '../molecules/MolStrip3';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function Settings({navigation, route}) {
  const [notification, setNotification] = useState(false);
  const [theme, setTheme] = useState('soft');

  async function changeTheme(val) {
    try {
      await AsyncStorage.setItem('@themeValue', val);
      route.params.refreshTheme();
    } catch (e) {
      // saving error
    }
  }

  async function getTheme() {
    try {
      if (theme) {
        let themeCode = await AsyncStorage.getItem('@themeValue');
        setTheme(themeCode);
      } else {
        setTheme('soft');
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getTheme();
    //eslint-disable-next-line
  },[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Settings"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
            route.params.setNavVisibility(true);
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolPage>
        <ScrollView style={{flex: 1}}>
          <AtmContainer padding={10}>
            <MolStrip2
              size="sm"
              text="Notifications"
              textColor="primaryText"
              status={notification}
              onChange={() => setNotification(!notification)}
            />
            <MolStrip3
              size="sm"
              text="Theme"
              textColor="primaryText"
              options={colorOptions}
              onChange={val => changeTheme(val)}
              value={theme}
            />
          </AtmContainer>
        </ScrollView>
      </MolPage>
    </SafeAreaView>
  );
}
