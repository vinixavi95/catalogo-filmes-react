import {configureStore} from '@reduxjs/toolkit';

import filmesReducer from './filmesRedux';


const store = configureStore({
  reducer: {filmes: filmesReducer}
});


export default store;