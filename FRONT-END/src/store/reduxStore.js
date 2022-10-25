import {configureStore} from '@reduxjs/toolkit';

import filmesReducer from './filmesRedux';
import detailReducer from './detalhesRedux';


const store = configureStore({
    reducer: {filmes: filmesReducer, detalhes: detailReducer}
});


export default store;