import * as types from '../actionTypes';

const initialState = {
  access_token: '',
  access_token_expiration: '',
  refresh_token: '',
  refresh_token_expiration: '',
  user: {
    email: '',
    first_name: '',
    full_name: '',
    last_name: '',
    pk: 0,
    username: '',
  },
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKENS:
      return { ...action.payload };

    default:
      return state;

  }
}
export default authReducer;