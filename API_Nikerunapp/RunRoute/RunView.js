import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export function RunView({ navigation, route }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status!== 'Permitido') {
        console.error('Permissao negada para localização de corrida.');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {location? (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          showsUserLocation={true}
        >
          <Marker coordinate={location} title="Minha Localização" />
        </MapView>
      ) : (
        <Text>Recebendo sua localização localização...</Text>
      )}
    </View>
  );
}
