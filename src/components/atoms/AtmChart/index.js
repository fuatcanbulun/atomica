import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Style from './style';
import Modal from 'react-native-modal';
import HighchartsReactNative from '@highcharts/highcharts-react-native';

const AtmChart = ({options}) => {
  const coloredOptions = options;

  const colorX = {
    labels: {
      style: {
        color: Style.textColor.color,
      },
    },
    title: {
      style: {
        color: Style.textColor.color,
      },
    },
    lineColor: Style.textColor.color,
    tickColor: Style.textColor.color,
  };
  const colorY = {
    labels: {
      style: {
        color: Style.textColor.color,
      },
    },
    title: {
      style: {
        color: Style.textColor.color,
      },
    },
    gridLineColor: Style.textColor.color,
  };

  coloredOptions.yAxis = colorY;
  coloredOptions.xAxis = colorX;

  return (
    <HighchartsReactNative
      styles={{justifyContent: 'center', flex: 1, height: '100%'}}
      options={coloredOptions}
      webviewStyles={{backgroundColor: 'transparent'}}
    />
  );
};

export default AtmChart;
