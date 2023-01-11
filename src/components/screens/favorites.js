import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmSpace from '../atoms/AtmSpace';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolCard5 from '../molecules/MolCard5';
import MolPage from '../molecules/MolPage';
import MolAlertSuccess from '../molecules/MolAlertSuccess';

const favoritesData = [
  {
    id: 'lostInMoon',
    title: 'Lost in Moon',
    artist: 'Spacer',
    image: 'song01',
  },
  {
    id: 'noTomorrow ',
    title: 'No Tomorrow',
    artist: 'Sasha Oliver',
    image: 'song02',
  },
  {
    id: 'therapy',
    title: 'Theraphy',
    artist: 'Dream Brothers',
    image: 'song03',
  },
  {
    id: 'splash',
    title: 'Splash',
    artist: 'DJ Gorge',
    image: 'song04',
  },
];
export default function Favorites({navigation, route}) {
  const [alertSuccess, setAlertSuccess] = useState(false);

  const actions = [
    {
      id: 1,
      icon: 'information-circle-outline',
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
          title="Favorites"
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
              {favoritesData.map(item => (
                <React.Fragment key={item.id}>
                  <MolCard5
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    subTitle={item.artist}
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
