import * as types from '../actionTypes';

const initialState = {
  examsList: {
    count: 1,
    next: null,
    previous: null,
    results: [],
  },

  examDetail: {},
}

const examsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXAM_LIST:
      return { ...state, examsList: action.payload };

    case types.SET_EXAM_DETAILS:
      return { ...state, examDetail: action.payload };

    default:
      return state;

  }
}
export default examsReducer;