import Filme from './Filme';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginTop: 70
    },
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
        <Grid container
        direction="column"
        alignItems="stretch"
        className={classes.container}>
            {renderFilmes}
        </Grid>
    )
}

export default Filmes;