import React from 'react';
import MolChart from '../../molecules/MolChart';
import AtmContainer from '../../atoms/AtmContainer';
import AtmText from '../../atoms/AtmText';

const MolProgressCircle = ({value, title, subtitle, text}) => {
  const chartOptions = {
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
        name: 'Browsers',
        data: [
          {
            name: 'Active',
            y: value,
            color: 'orange',
            visible: true,
          },
          {
            name: 'Passive',
            y: 100 - value,
            color: 'white',
            visible: true,
          },
        ],
        size: '100%',
        innerSize: '90%',
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };

  return (
    <>
      <AtmContainer width={300} height={300}>
        <AtmContainer width={300} height={300}>
          <MolChart options={chartOptions} />
        </AtmContainer>
        <AtmContainer
          position="absolute"
          width={300}
          height={300}
          alignItems="center"
          top={48}>
          <AtmContainer
            width={200}
            height={200}
            borderRadius={100}
            backgroundColor="neutral"
            justifyContent="center"
            alignItems="center">
            <AtmText
              text={title}
              height={50}
              lineHeight={50}
              fontSize={40}
              textColor="primaryText"
              weight="medium"
            />
            <AtmText text={subtitle} size="lg" textColor="primaryText" />
            <AtmText text={text} size="sm" textColor="primaryText" />
          </AtmContainer>
        </AtmContainer>
      </AtmContainer>
    </>
  );
};

export default MolProgressCircle;
