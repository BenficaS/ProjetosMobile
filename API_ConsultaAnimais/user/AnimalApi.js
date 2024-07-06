const URL =  'https://6f913eb1-8464-419a-a293-2e04ea7fab9d-00-3g2ud43vejmtp.picard.replit.dev/users'


export async function findAll() {
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: 12111280
    }
  }

  const resposeHttp = await fetch(URL, requestInit)

  if(resposeHttp.ok) {
    const responseBody = await resposeHttp.json()

    return responseBody.data
  } else {
    console.log('Erro ao executar a api GET /contacts')

    throw new Error('Não foi possivel recuperar os contatos. Tente novamente em alguns minutos.')
  }
}

export async function remove(id) {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: 12111280
    }
  }

  const resposeHttp = await fetch(`${URL}/${id}`, requestInit)

  console.log('Status=', resposeHttp.status, 'OK=', resposeHttp.ok)

  if(!resposeHttp.ok) {
    console.log('Erro ao executar a api DELETE /contacts/{id}')

    throw new Error('Não foi possivel excluir o contato. Tente novamente em alguns minutos.')
  }
}
