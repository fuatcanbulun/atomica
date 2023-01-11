import React, {useState, useEffect} from 'react';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolPage from '../molecules/MolPage';
import MolTabButtons from '../molecules/MolTabButtons';
import MolBox3 from '../molecules/MolBox3';
import AtmTabPages from '../atoms/AtmTabPages';
import AtmTabPage from '../atoms/AtmTabPage';

const genres = [
  {
    id: 'rock',
    text: 'Rock',
  },
  {
    id: 'pop',
    text: 'Pop',
  },
  {
    id: 'jazz',
    text: 'Jazz',
  },
];

const rockAlbums = [
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
const jazzAlbums = [
  {
    id: 'bluesGarden',
    title: 'Blues Garden',
    artist: 'Jacky Jack',
    image: 'jazz01',
  },
  {
    id: 'summerNight',
    title: 'Summer Night',
    artist: 'Anthony Night',
    image: 'jazz02',
  },
  {
    id: 'noWorries',
    title: 'No Worries',
    artist: 'Jason Sanders',
    image: 'jazz03',
  },
  {
    id: 'falling',
    title: 'Falling',
    artist: 'Black Tones',
    image: 'jazz04',
  },
];
const technoAlbums = [
  {
    id: 'dreamLand',
    title: 'Dream Land',
    artist: 'DJ Ariew',
    image: 'techno01',
  },
  {
    id: 'alterLife',
    title: 'Alter Life',
    artist: 'Dub Master',
    image: 'techno02',
  },
  {
    id: 'fireExit',
    title: 'Fire Exit',
    artist: 'Romeric',
    image: 'techno03',
  },
  {
    id: 'zeroTolerance',
    title: 'Zero Tolerance',
    artist: 'DJ Corsarica',
    image: 'techno04',
  },
];
export default function Albums({navigation, route}) {
  const [activeTab, setActiveTab] = useState(1);

  function onChange(val) {
    setActiveTab(val);
  }
  return (
    <>
      <MolPageHeader
        title="Albums"
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolPage>
        <MolTabButtons
          color="neutral"
          data={genres}
          activeTab={activeTab}
          onChange={onChange}
        />
        <AtmTabPages
          count={genres.length}
          height="full"
          activeTab={activeTab}
          onChange={val => setActiveTab(val)}>
          <AtmTabPage>
            <AtmContainer padding={5} flexWrap="wrap" flexDirection="row">
              {rockAlbums.map(item => (
                <AtmContainer padding={5} width="50%" key={item.id}>
                  <MolBox3
                    image={item.image}
                    title={item.title}
                    subtitle={item.artist}
                  />
                </AtmContainer>
              ))}
            </AtmContainer>
          </AtmTabPage>
          <AtmTabPage>
            <AtmContainer padding={5} flexWrap="wrap" flexDirection="row">
              {jazzAlbums.map(item => (
                <AtmContainer padding={5} width="50%" key={item.id}>
                  <MolBox3
                    image={item.image}
                    title={item.title}
                    subtitle={item.artist}
                  />
                </AtmContainer>
              ))}
            </AtmContainer>
          </AtmTabPage>
          <AtmTabPage>
            <AtmContainer padding={5} flexWrap="wrap" flexDirection="row">
              {technoAlbums.map(item => (
                <AtmContainer padding={5} width="50%" key={item.id}>
                  <MolBox3
                    image={item.image}
                    title={item.title}
                    subtitle={item.artist}
                  />
                </AtmContainer>
              ))}
            </AtmContainer>
          </AtmTabPage>
        </AtmTabPages>
      </MolPage>
    </>
  );
}
