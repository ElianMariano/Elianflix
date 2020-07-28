import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dadosIniciais from './components/data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videosDescription={"O que é FrontEnd?"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          category={dadosIniciais.categorias[6]}
        />

        <Carousel
          category={dadosIniciais.categorias[7]}
        />

    </div>
  );
}

export default App;
