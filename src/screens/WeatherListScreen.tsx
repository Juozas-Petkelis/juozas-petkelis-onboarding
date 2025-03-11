import { WeatherList } from '@components/WeatherList';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const WeatherListScreen = () => {
  return (
    <View style={styles.container}>
      <WeatherList />
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
