import { View, Text, StyleSheet } from 'react-native';

export function SosView({ navigation, route }) {
  const { titulo, autor, preco, anoPublicacao, editora } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Livro</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Título:</Text>
        <Text style={styles.value}>{titulo}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Autor:</Text>
        <Text style={styles.value}>{autor}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Preço:</Text>
        <Text style={styles.value}>R$ {preco}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Ano de Publicação:</Text>
        <Text style={styles.value}>{anoPublicacao}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Editora:</Text>
        <Text style={styles.value}>{editora.nome}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>CNPJ da Editora:</Text>
        <Text style={styles.value}>{editora.cnpj}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
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
