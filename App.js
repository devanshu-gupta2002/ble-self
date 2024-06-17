import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { useEffect, useReducer, useRef, useState } from 'react';
import { BleManager } from 'react-native-ble-plx';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc";

const manager = new BleManager();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
