import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmAlert from '../atoms/AtmAlert';
import AtmText from '../atoms/AtmText';
import AtmIcon from '../atoms/AtmIcon';
import MolPageHeader from '../molecules/MolPageHeader';
import MolButton from '../molecules/MolButton';

export default function Alerts({navigation, route}) {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertWarning, setAlertWarning] = useState(false);
  const [alertError, setAlertError] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Alerts"
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
            color="theme"
            text="Success"
            onPress={() => {
              setAlertSuccess(true);
              setTimeout(function () {
                setAlertSuccess(false);
              }, 3000);
            }}
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton
            color="theme"
            text="Warning"
            onPress={() => {
              setAlertWarning(true);
              setTimeout(function () {
                setAlertWarning(false);
              }, 3000);
            }}
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton
            color="theme"
            text="Error"
            onPress={() => {
              setAlertError(true);
              setTimeout(function () {
                setAlertError(false);
              }, 3000);
            }}
          />
        </AtmContainer>
      </AtmContainer>

      <AtmAlert visibility={alertSuccess}>
        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={10} width={60}>
            <AtmIcon
              icon="checkmark"
              iconColor="white"
              iconSize="md"
              bgColor="green"
              bgShape="circle"
            />
          </AtmContainer>
          <AtmContainer paddingHorizontal={10} flex={1}>
            <AtmText text="Success" size="sm" textColor="green" />
            <AtmText
              text="Operation is completed successfully"
              size="sm"
              textColor="primaryText"
            />
          </AtmContainer>
        </AtmContainer>
      </AtmAlert>

      <AtmAlert visibility={alertWarning}>
        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={10} width={60}>
            <AtmIcon
              icon="alert"
              iconColor="white"
              iconSize="md"
              bgColor="orange"
              bgShape="circle"
            />
          </AtmContainer>
          <AtmContainer paddingHorizontal={10} flex={1}>
            <AtmText text="Warning" size="sm" textColor="orange" />
            <AtmText
              text="Operation is completed with warnings"
              size="sm"
              textColor="primaryText"
            />
          </AtmContainer>
        </AtmContainer>
      </AtmAlert>

      <AtmAlert visibility={alertError}>
        <AtmContainer padding={5} flexDirection="row">
          <AtmContainer padding={10} width={60}>
            <AtmIcon
              icon="close"
              iconColor="white"
              iconSize="md"
              bgColor="red"
              bgShape="circle"
            />
          </AtmContainer>
          <AtmContainer paddingHorizontal={10} flex={1}>
            <AtmText text="Error" size="sm" textColor="red" />
            <AtmText
              text="Operation is failed"
              size="sm"
              textColor="primaryText"
            />
          </AtmContainer>
        </AtmContainer>
      </AtmAlert>
    </SafeAreaView>
  );
}
