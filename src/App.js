import './App.css';
import Header from './componentes/header-component'
import Filme from './componentes/filme-component'
import CasinoRoyale from './componentes/imagens/casinoRoyale.jpeg'
import EfeitoBorboleta from './componentes/imagens/efeitoBorboleta.jpeg'
import PlanetaDosMacacos from './componentes/imagens/planetaDosMacacos.jpeg'
import NarutoTheLast from './componentes/imagens/narutoTheLast.webp'
import TropaDeElite from './componentes/imagens/tropaDeElite.jpeg'
import ClubeDaLuta from './componentes/imagens/clubeDaLuta.jpeg'
import VingadoresUltron from './componentes/imagens/vingadoresUltron.jpeg'
import PiratasDoCaribe from './componentes/imagens/piratasDoCaribe.jpeg'
import BadBoys2 from './componentes/imagens/badBoys2.jpeg'

function App() {

  const filme = [{
    id: '01',
    img: {CasinoRoyale},
    nome: '007 Casino Royale',
    genero: 'Gênero: Ação',
    ano: 'Ano: 2006',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Martin Campbell'
    },
    {
    id: '02',
    img: {EfeitoBorboleta},
    img: './imagens/',
    nome: 'Efeito Borboleta',
    genero: 'Gênero: Ficção científica, Suspense',
    ano: 'Ano: 2004',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Eric Bress, J. Mackye Gruber'
    },
    {
    id: '03',
    img: {PlanetaDosMacacos},
    nome: 'Planeta dos Macacos',
    genero: 'Gênero: Ficção científica, Ação',
    ano: 'Ano: 2011',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Rupert Wyatt'
    },
    {
    id: '04',
    img: {NarutoTheLast},
    nome: 'The Last Naruto: O filme',
    genero: 'Gênero: Anime, Ação, Aventura',
    ano: 'Ano: 2014',
    idioma: 'Idioma: Japonês',
    diretor: 'Diretor: Tsuneo Kobayashi'
    },
    {
    id: '05',
    img: {TropaDeElite},
    nome: 'Tropa de Elite',
    genero: 'Gênero: Crime, Ação',
    ano: 'Ano: 2007',
    idioma: 'Idioma: Português',
    diretor: 'Diretor: José Padilha'
    },
    {
    id: '06',
    img: {ClubeDaLuta},
    nome: 'Clube da Luta',
    genero: 'Gênero: Suspense, Drama',
    ano: 'Ano: 1999',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: David Fincher'
    },
    {
    id: '07',
    img: {VingadoresUltron},
    nome: 'Vingadores: Era de Ultron',
    genero: 'Gênero: Super-heroi, Ação, Aventura',
    ano: 'Ano: 2015',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Joss Whedon'
    },
    {
    id: '08',
    img: {PiratasDoCaribe},
    nome: 'Piratas do Caribe',
    genero: 'Gênero: Aventura, Ação',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Gore Verbinski'
    },
    {
    id: '09',
    img: {BadBoys2},
    nome: 'Bad Boys II',
    genero: 'Gênero: Ação, Comédia',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Michael Bay'
    }]

  return (
    <div>
      <Header />

      <Filme 
      img={CasinoRoyale}
      nome={filme[0].nome}
      genero={filme[0].genero}
      ano={filme[0].ano}
      idioma={filme[0].idioma}
      diretor={filme[0].diretor}
      />

      <Filme
      img={EfeitoBorboleta}
      nome={filme[1].nome}
      genero={filme[1].genero}
      ano={filme[1].ano}
      idioma={filme[1].idioma}
      diretor={filme[1].diretor}
      />

      <Filme
      img={PlanetaDosMacacos}
      nome={filme[2].nome}
      genero={filme[2].genero}
      ano={filme[2].ano}
      idioma={filme[2].idioma}
      diretor={filme[2].diretor}
      />

      <Filme
      img={NarutoTheLast}
      nome={filme[3].nome}
      genero={filme[3].genero}
      ano={filme[3].ano}
      idioma={filme[3].idioma}
      diretor={filme[3].diretor}
      />

      <Filme
      img={TropaDeElite}
      nome={filme[4].nome}
      genero={filme[4].genero}
      ano={filme[4].ano}
      idioma={filme[4].idioma}
      diretor={filme[4].diretor}
      />

      <Filme
      img={ClubeDaLuta}
      nome={filme[5].nome}
      genero={filme[5].genero}
      ano={filme[5].ano}
      idioma={filme[5].idioma}
      diretor={filme[5].diretor}
      />

      <Filme
      img={VingadoresUltron}
      nome={filme[6].nome}
      genero={filme[6].genero}
      ano={filme[6].ano}
      idioma={filme[6].idioma}
      diretor={filme[6].diretor}
      />

      <Filme
      img={PiratasDoCaribe}
      nome={filme[7].nome}
      genero={filme[7].genero}
      ano={filme[7].ano}
      idioma={filme[7].idioma}
      diretor={filme[7].diretor}
      />

      <Filme
      img={BadBoys2}
      nome={filme[8].nome}
      genero={filme[8].genero}
      ano={filme[8].ano}
      idioma={filme[8].idioma}
      diretor={filme[8].diretor}
      />


    </div>

  );
}

export default App;
