import React, {useEffect, useState} from 'react';

import {SafeAreaView, LogBox, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MolNavigationBar from '../molecules/MolNavigationBar';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, isReadyRef} from '../../../RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AtmImage from '../atoms/AtmImage';
import AtmModal from '../atoms/AtmModal';
import AtmContainer from '../atoms/AtmContainer';
import AtmStatusBar from '../atoms/AtmStatusBar';
import Menu from '../screens/menu';
import Home from '../screens/home';
import Trend from '../screens/trend';
import Playlist from '../screens/playlist';
import Albums from '../screens/albums';
import Around from '../screens/around';
import Profile from '../screens/profile';
import Friends from '../screens/friends';
import Favorites from '../screens/favorites';
import Settings from '../screens/settings';
import Ratings from '../screens/ratings';
import Components from '../screens/components';
import Swiper from '../screens/swiper';
import Buttons from '../screens/buttons';
import Strips from '../screens/strips';
import Modals from '../screens/modals';
import Cards from '../screens/cards';
import Boxes from '../screens/boxes';
import Charts from '../screens/charts';
import Forms from '../screens/forms';
import Tabs from '../screens/tabs';
import Alerts from '../screens/alerts';
import Map from '../screens/map';
import Others from '../screens/others';

const options = [
  {
    id: 'trend',
    icon: 'stats-chart',
    link: 'Trend',
    //name: 'Trend',
  },
  {
    id: 'playlist',
    icon: 'md-musical-notes',
    link: 'Playlist',
    //name: 'Playlist',
  },
  {
    id: 'home',
    icon: 'md-home',
    link: 'Home',
    //name: 'Home',
  },
  {
    id: 'albums',
    icon: 'md-grid',
    link: 'Albums',
    //name: 'Albums',
  },
  {
    id: 'around',
    icon: 'md-earth',
    link: 'Around',
    //name: 'Around',
  },
];

export default function Main({openLogin, props}) {
  const Stack = createStackNavigator();
  const [drawer, setDrawer] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [themeBg, setThemeBg] = useState(false);
  const [selectedNav, setSelectedNav] = useState('home');
  const [navVisibility, setNavVisibility] = useState(true);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const soft = {
    $theme: 'soft', // required variable for caching!
    $ColorPrimary: '#ded1bf',
    $ColorSecondary: '#ede3d5',
    $ColorTertiary: '#f0f0f0',
    $ColorPrimaryText: '#000000',
    $ColorSecondaryText: '#3d3532',
    $ColorTertiaryText: '#a88677',
    $ColorNeutral: '#fff',
    $ColorTheme: '#ad394b',
    $ColorStunning: '#fc9803',
    $ColorSuccess: '#00942c',
    $ColorWarning: '#f58442',
    $ColorDanger: '#c90000',
    $ColorDarkGlass: 'rgba(0,0,0,0.5)',
  };

  const ocean = {
    $theme: 'ocean', // required variable for caching!
    $ColorPrimary: '#000000',
    $ColorSecondary: '#c2c2c2',
    $ColorTertiary: '#e0e0e0',
    $ColorPrimaryText: '#000000',
    $ColorSecondaryText: '#2b414a',
    $ColorTertiaryText: '#6499b0',
    $ColorNeutral: '#fff',
    $ColorTheme: '#2a89a1',
    $ColorStunning: '#03d7fc',
    $ColorSuccess: '#00942c',
    $ColorWarning: '#f58442',
    $ColorDanger: '#c90000',
    $ColorDarkGlass: 'rgba(0,0,0,0.5)',
  };

  const dark = {
    $theme: 'dark', // required variable for caching!
    $ColorPrimary: '#385052',
    $ColorSecondary: '#233738',
    $ColorTertiary: '#132021',
    $ColorPrimaryText: '#ffffff',
    $ColorSecondaryText: '#7ff0ec',
    $ColorTertiaryText: '#66d4ed',
    $ColorNeutral: '#000000',
    $ColorTheme: '#067a78',
    $ColorStunning: '#46e8a4',
    $ColorSuccess: '#00942c',
    $ColorWarning: '#f58442',
    $ColorDanger: '#c90000',
    $ColorDarkGlass: 'rgba(0,0,0,0.5)',
  };

  useEffect(() => {
    console.log('Platform', Platform);
    getTheme();
    return () => {
      isReadyRef.current = false;
    };
    // eslint-disable-next-line
  },[]);



  async function getTheme() {
    setRefresh(false);
    setNavVisibility(true);
    let theme;
    try {
      theme = await AsyncStorage.getItem('@themeValue');
      EStyleSheet.build(
        theme == 'soft'
          ? soft
          : theme == 'ocean'
          ? ocean
          : theme == 'dark'
          ? dark
          : soft,
      );
      setThemeBg(theme ? theme : 'soft');
      setRefresh(true);
    } catch (e) {
      // error reading value
    }
    if (!theme) {
      try {
        await AsyncStorage.setItem('@themeValue', 'soft');
      } catch (e) {
        // error reading value
      }
    }
  }

  return (
    <>
      {refresh && (
        <>
          <AtmStatusBar bgColor="transparent" color="light" />
          <AtmContainer
            backgroundColor="theme"
            width="100%"
            height={Platform.OS == 'ios' ? 50 : 30}
          />
          <AtmImage
            data={
              themeBg == 'soft'
                ? 'background01'
                : themeBg == 'ocean'
                ? 'background02'
                : themeBg == 'dark'
                ? 'background03'
                : null
            }
            size="cover"
            resizeMode="cover"
            flex={1}
            flexDirection="column">
            <SafeAreaView style={{flex: 1}}>
              <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                  isReadyRef.current = true;
                }}>
                <Stack.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                    headerShown: false,
                    cardStyle: {backgroundColor: 'transparent'},
                  }}>
                  <Stack.Screen
                    name="Home"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Home}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Trend"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Trend}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Playlist"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Playlist}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Albums"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Albums}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Around"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Around}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Profile"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Profile}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Friends"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Friends}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Favorites"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Favorites}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Settings"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Settings}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                      refreshTheme: () => {
                        setTimeout(() => {
                          getTheme();
                        }, 2000);
                        setSelectedNav('home');
                      },
                    }}
                  />
                  <Stack.Screen
                    name="Ratings"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Ratings}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Components"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Components}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Swiper"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Swiper}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Buttons"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Buttons}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Strips"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Strips}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Modals"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Modals}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Cards"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Cards}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Charts"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Charts}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Forms"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Forms}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Tabs"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Tabs}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Alerts"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Alerts}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Boxes"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Boxes}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Map"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Map}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                  <Stack.Screen
                    name="Others"
                    options={{
                      animationEnabled: false,
                    }}
                    component={Others}
                    initialParams={{
                      openMenu: () => setDrawer(true),
                      setNavVisibility: val => setNavVisibility(val),
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>

              {navVisibility && (
                <MolNavigationBar
                  options={options}
                  selectedNav={selectedNav}
                  setSelectedNav={setSelectedNav}
                />
              )}
            </SafeAreaView>
          </AtmImage>

          <AtmModal
            visibility={drawer}
            close={() => setDrawer(false)}
            type="left">
            <Menu
              hideNav={() => setNavVisibility(false)}
              closeDrawer={() => setDrawer(false)}
              logout={() => openLogin()}
            />
          </AtmModal>
        </>
      )}
    </>
  );
}
