import {createStore} from 'redux';

const renderReducer = (state, action) => {
  if (state === 0) {
    return state;
  }
};


const store = createStore(renderReducer);

export default store;
