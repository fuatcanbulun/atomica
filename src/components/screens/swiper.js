import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmText from '../atoms/AtmText';
import AtmSwiper from '../atoms/AtmSwiper';
import AtmSwiperPage from '../atoms/AtmSwiperPage';
import MolPageHeader from '../molecules/MolPageHeader';

export default function Swiper({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Swiper"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />

      <AtmSwiper count={2} height="full">
        <AtmSwiperPage>
          <AtmContainer padding={10}>
            <AtmText text="page1" size="sm" color="primary" />
          </AtmContainer>
        </AtmSwiperPage>
        <AtmSwiperPage>
          <AtmContainer padding={10}>
            <AtmText text="page2" size="sm" color="primary" />
          </AtmContainer>
        </AtmSwiperPage>
      </AtmSwiper>
    </SafeAreaView>
  );
}
