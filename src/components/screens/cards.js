import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmSpace from '../atoms/AtmSpace';
import MolPageHeader from '../molecules/MolPageHeader';
import MolPage from '../molecules/MolPage';
import MolCard1 from '../molecules/MolCard1';
import MolCard2 from '../molecules/MolCard2';
import MolCard3 from '../molecules/MolCard3';
import MolCard4 from '../molecules/MolCard4';
import MolCard5 from '../molecules/MolCard5';
import MolCard6 from '../molecules/MolCard6';
import MolCard7 from '../molecules/MolCard7';

export default function Cards({navigation, route}) {
  const dataCard3 = [
    {
      valueLeft: 'Ankara',
      valueRight: '2020',
    },
    {
      valueLeft: 'İzmir',
      valueRight: '2021',
    },
  ];

  const dataCard5 = {
    id: 'RaphaëlLuis',
    name: 'Raphaël Luis',
    location: 'United Kingdom',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait02',
  };

  const dataCard6 = {
    id: 'heavyMetalPlaylist',
    title: 'Heavy Metal Playlist',
    subtitle: '26 Songs',
    duration: '05:30',
    percentage: 50,
  };

  const actions = [
    {
      id: 1,
      icon: 'chatbubble-ellipses-outline',
      onPress: val => alert(val),
    },
    {
      id: 2,
      icon: 'ios-close-sharp',
      onPress: val => alert(val),
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Cards"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolPage>
        <ScrollView style={{flex: 1}}>
          <AtmContainer padding={10}>
            <MolCard1
              title="Card Title"
              icon="rocket"
              valueLeft="High"
              valueRight="12.04.2021 - 20:30"
            />
            <AtmSpace size="sm" />
            <MolCard2
              title="Card Title"
              icon="rocket"
              valueLeft="High"
              valueRight="12.04.2021 - 20:30"
            />
            <AtmSpace size="sm" />
            <MolCard3 title="Card Title" image="image2" data={dataCard3} />
            <AtmSpace size="sm" />
            <MolCard4
              image="image1"
              valueLeft="High"
              valueRight="İstanbul / Kadıköy"
            />
            <AtmSpace size="sm" />
            <MolCard5
              key={dataCard5.id}
              id={dataCard5.id}
              image={dataCard5.image}
              title={dataCard5.name}
              subTitle={dataCard5.location}
              actions={actions}
            />
            <AtmSpace size="sm" />
            <MolCard6
              key={dataCard6.id}
              title={dataCard6.title}
              subtitle={dataCard6.subtitle}
              duration={dataCard6.duration}
              percentage={dataCard6.percentage}
            />
            <AtmSpace size="sm" />
            <MolCard7
              title="Top 20 Songs"
              subTitle="in your country"
              image="image01"
            />
          </AtmContainer>
        </ScrollView>
      </MolPage>
    </SafeAreaView>
  );
}
