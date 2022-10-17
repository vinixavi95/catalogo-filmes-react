import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: 400,
    backgroundColor: '#171B24',
    border: 'solid',
    marginTop: 70,
  },

  imgContainer: {
    position: 'relative',
    width: 300,
    height: 400,
  },

  img: {
    position: 'relative',
    width: 300,
    right: 25,
    height: 394,
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
    height: 100,
  },

  typography: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Roboto',
  },

});


function Filme(props) {
  const classes = useStyles();

  return (

    <Container className={classes.container}>

      <Box className={classes.imgContainer}>
        <img className={classes.img} src={props.img} alt=""></img>
      </Box>

      <Box className={classes.typographyBox}>
        <Typography className={classes.typographyH1} variant="h1">{props.nome}</Typography>
        <Typography className={classes.typography}>{props.genero}</Typography>
        <Typography className={classes.typography}>{props.ano}</Typography>
        <Typography className={classes.typography}>{props.idioma}</Typography>
        <Typography className={classes.typography}>{props.diretor}</Typography>
      </Box>

    </Container>

  );
}

export default Filme;
