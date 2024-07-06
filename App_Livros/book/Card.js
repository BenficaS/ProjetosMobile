import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function Card({ preco, anoPublicacao, titulo, autor, editora: { nome: editoraNome, cnpj: editoraCNPJ }, onDelete, onEdit, fotos }) {
  // Verificar se a propriedade fotos está definida e possui um comprimento
  const foto = fotos && fotos.length > 0 ? fotos[Math.floor(Math.random() * fotos.length)] : null;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={foto} />
      <View style={styles.details}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.subtitle}>Autor: {autor}</Text>
        <Text style={styles.subtitle}>Preço: {preco}</Text>
        <Text style={styles.subtitle}>Ano de Publicação: {anoPublicacao}</Text>
        <Text style={styles.subtitle}>Editora: {editoraNome}</Text>
        <Text style={styles.subtitle}>CNPJ da Editora: {editoraCNPJ}</Text>
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
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
