import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export function Button({ color = 'white', onPress }) {
  const colorStyle = {
    backgroundColor: color,
  };

  return (
    <View style={styles.contButton}>
      <TouchableOpacity style={[styles.button, colorStyle]} onPress={onPress}>
        <Text style={styles.corH}>Nivel 1 de 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, colorStyle]} onPress={onPress}>
        <Text style={styles.text}><Text style={styles.corH}>★ 4,2</Text>(2,9mil)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foldEntregaBotao}  onPress={onPress}>
        <Text style={styles.contEntr}>Entrega gratis</Text>
      </TouchableOpacity>
    </View>
  );
}
export function ButtonEntrega({onPress}) {
  return (
    <View style = {styles.contButton}>
      <TouchableOpacity style={styles.corEntrega} onPress={onPress}>
        <Text style={styles.text}>Entrega</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoEntrega} onPress={onPress}>
        <Text style={styles.text}><Text style = {styles.corH}>Hoje</Text>,60-70 min* <Text style = {styles.corGratis}>Gratis</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 10,
  },
  text: {
    color: 'grey',
    fontSize: 13, 
    fontFamily: 'Roboto',
  },
  contButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding:10,
  },
  botaoEntrega:{
    width: 200, 
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  corH:{
    color:'black',
  },
  foldEntregaBotao:{
    width: 140, 
    height: 40, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 10,
  },
  corEntrega:{
    width: 100, 
    height: 40, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  corGratis:{
    color:'green'
  }
  


});
