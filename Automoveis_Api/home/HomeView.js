import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Button';
import { AutoHeader } from './AutoHeader';
import Constants from 'expo-constants';

export function HomeView({ navigation }) {
  return (
    <View style={styles.view}>
      <AutoHeader />
      <View style={styles.buttons}>
        <Button 
          title='Meus Veiculos' 
          color='green'
          onPress={() => navigation.navigate('autoview') }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor:'#b7d5ac',
    flex: 1,
    padding: 20,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
  },
});
