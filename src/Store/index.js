
import { combineReducers, createStore } from 'redux';
import {prodReducer, cartReducer} from './Reducer/reducer'

const storeData = combineReducers({products : prodReducer, cart : cartReducer})

export const reducer = createStore(storeData)