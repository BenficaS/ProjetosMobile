import {View, StyleSheet } from 'react-native';

import Constants from 'expo-constants'

import {AnimalView} from './user/AnimalView'

export default function App() {
  return (
    <View style={styles.container}>
      
      < AnimalView />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     marginTop: Constants.statusBarHeight
  }
  
});
