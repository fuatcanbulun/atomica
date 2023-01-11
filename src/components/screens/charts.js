import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AtmContainer from '../atoms/AtmContainer';
import MolChart from '../molecules/MolChart';
import MolPageHeader from '../molecules/MolPageHeader';
import MolPage from '../molecules/MolPage';
export default function Charts({navigation, route}) {
  const chartOptions1 = {
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

  const chartOptions2 = {
    chart: {
      type: 'column',
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

  const chartOptions3 = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Value',
        data: [
          {
            name: 'Rock',
            y: 10,
            color: 'orange',
            visible: true,
          },
          {
            name: 'Pop',
            y: 6,
            color: 'purple',
            visible: true,
          },
          {
            name: 'Jazz',
            y: 2,
            color: 'green',
            visible: true,
          },
        ],
      },
    ],
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <MolPageHeader
        title="Charts"
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
          <AtmContainer padding={10} height={500}>
            <MolChart options={chartOptions1} />
          </AtmContainer>
          <AtmContainer padding={10} height={500}>
            <MolChart options={chartOptions2} />
          </AtmContainer>
          <AtmContainer padding={10} height={500}>
            <MolChart options={chartOptions3} />
          </AtmContainer>
        </ScrollView>
      </MolPage>
    </SafeAreaView>
  );
}
