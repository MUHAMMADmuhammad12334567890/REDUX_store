import { createStore } from 'redux';
import { shopReducer } from './reducer';


const store = createStore(shopReducer);

export default store;
