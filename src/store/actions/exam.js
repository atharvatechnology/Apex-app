import { GET, PATCH, POST } from '@utils/api';
import * as types from '../actionTypes';

export const examsList = data => {
  return {
    type: types.SET_EXAM_LIST,
    payload: data,
  };
};

export const examsListRequest = () => {
  return async dispatch => {
    try {
      const response = await GET('api/exams/list/');
      const resJson = await response.json();
      // console.log(response, resJson)
      if (response.status === 200) {
        dispatch(examsList(resJson));
      }
      if (response.status === 400) {
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const examDetail = data => {
  return {
    type: types.SET_EXAM_DETAILS,
    payload: data,
  };
};

export const examDetailRequest = (id) => {
  return async dispatch => {
    try {
      const response = await GET('api/exams/retrieve/' + id);
      const resJson = await response.json();
      // console.log(response, resJson)
      if (response.status === 200) {
        dispatch(examDetail(resJson));
      }
      if (response.status === 400) {
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};