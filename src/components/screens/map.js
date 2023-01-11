import React, {useEffect} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MapView from 'react-native-map-clustering';
import MolMapCluster from '../molecules/MolMapCluster';
import MolMapItem1 from '../molecules/MolMapItem1';

const INITIAL_REGION = {
  latitude: 41.03,
  longitude: 29.05,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

const mapData = [
  {
    id: 1,
    name: 'Hilltown',
    type: 'vehicle',
    address: 'Çiçek Mah. Papatya Cad. No:1 Kadıköy/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'low',
    latitude: 41.03,
    longitude: 29.05,
    connection: 'ccs',
    power: '43',
    busy: true,
    reserved: true,
    passive: false,
  },
  {
    id: 2,
    name: 'Forum İstanbul',
    type: 'vehicle',
    address: 'Çiçek Mah. Gül Cad. No:1 Kadıköy/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'medium',
    latitude: 41.04,
    longitude: 28.99,
    connection: 'chademo',
    power: '43',
    busy: true,
    reserved: false,
    passive: true,
  },
  {
    id: 3,
    name: 'Mall Of İstanbul',
    type: 'vehicle',
    address: 'Çiçek Mah. Menekşe Cad. No:1 Kadıköy/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'high',
    latitude: 41.07,
    longitude: 29.05,
    connection: 'chademo',
    power: '43',
    busy: false,
    reserved: true,
    passive: false,
  },
  {
    id: 4,
    name: 'Emaar Square',
    type: 'vehicle',
    address: 'Meyve Mah. Armut Cad. No:1 Beşiktaş/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'low',
    latitude: 41.01,
    longitude: 29.06,
    connection: 'ccs',
    power: '70',
    busy: false,
    reserved: false,
    passive: false,
  },
  {
    id: 5,
    name: 'Marmara Forum',
    type: 'vehicle',
    address: 'Meyve Mah. Elma Cad. No:1 Beşiktaş/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'high',
    latitude: 40.962,
    longitude: 29.06,
    connection: 'ccs',
    power: '50',
    busy: false,
    reserved: false,
    passive: true,
  },
  {
    id: 6,
    name: 'Cevahir',
    type: 'vehicle',
    address: 'Meyve Mah. Çilek Cad. No:1 Beşiktaş/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'low',
    latitude: 40.966,
    longitude: 29.06,
    connection: 'ccs',
    power: '22',
    busy: true,
    reserved: false,
    passive: false,
  },
  {
    id: 7,
    name: 'Vialand',
    type: 'vehicle',
    address: 'Meyve Mah. Muz Cad. No:1 Beşiktaş/İstanbul',
    hours: '10:00- 22:00',
    status: 'Açık',
    distance: '2.0',
    level: 'low',
    latitude: 41.08,
    longitude: 28.99,
    connection: 'ccs',
    power: '43',
    busy: false,
    reserved: false,
    passive: false,
  },
];

export default function Map({navigation, route}) {
  function selectMapItem(val) {
    alert(val);
  }
  return (
    <>
      <AtmContainer width="100%">
        <MolPageHeader
          title="Around"
          leftButton={{
            icon: 'chevron-back',
            onPress: () => {
              navigation.goBack();
            },
          }}
          rightButton={{
            icon: 'menu',
            onPress: () => route.params.openMenu(true),
          }}
        />
      </AtmContainer>
      <AtmContainer position="absolute" top={50} width="100%" height="100%">
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          initialRegion={INITIAL_REGION}
          renderCluster={cluster => {
            const {id, geometry, onPress, properties} = cluster;
            const points = properties.point_count;

            return (
              <Marker
                key={`cluster-${id}`}
                coordinate={{
                  longitude: geometry.coordinates[0],
                  latitude: geometry.coordinates[1],
                }}
                onPress={onPress}>
                <MolMapCluster points={points} />
              </Marker>
            );
          }}>
          {mapData.map(item => {
            return (
              <Marker
                key={item.name}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                onPress={() => selectMapItem(item.id)}>
                <MolMapItem1 data={item} />
              </Marker>
            );
          })}
        </MapView>
      </AtmContainer>
    </>
  );
}
