import {createSlice} from '@reduxjs/toolkit';
import filmes from './listaFilmes';

const initialStateFilme = filmes;

const filmeSlice = createSlice({
  name: 'filme',
  initialState: initialStateFilme, //RENDERIZANDO COMO ESTADO INICIAL, ARRAY DE FILMES CONTENDO: img, id, nome, genero, ano, idioma e diretor
  // reducers: {
  //   //RENDERIZANDO O ESTADO INICIAL, PORTANTO NÃO CABE REDUCERS NESSE CASO
  // }

});


export default filmeSlice.reducer;
export const selectFilm = (state) => state.filme.filmes