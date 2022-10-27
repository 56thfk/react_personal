import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import GyroscopeSensor from './Sensors/GyroscopeSensor';
import AccelerometerSensor from './Sensors/AccelerometerSensor';
import MagnetometerSensor from './Sensors/MagnetometerSensor';

export default function App() {
  return (
    <View style={styles.container}>
      <GyroscopeSensor></GyroscopeSensor>
      <AccelerometerSensor></AccelerometerSensor>
      <MagnetometerSensor></MagnetometerSensor>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
});