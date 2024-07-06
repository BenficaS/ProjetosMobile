import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Card } from './Card';
import {
  Button,
  Provider as PaperProvider,
  Portal,
  Dialog,
  TextInput,
} from 'react-native-paper';
import { findAll, remove, insert, update } from './AutoApi';

export function AutoView({ navigation }) {
  const [cars, setCars] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [tipoCombustivel, setTipoCombustivel] = useState('');
  const [cor, setCor] = useState('');
  const [valor, setValor] = useState('');
  const [chassi, setChassi] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [placa, setPlaca] = useState('');
  const [editId, setEditId] = useState(null); // State para armazenar o id do veículo em edição

  useEffect(() => {
    findCars();
  }, []);

  const findCars = async () => {
    try {
      const data = await findAll();
      setCars(data);
    } catch (err) {
      console.error('Falha ao buscar os Veículos', err.message);
      alert('Falha ao buscar os Veículos. Tente novamente em alguns minutos.');
    }
  };

  const onDelete = async (id) => {
    try {
      const carOld = await remove(id);
      alert(`Veículo ${carOld.id} excluído com sucesso!`);
      await findCars();
    } catch (err) {
      console.error('Falha ao excluir o Veículo', err.message);
      alert('Falha ao excluir o Veículo. Tente novamente em alguns minutos.');
    }
  };

  const onEdit = (id) => {
    const car = cars.find((item) => item.id === id);
    if (car) {
      setEditId(id);
      setTipoCombustivel(car.tipoCombustivel ?? '');
      setCor(car.cor ?? '');
      setValor(car.valor?.toString() ?? '');
      setChassi(car.chassi ?? '');
      setQuilometragem(car.quilometragem?.toString() ?? '');
      setPlaca(car.placa ?? '');
      setShowDialog(true);
    } else {
      console.error('Veículo não encontrado!');
      alert('Falha ao editar o veículo. Veículo não encontrado.');
    }
  };

  const salvar = async () => {
    try {
      const veiculo = {
        tipoCombustivel,
        cor,
        valor: parseFloat(valor),
        chassi,
        quilometragem: parseInt(quilometragem, 10), 
        placa,
      };

      if (editId === null) {
        await insert(veiculo);
        alert('Carro cadastrado com sucesso!');
      } else {
        await update(editId, veiculo);
        alert('Carro editado com sucesso!');
        setEditId(null);
      }

      setShowDialog(false);
      setTipoCombustivel('');
      setCor('');
      setValor('');
      setChassi('');
      setQuilometragem('');
      setPlaca('');
      await findCars();
    } catch (err) {
      console.error('Falha ao inserir ou editar o veículo', err.message);
      alert('Falha ao cadastrar ou editar o veículo. Tente novamente em alguns minutos.');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Car View</Text>
        <FlatList
          data={cars}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Ficha Tecnica', item)}>
              <Card
                {...item}
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item.id)}
                fotos={[
                  require('../assets/fiat.jpg'),require('../assets/images.jpg'),require('../assets/ferrari.jpg'),require('../assets/Lamborghini.jpg')
                ]}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button mode="contained" onPress={findCars} style={styles.button} theme={{ colors: { primary: 'green' } }} >
          BUSCAR
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            setEditId(null);
            setShowDialog(true);
          }}
          style={styles.button}
          theme={{ colors: { primary: 'green' } }} 
        >
          ADICIONAR
        </Button>
        <Portal>
          <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
            <Dialog.Title>
              {editId === null ? 'Adicionar veículo' : 'Editar veículo'}
            </Dialog.Title>
            <Dialog.Content>
              <TextInput
                mode="flat"
                label="Tipo de Combustível"
                placeholder="Gasolina, Álcool, Etanol."
                value={tipoCombustivel}
                onChangeText={(text) => setTipoCombustivel(text)}
              />
              <TextInput
                mode="flat"
                label="Cor Do Veículo"
                placeholder="Amarelo, azul, branco."
                value={cor}
                onChangeText={(text) => setCor(text)}
              />
              <TextInput
                mode="flat"
                label="Valor Do Veículo"
                placeholder="35.000"
                value={valor}
                onChangeText={(text) => setValor(text)}
                keyboardType="numeric"
              />
              <TextInput
                mode="flat"
                label="Número De Chassi Veicular:"
                placeholder="AH31H332"
                value={chassi}
                onChangeText={(text) => setChassi(text)}
              />
              <TextInput
                mode="flat"
                label="Quilometragem do Veículo:"
                placeholder="3545000"
                value={quilometragem}
                onChangeText={(text) => setQuilometragem(text)}
                keyboardType="numeric"
              />
              <TextInput
                mode="flat"
                label="Placa Do Veículo"
                placeholder="PXI-3035"
                value={placa}
                onChangeText={(text) => setPlaca(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button theme={{ colors: { primary: 'green' } }} onPress={() => setShowDialog(false) }>CANCELAR</Button>
              <Button onPress={salvar} theme={{ colors: { primary: 'green' } }}>SALVAR</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#dbead5',
    flex: 1,
    padding: 16,
  },
  title: {
    borderRadius:10,
    backgroundColor: '#008000',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
    color: 'white',
    padding: 8,
  },
  button: {
    marginTop: 16,
  },
});