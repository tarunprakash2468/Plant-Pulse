# Plant Pulse 🌱

Plant Pulse is an innovative IoT-based plant monitoring system that helps you keep your plants healthy and thriving. The system combines hardware sensors, a mobile application, and a backend service to provide real-time monitoring and care recommendations for your plants.

## 🌟 Features

- Real-time plant health monitoring
- Soil moisture and temperature tracking
- Light intensity measurement
- Mobile app notifications and alerts
- Plant care recommendations
- Historical data tracking and analytics

## 🏗️ System Architecture

The project consists of three main components:

### 1. Firmware (ESP32-based)
- Built using PlatformIO
- Handles sensor data collection
- Manages wireless communication
- Implements power management

### 2. Mobile Application
- React Native-based cross-platform app
- Real-time data visualization
- Push notifications
- Plant care recommendations
- User authentication and profile management

### 3. Backend Service
- RESTful API endpoints
- Data storage and management
- Authentication and authorization
- Analytics processing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8+
- PlatformIO
- React Native development environment
- ESP32 development board
- Required sensors (soil moisture, temperature, light)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Plant-Pulse.git
   cd Plant-Pulse
   ```

2. **Mobile App Setup**
   ```bash
   cd mobile-app
   npm install
   # For iOS
   cd ios && pod install && cd ..
   ```

3. **Firmware Setup**
   ```bash
   cd firmware
   pio run
   ```

4. **Backend Setup**
   ```bash
   cd backend
   # Setup instructions will be added as backend development progresses
   ```

## 📱 Mobile App Development

The mobile app is built using React Native and includes:
- Real-time data visualization
- Push notifications
- Plant care recommendations
- User authentication
- Profile management

For detailed mobile app setup and development instructions, see the [mobile-app README](mobile-app/README.md).

## 🔧 Firmware Development

The firmware is developed using PlatformIO and runs on ESP32. It handles:
- Sensor data collection
- Wireless communication
- Power management
- Data preprocessing

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.