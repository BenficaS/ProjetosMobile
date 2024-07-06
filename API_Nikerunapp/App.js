import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeView } from './home/HomeView';
import { NikeView } from './run/NikeView';
import { RunRout } from './RunRoute/RunView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="HomeView" component={HomeView} options={homeOptions} />
        <Stack.Screen name="nikerun" component={NikeView} options={nikerunOptions} />
        <Stack.Screen name="RunRout" component={RunRout} options={sosOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#25CCB0', // Cor de fundo padrão para os headers
  },
};

const homeOptions = {
  headerShown: false,
};

const nikerunOptions = {
  title: '20/06/2024',
  headerStyle: {
    backgroundColor: 'white', // Cor de fundo branca para a tela NikeView
  },
};

const sosOptions = {
  title: 'Mapa',
};
