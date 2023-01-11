import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmText from '../atoms/AtmText';
import AtmTabPages from '../atoms/AtmTabPages';
import AtmTabPage from '../atoms/AtmTabPage';
import MolPageHeader from '../molecules/MolPageHeader';
import MolTabButtons from '../molecules/MolTabButtons';

const sampleTabs = [
  {
    id: 'tab1',
    text: 'Tab 1',
  },
  {
    id: 'tab2',
    text: 'Tab 2',
  },
  {
    id: 'tab3',
    text: 'Tab 3',
  },
];

export default function Tabs({navigation, route}) {
  const [activeTab, setActiveTab] = useState(1);

  function onChange(val) {
    setActiveTab(val);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Tabs"
        leftButton={{
          icon: 'chevron-back',
          onPress: () => {
            navigation.goBack();
          },
        }}
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolTabButtons
        color="neutral"
        data={sampleTabs}
        activeTab={activeTab}
        onChange={onChange}
      />
      <AtmTabPages
        count={sampleTabs.length}
        height="full"
        activeTab={activeTab}
        onChange={val => setActiveTab(val)}>
        <AtmTabPage>
          <AtmContainer padding={10}>
            <AtmText text="tab1" size="sm" color="primary" />
          </AtmContainer>
        </AtmTabPage>
        <AtmTabPage>
          <AtmContainer padding={10}>
            <AtmText text="tab2" size="sm" color="primary" />
          </AtmContainer>
        </AtmTabPage>
        <AtmTabPage>
          <AtmContainer padding={10}>
            <AtmText text="tab3" size="sm" color="primary" />
          </AtmContainer>
        </AtmTabPage>
      </AtmTabPages>
    </SafeAreaView>
  );
}
