import { WeatherData } from '@typings/weatherTypes';
import { weatherIconUrl } from 'constants/weatherConstants';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  weatherData: WeatherData;
  onPress?: () => void;
};

export const WeatherHeader = ({ weatherData, onPress }: Props) => {
  const weather = weatherData.weather[0];

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={styles.container}
    >
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
      <View style={styles.rightContainer}>
        <Text>{weatherData.main.temp}°C</Text>
        {!!onPress && <Text style={styles.chevron}>{'\u203A'}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
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
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  chevron: {
    fontSize: 22,
  },
});
