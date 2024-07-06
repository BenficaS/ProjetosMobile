import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export function NikeView({ navigation }) {
  const [localizacao, setLocalizacao] = useState(null);
  const [correndo, setCorrendo] = useState(false);
  const [nikeFuel, setNikeFuel] = useState(930);
  const [intervaloId, setIntervaloId] = useState(null);
  const [duracao, setDuracao] = useState(2707);
  const [elevacao, setElevacao] = useState('53 M');
  const [localizacaoInicial, setLocalizacaoInicial] = useState(null);
  const [calorias, setCalorias] = useState(1200);
  const [distancia, setDistancia] = useState(8.59);
  const [ritmo, setRitmo] = useState('5\'15"');
  const [bpm, setBpm] = useState(165);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão para acessar a localização foi negada');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocalizacao(location.coords);
    })();
  }, []);

  const iniciarCorrida = () => {
    setCorrendo(true);
    setLocalizacaoInicial(localizacao);
    setDuracao(0);
    const id = setInterval(() => {
      setDuracao((prev) => prev + 1);
    }, 1000);
    setIntervaloId(id);
  };

  const finalizarCorrida = () => {
    setCorrendo(false);
    clearInterval(intervaloId);
    setIntervaloId(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <Text style={styles.headerTitle}>Minha Corrida</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: localizacao ? localizacao.latitude : -19.9059017,
            longitude: localizacao ? localizacao.longitude : -43.9635663,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          showsUserLocation={true}
        >
          {localizacaoInicial && <Marker coordinate={localizacaoInicial} title="Início" />}
        </MapView>
        <View style={styles.distanciaContainer}>
          <Text style={styles.distanciaText}>Distância: {distancia} km</Text>
        </View>
      </View>
      <View style={styles.detailMain}>
        <View style={styles.detailsButtonContainer}>
          <Text style={styles.detailsButtonText}>Exibir detalhes e divisões</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailItem}>
            <Text style={styles.detailValue}>{ritmo}</Text>
            <Text style={styles.detailLabel}>Pace médio</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailValue}>
              {new Date(duracao * 1000).toISOString().substr(11, 8)}
            </Text>
            <Text style={styles.detailLabel}>Duração</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailValue}>{calorias}</Text>
            <Text style={styles.detailLabel}>Calorias Aprox</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailCont}>
            <Text style={styles.detailValue}>{elevacao}</Text>
            <Text style={styles.detailLabel}>Elevação</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailValue}>{bpm}</Text>
            <Text style={styles.detailLabel}>BPM</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailValue}>{nikeFuel}</Text>
            <Text style={styles.detailLabel}>NikeFuel</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'white' }]}
        onPress={correndo ? finalizarCorrida : iniciarCorrida}
      >
        <Text style={[styles.buttonText, { color: '#333' }]}>
          {correndo ? 'Finalizar Corrida' : 'Iniciar Corrida'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contHeader: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  distanciaContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  distanciaText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailMain: {
    padding: 20,
    backgroundColor: 'white',
  },
  detailsButtonContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    padding: 10,
  },
  detailsButtonText: {
    fontSize: 16,
    color: '#000',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailCont: {
    alignItems: 'center',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default NikeView;
