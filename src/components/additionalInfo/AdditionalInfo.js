import React from 'react';
import getQueryParams from '../../ui/getQueryParams';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import styles from './additionalInfo.module.css';

const checkQuery = (location) => {
  location.state &&
    location.state.from &&
    location.state.from.search &&
    getQueryParams(location.state.from.search);
};

const AdditionalInfo = ({ match, location }) => {
  const query = checkQuery(location);

  return (
    <div>
      <h2>Additional information</h2>
      <div className={styles.additionalLinkContainer}>
        <NavLink className={styles.additionalLink}
          exact
          to={{
            pathname: `${match.url}/cast`,
            state: {
              from:
                location.state && location.state.from
                  ? location.state.from
                  : routes.home,
              search: query ? query : '',
            },
          }}
        >
          Cast
        </NavLink>
        <br />
        <NavLink
          to={{
            pathname: `${match.url}/reviews`,
            state: {
              from:
                location.state && location.state.from
                  ? location.state.from
                  : routes.home,
              search: query ? query : '',
            },
          }}
        >
          Reviews
        </NavLink>
      </div>
    </div>
  );
};

export default AdditionalInfo;
