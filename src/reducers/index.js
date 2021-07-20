

import { combineReducers } from 'redux';
import bookreducer from './book';
import filterreducer from './filter';

const rootReducer = combineReducers({ bookreducer, filterreducer });
export default rootReducer;
