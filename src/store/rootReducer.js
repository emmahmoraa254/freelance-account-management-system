import { combineReducers } from 'redux';

import { addAccount, addDc } from './redux/accounts/accountReducer';

const rootReducer = combineReducers({
  addAccount,
  addDc,
});

export default rootReducer;
