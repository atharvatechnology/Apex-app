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

export const takeExamDetail = data => {
  return {
    type: types.SET_TAKE_EXAM_DETAILS,
    payload: data,
  };
};

export const takeExamDetailRequest = (id, token, checklistInit) => {
  return async dispatch => {
    try {
      const response = await GET('api/exams/paper/preview/' + id, token);
      // console.log(response)
      const resJson = await response.json();
      // console.log(resJson)
      if (response.status === 200) {
        dispatch(takeExamDetail(resJson));
        checklistInit(resJson.questions);
      }
      if (response.status === 400) {
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const submitExam = (enrollId, data, token) => {
  return async dispatch => {
    try {
      console.log("data", data);
      const response = await PATCH('api/enrollments/exam/submit/' + enrollId, data, token);
      console.log(response)
      const resJson = await response.json();
      console.log(resJson)
      if (response.status === 200) {

      }
      if (response.status === 400) {
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};