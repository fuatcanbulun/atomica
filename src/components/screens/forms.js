import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmSpace from '../atoms/AtmSpace';
import AtmText from '../atoms/AtmText';
import MolInputBox from '../molecules/MolInputBox';
import MolNumberInputBox from '../molecules/MolNumberInputBox';
import MolSelectBox from '../molecules/MolSelectBox';
import MolMultiSelectBox from '../molecules/MolMultiSelectBox';
import MolPage from '../molecules/MolPage';
import MolButton from '../molecules/MolButton';
import MolDateBox from '../molecules/MolDateBox';
import MolCheckBox from '../molecules/MolCheckBox';
import MolCheckGroupBox from '../molecules/MolCheckGroupBox';
import MolRadioGroupBox from '../molecules/MolRadioGroupBox';
import MolTextAreaBox from '../molecules/MolTextAreaBox';
import MolPageHeader from '../molecules/MolPageHeader';

const datePickerTabs = [
  {
    id: 'day',
    text: 'Day',
  },
  {
    id: 'month',
    text: 'Month',
  },
  {
    id: 'year',
    text: 'Year',
  },
];

const cityOptions = [
  {
    label: 'Ankara',
    value: 'ankara',
  },
  {
    label: 'İstanbul',
    value: 'istanbul',
  },
  {
    label: 'İzmir',
    value: 'izmir',
  },
  ,
];

const colorOptions = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Yellow',
    value: 'yellow',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  ,
];

const notificationOptions = [
  {
    tag: 'SMS',
    //icon: 'sms',
    value: 'sms',
  },
  {
    tag: 'E-Mail',
    //icon: 'mail',
    value: 'mail',
  },
  {
    tag: 'Phone',
    //icon: 'phone',
    value: 'phone',
  },
];

const levelOptions = [
  {
    tag: 'Low',
    //icon: 'low',
    value: 'low',
  },
  {
    tag: 'Medium',
    //icon: 'medium',
    value: 'medium',
  },
  {
    tag: 'High',
    //icon: 'high',
    value: 'high',
  },
];

export default function Forms({navigation, route}) {
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
        title="Forms"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
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
            <MolNumberInputBox
              label="Age"
              placeholder="Please Enter"
              withBorder
              withBackground
              onChange={val => setFormTemporary({...formTemporary, age: val})}
              value={formTemporary.age}
            />
            <AtmSpace size="sm" />
            <MolSelectBox
              label="City"
              placeholder="Please Select"
              options={cityOptions}
              onChange={val => setFormTemporary({...formTemporary, city: val})}
              value={formTemporary.city}
              withBorder
              withBackground
            />
            <AtmSpace size="sm" />
            <MolMultiSelectBox
              label="Colors"
              placeholder="Please Select"
              options={colorOptions}
              onChange={val =>
                setFormTemporary({...formTemporary, colors: val})
              }
              value={formTemporary.colors}
              withBorder
              withBackground
            />
            <AtmSpace size="sm" />
            <MolDateBox
              label="Date"
              tabs={datePickerTabs}
              withBorder
              withBackground
              onDateChange={val =>
                setFormTemporary({...formTemporary, date: val})
              }
            />
            <AtmSpace size="sm" />
            <MolCheckBox
              clickable
              size="lg"
              label="Notification"
              value={formTemporary.notification}
              onChange={val =>
                setFormTemporary({...formTemporary, notification: val})
              }
            />
            <AtmSpace size="sm" />
            <MolCheckGroupBox
              label="Notification Types"
              options={notificationOptions}
              value={formTemporary.notificationTypes}
              size="md"
              onChange={val =>
                setFormTemporary({...formTemporary, notificationTypes: val})
              }
            />
            <AtmSpace size="sm" />
            <MolRadioGroupBox
              label="Levels"
              options={levelOptions}
              value={formTemporary.level}
              size="md"
              onChange={val => setFormTemporary({...formTemporary, level: val})}
            />
            <AtmSpace size="sm" />
            <MolTextAreaBox
              label="Description"
              placeholder="Please Enter"
              withBorder
              rowCount={3}
              withBackground
              onChange={val =>
                setFormTemporary({...formTemporary, description: val})
              }
              value={formTemporary.description}
            />
          </AtmContainer>
        </ScrollView>
      </MolPage>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={5} flex={1}>
          <MolButton
            borderWidth={1}
            borderColor="tertiaryText"
            size="full"
            color="neutral"
            text="Clear"
            onPress={() => clearForm()}
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <MolButton
            size="full"
            color="theme"
            text="Save"
            onPress={() => saveForm(false)}
          />
        </AtmContainer>
      </AtmContainer>
    </SafeAreaView>
  );
}
