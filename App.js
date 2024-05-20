import { Text, Image } from 'react-native';
import useFetch from './src/hooks/useFetch';
import Card from './src/components/Card';
import { useState } from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <>
      <StatusBar translucent={false} style='light'/>
      <TabNavigator />
    </>
  );
}

