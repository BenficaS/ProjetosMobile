import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logo.jpg'

export function AutoHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>AutoCar </Text>
        <Text style={[styles.titleText, styles.subtitleText]}>Seu App Veicular</Text>
      </View>
      <View style={styles.contImage}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#b7d5ac',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: 5,
  },
  subtitleText: {
    color: 'green',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius:40,
  },
  contImage: {
    paddingTop:120,
    width: '100%',
    alignItems: 'center',
  },
});
