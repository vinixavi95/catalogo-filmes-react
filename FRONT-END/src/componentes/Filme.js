import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        height: 400,
        backgroundColor: '#171B24',
        border: 'solid',
        marginTop: 70
    },

    imgContainer: {
        position: 'relative',
        width: 300,
        height: 400
    },

    img: {
        position: 'relative',
        width: 300,
        right: 25,
        height: 394
    },

    typographyBox: {
        position: 'relative',
        bottom: 380,
        left: 350,
        width: 300,
        height: 150,

    },

    typographyH1: {
        color: '#ffffff',
        fontSize: 40,
        fontFamily: 'Roboto',
        height: 100
    },

    typography: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    button: {
        backgroundColor: '#E04A6D',
        color: '#ffffff',
        position: 'absolute',
        bottom: 60,
        right: 150,
    },

    
});


function Filme({data, showModal, index}) {

    const classes = useStyles();

    const img = data.img;
    const nome = data.nome;
    const genero = data.genero;
    const ano = data.ano;
    const idioma = data.idioma;
    const diretor = data.diretor;
    


    const buttonHandler = (e) => {
        e.preventDefault();
        
        showModal(index);
    };
    
    
    return (

        <Container className={classes.container}>

            <Box className={classes.imgContainer}>
                <img className={classes.img} src={img} alt=""></img>
            </Box>

            <Box className={classes.typographyBox}>
                <Typography className={classes.typographyH1} variant="h1">{nome}</Typography>
                <Typography className={classes.typography}>{genero}</Typography>
                <Typography className={classes.typography}>{ano}</Typography>
                <Typography className={classes.typography}>{idioma}</Typography>
                <Typography className={classes.typography}>{diretor}</Typography>
            </Box>

            {/* MODAL BUTTON PARA TELA DE DETALHES */}
            <Button onClick={buttonHandler} size="large" className={classes.button}>Detalhes</Button>


        </Container>

    );
}

export default Filme;