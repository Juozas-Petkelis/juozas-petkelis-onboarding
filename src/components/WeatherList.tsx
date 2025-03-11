import { weatherQueries } from '@api/weatherApi';
import { useNavigation } from '@react-navigation/native';
import { QueryErrorResetBoundary, useQuery } from '@tanstack/react-query';
import { Screens } from '@typings/navigation.types';
import type { WeatherData } from '@typings/weatherTypes';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FlatList, StyleSheet } from 'react-native';

import { WeatherHeader } from './WeatherHeader';
import { WeatherListError } from './WeatherListError';

export const WeatherList = () => {
  const { data: weatherList } = useQuery(weatherQueries.weatherList());
  const { navigate } = useNavigation();

  const onWeatherDetailsPress = (weatherData: WeatherData) => () => {
    navigate(Screens.WeatherDetails, { weatherData });
  };

  const renderWeatherListRow = ({ item }: { item: WeatherData }) => (
    <WeatherHeader weatherData={item} onPress={onWeatherDetailsPress(item)} />
  );
  const keyExtractor = (item: WeatherData) => `${item.id}`;

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={WeatherListError}>
          <FlatList
            testID="WeatherList_Id"
            data={weatherList?.list}
            keyExtractor={keyExtractor}
            renderItem={renderWeatherListRow}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 8,
  },
});
