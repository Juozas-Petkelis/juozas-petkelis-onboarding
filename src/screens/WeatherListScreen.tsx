import { weatherQueries } from '@api/weatherApi';
import { WeatherHeader } from '@components/WeatherHeader';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { Screens } from '@typings/navigation.types';
import { WeatherData } from '@typings/weatherTypes';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export const WeatherListScreen = () => {
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
    backgroundColor: 'white',
  },
  listContainer: {
    gap: 8,
  },
});
