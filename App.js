import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

import Landing from './src/pages/Landing'

export default function App() {
  return (
    <View>

      <Landing />

      <StatusBar style="auto" />

    </View>
  );
}


