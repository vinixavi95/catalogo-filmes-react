import './App.css';
import Header from './componentes/Header';
import Filmes from './componentes/Filmes';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    backgroundColor: '#04070F',
  },

});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.background} >
      <Header />

      <Filmes />

    </div>
  );
  
}

export default App;
