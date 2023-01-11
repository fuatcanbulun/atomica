import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolPage from '../molecules/MolPage';
import MolLink from '../molecules/MolLink';
import MolPageHeader from '../molecules/MolPageHeader';
import * as RootNavigation from '../../../RootNavigation';

export default function Components({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Components"
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
            <MolLink
              size="md"
              text="Swiper"
              onPress={() => {
                RootNavigation.navigate('Swiper');
              }}
            />
            <MolLink
              size="md"
              text="Buttons"
              onPress={() => {
                RootNavigation.navigate('Buttons');
              }}
            />
            <MolLink
              size="md"
              text="Strips"
              onPress={() => {
                RootNavigation.navigate('Strips');
              }}
            />
            <MolLink
              size="md"
              text="Modals"
              onPress={() => {
                RootNavigation.navigate('Modals');
              }}
            />
            <MolLink
              size="md"
              text="Cards"
              onPress={() => {
                RootNavigation.navigate('Cards');
              }}
            />
            <MolLink
              size="md"
              text="Charts"
              onPress={() => {
                RootNavigation.navigate('Charts');
              }}
            />
            <MolLink
              size="md"
              text="Forms"
              onPress={() => {
                RootNavigation.navigate('Forms');
              }}
            />
            <MolLink
              size="md"
              text="Tabs"
              onPress={() => {
                RootNavigation.navigate('Tabs');
              }}
            />
            <MolLink
              size="md"
              text="Alerts"
              onPress={() => {
                RootNavigation.navigate('Alerts');
              }}
            />
            <MolLink
              size="md"
              text="Boxes"
              onPress={() => {
                RootNavigation.navigate('Boxes');
              }}
            />
            <MolLink
              size="md"
              text="Map"
              onPress={() => {
                RootNavigation.navigate('Map');
              }}
            />
            <MolLink
              size="md"
              text="Others"
              onPress={() => {
                RootNavigation.navigate('Others');
              }}
            />
          </AtmContainer>
        </ScrollView>
      </MolPage>
    </SafeAreaView>
  );
}
