import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmSpace from '../atoms/AtmSpace';
import AtmContainer from '../atoms/AtmContainer';
import MolInputBox from '../molecules/MolInputBox';
import MolSelectBox from '../molecules/MolSelectBox';
import MolPage from '../molecules/MolPage';
import MolButton from '../molecules/MolButton';
import MolDateBox from '../molecules/MolDateBox';
import MolCheckGroupBox from '../molecules/MolCheckGroupBox';
import MolPageHeader from '../molecules/MolPageHeader';

const datePickerTabs = [
  {
    id: 'day',
    text: 'Day',
  },
];

const countryOptions = [
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Germany',
    value: 'germany',
  },
  {
    label: 'Greece',
    value: 'greece',
  },
  {
    label: 'Italy',
    value: 'italy',
  },
  {
    label: 'Poland',
    value: 'poland',
  },
  {
    label: 'Portugal',
    value: 'portugal',
  },
  {
    label: 'Russia',
    value: 'russia',
  },
  {
    label: 'Turkey',
    value: 'turkey',
  },
  {
    label: 'United Kingdom',
    value: 'unitedKingdom',
  },
];

const musicOptions = [
  {
    tag: 'Rock',
    icon: 'md-musical-note-sharp',
    value: 'rock',
  },
  {
    tag: 'Pop',
    icon: 'md-musical-note-sharp',
    value: 'pop',
  },
  {
    tag: 'Jazz',
    icon: 'md-musical-note-sharp',
    value: 'jazz',
  },
  {
    tag: 'Classic',
    icon: 'md-musical-note-sharp',
    value: 'classic',
  },
  {
    tag: 'Hiphop',
    icon: 'md-musical-note-sharp',
    value: 'hiphop',
  },
  {
    tag: 'Funk',
    icon: 'md-musical-note-sharp',
    value: 'funk',
  },
];

export default function Profile({navigation, route}) {
  const formData = {
    name: '',
    country: '',
    birthDate: null,
    music: [],
  };
  const [formTemporary, setFormTemporary] = useState(formData);
  const [formPermenant, setFormPermenant] = useState(formData);

  function saveForm() {
    setFormPermenant(formTemporary);
    console.log(formTemporary);
  }
  function clearForm() {
    setFormTemporary(formData);
    setFormPermenant(formData);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Profile"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
            route.params.setNavVisibility(true);
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolPage>
        <ScrollView style={{flex: 1}}>
          <AtmContainer padding={10}>
            <MolInputBox
              label="Name"
              placeholder="Please Enter"
              withBorder
              withBackground
              onChange={val => setFormTemporary({...formTemporary, name: val})}
              value={formTemporary.name}
            />
            <AtmSpace size="sm" />
            <MolDateBox
              label="Birthdate"
              tabs={datePickerTabs}
              withBorder
              withBackground
              onDateChange={val =>
                setFormTemporary({...formTemporary, birthDate: val})
              }
            />
            <AtmSpace size="sm" />
            <MolSelectBox
              label="Country"
              placeholder="Please Select"
              options={countryOptions}
              onChange={val =>
                setFormTemporary({...formTemporary, country: val})
              }
              value={formTemporary.country}
              withBorder
              withBackground
            />
            <AtmSpace size="sm" />
            <MolCheckGroupBox
              label="Music"
              options={musicOptions}
              value={formTemporary.music}
              size="md"
              onChange={val => setFormTemporary({...formTemporary, music: val})}
            />
          </AtmContainer>
        </ScrollView>
      </MolPage>
      <AtmContainer height={60} padding={5} flexDirection="row">
        <AtmContainer flex={1} paddingHorizontal={5}>
          <MolButton
            borderWidth={1}
            borderColor="tertiaryText"
            color="neutral"
            text="Clear"
            onPress={() => clearForm()}
          />
        </AtmContainer>
        <AtmContainer flex={1} paddingHorizontal={5}>
          <MolButton color="theme" text="Save" onPress={() => saveForm()} />
        </AtmContainer>
      </AtmContainer>
    </SafeAreaView>
  );
}
