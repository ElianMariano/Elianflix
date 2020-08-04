import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // http://localhost:8080/categorias/?_embed=videos
  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[4].videos[2].titulo}
                url={dadosIniciais[4].videos[2].url}
                videoDescription="God of War - PS4"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[4].videos[2].titulo}
        url={dadosIniciais.categorias[4].videos[2].url}
        videosDescription="God of War"
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
      /> */}

    </PageDefault>
  );
}

export default Home;
