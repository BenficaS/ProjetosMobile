import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function Card({ tipoCombustivel, cor, valor, chassi,quilometragem,placa, onDelete, onEdit, fotos }) {

  const foto = fotos && fotos.length > 0 ? fotos[Math.floor(Math.random() * fotos.length)] : null;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={foto} />
      <View style={styles.details}>
        <Text style={styles.subtitle}>Tipo de Combustivel:{tipoCombustivel}</Text>
        <Text style={styles.subtitle}>Cor:{cor}</Text>
        <Text style={styles.subtitle}>Peço:R${valor}</Text>
        <Text style={styles.subtitle}>Chassi:{chassi}</Text>
        <Text style={styles.subtitle}>Quilometragem:{quilometragem}</Text>
        <Text style={styles.subtitle}>Placa:{placa}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onDelete} style={styles.icon}>
          <FontAwesome name="remove" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit} style={styles.icon}>
          <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    marginBottom: 3,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});
