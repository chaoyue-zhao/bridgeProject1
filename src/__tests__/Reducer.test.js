import {rootReducer} from './../store.js';

describe ('rootReducer', () => {
  const mockState = {
    hasResults: false,
    userName: '',
    forkedEventsData: null,
    pullRequestsData: null
  };

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      hasResults: false,
      userName: '',
      forkedEventsData: null,
      pullRequestsData: null
    });
  });

  it('should handle HAS_RESULTS', () => {
    const mockAction = {
      type: "HAS_RESULTS",
      hasResults: true
    };
    expect(rootReducer(mockState, mockAction)).toEqual({
      hasResults: true,
      userName: '',
      forkedEventsData: null,
      pullRequestsData: null
    })
  });

  it('should handle USERNAME', () => {
    const mockAction = {
      type: "USERNAME",
      userName: 'chaoyue-zhao'
    };
    expect(rootReducer(mockState, mockAction)).toEqual({
      hasResults: false,
      userName: 'chaoyue-zhao',
      forkedEventsData: null,
      pullRequestsData: null
    })
  });

  it('should handle FORKED_EVENTS', () => {
    const mockAction = {
      type: "FORKED_EVENTS",
      forkedEventsData: [
        {
          "id": "10319454039",
          "type": "ForkEvent",
          "actor": {
            "id": 8810222,
            "login": "pkanal",
            "display_login": "pkanal",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
          },
          "repo": {
            "id": 142096872,
            "name": "ShaunLloyd/bridge-workshop-slides-two",
            "url": "https://api.github.com/repos/ShaunLloyd/bridge-workshop-slides-two"
          }
        }
      ]
    };
    expect(rootReducer(mockState, mockAction)).toEqual({
      hasResults: false,
      userName: '',
      forkedEventsData:[
        {
          "id": "10319454039",
          "type": "ForkEvent",
          "actor": {
            "id": 8810222,
            "login": "pkanal",
            "display_login": "pkanal",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
          },
          "repo": {
            "id": 142096872,
            "name": "ShaunLloyd/bridge-workshop-slides-two",
            "url": "https://api.github.com/repos/ShaunLloyd/bridge-workshop-slides-two"
          }
        }
      ],
      pullRequestsData: null
    })
  });

  it('should handle PULL_REQUESTS', () => {
    const mockAction = {
      type: "PULL_REQUESTS",
      pullRequestsData: [
        {
          "id": "10699899458",
          "type": "PullRequestEvent",
          "actor": {
            "id": 8810222,
            "login": "pkanal",
            "display_login": "pkanal",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
          },
          "repo": {
            "id": 168412238,
            "name": "bridge-school/personal-project-react",
            "url": "https://api.github.com/repos/bridge-school/personal-project-react"
          },
        }
      ]
    };
    expect(rootReducer(mockState, mockAction)).toEqual({
      hasResults: false,
      userName: '',
      forkedEventsData: null,
      pullRequestsData: [
        {
          "id": "10699899458",
          "type": "PullRequestEvent",
          "actor": {
            "id": 8810222,
            "login": "pkanal",
            "display_login": "pkanal",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pkanal",
            "avatar_url": "https://avatars.githubusercontent.com/u/8810222?"
          },
          "repo": {
            "id": 168412238,
            "name": "bridge-school/personal-project-react",
            "url": "https://api.github.com/repos/bridge-school/personal-project-react"
          },
        }
      ]
    })
  });
});