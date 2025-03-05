import { weatherQueries } from '@api/weatherApi';
import { WeatherListItem } from '@components/WeatherList/WeatherListItem';
import { useQuery } from '@tanstack/react-query';
import { WeatherData } from '@typings/weatherTypes';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export const WeatherListScreen = () => {
  const { data: weatherList } = useQuery(weatherQueries.weatherList());

  const renderWeatherListRow = ({ item }: { item: WeatherData }) => (
    <WeatherListItem weatherData={item} />
  );
  const keyExtractor = (item: WeatherData) => `${item.id}`;

  return (
    <View style={styles.container}>
      <FlatList
        data={weatherList?.list}
        keyExtractor={keyExtractor}
        renderItem={renderWeatherListRow}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  listContainer: {
    gap: 8,
  },
});
