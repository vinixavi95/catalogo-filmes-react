import Filme from './Filme';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import filmes from '../store/listaFilmes';

import {useSelector} from 'react-redux';
import {selectFilm} from '../store/filmesRedux';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginTop: 70,
  },
});

function Filmes() {

  const classes = useStyles();

  const filmes = useSelector(state => state.filmes.filmes)

  const renderFilmes = filmes.map((data, index) =>

    <Filme data={data} key={index}/>
      
  );

  return (
    <Grid container
      direction="column"
      alignItems="stretch"
      className={classes.container}>
      {renderFilmes}
    </Grid>
  );
}

export default Filmes;
