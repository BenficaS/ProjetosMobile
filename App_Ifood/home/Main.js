import { Text, StyleSheet, View } from 'react-native';

export function Main() {
  return (
      <View style={styles.infoContainer}>
        <Text style={styles.textMain}>Aberto até 23:30 * Pedido min. </Text>
        <Text>R$ 40</Text>
        <Text style = {styles.textPerf}>Perfil da Loja</Text>
    </View>
  );
}
  const styles = StyleSheet.create({
    infoContainer: {
      flexDirection: 'row',
      marginLeft: 20,
      marginTop: 10,
    },
    textPerf:{
      color:'purple',
      marginLeft:30,
    },
    textMain:{
    color:'#A9A9A9',
    }
  });

