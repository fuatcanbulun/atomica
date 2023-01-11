import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolProgressBar from '../molecules/MolProgressBar';
import MolRatings from '../molecules/MolRatings';

export default function Others({navigation, route}) {
  const [ratingValue, setRatingValue] = useState(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Others"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <AtmContainer padding={10} direction="column">
        <MolProgressBar
          label="Status"
          start={0}
          end={20}
          value={10}
          color="theme"
          barHeight={20}
        />
      </AtmContainer>
      <AtmContainer padding={5} direction="column">
        <MolRatings
          icon="star"
          total={5}
          value={ratingValue}
          onChange={val => setRatingValue(val)}
        />
      </AtmContainer>
    </SafeAreaView>
  );
}
