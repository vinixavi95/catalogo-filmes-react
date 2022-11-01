import Filme from './Filme';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


// import {useSelector} from 'react-redux';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginTop: 70,
    },
    detalhes: {
        position: 'absolute',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        border: 'solid #E04A6D',
        height: 450,
        width: 1000,
        backgroundColor: 'black',
        color: '#ffffff'
    },
    detalhesClose: {
        cursor: 'pointer'
    }
});

function Filmes() {

    const [modal, showModal] = React.useState(false);

    const classes = useStyles();

    const filmes = filmes


    return (
        <Grid container
            direction="column"
            alignItems="stretch"
            className={classes.container}>

            {filmes.map((data, index) =>

                <Filme data={data} key={index} index={index} showModal={showModal} />
  
            )}
          
            {typeof modal == 'number' && <Box id="" className={classes.detalhes}>
                <Box className="">
                    <span onClick={()=>showModal(false) } className={classes.detalhesClose}>&times;</span>
                    <Typography variant="h1">Detalhes</Typography>
                    <Typography>{filmes[modal].sinopse}</Typography>
                </Box>
            </Box>}
          
          
        </Grid>
    );
}

export default Filmes;
