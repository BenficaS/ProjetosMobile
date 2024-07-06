import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card2 } from './Card2';
import fotoifood from '../assets/fotoifood.jpg';
import fotosushi from '../assets/jap.jpg';
import fotojap from '../assets/sushi.jpg'
export function CarCardapio() {
  const contacts = [
    {
      id: '1',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$ 63,95',
      image:require('../assets/sushi.jpg'),
    },
    {
      id: '2',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$ 32,95',
      image:require('../assets/jap.jpg')
    },
    {
      id: '3',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$ 45,95',
      image:require('../assets/sushi.jpg')
    },
    {
      id: '4',
      conteudo: 'sushi',
      conteudo2: 'Hiptop',
      valor: 'R$ 45,95',
      image: require ('../assets/fotoifood.jpg')
    },
    {
      id: '5',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$ 45,95',
      image:require('../assets/sushi.jpg')
    },
    {
      id: '6',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$ 45,95',
      image:require('../assets/sushi.jpg')
    },
    // Adicione mais contatos conforme necessário
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Card2 
        nome={item.name}
        conteudo={item.type}
        conteudo2={item.type}
        valor={item.valor}
        image={item.image}
      />
    </View>
  );

  return (
    <View>
      <Text style={styles.headerText}>Cardapio</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: 'black',
    paddingLeft: 30,
    paddingBottom: 20,
  },
  container: {
    paddingHorizontal: 5,
    marginTop: 10,
  },
  itemContainer: {
    marginBottom: 10, // Espaço entre os itens
  },
});
