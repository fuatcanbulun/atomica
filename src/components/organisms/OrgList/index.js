import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import AtmContainer from '../../atoms/AtmContainer';
import MolInputBox from '../../molecules/MolInputBox';
import MolCard6 from '../../molecules/MolCard6';
import AtmSpace from '../../atoms/AtmSpace';

const Orglist = ({data}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchParameter, setSearchParameter] = useState(null);

  let timeoutId = 0;
  function search(val) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      let newFilteredData = [];
      if (val.length > 2) {
        const searchVal = val
          .toUpperCase()
          .replace('İ', 'I')
          .replace('Ü', 'U')
          .replace('Ö', 'O')
          .replace('Ç', 'C')
          .replace('Ş', 'S');
        filteredData.forEach(element => {
          const titleVal = element.title
            .toUpperCase()
            .replace('İ', 'I')
            .replace('Ü', 'U')
            .replace('Ö', 'O')
            .replace('Ç', 'C')
            .replace('Ş', 'S');
          if (titleVal.includes(searchVal)) {
            newFilteredData.push(element);
          }
        });
      } else {
        newFilteredData = data;
      }
      setFilteredData(newFilteredData);
    }, 1000);
  }

  return (
    <>
      <AtmSpace size="sm" />
      <AtmContainer paddingHorizontal={10}>
        <MolInputBox
          placeholder="Search (Min 3 Characters)"
          withBorder
          withBackground
          onChange={val => {
            search(val);
            setSearchParameter(val);
          }}
          value={searchParameter}
          icon="search-outline"
        />
      </AtmContainer>
      <ScrollView style={{flex: 1}}>
        <AtmContainer padding={10}>
          {filteredData.map(item => (
            <React.Fragment key={item.id}>
              <MolCard6
                title={item.title}
                subtitle={item.subtitle}
                duration={item.duration}
                percentage={item.percentage}
              />
              <AtmSpace size="sm" />
            </React.Fragment>
          ))}
        </AtmContainer>
      </ScrollView>
    </>
  );
};
export default Orglist;
