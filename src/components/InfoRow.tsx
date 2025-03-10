import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  value: string;
  unit?: string;
};

export const InfoRow = ({ label, value, unit = '' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{`${value}${unit}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    fontWeight: 'medium',
  },
  value: {
    fontSize: 14,
    color: '#C0C0C0',
  },
});
