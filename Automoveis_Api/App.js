import { View, Text, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeView } from './home/HomeView';
import { AutoView } from './Cars/AutoView';

import { RouteView } from './AutoRoute/RouteView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOption={defaultOption}>
        <Stack.Screen name="Home" component={HomeView} options={homeOptions} />
        <Stack.Screen
          name="autoview"
          component={AutoView}
          options={contactsOptions}
        />
        <Stack.Screen
          name="Ficha Tecnica"
          component={RouteView}
          options={fichaOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const homeOptions = {
  headerShow: false,
};
const contactsOptions = {
  title: 'Lista de Veiculos',
};
const defaultOption = {
  headerStyle: {
    backgroundColor: '#25CCB0',
  },
  headerTintColor: 'white',
};

const fichaOptions = {
  tittle: 'ficha tecnica',
};

const styles = StyleSheet.create({});
