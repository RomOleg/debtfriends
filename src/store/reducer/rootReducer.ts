import { combineReducers } from 'redux';
import debtModalReducer from './debtModalReducer';
import debtReducer from './debtReducer';

const rootReducer = combineReducers({
    debt: debtReducer,
    debtModal: debtModalReducer,
});

export default rootReducer;