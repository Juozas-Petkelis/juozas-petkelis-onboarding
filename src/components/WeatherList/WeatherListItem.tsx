import { WeatherData } from '@typings/weatherTypes';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  weatherData: WeatherData;
};

export const WeatherListItem = ({ weatherData }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{weatherData.name}</Text>
      <Text>{weatherData.main.temp}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 8,
    borderRadius: 8,
  },
});
