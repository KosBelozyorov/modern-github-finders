import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line camelcase
const UserItem = ({ user: { login, avatar_url } }) => (
  <div className="card text-center">
    {/* eslint-disable-next-line camelcase */}
    <img src={avatar_url} alt="" className="round-img user-avatar" />
    <h3>{login}</h3>
    <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;
