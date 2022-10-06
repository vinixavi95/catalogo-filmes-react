import './App.css';
import Header from './componentes/Header';
import Filmes from './componentes/Filmes';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import CasinoRoyale from './componentes/imagens/casinoRoyale.jpeg'
import EfeitoBorboleta from './componentes/imagens/efeitoBorboleta.jpeg'
import PlanetaDosMacacos from './componentes/imagens/planetaDosMacacos.jpeg'
import NarutoTheLast from './componentes/imagens/narutoTheLast.webp'
import TropaDeElite from './componentes/imagens/tropaDeElite.jpeg'
import ClubeDaLuta from './componentes/imagens/clubeDaLuta.jpeg'
import VingadoresUltron from './componentes/imagens/vingadoresUltron.jpeg'
import PiratasDoCaribe from './componentes/imagens/piratasDoCaribe.jpeg'
import BadBoys2 from './componentes/imagens/badBoys2.jpeg'


const useStyles = makeStyles({
  background: {   
    backgroundColor: '#10151F',
  },

})

function App() {

  const classes = useStyles();

  const filmes = [{
    img: CasinoRoyale,
    id: '01',
    nome: '007 Casino Royale',
    genero: 'Gênero: Ação',
    ano: 'Ano: 2006',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Martin Campbell'
    },
    {
    img: EfeitoBorboleta,
    id: '02',
    nome: 'Efeito Borboleta',
    genero: 'Gênero: Ficção científica, Suspense',
    ano: 'Ano: 2004',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Eric Bress, J. Mackye Gruber'
    },
    {
    img: PlanetaDosMacacos,
    id: '03',
    nome: 'Planeta dos Macacos',
    genero: 'Gênero: Ficção científica, Ação',
    ano: 'Ano: 2011',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Rupert Wyatt'
    },
    {
    img: NarutoTheLast,
    id: '04',
    nome: 'The Last Naruto: O filme',
    genero: 'Gênero: Anime, Ação, Aventura',
    ano: 'Ano: 2014',
    idioma: 'Idioma: Japonês',
    diretor: 'Diretor: Tsuneo Kobayashi'
    },
    {
    img: TropaDeElite,  
    id: '05',
    nome: 'Tropa de Elite',
    genero: 'Gênero: Crime, Ação',
    ano: 'Ano: 2007',
    idioma: 'Idioma: Português',
    diretor: 'Diretor: José Padilha'
    },
    {
    img: ClubeDaLuta,
    id: '06',
    nome: 'Clube da Luta',
    genero: 'Gênero: Suspense, Drama',
    ano: 'Ano: 1999',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: David Fincher'
    },
    {
    img: VingadoresUltron,
    id: '07',
    nome: 'Vingadores: Era de Ultron',
    genero: 'Gênero: Super-heroi, Ação, Aventura',
    ano: 'Ano: 2015',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Joss Whedon'
    },
    {
    img: PiratasDoCaribe,
    id: '08',
    nome: 'Piratas do Caribe',
    genero: 'Gênero: Aventura, Ação',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Gore Verbinski'
    },
    {
    img: BadBoys2,
    id: '09',
    nome: 'Bad Boys II',
    genero: 'Gênero: Ação, Comédia',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Michael Bay'
    }]

  return (

    <div className={classes.background} >
      <Header />

      <Filmes filme={filmes} />
      

    </div>

  );
}

export default App;
