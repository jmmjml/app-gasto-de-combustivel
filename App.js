import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './globalStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      {/* <TextInput value={} onChangeText={} style={styles.texto} keyboardType='numeric'></TextInput> */}
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
