import './App.css';
import Header from './componentes/header-component';
import Filmes from './componentes/Filmes';



function App() {

  const filmes = [{
    id: '01',
    nome: '007 Casino Royale',
    genero: 'Gênero: Ação',
    ano: 'Ano: 2006',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Martin Campbell'
    },
    {
    id: '02',
    img: './imagens/',
    nome: 'Efeito Borboleta',
    genero: 'Gênero: Ficção científica, Suspense',
    ano: 'Ano: 2004',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Eric Bress, J. Mackye Gruber'
    },
    {
    id: '03',
    nome: 'Planeta dos Macacos',
    genero: 'Gênero: Ficção científica, Ação',
    ano: 'Ano: 2011',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Rupert Wyatt'
    },
    {
    id: '04',
    nome: 'The Last Naruto: O filme',
    genero: 'Gênero: Anime, Ação, Aventura',
    ano: 'Ano: 2014',
    idioma: 'Idioma: Japonês',
    diretor: 'Diretor: Tsuneo Kobayashi'
    },
    {
    id: '05',
    nome: 'Tropa de Elite',
    genero: 'Gênero: Crime, Ação',
    ano: 'Ano: 2007',
    idioma: 'Idioma: Português',
    diretor: 'Diretor: José Padilha'
    },
    {
    id: '06',
    nome: 'Clube da Luta',
    genero: 'Gênero: Suspense, Drama',
    ano: 'Ano: 1999',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: David Fincher'
    },
    {
    id: '07',
    nome: 'Vingadores: Era de Ultron',
    genero: 'Gênero: Super-heroi, Ação, Aventura',
    ano: 'Ano: 2015',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Joss Whedon'
    },
    {
    id: '08',
    nome: 'Piratas do Caribe',
    genero: 'Gênero: Aventura, Ação',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Gore Verbinski'
    },
    {
    id: '09',
    nome: 'Bad Boys II',
    genero: 'Gênero: Ação, Comédia',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Michael Bay'
    }]

  return (
    <div>
      <Header />

      <Filmes filme={filmes}/>
      

    </div>

  );
}

export default App;
