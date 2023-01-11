import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import MolPageHeader from '../molecules/MolPageHeader';
import MolCard7 from '../molecules/MolCard7';
import AtmContainer from '../atoms/AtmContainer';
import MolPage from '../molecules/MolPage';
import AtmSpace from '../atoms/AtmSpace';
import MolProgressCircle from '../molecules/MolProgressCircle';

export default function Home({navigation, route}) {
  return (
    <>
      <MolPageHeader
        title="Home"
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolPage>
        <ScrollView style={{flex: 1}}>
          <AtmContainer justifyContent="center" alignItems="center">
            <MolProgressCircle
              value={75}
              title="Good"
              subtitle="750 / 1000"
              text="Listener"
            />
          </AtmContainer>
          <AtmContainer padding={10}>
            <MolCard7
              title="Top 20 Songs"
              subTitle="in your country"
              image="image01"
            />
            <AtmSpace size="sm" />
            <MolCard7
              title="Trending Hot"
              subTitle="playlists"
              image="image02"
            />
            <AtmSpace size="sm" />
            <MolCard7
              title="Special Suggestions"
              subTitle="just for you"
              image="image03"
            />
          </AtmContainer>
        </ScrollView>
      </MolPage>
    </>
  );
}
