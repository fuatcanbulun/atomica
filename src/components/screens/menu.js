import React from 'react';
import {SafeAreaView} from 'react-native';
import MolLink from '../molecules/MolLink';
import AtmSpace from '../atoms/AtmSpace';
import AtmContainer from '../atoms/AtmContainer';
import AtmImage from '../atoms/AtmImage';
import AtmText from '../atoms/AtmText';
import * as RootNavigation from '../../../RootNavigation';

export default function Menu({closeDrawer, logout, hideNav}) {
  return (
    <SafeAreaView>
      <AtmSpace size="md" />

      <AtmContainer justifyContent="center" alignItems="center">
        <AtmImage data="portrait01" size="xxl" radius={100} />
      </AtmContainer>

      <AtmContainer padding={5} justifyContent="center" alignItems="center">
        <AtmText text="Jack Jones" size="md" textColor="primaryText" />
      </AtmContainer>

      <AtmContainer padding={10} direction="column">
        <MolLink
          icon="ios-person"
          size="md"
          text="Profile"
          onPress={() => {
            RootNavigation.navigate('Profile');
            closeDrawer();
            hideNav();
          }}
        />
        <MolLink
          icon="ios-chatbubble-ellipses"
          size="md"
          text="Friends"
          onPress={() => {
            RootNavigation.navigate('Friends');
            closeDrawer();
            hideNav();
          }}
        />
        <MolLink
          icon="heart-half"
          size="md"
          text="Favorites"
          onPress={() => {
            RootNavigation.navigate('Favorites');
            closeDrawer();
            hideNav();
          }}
        />
        <MolLink
          icon="settings-sharp"
          size="md"
          text="Settings"
          onPress={() => {
            RootNavigation.navigate('Settings');
            closeDrawer();
            hideNav();
          }}
        />
        <MolLink
          icon="hammer"
          size="md"
          text="Components"
          onPress={() => {
            RootNavigation.navigate('Components');
            closeDrawer();
            hideNav();
          }}
        />
        <MolLink
          icon="star"
          size="md"
          text="Ratings"
          onPress={() => {
            RootNavigation.navigate('Ratings');
            closeDrawer();
            hideNav();
          }}
        />
        <MolLink
          icon="md-log-out-outline"
          size="md"
          text="Logout"
          onPress={() => {
            logout();
          }}
        />
      </AtmContainer>
    </SafeAreaView>
  );
}
