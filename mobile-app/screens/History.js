import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { fetchRecentTelemetry } from '../utils/api';

export default function History() {
  const DEVICE_ID = 'AC:0B:FB:6B:84:5C';
  const [logs, setLogs] = useState([]);
  

  useEffect(() => {
    const load = async () => setLogs(await fetchRecentTelemetry(DEVICE_ID));
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="History" />
      <FlatList
        data={logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.timestamp}>{new Date(item.timestamp * 1000).toLocaleString()}</Text>
            <Text style={styles.values}>🌡 {item.temp} °C | 💧 {item.soil} | 💡 {item.light}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  timestamp: {
    fontSize: 14,
    color: '#666666',
  },
  values: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});