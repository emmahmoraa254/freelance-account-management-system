import { combineReducers } from 'redux';

import { addAccount } from './redux/accounts/accountReducer';

const rootReducer = combineReducers({
  addAccount,
});

export default rootReducer;
