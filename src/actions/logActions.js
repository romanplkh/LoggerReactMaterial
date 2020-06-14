import * as types from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: types.GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: types.ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    const data = await res.json();

    dispatch({
      type: types.DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const setCurrentLog = (log) => {
  return {
    type: types.SET_CURRENT,
    payload: log
  };
};

export const updateLog = (log) => async (dispatch) => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: types.UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const clearCurrent = () => {
  return {
    type: types.CLEAR_CURRENT
  };
};

export const searchLogs = (searchParam) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${searchParam}`);
    const data = await res.json();

    dispatch({
      type: types.SEARCH_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};
