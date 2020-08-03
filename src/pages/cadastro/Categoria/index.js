import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategories([
      ...categories,
      values,
    ]);

    setValues(initialValues);
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://elianflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategories([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo:
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading ...
        </div>
      )}

      <ul>
        {categories.map((category, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category.nome}${i}`}>
            {category.name}
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
