import { WeatherData } from '@typings/weatherTypes';
import { weatherIconUrl } from 'constants/weatherConstants';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  weatherData: WeatherData;
};

export const WeatherListItem = ({ weatherData }: Props) => {
  const weather = weatherData.weather[0];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: weatherIconUrl(weather.icon),
          }}
        />
        <View>
          <Text>{weatherData.name}</Text>
          <Text>{weather.main}</Text>
        </View>
      </View>
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  weatherIcon: {
    width: 24,
    height: 24,
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
});
