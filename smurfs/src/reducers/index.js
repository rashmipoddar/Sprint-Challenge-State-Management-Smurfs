import { combineReducers } from 'redux';

import { getSmurfsReducer } from './getSmurfsReducer'; 
import { postSmurfReducer } from './postSmurfReducer';


export default combineReducers ({
  getSmurfsReducer,
  postSmurfReducer
});
