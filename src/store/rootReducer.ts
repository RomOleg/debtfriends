import { combineReducers } from 'redux';
import visibleReducer from './reducer/visibleReducer';
import debtReducer from './reducer/debtReducer';
import friendsReducer from './reducer/friendsReducer';
import authorizationReducer from './reducer/authorizationReducer';

const rootReducer = combineReducers({
    debts: debtReducer,
    visible: visibleReducer,
    friends: friendsReducer,
    auth: authorizationReducer,
});

export default rootReducer;