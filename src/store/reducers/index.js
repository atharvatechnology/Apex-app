import { combineReducers } from 'redux';

import authReducer from './auth';
import homeReducer from './home';

const rootReducer = combineReducers({
  authReducer,
  homeReducer,
})

export default rootReducer;