import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [ categories, setCategories ] = useState([]);
    
    const initialValues = {
        name: 'Categoria',
        description: 'Descrição',
        color: '#000'
    }
    
    const [ values, setValues ] = useState(initialValues);

    function setValue(key, value){
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        setCategories([
            ...categories,
            values
        ]);

        setValues(initialValues);
    }

    function handleChange(e){
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo: {values.name} </h1>

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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categories.map((category, i) => {
                    return (
                        <li key={`${category}${i}`}>
                            {category.name}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;