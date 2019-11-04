import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {FETCH_API_DATA_THUNK} from "../action";

function Results(
  { userName,
    forkedEventsData,
    pullRequestsData,
    mapAPIRequests
  })
  {
  useEffect(()=> {
    mapAPIRequests(userName);
  }, [mapAPIRequests,userName]);

  return (
    <div className="Results">
      <div className="Results__forkedEvents">
        <h2 className="Results__heading">Recent Forks:</h2>
          {!forkedEventsData ? (
            <p>Loading...</p>
          ): (
          <ul className="Results__List">
            {forkedEventsData.map(repo => {
              return (
                <li key={`repo-${repo.id}`}>
                  <div>
                    <a href={repo.payload.forkee.html_url}
                       target="_blank"
                       rel="noopener noreferrer">
                      <p>{repo.payload.forkee.name}</p>
                    </a>
                    <p> forked from {repo.repo.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <h2 className="Results__heading">Recent Pull Requests:</h2>
        {!pullRequestsData ? (
          <p>Loading...</p>
        ): (
          <ul className="Results__List">
            {pullRequestsData.map(repo => {
              return (
                <li key={`repo-${repo.id}`}>
                  <div>
                    <a href={repo.payload.pull_request.html_url}
                       target="_blank"
                       rel="noopener noreferrer">
                      <p>{repo.payload.pull_request.title}</p>
                    </a>
                    <p> Status: {repo.payload.pull_request.state}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  forkedEventsData: state.forkedEventsData,
  pullRequestsData: state.pullRequestsData,
  userName: state.userName
});

const mapDispatchToProps = (dispatch) => ({
  mapAPIRequests: (userName) => dispatch(FETCH_API_DATA_THUNK(userName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);