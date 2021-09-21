import axios from 'axios';

import { ACCOUNT_ADDED_SUCCESS, ACCOUNT_ADDED_FAIL } from './accountActionType';

export const addAccount = (account) => async (dispatch) => {
  console.log({ account });
  // TODO: call backend
  // const response = await axios.post (baseUrl + `/`, {...account})
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    { ...account }
  );
  try {
    dispatch({
      type: ACCOUNT_ADDED_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ACCOUNT_ADDED_FAIL,
      payload: message,
    });
  }
};
