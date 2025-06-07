import React, { useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TelemetryCard from '../components/TelemetryCard';
import TemperatureChart from '../components/TemperatureChart';
import { fetchLatestTelemetry, fetchRecentTelemetry } from '../utils/api';

export default function Dashboard() {
  const DEVICE_ID = 'AC:0B:FB:6B:84:5C';
  const [data, setData]     = useState(null);
  const [recent, setRecent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    setRefreshing(true);
    const latest  = await fetchLatestTelemetry(DEVICE_ID);
    const history = await fetchRecentTelemetry(DEVICE_ID);
    setData(latest);
    setRecent(history);
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
    >
      <Header title="Plant Pulse" />
      {data && (
        <View style={styles.section}>
          <TelemetryCard label="Temperature" value={data.temp} unit="°C" icon="🌡" />
          <TelemetryCard label="Soil Moisture" value={data.soil} unit="" icon="💧" />
          <TelemetryCard label="Light Level" value={data.light} unit="" icon="💡" />
        </View>
      )}
      {recent.length > 0 && <TemperatureChart data={recent} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  section: {
    marginBottom: 24,
  },
});