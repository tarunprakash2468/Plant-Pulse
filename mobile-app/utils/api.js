import axios from 'axios';

const BASE_URL = 'https://9sbc3lhhw4.execute-api.us-west-1.amazonaws.com/telemetry';

export async function fetchLatestTelemetry(deviceId) {
  const res = await axios.get(BASE_URL, { params: { deviceId, limit: 1 } });
  return res.data[0];
}

export async function fetchRecentTelemetry(deviceId, limit = 10) {
  const res = await axios.get(BASE_URL, { params: { deviceId, limit } });
  return res.data;
}