import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import JAP from '../assets/jap.jpg';
import { Button, ButtonEntrega } from './Button';
import { ContactsView } from '../Pedidos/ContatcsView';
import { Main } from './Main';
import { MaisPedidosView } from '../Pedidos/MaisPedidosView';
import {CarCardapio} from '../Pedidos/CardCardapio';
import SUSHI from '../assets/sushi.jpg';

export function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground source={SUSHI} style={styles.sushiImagem}>
        <View style={styles.containerHeader}>
          <Text style={styles.font}>Bh Japa Sushi - Pampulha</Text>
          <Image source={JAP} style={styles.img} />
        </View>
        <View style={styles.contJapa}>
          <Text style={styles.fontJap}>japonesa * 4,3km * $$$$</Text>
        </View>
      </ImageBackground>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainStyle}>
          <Main />
        </View>
        <View style={styles.compCont}>
          <Button />
          <ButtonEntrega />
          <ContactsView />
          <MaisPedidosView />
          <CarCardapio />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 200,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  font: {
    fontSize: 20,
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 120,
    marginLeft: 70,
  },
  fontJap: {
    marginLeft: 20,
    color: '#A9A9A9',
  },
  compCont: {
    justifyContent: 'flex-start',
    paddingBottom: 50,
  },
  mainStyle: {
    paddingBottom: 20,
  },
  contJapa: {
    marginBottom: 20,
  },
  sushiImagem: {
    width: 420,
    height: 190,
    position: 'absolute',
  },
  scrollView: {
    flex: 1,
    marginTop: 270, // Ajuste conforme necessário para evitar sobreposição com o header
  },
});
