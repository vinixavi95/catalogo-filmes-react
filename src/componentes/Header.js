import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
    container: {
        backgroundColor: '#10151F',
        height: 200,
        maxHeight: 400,
        maxWidth: 1400,
        padding: 0,
    },

    typographyH1: {
        fontSize: 60,
        color: '#E04A6D',
        textAlign: 'center',
        fontFamily: 'Roboto',
        padding: 20
    },

    typographyH2: {
        fontSize: 35,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Roboto',
       
    }
})


function Header() {

    const classes = useStyle();

    return (
        <Container  className={classes.container}>

            <Typography className={classes.typographyH1} variant="h1" >Catalogo Indicação de filmes</Typography>
            <Typography className={classes.typographyH2} variant="h2">Conheça os filmes do catálogo, assistindo aos trailers</Typography >

        </Container>
    )
}

export default Header;