import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function TemperatureChart({ data }) {
  const chartData = {
    labels: data.map(() => ''),
    datasets: [{ data: data.map(d => d.temp) }],
  };

  return (
    <LineChart
      data={chartData}
      width={screenWidth - 40}
      height={180}
      yAxisSuffix="°C"
      chartConfig={{
        backgroundColor: '#FFFFFF',
        backgroundGradientFrom: '#FFFFFF',
        backgroundGradientTo: '#FFFFFF',
        decimalPlaces: 1,
        color: () => '#007AFF',
        labelColor: () => '#666666',
        propsForDots: { r: '4', strokeWidth: '2', stroke: '#FFFFFF' },
      }}
      style={{ borderRadius: 16, marginBottom: 24 }}
      bezier
    />
  );
}