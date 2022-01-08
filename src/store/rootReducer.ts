import { combineReducers } from 'redux';
import visibleReducer from './reducer/visibleReducer';
import debtReducer from './reducer/debtReducer';
import friendsReducer from './reducer/friendsReducer';

const rootReducer = combineReducers({
    debts: debtReducer,
    visible: visibleReducer,
    friends: friendsReducer,
});

export default rootReducer;