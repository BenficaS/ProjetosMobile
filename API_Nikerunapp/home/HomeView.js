import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from './Header';
import Constants from 'expo-constants';

export function HomeView({ navigation }) {
  return (
    <View style={estilos.principalHome}>
      <Header />
      <View style={estilos.containerDistancia}>
        <Text style={estilos.textoDistancia}>4,74</Text>
        <Text style={estilos.textoDist}>Quilômetros</Text>
      </View>
      <TouchableOpacity style={estilos.botaoIniciar} onPress={() => navigation.navigate('nikerun')}>
        <Text style={estilos.textoBotaoPausa}>II</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  containerDistancia: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoDistancia: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'black',
  },
  textoBotaoPausa: {
    fontSize: 32,
    color: 'white',
  },
  botaoIniciar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  principalHome: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#00bfff',
  },
  textoDist: {
    fontSize: 24,
    color: 'black',
  },
});
