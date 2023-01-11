import React, {useEffect} from 'react';
import AtmContainer from '../atoms/AtmContainer';
import MolPageHeader from '../molecules/MolPageHeader';
import MolPage from '../molecules/MolPage';
import MolDateBox from '../molecules/MolDateBox';
import MolChart from '../molecules/MolChart';

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

const chartOptions = {
  chart: {
    type: 'line',
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      ,
    ],
  },
  yAxis: {
    title: {
      text: '',
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units',
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: 'Rock',
      data: [3, 4, 3, 5, 4, 10, 12],
      visible: true,
      color: 'orange',
      showInLegend: false,
    },
    {
      name: 'Jazz',
      data: [1, 3, 4, 3, 3, 5, 4],
      visible: true,
      color: 'purple',
      showInLegend: false,
    },
    {
      name: 'Pop',
      data: [1, 7, 8, 10, 12, 10, 6],
      visible: true,
      color: 'green',
      showInLegend: false,
    },
  ],
};

export default function Trend({navigation, route}) {
  function onDateChange(val) {
    //alert(val);
  }
  return (
    <>
      <MolPageHeader
        title="Trend"
        rightButton={{icon: 'menu', onPress: () => route.params.openMenu(true)}}
      />
      <MolPage>
        <AtmContainer padding={10} width="100%" height={50}>
          <MolDateBox
            tabs={datePickerTabs}
            withBorder
            withBackground
            onDateChange={onDateChange}
          />
        </AtmContainer>
        <AtmContainer padding={10} flex={1}>
          <MolChart options={chartOptions} showLegend />
        </AtmContainer>
      </MolPage>
    </>
  );
}
