import Filme from './Filme';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';
import React, {useState, useEffect} from 'react';

// import {useSelector} from 'react-redux';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginTop: 70,
    },
    detalhes: {
        position: 'absolute',
        left: 165,
        top: 385,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        border: 'solid #E04A6D',
        height: 400,
        width: 1000,
        backgroundColor: 'black',
        color: '#ffffff'
    },
    detalhesClose: {
        cursor: 'pointer',
        margin: 10,
        fontSize: 40
    },
    detalhesH1: {
        position: 'relative',
        left: 0,
        margin: 20,
        color: '#E04A6D',
        fontSize: 50
    },
    detalhesP: {
        position: 'relative',
        left: 0,
        margin: 20,
        fontSize: 25
    }
});

function Filmes() {

    const [modal, showModal] = useState(false);

    const classes = useStyles();

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:2001/')
       .then((res) => {
        setFilmes(res.data.filmes)
        console.log(res)
       })
       .catch(() => {
        console.log(filmes + 'erro')
       })
       
       
    }, [])


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
                    <Typography className={classes.detalhesH1} variant="h1">Sinopse</Typography>
                    <Typography className={classes.detalhesP}>{filmes[modal].sinopse}</Typography>
                </Box>
            </Box>}
          
          
        </Grid>
    )
}

export default Filmes;
