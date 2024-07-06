import {View,Text,Image,StyleSheet} from 'react-native'
import JAP from '../assets/jap.jpg'

export function Card1 ({id,conteudo2='5 molho shoyu',conteudo = '1 Mais hot 54 pecas',nome, valor}){
  return(
    <View style = {styles.styleView}>
    <Image source={JAP} style={styles.img}/>
      <View style = {styles.viewText}>
      <Text style = {styles.strong}>{nome}</Text>
        <Text style = {styles.strong}>{conteudo}</Text>
        <Text style = {styles.strong}>{conteudo2}</Text>
        <Text style = {styles.strong}>{valor}</Text>
      </View>
    </View>
    )
  }
  const styles = StyleSheet.create({
    styleView:{
      flexDirection:'row',
      paddingLeft:20,
    },
  img:{
    height:150,
    width: 150,
    borderRadius:10,
  },
  viewText:{
  padding: 10 ,
  justifyContent:'start',
  },
  strong:{
    fontSize:15,
    fontWeight: 'bold',
  }
  })