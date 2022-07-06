import { PATCH, POST } from "@utils/api";
import * as types from "../actionTypes";

export const login = (data) => {
  return {
    type: types.SET_TOKENS,
    payload: data,
  };
};

export const loginRequest = (data, callback = () => { }, navigate, setErrorMsg = () => { }) => {
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

export const register = (data) => {
  return {
    type: types.SET_REGISTER_NAME,
    payload: data,
  };
};

export const registerRequest = (data, navigate, params, autoFadeOut = () => { }, setErrorMsg = () => { }) => {
  return async (dispatch) => {

    try {
      console.log("test")
      const response = await POST('api/accounts/create/', data);
      console.log(response);
      const resJson = await response.json();
      console.log(resJson)
      // if (response.status === 200) {
      dispatch(login(resJson));
      navigate('Verify');
      // }
      if (response.status === 400) {
        setErrorMsg(resJson.non_field_errors[0]);
        autoFadeOut();
      }

    } catch (error) {
      console.log('err', error);
    }
  };
};


export const verify = (data) => {
  return {
    type: types.SET_TOKENS,
    payload: data,
  };
};

export const verifyRequest = (data,) => {
  return async (dispatch) => {
    try {
      const response = await PATCH('api/accounts/create/verify/', data);
      const resJson = await response.json();
      if (response.status === 200) {

      }
      if (response.status === 400) {
        let msg = '';
        Object.values(resJson).forEach(element => {
          msg = msg + element[0];
        });
        // setErrorMsg(msg);
        callback();
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};