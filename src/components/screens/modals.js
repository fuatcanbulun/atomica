import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmModal from '../atoms/AtmModal';
import MolPageHeader from '../molecules/MolPageHeader';
import MolButton from '../molecules/MolButton';
import MolLink from '../molecules/MolLink';

export default function Modals({navigation, route}) {
  const [bottomModal, setBottomModal] = useState(false);
  const [topModal, setTopModal] = useState(false);
  const [centerModal, setCenterModal] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Modals"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />

      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1}>
          <MolButton
            size="full"
            color="theme"
            text="Bottom"
            onPress={() => setBottomModal(true)}
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton
            size="full"
            color="theme"
            text="Top"
            onPress={() => setTopModal(true)}
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton
            size="full"
            color="theme"
            text="Center"
            onPress={() => setCenterModal(true)}
          />
        </AtmContainer>
      </AtmContainer>

      <AtmModal
        visibility={bottomModal}
        close={() => setBottomModal(false)}
        type="bottom">
        <AtmContainer padding={5} direction="column">
          <MolLink text="Link 1" />
          <MolLink text="Link 2" />
          <MolLink text="Link 3" />
        </AtmContainer>
        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={5} flex={1}>
            <MolButton
              borderWidth={1}
              borderColor="tertiaryText"
              color="neutral"
              size="full"
              text="Cancel"
              onPress={() => setBottomModal(false)}
            />
          </AtmContainer>
          <AtmContainer padding={5} flex={1}>
            <MolButton
              size="full"
              color="theme"
              text="Save"
              onPress={() => setBottomModal(false)}
            />
          </AtmContainer>
        </AtmContainer>
      </AtmModal>

      <AtmModal
        visibility={topModal}
        close={() => setTopModal(false)}
        type="top">
        <AtmContainer padding={5} direction="column">
          <MolLink text="Link 1" />
          <MolLink text="Link 2" />
          <MolLink text="Link 3" />
        </AtmContainer>
        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={5} flex={1}>
            <MolButton
              borderWidth={1}
              borderColor="tertiaryText"
              color="neutral"
              size="full"
              text="Cancel"
              onPress={() => setBottomModal(false)}
            />
          </AtmContainer>
          <AtmContainer padding={5} flex={1}>
            <MolButton
              size="full"
              color="theme"
              text="Save"
              onPress={() => setBottomModal(false)}
            />
          </AtmContainer>
        </AtmContainer>
      </AtmModal>

      <AtmModal
        visibility={centerModal}
        close={() => setCenterModal(false)}
        type="center">
        <AtmContainer padding={5} direction="column">
          <MolLink text="Link 1" />
          <MolLink text="Link 2" />
          <MolLink text="Link 3" />
        </AtmContainer>
        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={5} flex={1}>
            <MolButton
              borderWidth={1}
              borderColor="tertiaryText"
              color="neutral"
              size="full"
              text="Cancel"
              onPress={() => setBottomModal(false)}
            />
          </AtmContainer>
          <AtmContainer padding={5} flex={1}>
            <MolButton
              size="full"
              color="theme"
              text="Save"
              onPress={() => setBottomModal(false)}
            />
          </AtmContainer>
        </AtmContainer>
      </AtmModal>
    </SafeAreaView>
  );
}
