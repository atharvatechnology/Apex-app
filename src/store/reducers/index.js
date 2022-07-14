import { combineReducers } from 'redux';

import authReducer from './auth';
import examsReducer from './exam';
import homeReducer from './home';

const rootReducer = combineReducers({
  authReducer,
  examsReducer,
  homeReducer,
})

export default rootReducer;