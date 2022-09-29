import './filme-component.css';

function Filme(props) {
   
    return (

        <div className="container_2">
            <div className="img-container">
                <img className="imagem" src={props.img}></img>
            </div>

            <h1 className="nome-filme">{props.nome}</h1>
            <p className="genero-filme">{props.genero}</p>
            <p className="ano-filme">{props.ano}</p>
            <p className="idioma-filme">{props.idioma}</p>
            <p className="diretor-filme">{props.diretor}</p>
        </div>

    )
}

export default Filme;