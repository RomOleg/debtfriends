import { combineReducers } from 'redux';
import debtReducer from './debtReducer';

const rootReducer = combineReducers({
    debt: debtReducer,
});

export default rootReducer;