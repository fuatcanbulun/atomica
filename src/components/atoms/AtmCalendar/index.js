import React from 'react';
import {View} from 'react-native';
import Style from './style';
import {Calendar} from 'react-native-calendars';

const AtmCalendar = ({current, onDayPress, markedDates}) => {
  const styles = [];
  return (
    <View style={styles}>
      <Calendar
        current={current}
        onDayPress={onDayPress}
        markedDates={markedDates}
        theme={{
          backgroundColor: Style.neutralColor.color,
          calendarBackground: Style.neutralColor.color,
          textSectionTitleColor: Style.primaryTextColor.color,
          textSectionTitleDisabledColor: Style.tertiaryTextColor.color,
          selectedDayBackgroundColor: Style.themeColor.color,
          selectedDayTextColor: '#fff',
          todayTextColor: Style.themeColor.color,
          dayTextColor: Style.primaryTextColor.color,
          textDisabledColor: Style.tertiaryTextColor.color,
          dotColor: Style.primaryTextColor.color,
          selectedDotColor: Style.themeColor.color,
          arrowColor: Style.primaryTextColor.color,
          disabledArrowColor: Style.tertiaryTextColor.color,
          monthTextColor: Style.primaryTextColor.color,
          indicatorColor: Style.primaryTextColor.color,
        }}
      />
    </View>
  );
};

export default AtmCalendar;
