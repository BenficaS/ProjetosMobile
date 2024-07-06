import { View, Text, StyleSheet } from 'react-native';

export function RouteView({ navigation, route }) {
  const { tipoCombustivel, cor, valor, chassi, quilometragem,placa } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
      <Text style={styles.label}>Tipo de Combustivel:</Text>
        <Text style={styles.value}>{tipoCombustivel}</Text>
      </View>
      <View style={styles.detailContainer}>
      <Text style={styles.label}>Cor do Veiculo:</Text>
        <Text style={styles.value}>{cor}</Text>
      </View>
      <View style={styles.detailContainer}>
      <Text style={styles.label}>Valor do Veiculo:</Text>
        <Text style={styles.value}>R${valor}</Text>
      </View>
      <View style={styles.detailContainer}>
      <Text style={styles.label}>Chassi do Veiculo:</Text>
        <Text style={styles.value}>{chassi}</Text>
      </View>
      <View style={styles.detailContainer}>
      <Text style={styles.label}>Quilometragem do Veiculo:</Text>
        <Text style={styles.value}>{quilometragem}</Text>
      </View>
      <View style={styles.detailContainer}>
      <Text style={styles.label}>Placa Do Veiculo:</Text>
        <Text style={styles.value}>{placa}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
});
