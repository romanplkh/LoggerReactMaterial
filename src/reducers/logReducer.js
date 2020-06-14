import * as types from '../actions/types';
import { act } from 'react-dom/test-utils';

const initialState = {
  logs: null,
  current: null,
  loading: true,
  error: null
};

function mergeObject(state, updatedProps) {
  return {
    ...state,
    ...updatedProps
  };
}

const setLoading = (state) => {
  return mergeObject(state, { loading: true });
};

const getLogs = (state, action) => {
  return mergeObject(state, {
    logs: action.payload.sort((a, b) => new Date(b.date) - new Date(a.date)),
    loading: false
  });
};

const onLogsError = (state, action) => {
  return mergeObject(state, { error: action.payload, loading: false });
};

const addLog = (state, action) => {
  return mergeObject(state, { logs: [...state.logs, action.payload] });
};

const deleteLog = (state, action) => {
  return mergeObject(state, {
    logs: [...state.logs.filter((log) => log.id !== action.payload)]
  });
};

const setCurrentLog = (state, action) => {
  return mergeObject(state, { current: action.payload });
};

const updateLog = (state, action) => {
  const idxToUpdate = state.logs.findIndex(
    (log) => log.id === action.payload.id
  );

  return mergeObject(state, {
    logs: [
      ...state.logs.map((log, i) =>
        i === idxToUpdate ? { ...log, ...action.payload } : log
      )
    ]
  });
};

const searchLogs = (state, action) => {
  return mergeObject(state, { logs: action.payload });
};

const clearCurrent = (state) => {
  return mergeObject(state, { current: null });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return setLoading(state);
    case types.SET_CURRENT:
      return setCurrentLog(state, action);
    case types.CLEAR_CURRENT:
      return clearCurrent(state);
    case types.GET_LOGS:
      return getLogs(state, action);
    case types.SEARCH_LOGS:
      return searchLogs(state, action);
    case types.ADD_LOG:
      return addLog(state, action);
    case types.UPDATE_LOG:
      return updateLog(state, action);
    case types.DELETE_LOG:
      return deleteLog(state, action);
    case types.LOGS_ERROR:
      return onLogsError(state, action);
    default:
      return state;
  }
};
