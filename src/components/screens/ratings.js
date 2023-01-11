import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import AtmSpace from '../atoms/AtmSpace';
import AtmImage from '../atoms/AtmImage';
import AtmLine from '../atoms/AtmLine';
import AtmText from '../atoms/AtmText';
import MolPageHeader from '../molecules/MolPageHeader';
import MolButton from '../molecules/MolButton';
import MolPage from '../molecules/MolPage';
import MolRatings from '../molecules/MolRatings';
import MolTextAreaBox from '../molecules/MolTextAreaBox';
const formData = {
  ratings: 1,
  comment: '',
};
export default function Ratings({navigation, route}) {
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
        title="Ratings"
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
          <AtmSpace size="md" />
          <AtmContainer
            padding={10}
            alignItems="center"
            justifyContent="center">
            <AtmContainer width={200} height={200}>
              <AtmImage data="image1" radius={100} />
            </AtmContainer>
          </AtmContainer>
          <AtmContainer
            padding={10}
            alignItems="center"
            justifyContent="center">
            <AtmText
              text="Your feedback is highly appreciated"
              size="md"
              textColor="primaryText"
              lineHeight={30}
              height={30}
              weight="medium"
            />
            <AtmText
              text="Share your thoughts with us"
              size="sm"
              textColor="primaryText"
            />
          </AtmContainer>

          <AtmContainer padding={10}>
            <AtmLine color="secondary" />
          </AtmContainer>
          <AtmContainer padding={10}>
            <MolRatings
              icon="heart"
              total={5}
              value={formTemporary.ratings}
              onChange={val =>
                setFormTemporary({...formTemporary, ratings: val})
              }
            />
          </AtmContainer>
          <AtmContainer paddingHorizontal={10} direction="column">
            <MolTextAreaBox
              placeholder="Please Enter"
              withBorder
              rowCount={5}
              withBackground
              onChange={val =>
                setFormTemporary({...formTemporary, comment: val})
              }
              value={formTemporary.comment}
            />
          </AtmContainer>
          <AtmContainer flex={1} padding={5} flexDirection="row">
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
        </ScrollView>
      </MolPage>
    </SafeAreaView>
  );
}
