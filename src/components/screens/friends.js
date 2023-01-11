import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmSpace from '../atoms/AtmSpace';
import MolPageHeader from '../molecules/MolPageHeader';
import MolCard5 from '../molecules/MolCard5';
import MolPage from '../molecules/MolPage';
import MolAlertSuccess from '../molecules/MolAlertSuccess';

const friendsData = [
  {
    id: 'RaphaëlLuis',
    name: 'Raphaël Luis',
    location: 'United Kingdom',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait02',
  },
  {
    id: 'bengiYilmaz',
    name: 'Bengi Yılmaz',
    location: 'Turkey',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait03',
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
  },
  {
    id: 'jürgenKlaus',
    name: 'Jürgen Klaus',
    location: 'Germany',
    song: 'Song Name',
    album: 'Album Name',
    image: 'portrait06',
  },
];

export default function Friends({navigation, route}) {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const actions = [
    {
      id: 1,
      icon: 'chatbubble-ellipses-outline',
      onPress: val => action(val),
    },
    {
      id: 2,
      icon: 'ios-close-sharp',
      onPress: val => remove(val),
    },
  ];

  function action(val) {
    alert(val);
  }
  function remove(val) {
    setAlertSuccess(true);
    setTimeout(function () {
      setAlertSuccess(false);
    }, 3000);
  }

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <MolPageHeader
          title="Friends"
          leftButton={{
            icon: 'chevron-back',
            onPress: () => {
              navigation.goBack();
              route.params.setNavVisibility(true);
            },
          }}
          rightButton={{
            icon: 'menu',
            onPress: () => route.params.openMenu(true),
          }}
        />
        <MolPage>
          <ScrollView style={{flex: 1}}>
            <AtmContainer padding={5}>
              {friendsData.map(item => (
                <React.Fragment key={item.id}>
                  <MolCard5
                    id={item.id}
                    image={item.image}
                    title={item.name}
                    subTitle={item.location}
                    actions={actions}
                  />
                  <AtmSpace size="sm" />
                </React.Fragment>
              ))}
            </AtmContainer>
          </ScrollView>
        </MolPage>
      </SafeAreaView>
      <MolAlertSuccess
        visibility={alertSuccess}
        message="Item deleted successfully"
      />
    </>
  );
}
