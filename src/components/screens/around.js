import React, {useState, useEffect} from 'react';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapView from 'react-native-map-clustering';
import MolMapCluster from '../molecules/MolMapCluster';
import MolMapItem2 from '../molecules/MolMapItem2';
import MolButton from '../molecules/MolButton';
import AtmImage from '../atoms/AtmImage';
import AtmText from '../atoms/AtmText';
import AtmModal from '../atoms/AtmModal';
import AtmContainer from '../atoms/AtmContainer';
import AtmLine from '../atoms/AtmLine';
import AtmSpace from '../atoms/AtmSpace';
import MolInputBox from '../molecules/MolInputBox';
import MolPageHeader from '../molecules/MolPageHeader';
import MolAlertSuccess from '../molecules/MolAlertSuccess';

const INITIAL_REGION = {
  latitude: 41.03,
  longitude: 29.05,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

const mapData = [
  {
    id: 'RaphaëlLuis',
    name: 'Raphaël Luis',
    location: 'United Kingdom',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait02',
    latitude: 41.03,
    longitude: 29.05,
  },
  {
    id: 'bengiYilmaz',
    name: 'Bengi Yılmaz',
    location: 'Turkey',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait03',
    latitude: 41.04,
    longitude: 28.99,
  },
  {
    id: 'patrickLuc',
    name: 'Patrick Luc',
    location: 'Belgium',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait04',
    latitude: 41.07,
    longitude: 29.05,
  },
  {
    id: 'amyWhite',
    name: 'Amy White',
    location: 'France',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait05',
    latitude: 40.99,
    longitude: 29.1,
  },
  {
    id: 'jürgenKlaus',
    name: 'Jürgen Klaus',
    location: 'Germany',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait06',
    latitude: 40.962,
    longitude: 29.06,
  },
];

const formData = {
  search: '',
};

export default function Map({navigation, route}) {
  const [formTemporary, setFormTemporary] = useState(formData);
  const [bottomModal, setBottomModal] = useState(false);
  const [selectedMapItem, setSelectedMapItem] = useState({});
  const [alertSuccess, setAlertSuccess] = useState(false);

  function selectMapItem(val) {
    setBottomModal(true);
    setSelectedMapItem(val);
  }
  return (
    <>
      <AtmContainer width="100%">
        <MolPageHeader
          title="Around"
          rightButton={{
            icon: 'menu',
            onPress: () => route.params.openMenu(true),
          }}
        />
      </AtmContainer>
      <AtmContainer position="absolute" top={50} width="100%" height="100%">
        <AtmContainer
          padding={10}
          position="absolute"
          width="100%"
          height={50}
          zIndex={9}>
          <MolInputBox
            placeholder="Search"
            withBorder
            withBackground
            onChange={val => setFormTemporary({...formTemporary, search: val})}
            value={formTemporary.search}
            icon="search-outline"
          />
        </AtmContainer>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1, position: 'relative'}}
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
                key={item.id}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                onPress={() => selectMapItem(item)}>
                <MolMapItem2 image={item.image} />
              </Marker>
            );
          })}
        </MapView>
      </AtmContainer>
      {selectedMapItem && (
        <AtmModal
          visibility={bottomModal}
          close={() => {
            setBottomModal(false);
            setSelectedMapItem({});
          }}
          type="bottom">
          <AtmContainer padding={5} flexDirection="row">
            <AtmContainer padding={5} flex={1}>
              <AtmText
                text={selectedMapItem.name}
                size="md"
                weight="medium"
                textColor="primaryText"
              />

              <AtmText
                text={selectedMapItem.location}
                size="sm"
                textColor="primaryText"
              />
            </AtmContainer>
            <AtmContainer padding={5} width={80} height={80}>
              <AtmImage data={selectedMapItem.image} size="cover" radius={80} />
            </AtmContainer>
          </AtmContainer>

          <AtmContainer padding={10} direction="column">
            <AtmLine color="secondary" />
          </AtmContainer>

          <AtmContainer padding={5} flexDirection="row">
            <AtmContainer padding={5} flex={1}>
              <AtmText text="Song" size="sm" textColor="primaryText" />
            </AtmContainer>
            <AtmContainer padding={5} flex={1} alignItems="flex-end">
              <AtmText
                text={selectedMapItem.song}
                size="sm"
                textColor="primaryText"
              />
            </AtmContainer>
          </AtmContainer>

          <AtmSpace size="sm" />

          <AtmContainer padding={5} flexDirection="row">
            <AtmContainer padding={5} flex={1}>
              <AtmText text="Album" size="sm" textColor="primaryText" />
            </AtmContainer>
            <AtmContainer padding={5} flex={1} alignItems="flex-end">
              <AtmText
                text={selectedMapItem.album}
                size="sm"
                textColor="primaryText"
              />
            </AtmContainer>
          </AtmContainer>

          <AtmContainer padding={5} flexDirection="row">
            <AtmContainer padding={5} flex={1}>
              <MolButton
                size="full"
                borderWidth={1}
                borderColor="secondary"
                icon="information-circle"
                color="neutral"
                text="Details"
                onPress={() => {
                  setBottomModal(false);
                  setSelectedMapItem({});
                }}
              />
            </AtmContainer>
            <AtmContainer padding={5} flex={1}>
              <MolButton
                size="full"
                icon="add-circle"
                color="theme"
                text="Add"
                onPress={() => {
                  setBottomModal(false);
                  setSelectedMapItem({});

                  setTimeout(() => {
                    setAlertSuccess(true);
                    setTimeout(() => {
                      setAlertSuccess(false);
                    }, 3000);
                  }, 600);
                }}
              />
            </AtmContainer>
          </AtmContainer>
        </AtmModal>
      )}
      <MolAlertSuccess
        visibility={alertSuccess}
        message="Item added successfully"
      />
    </>
  );
}
