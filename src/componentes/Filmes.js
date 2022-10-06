import Filme from './Filme';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        position: relative,
        
    }
})

function Filmes(props) {

    const classes = useStyles();

    const renderFilmes = props.filme.map(f => 
    
        <Filme
        img={f.img}
        nome={f.nome}
        genero={f.genero}
        ano={f.ano}
        idioma={f.idioma}
        diretor={f.diretor} 
        />
    )

    return (
        <Box className={classes.container}>
            {renderFilmes}
        </Box>
    )
}

export default Filmes;