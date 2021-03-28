
import { combineReducers, createStore } from 'redux';
import {prodReducer} from './Reducer/reducer'

const storeData = combineReducers({products : prodReducer})

export const reducer = createStore(storeData)