import { WeatherList } from '@components/WeatherList';
import { WeatherListError } from '@components/WeatherListError';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { StyleSheet, View } from 'react-native';

export const WeatherListScreen = () => {
  return (
    <View style={styles.container}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={WeatherListError}>
            <WeatherList />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
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
