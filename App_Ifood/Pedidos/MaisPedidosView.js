import React from 'react';
import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
import { Card1 } from './Card1';
import {JAP} from '../assets/jap.jpg'

export function MaisPedidosView() {
  const contacts = [
    {
      id: '1',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:32,95',
    },
    {
      id: '2',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:32,95',
    },
    {
      id: '3',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:45,95',
    },
     {
      id: '3',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:45,95',
    },
     {
      id: '3',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:45,95',
    },
     {
      id: '3',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:45,95',
    },
    // Adicione mais contatos conforme necessário
  ];

  return (
    <View style = {styles.stiloBordas}>
      <Text style={styles.headerText}>Os mais pedidos</Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Card1
          nome={item.nome}
          conteudo={item.conteudo}
          conteudo2={item.conteudo2}
          valor={item.valor}/>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        numColumns={1}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    color: 'black',
    paddingLeft:30,
    paddingBottom:20,
  },
  container: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
});
