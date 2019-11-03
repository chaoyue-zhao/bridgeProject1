import axios from "axios";

export const SET_HAS_RESULTS = () => ({
  type: "HAS_RESULTS",
  hasResults: true
});

export const UPDATE_USERNAME = userName => ({
  type: "USERNAME",
  userName
});

export const FORKED_EVENTS = forkedEventsData => ({
  type: "FORKED_EVENTS",
  forkedEventsData
});

export const PULL_REQUESTS = pullRequestsData => ({
  type: "PULL_REQUESTS",
  pullRequestsData
});

export const FETCH_API_DATA_THUNK = (userName) => {
  return async (dispatch) => {
    const eventEndpointURL = `https://api.github.com/users/${userName}/events`;
    const response = await axios({
      method: "get",
      url: eventEndpointURL
    }).catch(error => {
      console.log(error.message);
    });
    console.log('RESPONSE', response);
    console.log('USER_NAME', userName);
    dispatch(FORKED_EVENTS(response.data.filter(event => event.type === 'ForkEvent')));
    dispatch(PULL_REQUESTS(response.data.filter(event => event.type === 'PullRequestEvent')));
  };
};


