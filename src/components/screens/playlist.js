import React, {useState, useEffect} from 'react';
import OrgList from '../organisms/OrgList';
import MolPageHeader from '../molecules/MolPageHeader';

const playlist = [
  {
    id: 'heavyMetalPlaylist',
    title: 'Heavy Metal Playlist',
    subtitle: '26 Songs',
    duration: '05:30',
    percentage: 50,
  },
  {
    id: 'newDiscovery',
    title: 'New Discovery',
    subtitle: '11 Songs',
    duration: '05:30',
    percentage: 25,
  },
  {
    id: 'carMusic',
    title: 'Car Music',
    subtitle: '38 Songs',
    duration: '05:30',
    percentage: 75,
  },
];

export default function Playlist({navigation, route}) {
  return (
    <>
      <MolPageHeader
        title="Playlist"
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <OrgList data={playlist} />
    </>
  );
}
