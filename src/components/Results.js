import React, {useState, useEffect} from 'react';
import axios from "axios";

function Results(props) {

  const [ forkedRepos, setForkedRepo ] = useState([]);
  const [ PRRepos, setPRRepo ] = useState([]);

  useEffect (()=> {
    async function getForkedRepoData (){
      const userName = props.userName;
      const eventEndpointURL = `https://api.github.com/users/${userName}/events`;
      if (userName) {
        console.log('HELLO');
        const response = await axios({
          method: "get",
          url: eventEndpointURL
        }).catch(error => {
          console.log(error.message);
        });
        setForkedRepo(response.data.filter(event => event.type === 'ForkEvent'));
        setPRRepo(response.data.filter(event => event.type === 'PullRequestEvent'));

      }
    }
    getForkedRepoData();
  }, [setForkedRepo, setPRRepo, props.userName]);

  return (
    <div className="Results">
      <div className="Results__forkedEvents">
        <h2 className="Results__heading">Recent Forks:</h2>
          {!forkedRepos.length ? (
            <p>Loading...</p>
          ): (
          <ul className="Results__List">
            {forkedRepos.map(repo => {
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
        {!PRRepos.length ? (
          <p>Loading...</p>
        ): (
          <ul className="Results__List">
            {PRRepos.map(repo => {
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

export default Results;