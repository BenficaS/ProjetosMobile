import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Button({ title = '?', color = '#25CCB0', onPress }) {
  const colorStyle = {
    backgroundColor: color,
  };

  return (
    <TouchableOpacity 
      style={[styles.button, colorStyle]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
