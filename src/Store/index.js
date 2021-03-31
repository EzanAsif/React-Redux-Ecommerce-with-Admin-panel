
import { combineReducers, createStore } from 'redux';
import {prodReducer, cartReducer, indOrderReducer} from './Reducer/reducer'

const storeData = combineReducers({products : prodReducer, cart : cartReducer, indOrder : indOrderReducer})

export const reducer = createStore(storeData)