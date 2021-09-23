import {
  ACCOUNT_ADDED_SUCCESS,
  ACCOUNT_ADDED_FAIL,
  DC_ADDED_SUCCESS,
  DC_ADDED_FAIL,
} from './accountActionType';

const initialState = {};

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

export const addDc = (state = {}, action) => {
  switch (action.type) {
    case DC_ADDED_SUCCESS:
      return {
        dc: action.payload,
      };
    case DC_ADDED_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
