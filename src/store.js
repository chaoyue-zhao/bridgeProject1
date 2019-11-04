import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
  hasResults: false,
  userName: '',
  forkedEventsData: null,
  pullRequestsData: null
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ("HAS_RESULTS") :
      return {
        ...state,
        hasResults: action.hasResults
      };
    case ("USERNAME") :
      return {
        ...state,
        userName: action.userName
      };
    case ("FORKED_EVENTS") :
      return {
        ...state,
        forkedEventsData: action.forkedEventsData
      };
    case ("PULL_REQUESTS") :
      return {
        ...state,
        pullRequestsData: action.pullRequestsData
      };
    default:
      return state;
  }
};

export const store = createStore (
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);