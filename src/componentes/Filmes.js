import Filme from './Filme';
import Container from './Container';


import CasinoRoyale from './imagens/casinoRoyale.jpeg'
import EfeitoBorboleta from './imagens/efeitoBorboleta.jpeg'
import PlanetaDosMacacos from './imagens/planetaDosMacacos.jpeg'
import NarutoTheLast from './imagens/narutoTheLast.webp'
import TropaDeElite from './imagens/tropaDeElite.jpeg'
import ClubeDaLuta from './imagens/clubeDaLuta.jpeg'
import VingadoresUltron from './imagens/vingadoresUltron.jpeg'
import PiratasDoCaribe from './imagens/piratasDoCaribe.jpeg'
import BadBoys2 from './imagens/badBoys2.jpeg'

function Filmes(props) {
    return (
        <Container className="armazem">
            <Filme 
                img={CasinoRoyale}
                nome={props.filme[0].nome}
                genero={props.filme[0].genero}
                ano={props.filme[0].ano}
                idioma={props.filme[0].idioma}
                diretor={props.filme[0].diretor}
            />

            <Filme
                img={EfeitoBorboleta}
                nome={props.filme[1].nome}
                genero={props.filme[1].genero}
                ano={props.filme[1].ano}
                idioma={props.filme[1].idioma}
                diretor={props.filme[1].diretor}
            />

            <Filme
                img={PlanetaDosMacacos}
                nome={props.filme[2].nome}
                genero={props.filme[2].genero}
                ano={props.filme[2].ano}
                idioma={props.filme[2].idioma}
                diretor={props.filme[2].diretor}
            />

            <Filme
                img={NarutoTheLast}
                nome={props.filme[3].nome}
                genero={props.filme[3].genero}
                ano={props.filme[3].ano}
                idioma={props.filme[3].idioma}
                diretor={props.filme[3].diretor}
            />

            <Filme
                img={TropaDeElite}
                nome={props.filme[4].nome}
                genero={props.filme[4].genero}
                ano={props.filme[4].ano}
                idioma={props.filme[4].idioma}
                diretor={props.filme[4].diretor}
            />

            <Filme
                img={ClubeDaLuta}
                nome={props.filme[5].nome}
                genero={props.filme[5].genero}
                ano={props.filme[5].ano}
                idioma={props.filme[5].idioma}
                diretor={props.filme[5].diretor}
            />

            <Filme
                img={VingadoresUltron}
                nome={props.filme[6].nome}
                genero={props.filme[6].genero}
                ano={props.filme[6].ano}
                idioma={props.filme[6].idioma}
                diretor={props.filme[6].diretor}
            />

            <Filme
                img={PiratasDoCaribe}
                nome={props.filme[7].nome}
                genero={props.filme[7].genero}
                ano={props.filme[7].ano}
                idioma={props.filme[7].idioma}
                diretor={props.filme[7].diretor}
            />

            <Filme
                img={BadBoys2}
                nome={props.filme[8].nome}
                genero={props.filme[8].genero}
                ano={props.filme[8].ano}
                idioma={props.filme[8].idioma}
                diretor={props.filme[8].diretor}
             />

        </Container>
    )
}

export default Filmes;