import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

import { Entypo } from '@expo/vector-icons';
import CARAMELO from '../assets/caramelo.jpg'


export function CardAnimal ({id,nome, dataNascimento,sexo,especie,onDelete}){
  return(
    <View style = {styles.styleView}>
      <View>
        <Image source={CARAMELO} style={styles.img}/>
      </View>
      <View style = {styles.viewText}>
        <Text>Nome: {nome}</Text>
        <Text>Data de nascimento:{dataNascimento}</Text>
        <Text>sexo:{sexo}</Text>
        <Text>Especie:{especie}</Text>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Entypo name="remove-user" size={24} color="black" />
      </TouchableOpacity>
    </View>
    )
  }
  const styles = StyleSheet.create({
    styleView:{
      flexDirection:'row',
      paddingLeft:20,
      paddingRight:10,
      columnGap:10,
    },
  viewText:{
  padding: 10 ,
  justifyContent:'start',
  flex:1,
  },
    img:{
    height:130,
    width: 70,
    borderRadius:10,
  },
  })
