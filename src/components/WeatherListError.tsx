import React from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const WeatherListError = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Wooops! Something went wrong! Refresh to try it again
      </Text>
      <TouchableOpacity style={styles.button} onPress={resetErrorBoundary}>
        <Text style={styles.buttomLabel}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'tomato',
    gap: 16,
  },
  header: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttomLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
