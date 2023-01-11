import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import MolButton from '../molecules/MolButton';
import AtmContainer from '../atoms/AtmContainer';
import AtmSpace from '../atoms/AtmSpace';
import AtmImage from '../atoms/AtmImage';
import AtmStatusBar from '../atoms/AtmStatusBar';
import AtmText from '../atoms/AtmText';
import MolInputBox from '../molecules/MolInputBox';
import EStyleSheet from 'react-native-extended-stylesheet';

const formData = {
  name: '',
  age: 0,
  city: '',
  colors: [],
  date: null,
  notification: false,
  notificationTypes: [],
  level: null,
  description: '',
};

export default function Login({openMain}) {
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

  EStyleSheet.build({
    $ColorPrimary: '#ded1bf',
    $ColorSecondary: '#ede3d5',
    $ColorTertiary: '#f0f0f0',
    $ColorPrimaryText: '#000000',
    $ColorSecondaryText: '#3d3532',
    $ColorTertiaryText: '#a88677',
    $ColorNeutral: '#fff',
    $ColorTheme: '#000',
    $ColorStunning: '#fc9803',
    $ColorSuccess: '#00942c',
    $ColorWarning: '#f58442',
    $ColorDanger: '#c90000',
    $ColorDarkGlass: 'rgba(0,0,0,0.5)',
  });

  return (
    <>
      <AtmStatusBar bgColor="transparent" />

      <AtmImage
        data="login"
        size="cover"
        resizeMode="cover"
        flex={1}
        flexDirection="column">
        <SafeAreaView style={{flex: 1}}>
          <AtmContainer
            justifyContent="center"
            alignItems="center"
            width="100%"
            height={300}>
            <AtmContainer position="absolute" bottom={1} left={15} zIndex={1}>
              <AtmText text="Welcome" size="xl" textColor="primaryText" />
            </AtmContainer>
          </AtmContainer>

          <AtmSpace size="md" />
          <AtmContainer paddingHorizontal={10}>
            <MolInputBox
              placeholder="Username"
              withBorder
              withBackground
              onChange={val => setFormTemporary({...formTemporary, name: val})}
              value={formTemporary.name}
            />
            <AtmSpace size="sm" />
            <MolInputBox
              placeholder="Password"
              withBorder
              withBackground
              onChange={val => setFormTemporary({...formTemporary, name: val})}
              value={formTemporary.name}
            />
            <AtmSpace size="sm" />
            <MolButton
              size="full"
              color="theme"
              text="Login"
              onPress={() => openMain()}
            />
            <AtmSpace size="sm" />
            <MolButton
              size="full"
              color="transparent"
              text="Forget Password?"
              onPress={() => alert('Forget Password')}
            />
            <AtmSpace size="lg" />
            <MolButton
              size="full"
              image="google"
              color="neutral"
              text="Login with Google"
              onPress={() => openMain()}
            />
            <AtmSpace size="sm" />
            <MolButton
              size="full"
              image="facebook"
              color="neutral"
              text="Login with Facebook"
              onPress={() => openMain()}
            />
          </AtmContainer>
        </SafeAreaView>
      </AtmImage>
    </>
  );
}
