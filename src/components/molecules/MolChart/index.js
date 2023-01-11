import React, {useState} from 'react';
import MolLegend from '../../molecules/MolLegend';
import AtmChart from '../../atoms/AtmChart';
import AtmContainer from '../../atoms/AtmContainer';

const MolChart = ({options, showLegend}) => {
  const [chartOptions, setChartOptions] = useState(options);

  function changeLegend(val) {
    const newChart = {...chartOptions};
    if (chartOptions.chart.type == 'pie') {
      if (newChart.series[0].data[val].visible) {
        newChart.series[0].data[val].visible = false;
      } else {
        newChart.series[0].data[val].visible = true;
      }
    } else {
      if (newChart.series[val].visible) {
        newChart.series[val].visible = false;
      } else {
        newChart.series[val].visible = true;
      }
    }

    setChartOptions(newChart);
  }

  return (
    <AtmContainer flex={1} flexDirection="column">
      <AtmContainer flex={1}>
        <AtmChart options={chartOptions} />
      </AtmContainer>
      {showLegend && (
        <MolLegend
          data={
            chartOptions.chart.type == 'pie'
              ? chartOptions.series[0].data
              : chartOptions.series
          }
          onLegendPress={changeLegend}
        />
      )}
    </AtmContainer>
  );
};

export default MolChart;
