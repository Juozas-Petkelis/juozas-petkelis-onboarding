import { InfoRow } from '@components/InfoRow';
import { WeatherHeader } from '@components/WeatherHeader';
import { useRoute } from '@react-navigation/native';
import type { Screens, TypedRoute } from '@typings/navigation.types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const WeatherDetailsScreen = () => {
  const {
    params: { weatherData },
  } = useRoute<TypedRoute<Screens.WeatherDetails>>();

  return (
    <View style={styles.container}>
      <WeatherHeader weatherData={weatherData} />
      <InfoRow
        label="Humidity"
        value={`${weatherData.main.humidity}`}
        unit={'%'}
      />
      <InfoRow
        label="Pressure"
        value={`${weatherData.main.pressure}`}
        unit={'hPa'}
      />
      <InfoRow
        label="Wind Speed"
        value={`${weatherData.wind.speed}`}
        unit={'mph'}
      />
      <InfoRow
        label="Cloud Cover"
        value={`${weatherData.clouds.all}`}
        unit={'%'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
