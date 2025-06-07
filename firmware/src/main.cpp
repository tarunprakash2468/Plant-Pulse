#include <Arduino.h>
#include <WiFi.h>
#include "credentials.h"
#include <HTTPClient.h>
#include <time.h>

String deviceId;

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("🌱 Plant Pulse firmware starting up...");

  // Connect to WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("Connecting to WiFi");
  
  int retries = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    if (++retries > 20) {
      Serial.println("❌ Failed to connect to WiFi");
      return;
    }
  }

  Serial.println();
  Serial.print("✅ Connected to WiFi: ");
  Serial.println(WiFi.localIP());

  deviceId = WiFi.macAddress();
  Serial.print("📟 Device ID: ");
  Serial.println(deviceId);

  // Configure NTP
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");

  // Wait for time to sync
  Serial.print("⏳ Waiting for time");
  while (time(nullptr) < 100000) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("✅ Time synced!");

  time_t now = time(nullptr);
  Serial.print("🕒 Current UTC time: ");
  Serial.println(ctime(&now));  // Human-readable timestamp
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Generate fake telemetry
    int soil = random(300, 800);
    float temp = random(180, 300) / 10.0;
    int light = random(200, 1000);

    time_t now = time(nullptr);  // UTC timestamp in seconds

    // Build JSON payload
    String payload = "{";
    payload += "\"deviceId\": \"" + deviceId + "\",";
    payload += "\"timestamp\": " + String(now) + ",";
    payload += "\"soil\": " + String(soil) + ",";
    payload += "\"temp\": " + String(temp, 2) + ",";
    payload += "\"light\": " + String(light);
    payload += "}";

    // Start POST
    http.begin("https://9sbc3lhhw4.execute-api.us-west-1.amazonaws.com/telemetry");
    http.addHeader("Content-Type", "application/json");

    int statusCode = http.POST(payload);

    // Print result
    Serial.print("POST status: ");
    Serial.println(statusCode);
    if (statusCode > 0) {
      Serial.println("✅ Sent payload: " + payload);
    } else {
      Serial.println("❌ Failed to send POST");
    }

    http.end();
  } else {
    Serial.println("⚠️ WiFi not connected.");
  }

  delay(10000); // Send every 10 sec
}