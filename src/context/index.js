import React, { createContext, useReducer } from 'react';
import { initialState as defaultState } from './initialState';
import { actions } from './actions';

const getLocalData = () => {
  try {
    return JSON.parse(localStorage.getItem('votingApp'));
  } catch (e) {
    return null;
  }
};

const saveLocalData = (data) => {
  try {
    return window.localStorage.setItem('votingApp', JSON.stringify(data));
  } catch (e) {
    return null;
  }
};

const localState = getLocalData();
const initialState = localState ? localState : defaultState;
export const store = createContext(initialState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
  let newState;
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actions.like:
        newState = [...state];
        newState[action.index] = {
          ...newState[action.index],
          hasVoted: true,
          likes: newState[action.index].likes + 1
        };
        saveLocalData(newState);

        return newState;

      case actions.dislike:
        newState = [...state];
        newState[action.index] = {
          ...newState[action.index],
          hasVoted: true,
          dislikes: newState[action.index].dislikes + 1
        };
        saveLocalData(newState);

        return newState;

      case actions.again:
        newState = [...state];
        newState[action.index] = {
          ...newState[action.index],
          hasVoted: false
        };
        saveLocalData(newState);

        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default { store, StateProvider };
