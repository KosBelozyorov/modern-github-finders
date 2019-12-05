import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, getUserRepos, repos, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    // eslint-disable-next-line camelcase
    avatar_url,
    location,
    bio,
    blog,
    login,
    // eslint-disable-next-line camelcase
    html_url,
    company,
    followers,
    following,
    publicRepos,
    publicGists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:
      {' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            // eslint-disable-next-line camelcase
            src={avatar_url}
            className="round-img"
            alt="user avatar"
          />
          <h1>{name}</h1>
          {location !== null ? (
            <p>
              Location:
              {' '}
              {location}
            </p>
          ) : null}
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          {/* eslint-disable-next-line camelcase */}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers:
          {' '}
          {followers}
        </div>
        <div className="badge badge-success">
          Following:
          {' '}
          {following}
        </div>
        <div className="badge badge-light">
          Public Repos:
          {' '}
          {publicRepos}
        </div>
        <div className="badge badge-dark">
          Public Gists:
          {' '}
          {publicGists}
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

User.propTypes = {
  match: PropTypes
    .shape({
      params: PropTypes
        .shape({ login: PropTypes.string.isRequired }),
    })
    .isRequired,
};

export default User;
