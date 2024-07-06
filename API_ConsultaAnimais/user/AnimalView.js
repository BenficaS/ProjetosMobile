import { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Button } from 'react-native-paper'
import { CardAnimal } from './CardAnimal'
import { findAll, remove } from './AnimalApi'

export function AnimalView() {
  const [animais, setAnimais] = useState([])

  const findAnimais = async () => {
    const animais = await findAll()
    setAnimais(animais)
  }

  const onDelete = async (id) => {
    console.log(`Removendo o contato ${id} ...`)
    await remove(id)
    alert('Contato excluído com sucesso!')
    await findAnimais()
  }

  return (
    <View>
      <Text style = {styles.header}>Lista de animais</Text>
      <FlatList 
        data={animais}
        renderItem={({ item }) => (
          <CardAnimal 
            {...item}
            onDelete={() => onDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lacuna}
        numColumns={1}
        horizontal={false}
      />
      <Button onPress={findAnimais}>
        Atualizar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  lacuna: {
    gap: 10
  },
  header:{
  
  textAlign:'center',
  fontSize:20,
  justifyContent:'center',
  },

  
  
})
