import { View, Text, Image, StyleSheet, Button } from 'react-native';

import Praia from '../imagens/praia.jpg';

export function Header() {
  return (
    <View>
      <Image source={Praia} />
      <Text style={styles.pack}>📷 Pacote </Text>
      <Text style={styles.fontTitulo}>Punta cana</Text>
      <Text style={styles.fontViagens}>✓ Áreo ida e volta</Text>
      <Text style={styles.fontViagem1}>✓ 7 diarias</Text>
      <Text style={styles.fontViagem1}>✓ Cafe da manhã</Text>
      <Text style={styles.fontA}>Apartir de:</Text>
      <View style={styles.cont}>
        <Text style={styles.val}>R$ 3.843</Text>
        <Button title="Confira" onPress={() => alert('Ofertas.')}/>
      </View>
      <Text style={styles.font1}>Taxas inclusas</Text>
      <Text style={styles.font2}>EM ATÉ 10X SEM JUROS.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pack: {
    fontSize: 30,
    color: 'white',
    paddingLeft: 10,
    backgroundColor: '#ffa500',
    borderRadius: 10,
    width: 160,
  },
  fontTitulo: {
    fontSize: 40,
    paddingLeft: 10,
  },
  fontViagens: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 50,
  },
  fontViagem1: {
    fontSize: 20,
    marginLeft: 50,
    marginTop: 5,
  },
  fontA: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  val: {
    fontSize: 50,
    paddingLeft: 10,
  },
  font1: {
    fontSize: 25,
    paddingLeft: 10,
    paddingBottom: 120,
    marginTop: 10,
  },
  font2: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 90,
  },
});
