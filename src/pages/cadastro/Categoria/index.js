import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://elianflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading ...
        </div>
      )}

      <ul>
        {categorias.map((categoria, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.titulo}${i}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
