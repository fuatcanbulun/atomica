import React, {useEffect, useState} from 'react';
import AtmText from '../../atoms/AtmText';
import AtmContainer from '../../atoms/AtmContainer';
import AtmCalendar from '../../atoms/AtmCalendar';
import AtmModal from '../../atoms/AtmModal';
import AtmDateInput from '../../atoms/AtmDateInput';
import MolButton from '../../molecules/MolButton';
import MolTabButtons from '../../molecules/MolTabButtons';
import MolMonths from '../../molecules/MolMonths';
import MolYears from '../../molecules/MolYears';
import moment from 'moment';

const months = [
  {
    id: '01',
    name: 'Jan',
  },
  {
    id: '02',
    name: 'Feb',
  },
  {
    id: '03',
    name: 'Mar',
  },
  {
    id: '04',
    name: 'Apr',
  },
  {
    id: '05',
    name: 'May',
  },
  {
    id: '06',
    name: 'Jun',
  },
  {
    id: '07',
    name: 'Jul',
  },
  {
    id: '08',
    name: 'Aug',
  },
  {
    id: '09',
    name: 'Sep',
  },
  {
    id: '10',
    name: 'Oct',
  },
  {
    id: '11',
    name: 'Nov',
  },
  {
    id: '12',
    name: 'Dec',
  },
];

const years = [
  {
    id: '2013',
  },
  {
    id: '2014',
  },
  {
    id: '2015',
  },
  {
    id: '2016',
  },
  {
    id: '2017',
  },
  {
    id: '2018',
  },
  {
    id: '2019',
  },
  {
    id: '2020',
  },
  {
    id: '2021',
  },
  {
    id: '2022',
  },
  {
    id: '2023',
  },
  {
    id: '2024',
  },
];

const MolDateBox = ({
  tabs,
  label,
  withBorder,
  withBackground,
  onDateChange,
}) => {
  const today = new Date();
  const [pickerModal, setPickerModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('day');
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

  const [selectedMonthYear, setSelectedMonthYear] = useState(
    moment(today).format('YYYY'),
  );
  const [selectedMonth, setSelectedMonth] = useState(
    moment(today).format('MM'),
  );
  const [selected, setSelected] = useState(moment(today).format('YYYY-MM-DD'));

  useEffect(() => {
    onDateChange(selected);
    //eslint-disable-next-line
  }, [selected]);

  function onPress() {
    setPickerModal(true);
  }

  function onChange(val, id) {
    setSelectedTab(id);
    setSelectedTabIndex(val);
  }

  // Day
  function prevDay() {
    const newDate = moment(selected).subtract(1, 'days').format('YYYY-MM-DD');
    setSelected(newDate);
  }
  function nextDay() {
    const newDate = moment(selected).add(1, 'days').format('YYYY-MM-DD');
    setSelected(newDate);
  }
  function onDayPress(val) {
    setSelected(val.dateString);
    setPickerModal(false);
  }

  // Month
  function prevMonth() {
    const newDate = moment(selected).subtract(1, 'months').format('YYYY-MM');
    setSelected(newDate);
  }
  function nextMonth() {
    const newDate = moment(selected).add(1, 'months').format('YYYY-MM');
    setSelected(newDate);
  }

  function prevMonthYear() {
    const newDate = moment(selectedMonthYear)
      .subtract(1, 'years')
      .format('YYYY');
    setSelectedMonthYear(newDate);
    setSelectedMonth(null);
  }
  function nextMonthYear() {
    const newDate = moment(selectedMonthYear).add(1, 'years').format('YYYY');
    setSelectedMonthYear(newDate);
    setSelectedMonth(null);
  }
  function onMonthPress(val) {
    const newDate = selectedMonthYear + '-' + val;
    setSelectedMonth(val);
    setSelected(newDate);
    setPickerModal(false);
  }

  // Year
  function prevYear() {
    const newDate = moment(selected).subtract(1, 'years').format('YYYY');
    setSelected(newDate);
  }
  function nextYear() {
    const newDate = moment(selected).add(1, 'years').format('YYYY');
    setSelected(newDate);
  }
  function onYearPress(val) {
    setSelected(val);
    setPickerModal(false);
  }
  return (
    <>
      {label && (
        <AtmContainer>
          <AtmText text={label} size="sm" textColor="secondaryText" />
        </AtmContainer>
      )}

      <AtmContainer flexDirection="row">
        <AtmContainer width={40} height={40}>
          <MolButton
            size="xs"
            color="neutral"
            borderWidth={1}
            borderColor="tertiaryText"
            icon="chevron-back"
            radius={10}
            onPress={() => {
              selectedTab === 'day'
                ? prevDay()
                : selectedTab === 'month'
                ? prevMonth()
                : selectedTab === 'year'
                ? prevYear()
                : '';
            }}
          />
        </AtmContainer>
        <AtmContainer flex={1} onPress={onPress} paddingHorizontal={5}>
          <AtmDateInput
            text="test"
            value={selected}
            size="sm"
            color="secondary"
            withBorder={withBorder}
            withBackground={withBackground}
            onPress={() => setPickerModal(true)}
          />
        </AtmContainer>
        <AtmContainer width={40} height={40}>
          <MolButton
            withBorder
            size="xs"
            color="neutral"
            borderWidth={1}
            borderColor="tertiaryText"
            icon="chevron-forward"
            radius={10}
            onPress={() => {
              selectedTab === 'day'
                ? nextDay()
                : selectedTab === 'month'
                ? nextMonth()
                : selectedTab === 'year'
                ? nextYear()
                : '';
            }}
          />
        </AtmContainer>
      </AtmContainer>

      <AtmModal
        visibility={pickerModal}
        close={() => setPickerModal(false)}
        type="bottom">
        {tabs.length > 1 && (
          <AtmContainer paddingHorizontal={10}>
            <MolTabButtons
              radius={10}
              color="tertiary"
              data={tabs}
              activeTab={selectedTabIndex}
              onChange={onChange}
            />
          </AtmContainer>
        )}

        <AtmContainer paddingHorizontal={10}>
          {selectedTab === 'day' && (
            <AtmCalendar
              current={selected}
              onDayPress={onDayPress}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                },
              }}
            />
          )}
          {selectedTab === 'month' && (
            <MolMonths
              months={months}
              onMonthPress={onMonthPress}
              prevMonthYear={prevMonthYear}
              nextMonthYear={nextMonthYear}
              selectedMonth={selectedMonth}
              selectedMonthYear={selectedMonthYear}
            />
          )}
          {selectedTab === 'year' && (
            <MolYears
              years={years}
              onYearPress={onYearPress}
              selectedYear={selected}
            />
          )}
        </AtmContainer>
      </AtmModal>
    </>
  );
};

export default MolDateBox;
