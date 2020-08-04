import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();

        return resposta;
      }

      throw new Error('Não possivel cadastrar os dados');
    });
}

export default {
  create,
};
