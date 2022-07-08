import * as types from '../actionTypes';

const initialState = {
  examsLiveList: {
    count: 1,
    next: null,
    previous: null,
    results: [],
  },

  examsPracticeList: {
    count: 1,
    next: null,
    previous: null,
    results: [],
  },

  coursesList: {
    count: 2,
    next: null,
    previous: null,
    results: []
  }
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXAMS_LIST_LIVE:
      return { ...state, examsLiveList: action.payload };

    case types.SET_EXAMS_LIST_PRACTICE:
      return { ...state, examsPracticeList: action.payload };

    case types.SET_COURSESS_LIST:
      return { ...state, coursesList: action.payload };

    default:
      return state;

  }
}
export default homeReducer;