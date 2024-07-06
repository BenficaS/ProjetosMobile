import { View, Text, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { HomeView, Menu, Header } from './home';

import { BookView } from './book/BookView';
import {SosView} from './sos/SOSView'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name='home' component={HomeView} options={homeOptions} />
        <Stack.Screen name='contacts' component={BookView} options={contactsOptions} />
        <Stack.Screen name='sos' component={SosView} options={sosOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const homeOptions = {
  headerShown: false
}

const contactsOptions = {
  title: 'Meus Livros'
}

const sosOptions = {
  title: 'Detalhes do Livro'
}

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#007BFF'
  },
  headerTintColor: 'white'
}

