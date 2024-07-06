import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Button';
import { Header } from './Header';
import Constants from 'expo-constants';

export function HomeView({ navigation }) {
  return (
    <View style={styles.view}>
      <Header />
      <View style={styles.buttons}>
        <Button 
          title='Meus Livros' 
          color='#007BFF'
          onPress={() => navigation.navigate('contacts') }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#F0F8FF', // Um leve azul claro como cor de fundo
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
  },
});
