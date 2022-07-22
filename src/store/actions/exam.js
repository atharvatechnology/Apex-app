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

export const examsFullList = data => {
  return {
    type: types.SET_EXAM_FULL_LIST,
    payload: data,
  };
};

export const examsFullListRequest = () => {
  return async dispatch => {
    try {
      // console.log("test",);
      const response = await GET('api/exams/list/');
      const resJson = await response.json();
      // console.log(resJson)
      if (response.status === 200) {
        dispatch(examsFullList(resJson.results));
      }
      if (response.status === 400) {
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};

export const examsEnrollRequest = (data, token) => {
  return async dispatch => {
    try {
      console.log("test", data, token);
      const response = await POST('api/enrollments/create/', data, token);
      console.log(response)
      const resJson = await response.json();
      console.log(resJson)
      if (response.status === 200) {
        dispatch(examsFullList(resJson.results));
        dispatch(examDetailRequest(data.exam[0].exam));
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

export const examResults = data => {
  return {
    type: types.SET_EXAM_RESULT,
    payload: data,
  };
};

export const examResultsRequest = (id, token) => {
  return async dispatch => {
    try {
      console.log("action", id, token);
      const response = await GET('api/enrollments/exam/result/' + id, token);
      console.log(response)
      const resJson = await response.json();
      console.log(resJson)
      if (response.status === 200) {
        dispatch(examResults(resJson));

      }
      if (response.status === 400) {
      }
    } catch (error) {
      console.log('err', error);
    }
  };
};