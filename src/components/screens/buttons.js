import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolButton from '../molecules/MolButton';

export default function Buttons({navigation, route}) {
  function test() {
    alert('test');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Buttons"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />

      <AtmContainer paddingHorizontal={5} flexDirection="row">
        <AtmContainer padding={5} flex={1}>
          <MolButton color="theme" text="Button" icon="rocket" />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1}>
          <MolButton color="theme" text="Button" icon="rocket" />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton color="theme" text="Button" icon="rocket" />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1}>
          <MolButton
            color="success"
            text="Button"
            onPress={() => navigation.navigate('Test')}
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton color="warning" icon="rocket" onPress={() => test()} />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton
            color="danger"
            text="Button"
            icon="rocket"
            onPress={() => test()}
          />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1} alignItems="center">
          <MolButton size="xs" color="neutral" icon="rocket" />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1} alignItems="center">
          <MolButton size="sm" color="theme" icon="rocket" radius={100} />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1} alignItems="center">
          <MolButton
            size="md"
            color="neutral"
            text="Button"
            icon="rocket"
            onPress={() => test()}
          />
        </AtmContainer>
      </AtmContainer>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1} alignItems="center">
          <MolButton
            size="lg"
            color="theme"
            text="Button"
            icon="rocket"
            onPress={() => test(true)}
          />
        </AtmContainer>
      </AtmContainer>
    </SafeAreaView>
  );
}
