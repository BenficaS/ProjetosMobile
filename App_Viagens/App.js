import {StyleSheet,View} from 'react-native';

import { Card } from 'react-native-paper';

import {Header} from './Home/Header' 

export default function App() {
  return (
    <View styles = {styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  },
});
