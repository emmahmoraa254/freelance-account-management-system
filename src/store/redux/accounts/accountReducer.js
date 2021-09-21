import { ACCOUNT_ADDED_SUCCESS, ACCOUNT_ADDED_FAIL } from './accountActionType';

export const addAccount = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_ADDED_SUCCESS:
      return {
        account: action.payload,
      };
    case ACCOUNT_ADDED_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
