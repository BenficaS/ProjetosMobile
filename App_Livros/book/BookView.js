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
import { findAll, remove, insert, update } from './BookApi';

export function BookView({ navigation, route }) {
  const [books, setBooks] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const [editoraNome, setEditoraNome] = useState('');
  const [editoraCNPJ, setEditoraCNPJ] = useState('');
  const [preco, setPreco] = useState('');
  const [anoPub, setAnoPub] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [editId, setEditId] = useState(null); // State para armazenar o id do livro em edição

  useEffect(() => {
    findBooks();
  }, []);

  const findBooks = async () => {
    try {
      const data = await findAll();
      console.log('Retorno da API:', JSON.stringify(data));
      setBooks(data);
    } catch (err) {
      console.error('Falha ao buscar os livros', err.message);
      alert('Falha ao buscar os livros. Tente novamente em alguns minutos.');
    }
  };

  const onDelete = async (id) => {
    console.log('Excluindo o livro: ', id);
    try {
      const bookOld = await remove(id);
      alert(`Livro ${bookOld.titulo} excluído com sucesso!`);
      await findBooks();
    } catch (err) {
      console.error('Falha ao excluir o livro', err.message);
      alert('Falha ao excluir o livro. Tente novamente em alguns minutos.');
    }
  };

  const onEdit = (id) => {
    setShowDialog(true);
    console.log('Editando o livro: ', id);
    const book = books.find((item) => item.id === id);
    setEditId(id);
    setPreco(book.preco.toString());
    setAnoPub(book.anoPublicacao.toString());
    setTitulo(book.titulo);
    setAutor(book.autor);
    setEditoraNome(book.editora.nome);
    setEditoraCNPJ(book.editora.cnpj);
  };

  const salvar = async () => {
    console.log('Salvando livro...');

    try {
      if (editId === null) {
        // Inserindo um novo livro
        const novoLivro = await insert(
          parseFloat(preco),
          parseInt(anoPub, 10),
          titulo,
          autor,
          editoraNome,
          editoraCNPJ
        );
        alert('Livro cadastrado com sucesso!');
      } else {
        // Atualizando um livro existente
        const livroAtualizado = await update(
          editId,
          parseFloat(preco),
          parseInt(anoPub, 10),
          titulo,
          autor,
          editoraNome,
          editoraCNPJ
        );
        alert('Livro editado com sucesso!');
        setEditId(null);
      }

      setShowDialog(false);
      // Reset dos campos do formulário
      setPreco('');
      setAnoPub('');
      setTitulo('');
      setAutor('');
      setEditoraNome('');
      setEditoraCNPJ('');
      await findBooks();
    } catch (err) {
      console.error('Falha ao inserir ou editar o livro', err.message);
      alert(
        'Falha ao cadastrar ou editar o livro. Tente novamente em alguns minutos.'
      );
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Books View</Text>
        <FlatList
          data={books}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('sos', item)}>
              <Card
                {...item}
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item.id)}
                fotos={[require('../assets/livro.jpg'), require('../assets/livro2.png'), require('../assets/livro3.png'), require('../assets/livro4.png')]}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button mode="contained" onPress={findBooks} style={styles.button}>
          BUSCAR
        </Button>
        <Button
          mode="contained"
          onPress={() => setShowDialog(true)}
          style={styles.button}>
          ADICIONAR
        </Button>
        <Portal>
          <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
            <Dialog.Title>
              {editId === null ? 'Adicionar Livro' : 'Editar Livro'}
            </Dialog.Title>
            <Dialog.Content>
              <TextInput
                mode="flat"
                label="Preço"
                placeholder="1.000"
                value={preco}
                onChangeText={(text) => setPreco(text)}
                keyboardType="numeric"
              />
              <TextInput
                mode="flat"
                label="Ano"
                placeholder="2000"
                value={anoPub}
                onChangeText={(text) => setAnoPub(text)}
                keyboardType="numeric"
              />
              <TextInput
                mode="flat"
                label="Título"
                placeholder="Física para Todos"
                value={titulo}
                onChangeText={(text) => setTitulo(text)}
              />
              <TextInput
                mode="flat"
                label="Autor"
                placeholder="Stephen Hawking"
                value={autor}
                onChangeText={(text) => setAutor(text)}
              />
              <TextInput
                mode="flat"
                label="Nome da Editora"
                placeholder="Panini"
                value={editoraNome}
                onChangeText={(text) => setEditoraNome(text)}
              />
              <TextInput
                mode="flat"
                label="CNPJ da Editora"
                placeholder="XX.XXX.XXX/0001-XX"
                value={editoraCNPJ}
                onChangeText={(text) => setEditoraCNPJ(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setShowDialog(false)}>CANCELAR</Button>
              <Button onPress={salvar}>SALVAR</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
