import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ moviesList, location }) => {
  return (
    <ul>
      {moviesList.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location.pathname, fromSearch: location.search },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
