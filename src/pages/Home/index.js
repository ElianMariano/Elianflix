import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../components/data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
          videoTitle={dadosIniciais.categorias[4].videos[2].titulo}
          url={dadosIniciais.categorias[4].videos[2].url}
          videosDescription={"God of War"}
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

        <Footer />

    </div>
  );
}

export default Home;
