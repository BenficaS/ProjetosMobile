const URL = 'https://api-automovel-dot-api-samples-423102.uc.r.appspot.com/api/automoveis';

export async function findAll() {
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 12116809',
    },
  };

  try {
    const responseHttp = await fetch(URL, requestInit);

    if (responseHttp.ok) {
      return await responseHttp.json();
    } else {
      throw new Error('Falha ao tentar obter os livros. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao obter livros:', error.message);
    throw error;
  }
}

export async function remove(id) {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer 12116809',
    },
  };

  console.log('Executando DELETE /livros/' + id);
  try {
    const responseHttp = await fetch(`${URL}/${id}`, requestInit);

    if (responseHttp.ok) {
      console.log('Sucesso ao excluir o livro:', id);
      return await responseHttp.json();
    } else {
      console.log('Erro ao excluir o livro:', id);
      throw new Error('Falha ao tentar remover o livro. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao remover livro:', error.message);
    throw error;
  }
}

export async function insert(preco, anoPublicacao, titulo, autor, editoraNome, editoraCNPJ) {
  const requestInit = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 12116809',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      preco, 
      anoPublicacao, 
      titulo, 
      autor, 
      editora: { 
        nome: editoraNome, 
        cnpj: editoraCNPJ 
      } 
    }),
  };

  try {
    const responseHttp = await fetch(URL, requestInit);

    if (responseHttp.ok) {
      console.log('Sucesso ao inserir o livro');
      return await responseHttp.json();
    } else {
      console.log('Erro ao inserir o livro');
      throw new Error('Falha ao tentar inserir o livro. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao inserir livro:', error.message);
    throw error;
  }
}

export async function update(id, preco, anoPublicacao, titulo, autor, editoraNome, editoraCNPJ) {
  const requestInit = {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer 12116809',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      preco, 
      anoPublicacao, 
      titulo, 
      autor, 
      editora: { 
        nome: editoraNome, 
        cnpj: editoraCNPJ 
      } 
    }),
  };

  try {
    const responseHttp = await fetch(`${URL}/${id}`, requestInit);

    if (responseHttp.ok) {
      console.log('Sucesso ao atualizar o livro:', id);
      return await responseHttp.json();
    } else {
      console.log('Erro ao atualizar o livro:', id);
      throw new Error('Falha ao tentar alterar o livro. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao atualizar livro:', error.message);
    throw error;
  }
}
