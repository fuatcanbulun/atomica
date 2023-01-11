import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolBox1 from '../molecules/MolBox1';
import MolBox2 from '../molecules/MolBox2';
import MolBox3 from '../molecules/MolBox3';
import MolPage from '../molecules/MolPage';

const boxes1 = [
  {
    id: 'dog',
    image: 'image1',
    title: 'Dog',
  },
  {
    id: 'cat',
    image: 'image2',
    title: 'Cat',
  },
  {
    id: 'bird',
    image: 'image3',
    title: 'Bird',
  },
];

const boxes2 = [
  {
    id: 1,
    image: 'image4',
    name: 'Leona Calvia - Shirt',
    prize: '$54,00',
    favorite: false,
  },
  {
    id: 2,
    image: 'image5',
    name: 'Leona Calvia - Shirt',
    prize: '$50,00',
    favorite: true,
  },
  {
    id: 3,
    image: 'image6',
    name: 'Leona Calvia - Shirt',
    prize: '$48,00',
    favorite: false,
  },
];

const boxes3 = [
  {
    id: 'nomercy',
    title: 'No Mercy',
    artist: 'Evil Trasher',
    image: 'rock01',
  },
  {
    id: 'roadToEnd',
    title: 'Road to End',
    artist: 'Madness',
    image: 'rock02',
  },
  {
    id: 'blackRoses',
    title: 'Black Roses',
    artist: 'Origamic Umbrella',
    image: 'rock03',
  },
  {
    id: 'immortalTree',
    title: 'Immortal Tree',
    artist: 'Eric Dumeney',
    image: 'rock04',
  },
];

export default function Boxes({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Boxes"
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
          <AtmContainer padding={5} flexWrap="wrap" flexDirection="row">
            {boxes1.map(item => (
              <AtmContainer padding={5} width="50%" key={item.id}>
                <MolBox1 title={item.title} image={item.image} />
              </AtmContainer>
            ))}
          </AtmContainer>
          <AtmContainer padding={5} flexWrap="wrap" flexDirection="row">
            {boxes2.map(item => (
              <AtmContainer padding={5} width="50%" key={item.id}>
                <MolBox2 data={item} />
              </AtmContainer>
            ))}
          </AtmContainer>
          <AtmContainer padding={5} flexWrap="wrap" flexDirection="row">
            {boxes3.map(item => (
              <AtmContainer padding={5} width="50%" key={item.id}>
                <MolBox3
                  image={item.image}
                  title={item.title}
                  subtitle={item.artist}
                />
              </AtmContainer>
            ))}
          </AtmContainer>
        </ScrollView>
      </MolPage>
    </SafeAreaView>
  );
}
