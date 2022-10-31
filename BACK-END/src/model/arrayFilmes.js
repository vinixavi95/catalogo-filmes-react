// import CasinoRoyale from './imagens/casinoRoyale.jpeg';
// import EfeitoBorboleta from './imagens/efeitoBorboleta.jpeg';
// import PlanetaDosMacacos from './imagens/planetaDosMacacos.jpeg';
// import NarutoTheLast from './imagens/narutoTheLast.webp';
// import TropaDeElite from './imagens/tropaDeElite.jpeg';
// import ClubeDaLuta from './imagens/clubeDaLuta.jpeg';
// import VingadoresUltron from './imagens/vingadoresUltron.jpeg';
// import PiratasDoCaribe from './imagens/piratasDoCaribe.jpeg';
// import BadBoys2 from './imagens/badBoys2.jpeg';


const filmes = { filmes: [{
    // img: CasinoRoyale,
    id: '01',
    nome: '007 Casino Royale',
    genero: 'Gênero: Ação',
    ano: 'Ano: 2006',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Martin Campbell',
    //MODAL BUTTON - detalhes
    sinopse: 'Após receber licença para matar, James Bond embarca em sua primeira missão. O agente secreto participa de um jogo de pôquer de alto escalão para prejudicar os negócios de Le Chiffre, homem que financia grupos terroristas.'
},
{
    // img: EfeitoBorboleta,
    id: '02',
    nome: 'Efeito Borboleta',
    genero: 'Gênero: Ficção científica, Suspense',
    ano: 'Ano: 2004',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Eric Bress, J. Mackye Gruber',
    //MODAL BUTTON - detalhes
    sinopse: 'O estudante universitário Evan Treborn está aflito com dores de cabeça tão fortes que frequentemente desmaia. Enquanto está inconsciente, Evan pode viajar de volta no tempo para momentos de dificuldades na infância. Ele também pode alterar o passado para os amigos, como Kayleigh, que foi molestada pelo pai. Porém ao mudar o passado, ele pode alterar o presente, o que leva Evan a se encontrar em um pesadelo de realidades alternativas, incluindo uma onde ele está preso.'
},
{
    // img: PlanetaDosMacacos,
    id: '03',
    nome: 'Planeta dos Macacos',
    genero: 'Gênero: Ficção científica, Ação',
    ano: 'Ano: 2011',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Rupert Wyatt',
    //MODAL BUTTON - detalhes
    sinopse: 'Um chimpanzé de laboratório desenvolve inteligência e emoções humanas e uma batalha épica surge para determinar qual espécie será dominante no planeta Terra.'
},
{
    // img: NarutoTheLast,
    id: '04',
    nome: 'The Last Naruto: O filme',
    genero: 'Gênero: Anime, Ação, Aventura',
    ano: 'Ano: 2014',
    idioma: 'Idioma: Japonês',
    diretor: 'Diretor: Tsuneo Kobayashi',
    //MODAL BUTTON - detalhes
    sinopse: 'Hanabi Hyuuga, a irmã mais nova de Hinata, é sequestrada por Toneri Ootsutsuki. Naruto Uzumaki une forças para ajudar a irmã caçula de seu novo amor, mas suas habilidades são postas à prova quando perde sua forma mais poderosa.'
},
{
    // img: TropaDeElite,
    id: '05',
    nome: 'Tropa de Elite',
    genero: 'Gênero: Crime, Ação',
    ano: 'Ano: 2007',
    idioma: 'Idioma: Português',
    diretor: 'Diretor: José Padilha',
    //MODAL BUTTON - detalhes
    sinopse: 'Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.'
},
{
    // img: ClubeDaLuta,
    id: '06',
    nome: 'Clube da Luta',
    genero: 'Gênero: Suspense, Drama',
    ano: 'Ano: 1999',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: David Fincher',
    //MODAL BUTTON - detalhes
    sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.'
},
{
    // img: VingadoresUltron,
    id: '07',
    nome: 'Vingadores: Era de Ultron',
    genero: 'Gênero: Super-heroi, Ação, Aventura',
    ano: 'Ano: 2015',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Joss Whedon',
    //MODAL BUTTON - detalhes
    sinopse: 'Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção.'
},
{
    // img: PiratasDoCaribe,
    id: '08',
    nome: 'Piratas do Caribe',
    genero: 'Gênero: Aventura, Ação',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Gore Verbinski',
    //MODAL BUTTON - detalhes
    sinopse: 'O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão Barbossa e sua tripulação. Com o navio de Sparrow, Barbossa invade a cidade de Port Royal, levando consigo Elizabeth Swann, filha do governador. Para recuperar sua embarcação, Sparrow recebe a ajuda de Will Turner, um grande amigo de Elizabeth. Eles desbravam os mares em direção à misteriosa Ilha da Morte, tentando impedir que os piratas-esqueleto derramem o sangue de Elizabeth para desfazer a maldição que os assola.'
},
{
    // img: BadBoys2,
    id: '09',
    nome: 'Bad Boys II',
    genero: 'Gênero: Ação, Comédia',
    ano: 'Ano: 2003',
    idioma: 'Idioma: Inglês',
    diretor: 'Diretor: Michael Bay',
    //MODAL BUTTON - detalhes
    sinopse: 'Os detetives Marcus Burnett e Mike Lowrey são escolhidos para investigar a proliferação de ecstasy na cidade de Miami. As investigações levam a um alvo maior, Johnny Tapia, um traficante cuja ambição de tomar conta do tráfico na cidade inicia uma verdadeira guerra sangrenta contra criminosos russos e haitianos. Em meio a esta situação, Lowrey passa a se interessar por Syd, irmã de Burnett, o que põe a amizade dos detetives à prova.'
}
]};

// export default filmes;
module.exports = filmes;