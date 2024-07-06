const URL = 'https://api-automovel-dot-api-samples-423102.uc.r.appspot.com/api/automoveis';

export async function findAll() {
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 12111280',
    },
  };

  try {
    const responseHttp = await fetch(URL, requestInit);
    if (responseHttp.ok) {
      return await responseHttp.json();
    } else {
      throw new Error('Falha ao tentar obter os Veículos. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao obter Veículos:', error.message);
    throw error;
  }
}

export async function remove(id) {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer 12111280',
    },
  };

  try {
    const responseHttp = await fetch(`${URL}/${id}`, requestInit);
    if (responseHttp.ok) {
      return await responseHttp.json();
    } else {
      throw new Error('Falha ao tentar remover o Veículo. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao remover Veículo:', error.message);
    throw error;
  }
}

export async function insert(veiculo) {
  const requestInit = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 12111280',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(veiculo),
  };

  try {
    const responseHttp = await fetch(URL, requestInit);
    if (responseHttp.ok) {
      return await responseHttp.json();
    } else {
      throw new Error('Falha ao tentar inserir o Veículo. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao inserir Veículo:', error.message);
    throw error;
  }
}

export async function update(id, veiculo) {
  const requestInit = {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer 12111280',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(veiculo),
  };

  try {
    const responseHttp = await fetch(`${URL}/${id}`, requestInit);
    if (responseHttp.ok) {
      return await responseHttp.json();
    } else {
      throw new Error('Falha ao tentar alterar as informações do Veículo. Tente novamente em alguns minutos.');
    }
  } catch (error) {
    console.error('Erro ao atualizar Veículo:', error.message);
    throw error;
  }
}