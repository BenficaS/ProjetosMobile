import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logo2.png';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Biblioteca</Text>
        <Text style={[styles.titleText, styles.subtitleText]}>Virtual</Text>
      </View>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '##]f0f8ff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: 5,
  },
  subtitleText: {
    color: '#007BFF',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#c1c1c1',
  },
});
