import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Header() {
  return (
    <View style={styles.contMain}>
      <View style={styles.contValue}>
        <Text style={styles.textValue}>5'09"</Text>
        <Text style={styles.textValue}>128</Text>
        <Text style={styles.textValue}>23:29</Text>
      </View>
      <View style={styles.contMain2}>
        <Text style={styles.textCont2}>Pace Médio</Text>
        <Text style={styles.textCont2}>BPM</Text>
        <Text style={styles.textCont2}>Duração</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contMain: {
    backgroundColor: '#00bfff',
    padding: 20,
  },
  contValue: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  contMain2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textCont2: {
    fontSize: 20,
    color: 'black',
  },
});