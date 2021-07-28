import {combineReducers} from 'redux';
import Jason from './jason';
import Taya from './Taya';
import auth from "../actions/actions.js"


export default combineReducers({ Jason, Taya, auth})
export * from '../actions/actions'