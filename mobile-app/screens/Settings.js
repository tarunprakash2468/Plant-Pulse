import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput } from 'react-native';
import Header from '../components/Header';

export default function Settings() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [interval, setInterval] = useState('60');

  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <View style={styles.section}>
        <Text style={styles.label}>Auto-refresh</Text>
        <Switch value={autoRefresh} onValueChange={setAutoRefresh} thumbColor="#007AFF" />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Refresh interval (seconds)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={interval}
          onChangeText={setInterval}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});