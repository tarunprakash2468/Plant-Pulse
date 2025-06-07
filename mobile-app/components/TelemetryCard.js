import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelemetryCard({ label, value, unit, icon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{icon} {label}</Text>
      <Text style={styles.value}>{value} {unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  value: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
});