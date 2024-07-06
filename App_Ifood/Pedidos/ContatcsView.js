import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from './Card';

export function ContactsView() {
  const contacts = [
    {
      id: '1',
      type: 'sushi',
      name: 'Hiptop',
      valor: 'R$:63,95',
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
    <View>
      <Text style={styles.headerText}>Peca novamente</Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Card 
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
