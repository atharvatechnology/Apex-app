import { POST } from "@utils/api";
import * as types from "../actionTypes";

export const login = (data) => {
  return {
    type: types.SET_TOKENS,
    payload: data,
  };
};

export const loginRequest = (data, callback = () => { }, navigate) => {
  return async (dispatch) => {
    try {
      const response = await POST('api/auth/login/', data);
      const resJson = await response.json();
      if (response.status === 200) {
        dispatch(login(resJson));
        navigate('Home');
      }
      if (response.status === 400) {
        setErrorMsg(resJson.non_field_errors[0]);
        callback();
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};